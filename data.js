var table = ee.FeatureCollection("projects/ee-mus383729/assets/gadm41_SGP_1"), // replace with your own shape
    geometry3 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[103.61160053551971, 1.2975723892787874],
          [103.58619465173065, 1.2200001778468095],
          [103.73931659997284, 1.1516935864893414],
          [103.84094013512909, 1.1932269413144803],
          [103.90289657629907, 1.2596944308216367],
          [103.99716590954594, 1.295002922848822],
          [104.07595848156743, 1.32846811873894],
          [104.08900474621586, 1.3337881853406257],
          [104.08436988903813, 1.3466592665521995],
          [104.07922004772954, 1.3681109172054826],
          [104.09226631237797, 1.402947987842678],
          [104.08728813244633, 1.418907655596164],
          [104.06840538098149, 1.4319498830229271],
          [104.04814933850102, 1.4461932834355722],
          [104.01742195202641, 1.4360684657716984],
          [103.98195640821193, 1.4216533938197258],
          [103.95740883130763, 1.424055912086805],
          [103.93474952954982, 1.4295473730004564],
          [103.89595405835841, 1.4269732523295249],
          [103.87432472486232, 1.4446488226358956],
          [103.83209602613185, 1.4714193269024334],
          [103.80325691480373, 1.4722773506026248],
          [103.77888099927638, 1.4558032380844468],
          [103.74248878736232, 1.4465364968039047],
          [103.7333907343838, 1.453915571645656],
          [103.71021644849513, 1.4564896618522425],
          [103.69596855420802, 1.4455068565431868],
          [103.68017570752833, 1.4365832880938667],
          [103.67399589795802, 1.4302338046921714],
          [103.66781608838771, 1.4183928293162151],
          [103.65803138990138, 1.4038060372765722],
          [103.64086525220607, 1.3660515670182327],
          [103.6151160456631, 1.3238345030085668]]]),
    geometry = 
    /* color: #98ff00 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([103.69268941859366, 1.362675478409401]),
            {
              "class": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([103.69783925990225, 1.361989026991504]),
            {
              "class": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([103.70676565150382, 1.351692232313544]),
            {
              "class": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([103.71843862513663, 1.3613025753780539]),
            {
              "class": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([103.70814478192548, 1.3576957823200169]),
            {
              "class": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([103.67860531708222, 1.3473117933873129]),
            {
              "class": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([103.69285321136933, 1.36636086351323]),
            {
              "class": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([103.71722912689667, 1.3780304896490139]),
            {
              "class": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([103.75189992600667, 1.3552753634268548]),
            {
              "class": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([103.7888071220516, 1.3593940804612654]),
            {
              "class": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([103.79121038132894, 1.3466946804655004]),
            {
              "class": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([103.75859471970784, 1.3319358352129964]),
            {
              "class": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([103.78194066697347, 1.3171769015663004]),
            {
              "class": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8162729423641, 1.3195795246543476]),
            {
              "class": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([103.79567357712972, 1.3315926051980858]),
            {
              "class": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([103.78056737595784, 1.339830112336067]),
            {
              "class": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([103.76786443406331, 1.3343384439779755]),
            {
              "class": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([103.7840006034969, 1.3034475824642782]),
            {
              "class": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([103.78640386277425, 1.3010449439030614]),
            {
              "class": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80357000046956, 1.2976125991330247]),
            {
              "class": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([103.83000585252034, 1.3007017096360034]),
            {
              "class": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8389322441219, 1.317863365542312]),
            {
              "class": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8437387626766, 1.3274738412949196]),
            {
              "class": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([103.84339543992269, 1.333651984570118]),
            {
              "class": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([103.84511205369222, 1.3473811362166868]),
            {
              "class": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([103.84705609963557, 1.366045253606605]),
            {
              "class": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8377863852801, 1.3718800745593465]),
            {
              "class": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([103.82611341164728, 1.3804606677397488]),
            {
              "class": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80997724221369, 1.385609008796263]),
            {
              "class": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80070752785822, 1.391443781797766]),
            {
              "class": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80620069192072, 1.3832064510265165]),
            {
              "class": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([103.81993360207697, 1.3866386756661375]),
            {
              "class": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([103.83091993020197, 1.3924734461250672]),
            {
              "class": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([103.87211866067072, 1.387325119997237]),
            {
              "class": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([103.871088692409, 1.370850401305857]),
            {
              "class": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([103.86662549660822, 1.3557484762203795]),
            {
              "class": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([103.87555188820978, 1.3759987631384285]),
            {
              "class": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([103.88310498879572, 1.351286525732904]),
            {
              "class": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8817316977801, 1.3361844788074504]),
            {
              "class": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8875681845965, 1.324857882624306]),
            {
              "class": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([103.93837995217463, 1.3272604982780996]),
            {
              "class": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([103.980951973659, 1.3598671924488248]),
            {
              "class": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([103.93391675637385, 1.3626129993644165]),
            {
              "class": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([103.91743726418635, 1.3574646088349978]),
            {
              "class": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([103.91228742287775, 1.3255443444776156]),
            {
              "class": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([103.9366633384051, 1.3200526443306817]),
            {
              "class": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([103.90988416360041, 1.3114718385876272]),
            {
              "class": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8927180259051, 1.3059801074601822]),
            {
              "class": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([103.88379163430353, 1.312501536833979]),
            {
              "class": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([103.87898511574885, 1.321425570506518]),
            {
              "class": 0,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([103.85014600442072, 1.3238281894877062]),
            {
              "class": 0,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([103.85048932717463, 1.3142176996355344]),
            {
              "class": 0,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([103.83503980324885, 1.3022045353460232]),
            {
              "class": 0,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([103.83160657570978, 1.2943101390329637]),
            {
              "class": 0,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([103.82645673440119, 1.2895048422787723]),
            {
              "class": 0,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([103.81650037453791, 1.2819536433493537]),
            {
              "class": 0,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80791730569025, 1.2792077473010197]),
            {
              "class": 0,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80448407815119, 1.274745659957864]),
            {
              "class": 0,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([103.79315442727228, 1.2750888977206822]),
            {
              "class": 0,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([103.7883479087176, 1.2692538495385548]),
            {
              "class": 0,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([103.7883479087176, 1.264105266677216]),
            {
              "class": 0,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([103.78560132668635, 1.2617025911789834]),
            {
              "class": 0,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([103.77804822610041, 1.28161040650424]),
            {
              "class": 0,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([103.77324170754572, 1.27817803552497]),
            {
              "class": 0,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([103.77255506203791, 1.2771483233360077]),
            {
              "class": 0,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([103.76912183449885, 1.274745659957864]),
            {
              "class": 0,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([103.76568860695978, 1.2785212728295463]),
            {
              "class": 0,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([103.75916547463557, 1.2792077473010197]),
            {
              "class": 0,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([103.68603772805353, 1.3111286057446818]),
            {
              "class": 0,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([103.66612500832697, 1.3100989069335396]),
            {
              "class": 0,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([103.65616864846369, 1.3193661809584412]),
            {
              "class": 0,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([103.65273542092463, 1.324171420580774]),
            {
              "class": 0,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([103.64689893410822, 1.3200526443306817]),
            {
              "class": 0,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([103.63762921975275, 1.321425570506518]),
            {
              "class": 0,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([103.63247937844416, 1.3063233410077477]),
            {
              "class": 0,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([103.63316602395197, 1.2884751346500511]),
            {
              "class": 0,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([103.63865918801447, 1.2802374586638519]),
            {
              "class": 0,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([103.63213605569025, 1.2795509844679036]),
            {
              "class": 0,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([103.62801618264338, 1.274745659957864]),
            {
              "class": 0,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([103.61668653176447, 1.2692538495385548]),
            {
              "class": 0,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([103.61634320901057, 1.2689106109995796]),
            {
              "class": 0,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([103.6125666587176, 1.2610161120574248]),
            {
              "class": 0,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([103.61153669045588, 1.2500324215566312]),
            {
              "class": 0,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([103.62217969582697, 1.2493459393706208]),
            {
              "class": 0,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([103.60982007668635, 1.2277216592053597]),
            {
              "class": 0,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([103.61599988625666, 1.2342432860704196]),
            {
              "class": 0,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([103.67505139992853, 1.255524272575441]),
            {
              "class": 0,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([103.67402143166682, 1.2417946235072315]),
            {
              "class": 0,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([103.67470807717463, 1.277491560778175]),
            {
              "class": 0,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([103.66715497658869, 1.2665079399521644]),
            {
              "class": 0,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([103.70457715676447, 1.2716565180350634]),
            {
              "class": 0,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([103.70389051125666, 1.2610161120574248]),
            {
              "class": 0,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([103.72105664895197, 1.2726862324205674]),
            {
              "class": 0,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([103.71659345315119, 1.286415718144216]),
            {
              "class": 0,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([103.76740522072932, 1.2349297721799624]),
            {
              "class": 0,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([103.76431531594416, 1.2273784152447218]),
            {
              "class": 0,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([103.74680585549494, 1.2335567997836565]),
            {
              "class": 0,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([103.75269551813808, 1.2324961230520568]),
            {
              "class": 0,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8320398237238, 1.247259321929282]),
            {
              "class": 0,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([103.81762026805974, 1.2534376600491914]),
            {
              "class": 0,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([103.83238314647771, 1.25927274377889]),
            {
              "class": 0,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([103.85744570751287, 1.2774643912863983]),
            {
              "class": 0,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([103.82723330516912, 1.2805535262338354]),
            {
              "class": 0,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([103.7053537275324, 1.3986242544816316]),
            {
              "class": 0,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([103.71599673290349, 1.426768163113125]),
            {
              "class": 0,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([103.6947107221613, 1.4133826881145093]),
            {
              "class": 0,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([103.77367495555974, 1.4199038266434374]),
            {
              "class": 0,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80320071239568, 1.438780702588623]),
            {
              "class": 0,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([103.82448672313787, 1.4356917698869205]),
            {
              "class": 0,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([103.81041049022771, 1.425738513946065]),
            {
              "class": 0,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8756418134699, 1.4175013040581443]),
            {
              "class": 0,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([103.86877535839177, 1.4106369400925742]),
            {
              "class": 0,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([103.90825747509099, 1.406175092648875]),
            {
              "class": 0,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([103.89624117870427, 1.387641173811627]),
            {
              "class": 0,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([103.93366335888005, 1.3862682851336907]),
            {
              "class": 0,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([103.92130373973943, 1.3787173831962114]),
            {
              "class": 0,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([103.9525461103449, 1.3728825789245886]),
            {
              "class": 0,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([103.95048617382146, 1.3612129277203218]),
            {
              "class": 0,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([103.95666598339177, 1.3413057455795605]),
            {
              "class": 0,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([103.94876956005193, 1.3258604063625867]),
            {
              "class": 0,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([103.9415597822199, 1.3567509873078893]),
            {
              "class": 0,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([104.0078210737238, 1.330665633387137]),
            {
              "class": 0,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([104.00988101024724, 1.3488567648963643]),
            {
              "class": 0,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([103.99786471386052, 1.3234577893504675]),
            {
              "class": 0,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([103.98687838573552, 1.3416489742368194]),
            {
              "class": 0,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([103.98722170848943, 1.3632722820505876]),
            {
              "class": 0,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([103.9909982587824, 1.3763148184599179]),
            {
              "class": 0,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([103.97280215282537, 1.377687712891605]),
            {
              "class": 0,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([103.96593569774724, 1.368420660163846]),
            {
              "class": 0,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([103.97348879833318, 1.3533187198506489]),
            {
              "class": 0,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([103.96662234325505, 1.336843768658813]),
            {
              "class": 0,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([103.96490572948552, 1.3251739445968824]),
            {
              "class": 0,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([103.98825167675115, 1.3248307136426776]),
            {
              "class": 0,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([103.99786471386052, 1.3152202276638998]),
            {
              "class": 0,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([104.0074777509699, 1.3162499243652273]),
            {
              "class": 0,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([104.01915072460271, 1.3488567648963643]),
            {
              "class": 0,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([104.04661654491521, 1.3807767224690062]),
            {
              "class": 0,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([104.07820223827459, 1.3931327205467832]),
            {
              "class": 0,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([104.05966280956365, 1.4126962514131534]),
            {
              "class": 0,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([104.05313967723943, 1.4229927805832812]),
            {
              "class": 0,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([104.0627527143488, 1.402742896502202]),
            {
              "class": 0,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([104.05863284130193, 1.3903869487760916]),
            {
              "class": 0,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([104.07202242870427, 1.3999971359593646]),
            {
              "class": 0,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([104.0682458784113, 1.4154419970007555]),
            {
              "class": 0,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([104.06206606884099, 1.3862682851336907]),
            {
              "class": 0,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([104.02224062938787, 1.3958784891173914]),
            {
              "class": 0,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([104.01812075634099, 1.4188741744124092]),
            {
              "class": 0,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([103.96765231151677, 1.4085776269493593]),
            {
              "class": 0,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([103.95117281932927, 1.4144123427860789]),
            {
              "class": 0,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([103.94087313671209, 1.4212766955712868]),
            {
              "class": 0,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([103.96044253368474, 1.4099505025805585]),
            {
              "class": 0,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([103.9803552534113, 1.4133826881145093]),
            {
              "class": 0,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([103.98447512645818, 1.4109801587726623]),
            {
              "class": 0,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([103.97589205761052, 1.4123530329864156]),
            {
              "class": 0,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([103.71359347362615, 1.3989674749263932]),
            {
              "class": 0,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([103.70329379100896, 1.3879843958566147]),
            {
              "class": 0,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([103.69093417186834, 1.383179282698861]),
            {
              "class": 0,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([103.67136477489568, 1.3883276178518202]),
            {
              "class": 0,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([103.7111902143488, 1.4264249467752992]),
            {
              "class": 0,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([103.70432375927068, 1.4260817303862665]),
            {
              "class": 0,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([103.79221438427068, 1.4435857006964394]),
            {
              "class": 0,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80732058544255, 1.4624623803473444]),
            {
              "class": 0,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([103.82036685009099, 1.457314210648112]),
            {
              "class": 0,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([103.84027956981755, 1.448390688649368]),
            {
              "class": 0,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8928464361562, 1.3733153751976264]),
            {
              "class": 0,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8818601080312, 1.3688534572434596]),
            {
              "class": 0,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([103.88872656310933, 1.3863578567401493]),
            {
              "class": 0,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([103.90280279601949, 1.397340943389991]),
            {
              "class": 0,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([103.87980017150777, 1.4042053464926045]),
            {
              "class": 0,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8653806158437, 1.4021460276740714]),
            {
              "class": 0,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([103.85748419250386, 1.3900436506950462]),
            {
              "class": 0,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8595441290273, 1.380776646083698]),
            {
              "class": 0,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([103.86641058410542, 1.3924462015189447]),
            {
              "class": 0,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([103.86057409728902, 1.378717306810827]),
            {
              "class": 0,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([103.85714086974995, 1.3715096053444296]),
            {
              "class": 0,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([103.85817083801167, 1.3608696254416057]),
            {
              "class": 0,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8598874517812, 1.3553780045225305]),
            {
              "class": 0,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([103.86469397033589, 1.3505728260007142]),
            {
              "class": 0,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8708737799062, 1.368077358913925]),
            {
              "class": 0,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([103.86641058410542, 1.3691070333592192]),
            {
              "class": 0,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([103.87190374816792, 1.363272205664707]),
            {
              "class": 0,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([103.87499365295308, 1.3577805902099902]),
            {
              "class": 0,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8705304571523, 1.3522889622795224]),
            {
              "class": 0,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8708737799062, 1.3457676379778176]),
            {
              "class": 0,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([103.86744055236714, 1.3419921264593702]),
            {
              "class": 0,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([103.86641058410542, 1.335127545141843]),
            {
              "class": 0,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([103.85885748351949, 1.3413056691929928]),
            {
              "class": 0,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8543942877187, 1.3522889622795224]),
            {
              "class": 0,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([103.85233435119527, 1.3598399474702085]),
            {
              "class": 0,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([103.83963140930074, 1.3584670428251244]),
            {
              "class": 0,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8598874517812, 1.327919714130232]),
            {
              "class": 0,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([103.85679754699605, 1.3409624404875928]),
            {
              "class": 0,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([103.85096106017964, 1.3409624404875928]),
            {
              "class": 0,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([103.85199102844136, 1.3382166091127088]),
            {
              "class": 0,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([103.85576757873433, 1.3354707746637802]),
            {
              "class": 0,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([103.86709722961324, 1.3272332529358442]),
            {
              "class": 0,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([103.86332067932027, 1.3248306372556011]),
            {
              "class": 0,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([103.85679754699605, 1.3227712505321492]),
            {
              "class": 0,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([103.85576757873433, 1.3330681670042601]),
            {
              "class": 0,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([103.82418188537495, 1.3196821672430397]),
            {
              "class": 0,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([103.81353888000386, 1.3162498479778837]),
            {
              "class": 0,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80358252014058, 1.323114481771497]),
            {
              "class": 0,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([103.74247106994527, 1.3327249371471304]),
            {
              "class": 0,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([103.70504888976949, 1.3389030672448583]),
            {
              "class": 0,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([103.70916876281636, 1.3320384772893772]),
            {
              "class": 0,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([103.69680914367574, 1.3299790965690568]),
            {
              "class": 0,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([103.68204626525777, 1.3303223268085274]),
            {
              "class": 0,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([103.66488012756245, 1.346454093990064]),
            {
              "class": 0,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([103.66591009582417, 1.3594967213821252]),
            {
              "class": 0,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([103.65698370422261, 1.3557212311953653]),
            {
              "class": 0,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([103.67208990539449, 1.3581238165419331]),
            {
              "class": 0,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([103.69131597961324, 1.358810269059564]),
            {
              "class": 0,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([103.68788275207417, 1.3540050973449107]),
            {
              "class": 0,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([103.68994268859761, 1.3224280192453348]),
            {
              "class": 0,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([103.67792639221089, 1.3248306372556011]),
            {
              "class": 0,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([103.67758306945699, 1.3165930801172012]),
            {
              "class": 0,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([103.67620977844136, 1.3117878258720774]),
            {
              "class": 0,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([103.66350683654683, 1.3217415565293062]),
            {
              "class": 0,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([103.6727765509023, 1.3251738682098186]),
            {
              "class": 0,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([103.71637854064839, 1.3423353550203092]),
            {
              "class": 0,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([103.72015509094136, 1.3498863711497902]),
            {
              "class": 0,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([103.7332013555898, 1.363272205664707]),
            {
              "class": 0,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([103.74521765197652, 1.3794037534331853]),
            {
              "class": 0,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([103.75723394836324, 1.3835224290051344]),
            {
              "class": 0,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([103.76822027648824, 1.3794037534331853]),
            {
              "class": 0,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([103.77096685851949, 1.375628294562167]),
            {
              "class": 0,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([103.7500241705312, 1.380776646083698]),
            {
              "class": 0,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([103.75105413879292, 1.3721960540402296]),
            {
              "class": 0,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([103.76959356750386, 1.369450258076051]),
            {
              "class": 0,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([103.76135382141011, 1.3643018821694615]),
            {
              "class": 0,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([103.73663458312886, 1.3601831735095022]),
            {
              "class": 0,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([103.74041113342183, 1.3536618704289798]),
            {
              "class": 0,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([103.7441876837148, 1.3491999161050559]),
            {
              "class": 0,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([103.7555173345937, 1.4010267201554785]),
            {
              "class": 0,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([103.74830755676167, 1.398624178096896]),
            {
              "class": 0,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([103.74521765197652, 1.396221633578587]),
            {
              "class": 0,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([103.76856359924214, 1.3993106189362299]),
            {
              "class": 0,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([103.79122290099995, 1.4339756179761314]),
            {
              "class": 0,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([103.79740271057027, 1.4377509824355774]),
            {
              "class": 0,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([103.79190954650777, 1.4315731100767315]),
            {
              "class": 0,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([103.77851995910542, 1.4319163256451684]),
            {
              "class": 0,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([103.77234014953511, 1.4356916935033934]),
            {
              "class": 0,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([103.76135382141011, 1.428484167650165]),
            {
              "class": 0,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([103.75792059387105, 1.4260816540024341]),
            {
              "class": 0,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([103.75483068908589, 1.4205901848253204]),
            {
              "class": 0,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([103.82246527160542, 1.42573843756222]),
            {
              "class": 0,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([103.83722815002339, 1.4360349084543191]),
            {
              "class": 0,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([103.85027441467183, 1.4377509824355774]),
            {
              "class": 0,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([103.85267767394917, 1.4343188331845675]),
            {
              "class": 0,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([103.84581121887105, 1.4288273836805838]),
            {
              "class": 0,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([103.83448156799214, 1.4322595411622203]),
            {
              "class": 0,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([103.82795843566792, 1.4212766191872892]),
            {
              "class": 0,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([103.81903204406636, 1.4185308805161085]),
            {
              "class": 0,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80632910217183, 1.451479527715172]),
            {
              "class": 0,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([103.81319555724995, 1.451479527715172]),
            {
              "class": 0,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([103.82006201232808, 1.4521659527977582]),
            {
              "class": 0,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([103.82761511291402, 1.4562844989119335]),
            {
              "class": 0,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([103.89765295471089, 1.3244874062538408]),
            {
              "class": 0,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([103.89765295471089, 1.3244874062538408]),
            {
              "class": 0,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8979962774648, 1.313503989163629]),
            {
              "class": 0,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([103.90966925109761, 1.3114445930724767]),
            {
              "class": 0,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([103.91790899719136, 1.3155633835575358]),
            {
              "class": 0,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([103.9203122564687, 1.3340978562885342]),
            {
              "class": 0,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([103.9038327642812, 1.3478270054345762]),
            {
              "class": 0,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([103.93816503967183, 1.3505728260007142]),
            {
              "class": 0,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([103.9477780767812, 1.3495431436516396]),
            {
              "class": 0,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([103.95945105041402, 1.3594967213821252]),
            {
              "class": 0,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([103.96322760070699, 1.3601831735095022]),
            {
              "class": 0,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([103.91653570617574, 1.3117878258720774]),
            {
              "class": 0,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8983396002187, 1.3038934595937846]),
            {
              "class": 0,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([103.92992529357808, 1.313503989163629]),
            {
              "class": 0,
              "system:index": "270"
            })]),
    geometry2 = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([103.66381167430974, 1.377344489357825]),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([103.65831851024724, 1.3763148184599179]),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([103.66655825634099, 1.377344489357825]),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([103.74002932567693, 1.4260817303862665]),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([103.7383127119074, 1.424365647673648]),
            {
              "class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([103.7273263837824, 1.4113233774020777]),
            {
              "class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([103.79942416210271, 1.401370016633168]),
            {
              "class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80251406688787, 1.4030861163436377]),
            {
              "class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80732058544255, 1.3701367837479026]),
            {
              "class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([103.83135317821599, 1.3443948017602174]),
            {
              "class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80028246898748, 1.3996539156652723]),
            {
              "class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8397645856867, 1.4006835763968037]),
            {
              "class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([103.79427432079412, 1.3704800083172457]),
            {
              "class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([103.82311343212224, 1.3699651714447902]),
            {
              "class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80182742138005, 1.36807743529964]),
            {
              "class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([103.74174593944646, 1.311787902259561]),
            {
              "class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([103.74449252147771, 1.3066394053286674]),
            {
              "class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([103.72715472240544, 1.3419922028459121]),
            {
              "class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([103.92635812178158, 1.343287454720252]),
            {
              "class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([103.92532815351986, 1.3429442262929978]),
            {
              "class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([103.92618646040462, 1.341399697774007]),
            {
              "class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([103.92378320112728, 1.3431158405126489]),
            {
              "class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([103.92378320112728, 1.3508384679001755]),
            {
              "class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([103.92228116407894, 1.3505810473819313]),
            {
              "class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([103.93034924879574, 1.297208612082277]),
            {
              "class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([103.93498410597347, 1.2874264024206314]),
            {
              "class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([103.92159451857113, 1.2661456767072268]),
            {
              "class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([104.02871121778988, 1.2579079293691506]),
            {
              "class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([103.93155087843441, 1.2695780637152585]),
            {
              "class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([103.98716916456722, 1.2723239700412496]),
            {
              "class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([103.95489682570003, 1.2592808890694838]),
            {
              "class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([103.93567075148128, 1.2531025647341492]),
            {
              "class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([103.89721860304378, 1.2455512596519496]),
            {
              "class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([104.03729428663753, 1.2826210926813169]),
            {
              "class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([103.95764340773128, 1.2887993463983505]),
            {
              "class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([103.98098935499691, 1.2901722896359162]),
            {
              "class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([103.7386034907391, 1.248297191283286]),
            {
              "class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([103.71869077101253, 1.2345675045765578]),
            {
              "class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([103.67337216749691, 1.2077944122834523]),
            {
              "class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([103.65551938429378, 1.2338810183734814]),
            {
              "class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([103.65551938429378, 1.286053457703548]),
            {
              "class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([103.7386034907391, 1.2867399301544657]),
            {
              "class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([103.70152463331722, 1.2942911148998955]),
            {
              "class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([103.6426447810223, 1.30647593372269]),
            {
              "class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([103.64418973341488, 1.3021855112723297]),
            {
              "class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([103.6484812678387, 1.2973802294588956]),
            {
              "class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([103.65054120436214, 1.294119497313958]),
            {
              "class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([103.67835034742855, 1.2903439074885494]),
            {
              "class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([103.66805066481136, 1.2865683120590417]),
            {
              "class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([103.662042516618, 1.2829643293909005]),
            {
              "class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([103.67354382887386, 1.287083166310646]),
            {
              "class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([103.68813504591488, 1.293433026854182]),
            {
              "class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([103.72607221022152, 1.2961789075781074]),
            {
              "class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([103.73259534254574, 1.2917168498925173]),
            {
              "class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([103.75096310987972, 1.2910303787832085]),
            {
              "class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([103.7580012263348, 1.2917168498925173]),
            {
              "class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([103.760919469743, 1.287083166310646]),
            {
              "class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([103.75440708724277, 1.3050594259043238]),
            {
              "class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([103.7477122935416, 1.3088778978784052]),
            {
              "class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([103.64301364358842, 1.3491760548255403]),
            {
              "class": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([103.64593188699662, 1.3464302326836664]),
            {
              "class": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([103.64387195047318, 1.369254784642693]),
            {
              "class": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([103.64799182352006, 1.3738883138827034]),
            {
              "class": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([103.65384098817346, 1.388098271939538]),
            {
              "class": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([103.65727421571252, 1.3932465963813052]),
            {
              "class": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([103.65933415223596, 1.397193637502604]),
            {
              "class": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([103.6807918243551, 1.4236214801882308]),
            {
              "class": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([103.70224949647424, 1.44404278779322]),
            {
              "class": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([103.71647964394704, 1.4538066165952155]),
            {
              "class": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([103.73244415200368, 1.4536350104687403]),
            {
              "class": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([103.74823699868337, 1.4478003944182727]),
            {
              "class": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([103.85195276110997, 1.449938394800416]),
            {
              "class": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8507511314713, 1.4362098402133225]),
            {
              "class": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([103.88113149050385, 1.4337028886674807]),
            {
              "class": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([103.86293538454682, 1.4381646828907297]),
            {
              "class": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([103.92148449410311, 1.4055271530128335]),
            {
              "class": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([103.95437688666772, 1.4167846967583324]),
            {
              "class": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([103.95866842109155, 1.4085474550250061]),
            {
              "class": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([103.9562651618142, 1.406831359326399]),
            {
              "class": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([103.96677942115258, 1.4035278715541215]),
            {
              "class": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([103.9826151831765, 1.414167659582389]),
            {
              "class": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([103.98797960120629, 1.415626336405483]),
            {
              "class": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([103.97691170547382, 1.3441797197589807]),
            {
              "class": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([104.03601811363289, 1.3383756123310537]),
            {
              "class": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([104.01799366905281, 1.3061118671702305]),
            {
              "class": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([104.02998380436375, 1.3919844972978515]),
            {
              "class": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([104.03547696842625, 1.3997069669984004]),
            {
              "class": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([104.04320173038914, 1.4134357391355232]),
            {
              "class": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([104.02534894718602, 1.427336038225726]),
            {
              "class": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([104.03376035465672, 1.4309398057880305]),
            {
              "class": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([103.92443212951558, 1.3413056691929928]),
            {
              "class": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([103.92623457397359, 1.3410482476684593]),
            {
              "class": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([103.9283803411855, 1.3413056691929928]),
            {
              "class": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([103.92898115600484, 1.3412198620211593]),
            {
              "class": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([103.9254620977773, 1.3409624404875928]),
            {
              "class": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([103.92245802368062, 1.3421637407458635]),
            {
              "class": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([103.92211470092671, 1.3433650404140014]),
            {
              "class": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([103.92271551574605, 1.3425069692827067]),
            {
              "class": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([103.92305883849995, 1.3416488978502519]),
            {
              "class": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80811883085237, 1.3682533536961703]),
            {
              "class": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80588723295197, 1.3673952913837524]),
            {
              "class": 1,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8211650955008, 1.370484314271508]),
            {
              "class": 1,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8179035293387, 1.3723720485198516]),
            {
              "class": 1,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80451394193635, 1.3672236788844507]),
            {
              "class": 1,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([103.79850579374299, 1.3984569501438842]),
            {
              "class": 1,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([103.79644585721955, 1.3996582215665339]),
            {
              "class": 1,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([103.9188382493045, 1.4244345329053225]),
            {
              "class": 1,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([103.90682195291778, 1.4246061412290012]),
            {
              "class": 1,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([103.89635060892364, 1.427180264549271]),
            {
              "class": 1,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8917157517459, 1.4290679531532455]),
            {
              "class": 1,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([103.88639424906036, 1.430269208729901]),
            {
              "class": 1,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([103.89995549783966, 1.4312988558665585]),
            {
              "class": 1,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([103.87369130716583, 1.4414236946994152]),
            {
              "class": 1,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([103.86733983621856, 1.446571900588691]),
            {
              "class": 1,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8500020371463, 1.4596139697987491]),
            {
              "class": 1,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([103.75426143220982, 1.4469619530325546]),
            {
              "class": 1,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([103.74413341096958, 1.4437014245497033]),
            {
              "class": 1,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([103.74893992952427, 1.4430149969044552]),
            {
              "class": 1,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([103.76155704073032, 1.4449026724301033]),
            {
              "class": 1,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([103.76447528413853, 1.4498792640184333]),
            {
              "class": 1,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([103.75795215181431, 1.4454174927558374]),
            {
              "class": 1,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([103.75572055391392, 1.4437014245497033]),
            {
              "class": 1,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([103.73924106172642, 1.4457607062414946]),
            {
              "class": 1,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([103.72193578565816, 1.4547341218301193]),
            {
              "class": 1,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([103.72519735182027, 1.4545625157741635]),
            {
              "class": 1,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([103.72914556349019, 1.4549057278730095]),
            {
              "class": 1,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([103.73807195509175, 1.4516452108274074]),
            {
              "class": 1,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([103.73515371168355, 1.4511303919164222]),
            {
              "class": 1,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([103.71232274854879, 1.45198842336961]),
            {
              "class": 1,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([103.70579961622457, 1.4511303919164222]),
            {
              "class": 1,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([103.70579961622457, 1.4499291473351734]),
            {
              "class": 1,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([103.69926198380038, 1.4433023594457972]),
            {
              "class": 1,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([103.69308217423007, 1.4400418257150436]),
            {
              "class": 1,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([103.68827565567538, 1.4367812873198664]),
            {
              "class": 1,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([103.69411214249179, 1.4374677168427994]),
            {
              "class": 1,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([103.68964894669101, 1.4362664650422894]),
            {
              "class": 1,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([103.7844570360088, 1.2447140263063554]),
            {
              "class": 1,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([103.7951000413799, 1.239908637547012]),
            {
              "class": 1,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([103.78720361804005, 1.237849182549277]),
            {
              "class": 1,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([103.78171045397755, 1.2426545750512172]),
            {
              "class": 1,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([103.76660425280568, 1.250549129452526]),
            {
              "class": 1,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([103.75527460192677, 1.2522653337941356]),
            {
              "class": 1,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([103.77965051745412, 1.238535667726383]),
            {
              "class": 1,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80196649645802, 1.2371626971944545]),
            {
              "class": 1,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80299646471974, 1.2460869929163672]),
            {
              "class": 1,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80539972399708, 1.2344167539998425]),
            {
              "class": 1,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80745966052052, 1.234073510900995]),
            {
              "class": 1,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([103.80196649645802, 1.22755188362072]),
            {
              "class": 1,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([103.79475671862599, 1.2282383714533855]),
            {
              "class": 1,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([103.81260950182912, 1.2292681028716888]),
            {
              "class": 1,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([103.87097436999318, 1.2522653337941356]),
            {
              "class": 1,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([103.89706689929005, 1.2673678833729753]),
            {
              "class": 1,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([103.90873987292287, 1.2752623629415065]),
            {
              "class": 1,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8833339891338, 1.2508923704106694]),
            {
              "class": 1,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([103.86204797839162, 1.2440275427332288]),
            {
              "class": 1,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([103.86719781970021, 1.287618890989156]),
            {
              "class": 1,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([103.85638315295216, 1.2850446192329081]),
            {
              "class": 1,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8697727403545, 1.3016915305020456]),
            {
              "class": 1,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8690860948467, 1.300146976328408]),
            {
              "class": 1,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([103.8225658616924, 1.3449231669168265]),
            {
              "class": 1,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([103.82814485644337, 1.344236710473793]),
            {
              "class": 1,
              "system:index": "160"
            })]);
