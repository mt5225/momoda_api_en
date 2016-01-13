var cmds = [
	
	{
		"cmd":"SwitchCameraTo3D",
		"cmdDes":"viewpoint switch between 3D and 2D<br>	" +
				"Note：same as 3D/2D switch button in control panel",
		"parameters":[
			{ "parameter":"enable", "des":"If true, switch to 3D, if false, switch to 2D" , "required":false, "default":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SwitchCameraTo3D", <br>' +
						'	"enable":false <br>' +
						'}'	
			}
		]
	},	
	{
		"cmd":"CameraFitToSelection",
		"cmdDes":"Fit to selected object, if no object is selected, fit to current layer<br>	",
		"parameters":[			
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CameraFitToSelection" <br>' +
						'}'	
			}
		]
	},		
	{
		"cmd":"SetOrbitCameraParam",
		"cmdDes":"Camera parameters setting" ,
		"parameters":[
			{ "parameter":"heightLimit", "des":" Height limit setting, take two array as input, first array as minimum height, second array as maxium height.", "required":false, "default":[0.0,1500.0]},
			{ "parameter":"zoomLimit", "des":"Limits on back and froths moving through mouse wheel. take one array as input, first element in array sets closest distance to viewpoint, second viewpoint sets farthest distance from viewpoint." , "required":false, "default":[0.1,1000.0]},
			{ "parameter":"farClipDistance", "des":"Far clip distance setting, for animation effects only" , "required":false, "default":"change with height attribute"},
			{ "parameter":"nearClipDistance", "des":"Near clip distance setting, for animation effects only" , "required":false, "default":"change with height attribute"},
			{ "parameter":"smooth", "des":"Flying camera in smooth mode, if set to false, camera will fly straight." , "required":false, "default":true},
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetOrbitCameraParam", <br>' +
						'	"heightLimit":[0, 5500], <br>' +
						'	"zoomLimit":[0, 15500], <br>' +
						'	"farClipDistance":5000, <br>' +
						'	"nearClipDistance":0.2, <br>' +
						'	"smooth":true  <br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"CameraFlyToBest",
		"cmdDes":"Fly to optimized viewpoint of given object.<br>	" +
				"Note: only accept one object as input",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"time", "des":"Fly time, in seconds", "required":false, "default":2},
			{ "parameter":"offset", "des":"Optimized viewpoint plus offset as camera location.<br>	" +
					"Note: offset is calculated in world coordinate" , "required":false, "default":[0,0,0]}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CameraFlyToBest", <br>' +
						'	"uid":"object01",<br>' +
						'	"time":3, <br>' +
						'	"offset":[0.0, 1.0, 0.0] //move up another 1 meter.<br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"CameraFitToBest",
		"cmdDes":"Move camera to optimized viewpoint of given object, no flying process.<br>	" +
				"Note: only accept one object as input",
		"parameterInherit":"ObjectCommand",
		"parameters":[			
			{ "parameter":"offset", "des":"Optimized viewpoint plus offset as camera location.<br>	" +
					"Note: offset is calculated in world coordinate" , "required":false, "default":[0,0,0]}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CameraFitToBest", <br>' +
						'	"uid":"object01",<br>' +
						'	"offset":[0.0, 1.0, 0.0] //move up another 1 meter.<br>' +
						'}'	
			}
		]
	},	
	
]

docCreator.addDocItemFromData("Camera", cmds)

