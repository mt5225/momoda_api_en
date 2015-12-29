var cmds = [
	{
		"cmd":"DownloadBundle",
		"cmdDes":"下载模型",
		"parameters":[			
			{ "parameter":"bundleId", "des":"要下载的模型id", "requred":true, "default":""},
			{ "parameter":"cmds", "des":"下载完模型后，会回调这里面输入的命令，注意这里因为下载是异步的，所有回调也是异步执行的", "requred":false, "default":""},
		],
		"examples":[
			{
				"name":"下载模型后，通过回调给一个物体换模型",
				"context":	'' +
						'{<br>' +
						'	"cmd": "DownloadBundle", <br>' +
						'	"bundleId":"F933B1A524B94050BC7A82B15D2057F5", <br>' +
						'	"cmds":[{ <br>' +
						'		"cmd":"ChangePlacementBundle", <br>' +
						'		"uid":"object01",<br>' +
						'		"bundleId":"F933B1A524B94050BC7A82B15D2057F5" <br>' +
						'	}]<br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"ChangePlacementBundle",
		"cmdDes":"给物体换模型。<br>	" +
				"注：要求模型已经下载，或是在场景中已经使用的",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"bundleId", "des":"要替换的模型id", "requred":true, "default":""}
		],
		"examples":[
			{
				"name":"给一个物体换模型",
				"context":	'' +
						'{<br>' +
						'	"cmd":"ChangePlacementBundle", <br>' +
						'	"uid":"object01",<br>' +
						'	"bundleId":"F933B1A524B94050BC7A82B15D2057F5" <br>' +	
						'}'	
			}
		]
	},	
	
	
	{
		"cmd":"DownloadTexture",
		"cmdDes":"下载模型",
		"parameters":[			
			{ "parameter":"url", "des":"要下载的贴图的url，可以是带http的全url，也可以是服务器的相对路径", "requred":true},
			{ "parameter":"cmds", "des":"下载完贴图后，会回调这里面输入的命令，注意这里因为下载是异步的，所有回调也是异步执行的", "requred":false, "default":""},
		],
		"examples":[
			{
				"name":"下载贴图后，通过回调给一个物体换贴图",
				"context":	'' +
						'{<br>' +
						'	"cmd": "DownloadTexture", <br>' +
						'	"url":"images/selection.png", //可以是带http的全url，也可以是服务器的相对路径<br>' +
						'	"cmds":[{ <br>' +
						'		"cmd":"ChangePlacementTexture", <br>' +
						'		"uid":"object01",<br>' +
						'		"url":"images/selection.png" <br>' +
						'	}]<br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"ChangePlacementTexture",
		"cmdDes":"给物体换贴图。<br>	" +
				"注：要求贴图已经下载，或是在场景中已经使用的。",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"url", "des":"贴图的url，可以是带http的全url，也可以是服务器的相对路径。", "requred":true, "default":""}
		],
		"examples":[
			{
				"name":"给一个物体换贴图",
				"context":	'' +
						'{<br>' +
						'	"cmd":"ChangePlacementTexture", <br>' +
						'	"uid":"object01",<br>' +
						'	"url":"images/selection.png" <br>' +
						'}'	
			}
		]
	}

]

docCreator.addDocItemFromData("资源", cmds)

