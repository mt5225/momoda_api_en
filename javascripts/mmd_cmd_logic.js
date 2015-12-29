var cmds = [
	{
		"cmd":"RegTimer",
		"cmdDes":"设置定时器，到时候运行设定的命令",
		"parameters":[	
			{ "parameter":"name", "des":"为这个定时器设定一个名字", "requred":true },
			{ "parameter":"time", "des":"设定定时的时间，输入的数值单位是秒", "requred":false, "defualt":0 },
			{ "parameter":"loop", "des":"设定是否循环调用，按照设定的时间间隔循环运行", "requred":false, "defualt":false },
			{ "parameter":"cmds", "des":"设定到时运行的命令", "requred":true },
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "RegTimer", <br>' +
						'	"name":"定时爆炸", <br>' +
						'	"loop":false, <br>' +
						'	"cmds":[<br>' +
						'		{ "cmd": "CreatePlacement", "uid" : "爆炸", "bundleId":"C2F0A5FB249A4F4C9D7A46E4876E2F4C", "pos":[0,0,0]} <br>' +
						'	]<br>' +						
						'}'	
			}
		]
	},
	{
		"cmd":"UnregTimer",
		"cmdDes":"注销定时器",
		"parameters":[	
			{ "parameter":"name", "des":"通过名字指定注销哪个定时器", "requred":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "UnregTimer", <br>' +
						'	"name":"定时爆炸" <br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"CheckBoolean",
		"cmdDes":"通过buffer传入布尔值，如果是true执行对应的命令，如果是false执行对应的命令",
		"parameters":[	
			{ "parameter":"fromBuffer", "des":"设定传入Boolean值的buffer", "requred":true },
			{ "parameter":"trueCmds", "des":"设定当输入值是true时的运行的命令,也可以不设定", "requred":false },
			{ "parameter":"falseCmds", "des":"设定当输入值是false时的运行的命令,也可以不设定", "requred":false }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CheckBoolean", <br>' +
						'	"fromBuffer":"是否正确",<br>' +
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

docCreator.addDocItemFromData("逻辑", cmds)

