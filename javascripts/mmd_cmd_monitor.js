var cmds = [
	{
		"cmd":"SetMonitorRespond",
		"cmdDes":"Set response to MonitorDatas/RealTimeData",
		"parameterInherit":"ObjectCommand",
		"parameters":[	
			{ "parameter":"config", "des":"Response is based on properties of MonitorDatas/RealTimeData.<br>	" +
					"Note: <br>	" +
					"	1. Support configure response on multiable properties<br>	" +
					"	2. Supports multiable response to single property.<br>	" +
					"	3. Value of property can be string or number. if property value are all numbers, system will sort those numbers and trigger command with equal or less than numbers.<br>	" +
					"	4. If property value are all strings, use '_default_' to run command if data is NOT in value set.<br>	" +
					"	5. Use GetLastMonitorRespondObj to get current object in callback, or use buffer: {'ObjectManager':'RunBuffer/lastMonitorRespondObj'} to get current object" , "required":true }
		],
		"examples":[	
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetMonitorRespond", <br>' +
						'	"fromBuffer":{"ObjectManager": "RunBuffer/Grain"},<br>' +
						'	"config":{<br>' +
						'		"GrainCatelog":{ //get value from "MonitorDatas/RealTimeData/GrainCatelog"<br>' +
						'			"Corn":[ //run command if value is "Corn"<br>' +
						'				{"cmd": "GetLastMonitorRespondObj", "toBuffer":"monitorRespondObj"}, //run command<br>' +
						'				{"cmd": "ChangePlacementTexture", "fromBuffer":"monitorRespondObj", "url": "images/corn.jpg"}<br>' +
						'			],<br>' +
						'			"Wheat":[ //run command if value is "Wheat"<br>' +
						'				{"cmd": "GetLastMonitorRespondObj", "toBuffer":"monitorRespondObj"}, //run command<br>' +
						'				{"cmd": "ChangePlacementTexture", "fromBuffer":"monitorRespondObj", "url": "images/wheat.jpg"}<br> ' +
						'			]<br>' +
						'		},<br>' +
						'		"GrainStorage":{ //get value from "MonitorDatas/RealTimeData/GrainStorage"<br>' +
						'			"10":[{"cmd":"SetScale", "fromBuffer":"lastMonitorRespondObj", "scale":[1,0.1,1] } ], // run command if value equal or less than 10, note that current object is fetch by system buffer lastMonitorRespondObj<br>' +
						'			"30":[{"cmd":"SetScale", "fromBuffer":"lastMonitorRespondObj", "scale":[1,0.3,1]  } ], //run command if value equal or less than 30 <br>' +
						'			"50":[{"cmd":"SetScale", "fromBuffer":"lastMonitorRespondObj", "scale":[1,0.5,1]  } ], //run command if value equal or less than 50<br>' +
						'			"80":[{"cmd":"SetScale", "fromBuffer":"lastMonitorRespondObj", "scale":[1,0.8,1]  } ], //run command if value equal or less than 50<br>' +
						'			"100":[{"cmd":"SetScale", "fromBuffer":"lastMonitorRespondObj", "scale":[1,1,1]  } ] //run command if value equal or less than 100<br>' +
						'		},<br>' +
						'		"GrainStatus":{ //get value from "MonitorDatas/RealTimeData/GrainStatus"<br>' +
						'			"InsectHazzard":[{"cmd":"ColorFlash",   "fromBuffer":"lastMonitorRespondObj",   "color":[1,0,0] , "start":0.6, "end":0.2, "time":1.0 } ], //run command if value equals to InsectHazzard<br>' +
						'			"Decay":[{"cmd":"ColorFlash",   "fromBuffer":"lastMonitorRespondObj",   "color":[0,0,1] , "start":0.6, "end":0.2, "time":1.0 } ], //run command if value equals to Decay<br>' +
						'			"_default_":[{"cmd":"ColorFlash",   "fromBuffer":"lastMonitorRespondObj",   "enable":false } ] //run command if no match<br>' +
						'		}<br>' +						
						'	}<br>' +						
						'}'	
			}
		]
	},
	{
		"cmd":"GetLastMonitorRespondObj",
		"cmdDes":"Get current object",
		"parameters":[	
			{ "parameter":"toBuffer", "des":"buffer name", "required":true }
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

docCreator.addDocItemFromData("Monitor", cmds)

