var cmds = [
	{
		"cmd":"Deploy",
		"cmdDes":"Specify model set available in current environment",
		"parameters":[			
			{ "parameter":"enable", "des":"true or false, if true, enable, if false, disable ", "required":false, "default":true},
			{ "parameter":"items", "des":"array of model IDs", "required":false},
		],
		"examples":[
			{
				"name":"Deploy Model",
				"context":	'' +
						'{<br>' +
						'	"cmd": "Deploy", <br>' +
						'	"items":[ <br>' +
						'		"614AC0466F4E48B792CC83A5B99AF4FC", <br>' +
						'		"F933B1A524B94050BC7A82B15D2057F5", <br>' +
						'	]<br>' +
						'}'	
			},
			{
				"name":"Disable",
				"context":	'' +
						'{<br>' +
						'	"cmd": "Deploy", <br>' +
						'	"enable":false <br>' +
						'}'	
			}			
		]
	},
	{
		"cmd":"SetDragPlacementParamInDeploy",
		"cmdDes":"Effect setting during drag and drop",
		"parameters":[
			{ "parameter":"absorbPlacement", "des":"if object being drag can be attached by target object automatically", "required":false, "default":""},
			{ "parameter":"absorbNormal", "des":"if object being drag align to normal line of target object automatically", "required":false, "default":""},
			{ "parameter":"absorbPivot", "des":"if object being drag align to axis line of target object automatically", "required":false, "default":""}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd":"SetDragPlacementParamInDeploy", <br>' +
						'	"absorbPlacement":true,<br>' +
						'	"absorbNormal":false, <br>' +	
						'	"absorbPivot":true <br>' +	
						'}'	
			}
		]
	},	
	
	
	{
		"cmd":"GetDeployObjects",
		"cmdDes":"Get deploy objects and save to buffer",
		"parameters":[
			{ "parameter":"toBuffer", "des":"buffer to store objects", "required":true, "default":""}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd":"GetDeployObjects", <br>' +
						'	"toBuffer":{"ObjectManager":"RunBuffer/deployObjects"}<br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"SetDeployObjects",
		"cmdDes":"Set deploy objects from buffer",
		"parameters":[
			{ "parameter":"formBuffer", "des":"buffer name", "required":true, "default":""}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd":"SetDeployObjects", <br>' +
						'	"fromBuffer":{"ObjectManager":"RunBuffer/deployObjects"}<br>' +
						'}'	
			}
		]
	},

	{
		"cmd":"GetDeployToJson",
		"cmdDes":"Get deploy objects and save to buffer in JSON format",
		"parameters":[
			{ "parameter":"toBuffer", "des":"buffer name", "required":true, "default":""}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd":"GetDeployToJson", <br>' +
						'	"toBuffer":{"ObjectManager":"RunBuffer/deployJson"}<br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"SetDeployFromJson",
		"cmdDes":"Deploy objects from JSON",
		"parameters":[
			{ "parameter":"json", "des":"JSON data", "required":true, "default":""}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd":"SetDeployFromJson", <br>' +
						'	"json":{<br>	' +
						'		"2345223":{<br>	' +
						'			"bundle":"3268DD250B694147B0BDB37FA390BF96",<br>	' +
						'			"floor":"floor01",<br>	' +
						'			"pos":"0.22 0.33 1.34", //position<br>	' +
						'			"rot":"0 0 0",//rotation<br>	' +
						'			"scl":"1 1 1",//scale<br>	' +
						'			"properties":{<br>	' +
						'				"UserID":"Camera01",<br>	' +
						'				"PropertyDict":{<br>	' +
						'					"Operator":"wxz"<br>	' +
						'				}<br>	' +
						'			}<br>	' +
						'		}<br>	' +
						'	}<br>	' +
						'}'	
			}
		]
	},
	{
		"cmd":"ClearDeployObjects",
		"cmdDes":"Clear deployed objects",
		"parameters":[
			{ "parameter":"destroyObjects", "des":"Clear objects in scene, if true, will clear objects both in Deploy module and scene, if false, only clear objects in Deploy module, and keep objects in scene.", "required":false, "default":true}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd":"SetDragPlacementParamInDeploy", <br>' +
						'	"absorbPlacement":true,<br>' +
						'	"absorbNormal":false, <br>' +	
						'	"absorbPivot":true <br>' +	
						'}'	
			}
		]
	}	
]

docCreator.addDocItemFromData("Deploy Object", cmds)

