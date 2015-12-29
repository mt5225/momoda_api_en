var cmds = [
	{
		"cmd":"Deploy",
		"cmdDes":"指定一些模型，并可在使用的环境下摆放这些模型",
		"parameters":[			
			{ "parameter":"enable", "des":"开启，或者关闭这个功能", "requred":false, "default":true},
			{ "parameter":"items", "des":"设置要放置的模型ID", "requred":false},
		],
		"examples":[
			{
				"name":"启动部署功能",
				"context":	'' +
						'{<br>' +
						'	"cmd": "Deploy", <br>' +
						'	"items":[ <br>' +
						'		"614AC0466F4E48B792CC83A5B99AF4FC", <br>' +
						'		"F933B1A524B94050BC7A82B15D2057F5", <br>' +
						'	]<br>' +
						'}'	
			},
			{
				"name":"关闭部署功能",
				"context":	'' +
						'{<br>' +
						'	"cmd": "Deploy", <br>' +
						'	"enable":false <br>' +
						'}'	
			}			
		]
	},
	{
		"cmd":"SetDragPlacementParamInDeploy",
		"cmdDes":"设置拖拽时的效果和功能",
		"parameters":[
			{ "parameter":"absorbPlacement", "des":"设置拖拽的物体是否可以吸引到另一个物体上", "requred":false, "default":""},
			{ "parameter":"absorbNormal", "des":"设置拖拽的物体是否与鼠标拾取的对齐物体面法线对齐", "requred":false, "default":""},
			{ "parameter":"absorbPivot", "des":"设置拖拽的物体是否与鼠标拾取的对齐物体轴心点对齐", "requred":false, "default":""}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd":"SetDragPlacementParamInDeploy", <br>' +
						'	"absorbPlacement":true,<br>' +
						'	"absorbNormal":false, <br>' +	
						'	"absorbPivot":true <br>' +	
						'}'	
			}
		]
	},	
	
	
	{
		"cmd":"GetDeployObjects",
		"cmdDes":"获取通过Deploy命令打开的面版，摆放的所有物体",
		"parameters":[
			{ "parameter":"toBuffer", "des":"设置物体存放的buffer", "requred":true, "default":""}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd":"GetDeployObjects", <br>' +
						'	"toBuffer":{"ObjectManager":"RunBuffer/deployObjects"}<br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"SetDeployObjects",
		"cmdDes":"将buffer里的物体，设置给Deploy面板，变成通过Deploy命令打开的面版摆放的物体",
		"parameters":[
			{ "parameter":"formBuffer", "des":"输入的物体buffer", "requred":true, "default":""}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd":"SetDeployObjects", <br>' +
						'	"fromBuffer":{"ObjectManager":"RunBuffer/deployObjects"}<br>' +
						'}'	
			}
		]
	},

	{
		"cmd":"GetDeployToJson",
		"cmdDes":"获取通过Deploy命令打开的面版，摆放的所有物体，并将其变成json数据，存于buffer中",
		"parameters":[
			{ "parameter":"toBuffer", "des":"设置物体json数据存放的buffer", "requred":true, "default":""}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd":"GetDeployToJson", <br>' +
						'	"toBuffer":{"ObjectManager":"RunBuffer/deployJson"}<br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"SetDeployFromJson",
		"cmdDes":"按照标准输入json，可将json指定的物体输入到Deploy模块中，并创建这些物体",
		"parameters":[
			{ "parameter":"json", "des":"输入的物体json数据", "requred":true, "default":""}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd":"SetDeployFromJson", <br>' +
						'	"json":{<br>	' +
						'		"2345223":{<br>	' +
						'			"bundle":"3268DD250B694147B0BDB37FA390BF96",<br>	' +
						'			"floor":"楼层01",<br>	' +
						'			"pos":"0.22 0.33 1.34", //为了加速加载这里使用了这样的格式数据，代替使用数组<br>	' +
						'			"rot":"0 0 0",//为了加速加载这里使用了这样的格式数据，代替使用数组<br>	' +
						'			"scl":"1 1 1",//为了加速加载这里使用了这样的格式数据，代替使用数组<br>	' +
						'			"properties":{<br>	' +
						'				"UserID":"探头01",<br>	' +
						'				"PropertyDict":{<br>	' +
						'					"负责人":"wxz"<br>	' +
						'				}<br>	' +
						'			}<br>	' +
						'		}<br>	' +
						'	}<br>	' +
						'}'	
			}
		]
	},
	{
		"cmd":"ClearDeployObjects",
		"cmdDes":"清除已经摆放的物体",
		"parameters":[
			{ "parameter":"destroyObjects", "des":"设置在清除的同时，是否彻底删除场景里的对应的物体。如果输入false，在清除后，场景里还存在这些物体，只不过Deploy模块里不管理这些物体了", "requred":false, "default":true}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd":"SetDragPlacementParamInDeploy", <br>' +
						'	"absorbPlacement":true,<br>' +
						'	"absorbNormal":false, <br>' +	
						'	"absorbPivot":true <br>' +	
						'}'	
			}
		]
	}	
]

docCreator.addDocItemFromData("部署物体", cmds)

