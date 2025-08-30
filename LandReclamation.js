
var l8imagecol = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
    .filterDate('2017-01-01', '2024-06-12')
    .filterBounds(geometry3)
    
print(l8imagecol)

var aoi = geometry3; 
           
Map.addLayer(aoi, {}, 'AOI');
Map.centerObject(aoi, 12);
var startYear = 2017;
var endYear = 2024;
var startDate = startYear+'-01-01';
var endDate = endYear+'-12-01';

// Applies scaling factors to Landsat 8 Imagery.
function applyScaleFactors(image) {
 // Scale and offset values for optical bands
 var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2); 
 
 // Scale and offset values for thermal bands
 var thermalBands = image.select('ST_B.*').multiply(0.00341802).add(149.0);
 
 // Add scaled bands to the original image
 return image.addBands(opticalBands, null, true)
 .addBands(thermalBands, null, true);
}

// Function to Mask Clouds and Cloud Shadows in Landsat 8 Imagery
function cloudMask(image) {
  // Define cloud shadow and cloud bitmasks (Bits 3 and 4)
  var cloudBitmask = (1 << 3);
  var cloudShadowBitmask = (1 << 4);

  // Select the Quality Assessment (QA) band for pixel quality information
  var qa = image.select('QA_PIXEL');

  // Create a binary mask to identify clear conditions (both cloud and cloud shadow bits set to 0)
  var mask = qa.bitwiseAnd(cloudShadowBitmask).eq(0)
                .and(qa.bitwiseAnd(cloudBitmask).eq(0));

  // Update the original image, masking out cloud and cloud shadow-affected pixels
  return image.updateMask(mask);
}



var addIndicesl8 = function(image) {

  // Return the image with the added bands.
  return image
  // Add an NDVI band.
  .addBands(image.normalizedDifference(['SR_B5', 'SR_B4']).rename('NDVI'))
  
  // Water index
  // Water absorbs more energy (low reflectance) in NIR and SWIR wavelengths, 
  //while non-water reflects more energy (high reflectance)
  
  /*
  The NDWI is used to monitor changes related to water content in water bodies. 
  As water bodies strongly absorb light in visible to infrared electromagnetic spectrum, 
  NDWI uses green and near infrared bands to highlight water bodies. */
  //For Landsat 8 data:
  //NDWI = (Green – NIR)/(Green + NIR)
  //NDWI = (Band 3 – Band 5)/(Band 3 + Band 5)
  /*
  The NDWI values correspond to the following ranges:
  0,2 – 1 – Water surface,
  0.0 – 0,2 – Flooding, humidity,
  -0,3 – 0.0 – Moderate drought, non-aqueous surfaces,
  -1 – -0.3 – Drought, non-aqueous surfaces
  */
  .addBands(image.normalizedDifference(['SR_B3', 'SR_B5']).rename('NDWI'))

};


// Import and preprocess Landsat 8 imagery


l8imagecol=l8imagecol  
              .map(applyScaleFactors)
              .map(cloudMask)
              .map(addIndicesl8);

var imageBaseline = l8imagecol
              .filterDate('2017-01-01', '2018-01-01')
              .median() 
              .clip(aoi);

var imageIncrement = l8imagecol
              .filterDate('2023-06-12', '2024-06-12')
              .median() 
              .clip(aoi);
                            

// Define visualization parameters for True Color imagery (bands 4, 3, and 2)


var visualizationl8 = {
  bands: ['SR_B4', 'SR_B3', 'SR_B2'],
  min: 0.0,
  max: 0.443,
};


// Add the processed image to the map with the specified visualization
Map.addLayer(imageBaseline, visualizationl8, 'True Color Baseline');
Map.addLayer(imageIncrement, visualizationl8, 'True Color with reclaimed land');


// Normalized Difference Water Index
var ndwiBaseline = imageBaseline.select('NDWI');
var ndwiIncrement = imageIncrement.select('NDWI');

// Define NDWI Visualization Parameters
var ndwiPalette = {
 min: -1,
 max: 1,
 palette: ['brown', 'white', 'darkblue']
};

Map.addLayer(ndwiBaseline, ndwiPalette, 'NDWI Baseline');
Map.addLayer(ndwiIncrement, ndwiPalette, 'NDWI Increment');

// Get the landed area of two years based on NDWI threshold
var ndwiThreshold = -0.16;
var landBaseline = ndwiBaseline.lt(ee.Image(ndwiThreshold));
var landIncrement = ndwiIncrement.lt(ee.Image(ndwiThreshold));
Map.addLayer(landBaseline, {}, 'Land Baseline');
Map.addLayer(landIncrement, {}, 'Land with reclaimed land');

// Identify the reclaimed land area
var landReclaimed = landIncrement.subtract(landBaseline).gt(0); //Only consider increase of land (+ve values)
Map.addLayer(landReclaimed, {}, 'Land Reclaimed');

//Find area in 2017
var areaImage2017 = landBaseline.multiply(ee.Image.pixelArea()).rename('Land 2017')
var area = areaImage2017.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: aoi,
  scale: 30,
  maxPixels: 1e10
  });
var area2017 = ee.Number(
  area.get('Land 2017')).divide(1e6).round();
print("Area in 2017(km): ",area2017)

//Find area in 2024
var areaImage2024 = landIncrement.multiply(ee.Image.pixelArea()).rename('Land 2024')
var area = areaImage2024.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: aoi,
  scale: 30,
  maxPixels: 1e10
  });
var area2024 = ee.Number(
  area.get('Land 2024')).divide(1e6).round();
print("Area in 2024(km): ",area2024)
// Calculate the reclaimed land area in meter square
print("Reclaimed land area (km square)", area2024.subtract(area2017))
//Using machiene learning
//Training data
var labels = geometry.merge(geometry2)

var bands = ['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B6', 'SR_B7'];


var training2017 = imageBaseline.select(bands).sampleRegions({
  collection: labels, 
  properties: ['class'], 
  scale: 30
});

var classifier2017 = ee.Classifier.smileCart().train({
  features: training2017, 
  classProperty: 'class', 
  inputProperties: bands
});


var training2024 = imageIncrement.select(bands).sampleRegions({
  collection: labels, 
  properties: ['class'], 
  scale: 30
});

var classifier2024 = ee.Classifier.smileCart().train({
  features: training2024, 
  classProperty: 'class', 
  inputProperties: bands
});


var classified2024 = imageIncrement.select(bands).classify(classifier2024);
//Map.addLayer(classified2024, {min: 0, max: 1, palette: ['green', 'blue']}, 'cart2024');
var classified2017 = imageBaseline.select(bands).classify(classifier2017);
//Map.addLayer(classified2017, {min: 0, max: 1, palette: ['green', 'blue']}, 'cart2017');
var landReclaimed = classified2024.subtract(classified2017).gt(0); //Only consider increase of land (+ve values)
Map.addLayer(landReclaimed, {}, 'Land ReclaimedML');

// Calculate the reclaimed land area in meter square

var areaImage = landReclaimed.multiply(ee.Image.pixelArea()).rename('Land Reclaimed')
var area = areaImage.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: aoi,
  scale: 30,
  maxPixels: 1e10
  });
var areakmsq = ee.Number(
  area.get('Land Reclaimed')).divide(1e6).round();
print('Reclaimed land area (km square) (ML):', areakmsq)
