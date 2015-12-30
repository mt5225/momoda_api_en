var cmds = [
	{
		"cmd":"SetMonitorRespond",
		"cmdDes":"设置物体的针对监控数据（MonitorDatas/RealTimeData下属性）的响应",
		"parameterInherit":"ObjectCommand",
		"parameters":[	
			{ "parameter":"config", "des":"针对MonitorDatas/RealTimeData下属性分别配置监控的响应 。<br>	" +
					"注意：<br>	" +
					"	1. 可以同时配置多个属性的响应。<br>	" +
					"	2. 每个属性可以配置多个响应的数据，并针对那个数据通过数组,设置多条响应命令。<br>	" +
					"	3. 每个属性可以配置两类数据：文字和数字，如果全部是数字的话，系统会自动排序，并从最小值开始，找到小于等于的数值，执行响应命令。<br>	" +
					"	4. 当配置的所有数据是文字，可设置一个'_default_',表示当取到的数据没有出现在配置里时执行后面设定响应命令。<br>	" +
					"	5. 可回调中可使用GetLastMonitorRespondObj获取当前处理对象，也可直接使用内置buffer: {'ObjectManager':'RunBuffer/lastMonitorRespondObj'}直接获取操作对象。" , "required":true }
		],
		"examples":[	
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetMonitorRespond", <br>' +
						'	"fromBuffer":{"ObjectManager": "RunBuffer/粮食"},<br>' +
						'	"config":{<br>' +
						'		"粮食种类":{ //标示是"从MonitorDatas/RealTimeData/粮食种类"下取的监控值<br>' +
						'			"玉米":[ //当取到的数值是"玉米"时执行设定的命令<br>' +
						'				{"cmd": "GetLastMonitorRespondObj", "toBuffer":"monitorRespondObj"}, //使用命令获取当前处理物体<br>' +
						'				{"cmd": "ChangePlacementTexture", "fromBuffer":"monitorRespondObj", "url": "images/corn.jpg"}<br>' +
						'			],<br>' +
						'			"小麦":[ //当取到的数值是"小麦"时执行设定的命令<br>' +
						'				{"cmd": "GetLastMonitorRespondObj", "toBuffer":"monitorRespondObj"}, //使用命令获取当前处理物体<br>' +
						'				{"cmd": "ChangePlacementTexture", "fromBuffer":"monitorRespondObj", "url": "images/wheat.jpg"}<br> ' +
						'			]<br>' +
						'		},<br>' +
						'		"粮食储量":{ //标示是"从MonitorDatas/RealTimeData/粮食储量"下取的监控值<br>' +
						'			"10":[{"cmd":"SetScale", "fromBuffer":"lastMonitorRespondObj", "scale":[1,0.1,1] } ], //所有设置值都是数字，这里系统自动判断当取到的数值小于等于10时执行设定的命令,注意这里直接使用了内置buffer获取操作对象<br>' +
						'			"30":[{"cmd":"SetScale", "fromBuffer":"lastMonitorRespondObj", "scale":[1,0.3,1]  } ], //所有设置值都是数字，这里系统自动判断当取到的数值小于等于30时执行设定的命令<br>' +
						'			"50":[{"cmd":"SetScale", "fromBuffer":"lastMonitorRespondObj", "scale":[1,0.5,1]  } ], //所有设置值都是数字，这里系统自动判断当取到的数值小于等于50时执行设定的命令<br>' +
						'			"80":[{"cmd":"SetScale", "fromBuffer":"lastMonitorRespondObj", "scale":[1,0.8,1]  } ], //所有设置值都是数字，这里系统自动判断当取到的数值小于等于80时执行设定的命令<br>' +
						'			"100":[{"cmd":"SetScale", "fromBuffer":"lastMonitorRespondObj", "scale":[1,1,1]  } ] //所有设置值都是数字，同时是最后一个配置，这里系统自动判断当取到的数值小于等于，也或者大于100时执行设定的命令<br>' +
						'		},<br>' +
						'		"粮食状态":{ //标示是"从MonitorDatas/RealTimeData/粮食状态"下取的监控值<br>' +
						'			"虫害":[{"cmd":"ColorFlash",   "fromBuffer":"lastMonitorRespondObj",   "color":[1,0,0] , "start":0.6, "end":0.2, "time":1.0 } ], //当取到的数值是"虫害"时执行设定的命令<br>' +
						'			"陈旧":[{"cmd":"ColorFlash",   "fromBuffer":"lastMonitorRespondObj",   "color":[0,0,1] , "start":0.6, "end":0.2, "time":1.0 } ], //当取到的数值是"陈旧"时执行设定的命令<br>' +
						'			"_default_":[{"cmd":"ColorFlash",   "fromBuffer":"lastMonitorRespondObj",   "enable":false } ] //使用"_default_"标示当取到的数值没有配置匹配时执行设定的命令<br>' +
						'		}<br>' +						
						'	}<br>' +						
						'}'	
			}
		]
	},
	{
		"cmd":"GetLastMonitorRespondObj",
		"cmdDes":"获取当前正在处理的监控响应物体",
		"parameters":[	
			{ "parameter":"toBuffer", "des":"设置响应物体存放的buffer", "required":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "GetLastMonitorRespondObj", <br>' +
						'	"toBuffer":"monitorRespondObj" <br>' +
						'}'	
			}
		]
	}	
]

docCreator.addDocItemFromData("监控", cmds)

