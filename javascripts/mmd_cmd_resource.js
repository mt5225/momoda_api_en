var cmds = [
	{
		"cmd":"DownloadBundle",
		"cmdDes":"Download model",
		"parameters":[			
			{ "parameter":"bundleId", "des":"Model Id", "required":true, "default":""},
			{ "parameter":"cmds", "des":"Callback command after download", "required":false, "default":""},
		],
		"examples":[
			{
				"name":"Change object model after download",
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
		"cmdDes":"Change object model<br>	" +
				"Note: model must be downloaded or used in scene.",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"bundleId", "des":"Model ID", "required":true, "default":""}
		],
		"examples":[
			{
				"name":"Change object model",
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
		"cmdDes":"Download texture",
		"parameters":[			
			{ "parameter":"url", "des":"URL to download texture, can be relative path based on mmd server URL", "required":true},
			{ "parameter":"cmds", "des":"Callback command after download", "required":false, "default":""},
		],
		"examples":[
			{
				"name":"Change object texture after download",
				"context":	'' +
						'{<br>' +
						'	"cmd": "DownloadTexture", <br>' +
						'	"url":"images/selection.png", //URL or relative path based on mmd server URL<br>' +
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
		"cmdDes":"Change texture of object<br>	" +
				"Note: texture must be downloaded or used in scene.",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"url", "des":"Texture URL, or relative path based on mmd server URL", "required":true, "default":""}
		],
		"examples":[
			{
				"name":"Change texture of object",
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

docCreator.addDocItemFromData("Resource", cmds)

