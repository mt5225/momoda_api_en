var cmds = [
	{
		"cmd":"ChangeObjectLevel",
		"cmdDes":"Change scene level to given object.<br>	" +
				"Note: only supports one object as input.",
		"parameterInherit":"ObjectCommand",
		"parameters":[	
			
		],
		"examples":[	
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "ChangeObjectLevel", <br>' +
						'	"uid":"first floor" <br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"GetCurrentObjectLevel",
		"cmdDes":"Get current level of given object.<br>	" ,
		"parameters":[	
			{ "parameter":"toBuffer", "des":"Buffer to store command result.", "required":true }
		],
		"examples":[	
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "GetCurrentObjectLevel", <br>' +
						'	"toBuffer":"currentLevel" <br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"GetCurrentObjectLevelClass",
		"cmdDes":"Get class name of current level.<br>	",
		"parameters":[	
			{ "parameter":"toBuffer", "des":"Buffer to store command result", "required":true }
		],
		"examples":[	
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "GetCurrentObjectLevelClass", <br>' +
						'	"toBuffer":"currentLevelClass" <br>' +
						'}'	
			}
		]
	},	
	{
		"cmd":"GetCurrentObjectLevelClassId",
		"cmdDes":"Get ClassId of current level, note: classId is a number.<br>	",
		"parameters":[	
			{ "parameter":"toBuffer", "des":"Buffer to store command result", "required":true }
		],
		"examples":[	
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "GetCurrentObjectLevelClassId", <br>' +
						'	"toBuffer":"currentLevelClassId" <br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"SetExpandFloorPlanHeight",
		"cmdDes":"Set floor distance while expanded.<br>	",
		"parameters":[	
			{ "parameter":"height", "des":"floor distance in meters", "required":true }
		],
		"examples":[	
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetExpandFloorPlanHeight", <br>' +
						'	"height":3 <br>' +
						'}'	
			}
		]
	}
	
];

docCreator.addDocItemFromData("Scene Level", cmds);

