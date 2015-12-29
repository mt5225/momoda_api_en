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
	}


]

docCreator.addDocItemFromData("热力图", cmds)

