var cmds = [
	{
		"cmd":"CopyBuffer",
		"cmdDes":"将一个buffer的内容拷贝到另一个目标buffer中，目标buffer里原先的内容将被删除。<br>	" +
				"注：这个命令只用于buffer中装的是物体对象的情况",
		"parameters":[
			{ "parameter":"fromBuffer", "des":"要拷贝的原buffer路径", "requred":true, "default":""},
			{ "parameter":"toBuffer", "des":"要拷贝到的目标buffer路径", "requred":true, "default":""}
		],
		"examples":[
			{
				"name":"完全添加buffer路径",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CopyBuffer", <br>' +
						'	"fromBuffer":{"ObjectManager":"RunBuffer/buffer1"}, <br>' +
						'	"toBuffer":{"ObjectManager":"RunBuffer/buffer2"} <br>' +
						'}'	
			},
			{
				"name":"也可以直接简写buffer路径",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CopyBuffer", <br>' +
						'	"fromBuffer":"buffer1", //等同于{"ObjectManager":"RunBuffer/buffer1"}<br>' +
						'	"toBuffer":"buffer2"} //等同于{"ObjectManager":"RunBuffer/buffer2"}<br>' +
						'}'	
			}			
			
		]
	},
	{
		"cmd":"MergeBuffer",
		"cmdDes":"将一个buffer的内容拷贝到另一个目标buffer中，目标buffer里原先的内容将被保留。<br>	" +
				"注：这个命令只用于buffer中装的是物体对象的情况",
		"parameters":[
			{ "parameter":"fromBuffer", "des":"要拷贝的原buffer路径", "requred":true, "default":""},
			{ "parameter":"toBuffer", "des":"要拷贝到的目标buffer路径", "requred":true, "default":""}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "MergeBuffer", <br>' +
						'	"fromBuffer":{"ObjectManager":"RunBuffer/buffer1"}, <br>' +
						'	"toBuffer":{"ObjectManager":"RunBuffer/buffer2"} <br>' +
						'}'	
			}
		]
	},	
	{
		"cmd":"SubtractBuffer",
		"cmdDes":"如果目标buffer中存在原buffer相同的对象，将被删除。<br>	" +
				"注：这个命令只用于buffer中装的是物体对象的情况",
		"parameters":[
			{ "parameter":"fromBuffer", "des":"原buffer路径", "requred":true, "default":""},
			{ "parameter":"toBuffer", "des":"目标buffer路径", "requred":true, "default":""}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SubtractBuffer", <br>' +
						'	"fromBuffer":{"ObjectManager":"RunBuffer/buffer1"}, <br>' +
						'	"toBuffer":{"ObjectManager":"RunBuffer/buffer2"} <br>' +
						'}'	
			}
		]
	},	
	{
		"cmd":"SetObjectsToBuffer",
		"cmdDes":"将输入的对象到指定的buffer中",
		"parameterInherit":"ObjectCommand",
		"parameters":[			
			{ "parameter":"toBuffer", "des":"指定存放的buffer路径", "requred":true, "default":""}
		],
		"examples":[
			{
				"name":"可以使用uid，指定一个物体存放到buffer中",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetObjectsToBuffer", <br>' +
						'	"uid":"obj01", <br>' +
						'	"toBuffer":{"ObjectManager":"RunBuffer/objsBuffer"} <br>' +
						'}'	
			},
			{
				"name":"可以同时传入多个uid",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetObjectsToBuffer", <br>' +
						'	"uids":["obj01", "obj02"], <br>' +
						'	"toBuffer":{"ObjectManager":"RunBuffer/objsBuffer"} <br>' +
						'}'	
			},	
			{
				"name":"也可以使用id",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetObjectsToBuffer", <br>' +
						'	"id":"dg23dvw41hrdve", <br>' +
						'	"toBuffer":{"ObjectManager":"RunBuffer/objsBuffer"} <br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"SetBufferValue",
		"cmdDes":"给buffer设置值", 
		"parameters":[
			{ "parameter":"toBuffer", "des":"要设置的buffer", "requred":true, "default":""},
			{ "parameter":"value", "des":"要设置的值", "requred":true, "default":""}
		],
		"examples":[
			{
				"name":"传入一个空字符，清空一个buffer",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetBufferValue", <br>' +
						'	"toBuffer":{"ObjectManager":"RunBuffer/buffer1"}, <br>' +
						'	"value":""  <br>' +	
						'}'	
			}
		]
	}	
]

docCreator.addDocItemFromData("缓冲", cmds)

