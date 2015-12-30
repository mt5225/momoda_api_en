var cmds = [
	{
		"cmd":"ClearCmdPanel",
		"cmdDes":"清空命令面板" ,
	},
	{
		"cmd":"AddToCmdPanel",
		"cmdDes":"将输入的命令写到命令面板里，可用于让视点记录一些使用命令操作的动作",
		"parameters":[
			{ "parameter":"cmds", "des":"输入要操作的命令，可以使用数组包装多个命令", "required":true},
			{ "parameter":"execute", "des":"输入命令的同时是否执行命令" , "required":false, "default":false}
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
		"cmdDes":"将输入的命令从命令面板里移除。<br>	" +
				"注：要移除的命令的文本要和输入时保持一致，否则不能找到要删除的那些命令",
		"parameters":[
			{ "parameter":"cmds", "des":"输入要删除的命令", "required":true}
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

docCreator.addDocItemFromData("命令面板", cmds)

