var cmds = [
	{
		"cmd":"RegTimer",
		"cmdDes":"Register timer",
		"parameters":[	
			{ "parameter":"name", "des":"Timer name", "required":true },
			{ "parameter":"time", "des":"Timeout, in seconds", "required":false, "defualt":0 },
			{ "parameter":"loop", "des":"If repeat", "required":false, "defualt":false },
			{ "parameter":"cmds", "des":"Command to be executed at timeout", "required":true },
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "RegTimer", <br>' +
						'	"name":"ExplodeWhenTimeout", <br>' +
						'	"loop":false, <br>' +
						'	"cmds":[<br>' +
						'		{ "cmd": "CreatePlacement", "uid" : "Explode", "bundleId":"C2F0A5FB249A4F4C9D7A46E4876E2F4C", "pos":[0,0,0]} <br>' +
						'	]<br>' +						
						'}'	
			}
		]
	},
	{
		"cmd":"UnregTimer",
		"cmdDes":"Unregister timer",
		"parameters":[	
			{ "parameter":"name", "des":"Name of the timer", "required":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "UnregTimer", <br>' +
						'	"name":"ExplodeWhenTimeout" <br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"CheckBoolean",
		"cmdDes":"Pass boolean value from buffer, then run command depends on boolean value",
		"parameters":[	
			{ "parameter":"fromBuffer", "des":"Buffer to get boolean value", "required":true },
			{ "parameter":"trueCmds", "des":"Command to run if true", "required":false },
			{ "parameter":"falseCmds", "des":"Command to run if false", "required":false }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CheckBoolean", <br>' +
						'	"fromBuffer":"resultBuffer",<br>' +
						'	"trueCmds":[<br>' +
						'		{"cmd":"SetColor",   "uid":"obj01",   "color":[1,0,0] }<br>' +
						'	], <br>' +
						'	"falseCmds":[<br>' +
						'		{"cmd":"SetColor",   "uid":"obj01",   "color":[0,1,0] }<br>' +
						'	] <br>' +						
						'}'	
			}
		]
	},	
	
]

docCreator.addDocItemFromData("Logic", cmds)

