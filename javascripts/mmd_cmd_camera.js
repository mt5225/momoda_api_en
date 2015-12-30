var cmds = [
	
	{
		"cmd":"SwitchCameraTo3D",
		"cmdDes":"控制视角是3D视角还是顶视2D视角。<br>	" +
				"注：就是标准模模搭界面上的切换3D按钮的功能",
		"parameters":[
			{ "parameter":"state", "des":"如果输入true,切换到3D视角，如果输入false，切换到顶视2D视角" , "required":false, "default":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SwitchCameraTo3D", <br>' +
						'	"state":false <br>' +
						'}'	
			}
		]
	},	
	{
		"cmd":"CameraFitToSelection",
		"cmdDes":"控制视角适配到当前所选物体。如果没有选择物体，视角会适配到当前场景层级<br>	",
		"parameters":[			
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CameraFitToSelection" <br>' +
						'}'	
			}
		]
	},		
	{
		"cmd":"SetOrbitCameraParam",
		"cmdDes":"设置摄影机的一些参数" ,
		"parameters":[
			{ "parameter":"heightLimit", "des":"摄影机高度方向的上的限制。要求输入一个数组,第一位代表最低的高度位置，第二位代表最高的高度位置", "required":false, "default":[0.0,1500.0]},
			{ "parameter":"zoomLimit", "des":"摄影机通过滚轮向前向后移动的限制。要求输入一个数组,第一位代表距离看点最近的距离，第二位代表距离看点最远的距离" , "required":false, "default":[0.1,1000.0]},
			{ "parameter":"farClipDistance", "des":"摄影机剪裁面远端的距离，在自由操作时，这个值是随高度变化而变化的，目前这个设置只用于动画" , "required":false, "default":"随摄影机高度动态调整"},
			{ "parameter":"nearClipDistance", "des":"摄影机剪裁面近端的距离，在自由操作时，这个值是随高度变化而变化的，目前这个设置只用于动画" , "required":false, "default":"随摄影机高度动态调整"},
			{ "parameter":"smooth", "des":"摄影机飞行是否是平滑过渡，如果填false，飞行将线性直线飞行" , "required":false, "default":true},
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetOrbitCameraParam", <br>' +
						'	"heightLimit":[0, 5500], <br>' +
						'	"zoomLimit":[0, 15500], <br>' +
						'	"farClipDistance":5000, <br>' +
						'	"nearClipDistance":0.2, <br>' +
						'	"smooth":true  <br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"CameraFlyToBest",
		"cmdDes":"输入一个物体，计算最佳视角，并将摄影机飞向这个最佳视角。<br>	" +
				"注：这个命令目前只支持传入一个物体",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"time", "des":"飞行的时间，输入秒数", "required":false, "default":2},
			{ "parameter":"offset", "des":"以最佳视角为基础，再加上这个输入的偏移量，做为最后摄影机的飞行位置。<br>	" +
					"注：目前offset输入的三维坐标是在基于世界坐标系" , "required":false, "default":[0,0,0]}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CameraFlyToBest", <br>' +
						'	"uid":"object01",<br>' +
						'	"time":3, <br>' +
						'	"offset":[0.0, 1.0, 0.0] //摄影机最终位置再向上移动1米<br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"CameraFitToBest",
		"cmdDes":"输入一个物体，计算最佳视角，并将摄影机直接设置到这个最佳视角,没有飞行过程。<br>	" +
				"注：这个命令目前只支持传入一个物体",
		"parameterInherit":"ObjectCommand",
		"parameters":[			
			{ "parameter":"offset", "des":"以最佳视角为基础，再加上这个输入的偏移量，做为最后摄影机的飞行位置。<br>	" +
					"注：目前offset输入的三维坐标是在基于世界坐标系" , "required":false, "default":[0,0,0]}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CameraFitToBest", <br>' +
						'	"uid":"object01",<br>' +
						'	"offset":[0.0, 1.0, 0.0] //摄影机最终位置再向上移动1米<br>' +
						'}'	
			}
		]
	},	
	
]

docCreator.addDocItemFromData("摄影机", cmds)

