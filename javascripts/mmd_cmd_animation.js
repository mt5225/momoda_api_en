var cmds = [
	{
		"cmd":"AnimCtrl",
		"cmdDes":"播放模型内置的动画",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"child", "des":"可以控制模型里面子物体的动画，这里需要传入子物体的名字", "requred":false, "default":""},
			{ "parameter":"anim", "des":"要播放的动画名字", "requred":true, "default":""},
			{ "parameter":"speed", "des":"播放速度", "requred":false, "default":1.0},
			{ "parameter":"loop", "des":"是否循环播放", "requred":false, "default":false}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "AnimCtrl", <br>' +
						'	"uid":"object01", <br>' +
						'	"child":"head", <br>' +
						'	"anim":"wave", <br>' +
						'	"speed":1, <br>' +
						'	"loop":false <br>' +
						'}'	
			}
		]
	}

]

docCreator.addDocItemFromData("动画", cmds)