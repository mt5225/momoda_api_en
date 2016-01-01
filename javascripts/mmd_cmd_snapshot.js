var cmds = [
	{
		"cmd":"Snapshot",
		"cmdDes":"Get and save snapshot",
		"parameters":[	
			{ "parameter":"name", "des":"Name of snapshot", "required":true },
			{ "parameter":"isSaveToServer", "des":"If save to server", "required":false, "default":false},
			{ "parameter":"isShowIn3D", "des":"If shown in menu", "required":false, "default":false},
			{ "parameter":"jsonToBuffer", "des":"Save snapshot json to buffer", "required":false}
		],
		"examples":[	
			{
				"name":"set a snapshot",
				"context":	'' +
						'{<br>' +
						'	"cmd": "Snapshot", <br>' +
						'	"name":"my workspace", <br>' +
						'	"isSaveToServer": true, <br>' +
						'	"isShowIn3D": false <br>' +
						'}'	
			},
			{
				"name":"get snapshot data and save to buffer",
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
		"cmdDes":"Recover snapshot by name",
		"parameters":[	
			{ "parameter":"name", "des":"Snapshot name", "required":true }
		],
		"examples":[	
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SnapshotRecoverByName", <br>' +
						'	"name":"my workspace" <br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"SnapshotRecoverByJson",
		"cmdDes":"Recover snapshot by json",
		"parameters":[	
			{ "parameter":"json", "des":"json data", "required":true }
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
		"cmdDes":"Play snapshot animation by name",
		"parameters":[	
			{ "parameter":"name", "des":"Name of animation", "required":true }
		],
		"examples":[	
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "PlaySnapshotAnimByName", <br>' +
						'	"name":"Check01" <br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"StopSnapshotAnim",
		"cmdDes":"Stop snapshot animation",
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

docCreator.addDocItemFromData("Snapshot", cmds)

