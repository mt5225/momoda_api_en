var cmds = [
	{
		"cmd":"Snapshot",
		"cmdDes":"获得或存储一个视点",
		"parameters":[	
			{ "parameter":"name", "des":"视点的名字", "required":true },
			{ "parameter":"isSaveToServer", "des":"是否存储到服务器上", "required":false, "default":false},
			{ "parameter":"isShowIn3D", "des":"是否在视点托盘里显示", "required":false, "default":false},
			{ "parameter":"jsonToBuffer", "des":"设置视点json要存储的buffer", "required":false}
		],
		"examples":[	
			{
				"name":"简单设置一个视点",
				"context":	'' +
						'{<br>' +
						'	"cmd": "Snapshot", <br>' +
						'	"name":"我的工作界面", <br>' +
						'	"isSaveToServer": true, <br>' +
						'	"isShowIn3D": false <br>' +
						'}'	
			},
			{
				"name":"获取视点数据到buffer",
				"context":	'' +
						'{<br>' +
						'	"cmd": "Snapshot", <br>' +
						'	"name":"name", <br>' +
						'	"jsonToBuffer": "SnapshotBuffer"<br>' +
						'}'	
			}	
		]
	},
	{
		"cmd":"SnapshotRecoverByName",
		"cmdDes":"通过名字调用恢复一个视点",
		"parameters":[	
			{ "parameter":"name", "des":"要恢复的视点名字", "required":true }
		],
		"examples":[	
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SnapshotRecoverByName", <br>' +
						'	"name":"我的工作界面" <br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"SnapshotRecoverByJson",
		"cmdDes":"通过json数据恢复一个视点",
		"parameters":[	
			{ "parameter":"json", "des":"要恢复的视点json数据", "required":true }
		],
		"examples":[	
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SnapshotRecoverByJson", <br>' +
						'	"json":[{"OrbitCamera":"-20.00,30.00,-30.00,0.00,0.00,0.00"}] <br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"PlaySnapshotAnimByName",
		"cmdDes":"通过名字播放一个视点动画",
		"parameters":[	
			{ "parameter":"name", "des":"要播放的视点动画名字", "required":true }
		],
		"examples":[	
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "PlaySnapshotAnimByName", <br>' +
						'	"name":"巡检路径01" <br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"StopSnapshotAnim",
		"cmdDes":"停止播放当前播放的视点动画",
		"parameters":[				
		],
		"examples":[	
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "StopSnapshotAnim" <br>' +
						'}'	
			}
		]
	}		
	

	
	
]

docCreator.addDocItemFromData("视点", cmds)

