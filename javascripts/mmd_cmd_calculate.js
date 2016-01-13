var cmds = [
	{
		"cmd":"CalculateObjectsCenter",
		"cmdDes":"Calculate objects center",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"offset", "des":"Offset to calculated result.", "required":false, "default":[0,0,0] },
			{ "parameter":"toBuffer", "des":"Buffer to save result", "required":true }
		],
		"examples":[
			{
				"name":"",
				"context":'' +
						'{<br>' +
						'	"cmd": "CalculateObjectsCenter", <br>' +
						'	"fromBuffer": "selected objects", <br>' +
						'	"toBuffer": "center_location" <br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"CalculateWorldToViewport",
		"cmdDes":"Given world coordinate, calculate 3D viewpoint coordinate. Note, 3D viewpoint coordinate is different from screen coordinate.",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"pos", "des":"world coordinate", "required":false},
			{ "parameter":"fromBuffer", "des":"buffer of world coordinate", "required":false},
			{ "parameter":"toBuffer", "des":"calculate result", "required":true }
		],
		"examples":[
			{
				"name":"",
				"context":'' +
						'{<br>' +
						'	"cmd": "CalculateWorldToViewport", <br>' +
						'	"pos": [89,3,45], <br>' +
						'	"toBuffer": "2DCord" <br>' +
						'}'	
			}
		]
	}
	
];

docCreator.addDocItemFromData("Calculation", cmds);