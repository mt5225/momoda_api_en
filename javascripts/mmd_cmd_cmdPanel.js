var cmds = [
	{
		"cmd":"ClearCmdPanel",
		"cmdDes":"Clear command panel" ,
	},
	{
		"cmd":"AddToCmdPanel",
		"cmdDes":"Add command to command panel",
		"parameters":[
			{ "parameter":"cmds", "des":"command or command array", "required":true},
			{ "parameter":"execute", "des":"if run command after add" , "required":false, "default":false}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "AddToCmdPanel", <br>' +
						'	"cmds":[ <br>' +
						'		{"cmd":"clearSelection" } <br>' +						
						'	],<br>' +
						'	"execute":false <br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"RemoveFromCmdPanel",
		"cmdDes":"Remove command from command panel<br>	" +
				"Note: command name must be identical",
		"parameters":[
			{ "parameter":"cmds", "des":"Command to be removed", "required":true}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "RemoveFromCmdPanel", <br>' +
						'	"cmds":[ <br>' +
						'		{"cmd":"clearSelection" } <br>' +						
						'	]<br>' +
						'}'	
			}
		]
	}	
]

docCreator.addDocItemFromData("Command Panel", cmds)

