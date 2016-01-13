var cmds = [
	{
		"cmd":"AnimCtrl",
		"cmdDes":"Play build-in animation",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"child", "des":"child object to play animation", "required":false, "default":""},
			{ "parameter":"anim", "des":"Name of animation", "required":true, "default":""},
			{ "parameter":"speed", "des":"Play speed", "required":false, "default":1.0},
			{ "parameter":"loop", "des":"Play in loop", "required":false, "default":false}
			{ "parameter":"enable", "des":"play animation", "required":false, "default":true}
		],
		"examples":[
			{
				"name":"Play animation of one object",
				"context":	'' +
						'{<br>' +
						'	"cmd": "AnimCtrl", <br>' +
						'	"uid":"object01", <br>' +
						'	"anim":"wave", <br>' +
						'	"speed":1, <br>' +
						'	"loop":false <br>' +
						'}'	
			},		
			{
				"name":"Play animation of a child object",
				"context":	'' +
						'{<br>' +
						'	"cmd": "AnimCtrl", <br>' +
						'	"uid":"object01", <br>' +
						'	"child":"head", <br>' +
						'	"anim":"wave", <br>' +
						'	"speed":1, <br>' +
						'	"loop":false <br>' +
						'}'	
			},
			{
				"name":"Stop animation",
				"context":	'' +
						'{<br>' +
						'	"cmd": "AnimCtrl", <br>' +
						'	"uid":"object01", <br>' +
						'	"anim":"wave", <br>' +
						'	"enable":false <br>' +
						'}'
			}			
		]
	}

]

docCreator.addDocItemFromData("Animation", cmds)