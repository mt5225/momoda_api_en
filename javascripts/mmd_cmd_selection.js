var cmds = [
	{
		"cmd":"AddToCandidate",
		"cmdDes":"Add objects to 'candidate set'<br>	" +
				"Note: candidate set will be reset after scene switch",
		"parameterInherit":"ObjectCommand",
		"parameters":[			
			
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "AddToCandidate", <br>' +
						'	"uids":["obj01, "obj02".....] <br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"ClearCandidate",
		"cmdDes":"Empty candidate set<br>	" +
				"Note: candidate set will be reset after scene switch",
		"parameters":[	
			
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "ClearCandidate" <br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"RemoveFromCandidate",
		"cmdDes":"Remove objects from candidate set<br>	" +
				"Note: candidate set will be reset after scene switch",
		"parameterInherit":"ObjectCommand",
		"parameters":[			
			
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "RemoveFromCandidate", <br>' +
						'	"uids":["obj01, "obj02".....] <br>' +
						'}'	
			}
		]
	},		
	{
		"cmd":"AddToSelection",
		"cmdDes":"Add objects to 'selection set' and marked as 'selected'" ,
		"parameterInherit":"ObjectCommand",
		"parameters":[			
			
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "AddToSelection", <br>' +
						'	"uids":["obj01, "obj02".....] <br>' +
						'}'	
			}
		]
	},	
	{
		"cmd":"ClearSelection",
		"cmdDes":"Empty selection set and mark all objects as 'unselected'",
		"parameters":[			
			
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "ClearSelection" <br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"RemoveFromSelection",
		"cmdDes":"Remove objects from selection set and mark as 'unselected'" ,
		"parameterInherit":"ObjectCommand",
		"parameters":[	
			
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "RemoveFromSelection", <br>' +
						'	"uids":["obj01, "obj02".....] <br>' +
						'}'	
			}
		]
	},	
	{
		"cmd":"GetSelection",
		"cmdDes":"Save objects in selection set to buffer" ,
		"parameters":[
			{ "parameter":"toBuffer", "des":"Buffer to save object", "required":true}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "GetSelection", <br>' +
						'	"toBuffer":{"ObjectManager":"RunBuffer/selection"} <br>' +
						'}'	
			}
		]
	},		
	{
		"cmd":"LockSelection",
		"cmdDes":"Lock selection set, cannot remove or add new object if locked",
		"parameters":[			
			
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "LockSelection" <br>' +
						'}'	
			}
		]
	},	
	{
		"cmd":"UnlockSelection",
		"cmdDes":"Unlock selection set",
		"parameters":[			
			
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "UnlockSelection" <br>' +
						'}'	
			}
		]
	},		
	{
		"cmd":"EnableRectangleSelect",
		"cmdDes":"Enable bulk selector in UI" ,		
		"parameters":[			
			{ "parameter":"enable", "des":"True of False", "required":true}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "EnableRectangleSelect", <br>' +
						'	"enable":true <br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"EnalbeCheckRectangleUpdate",
		"cmdDes":"Update bulk selection in realtime, recommended value: false" ,		
		"parameters":[			
			{ "parameter":"enable", "des":"True or False", "required":true}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "EnalbeCheckRectangleUpdate", <br>' +
						'	"enable":true <br>' +
						'}'	
			}
		]
	},	
	
	{
		"cmd":"LimitRectangleSelectNum",
		"cmdDes":"Limit number of selected objects by bulk selector" ,		
		"parameters":[			
			{ "parameter":"num", "des":"maxim number of selected objects by bulk selector", "required":true}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "LimitRectangleSelectNum", <br>' +
						'	"num":4 <br>' +
						'}'	
			}
		]
	}
	
]

docCreator.addDocItemFromData("Selection", cmds)

