var cmds = [
	{
		"cmd":"CopyBuffer",
		"cmdDes":"Copy content of source buffer to target buffer, content in target buffer will be overwrote.<br>	" +
				"Note: this command only apply to object buffers",
		"parameters":[
			{ "parameter":"fromBuffer", "des":"source buffer path", "required":true, "default":""},
			{ "parameter":"toBuffer", "des":"target buffer path", "required":true, "default":""}
		],
		"examples":[
			{
				"name":"buffer with full path",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CopyBuffer", <br>' +
						'	"fromBuffer":{"ObjectManager":"RunBuffer/buffer1"}, <br>' +
						'	"toBuffer":{"ObjectManager":"RunBuffer/buffer2"} <br>' +
						'}'	
			},
			{
				"name":"buffer with relative path",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CopyBuffer", <br>' +
						'	"fromBuffer":"buffer1", //same as  {"ObjectManager":"RunBuffer/buffer1"}<br>' +
						'	"toBuffer":"buffer2"} //same as {"ObjectManager":"RunBuffer/buffer2"}<br>' +
						'}'	
			}			
			
		]
	},
	{
		"cmd":"MergeBuffer",
		"cmdDes":"Copy content of source buffer to target buffer, content in target buffer will be reserved.<br>	" +
				"Note: this command only apply to object buffers",
		"parameters":[
			{ "parameter":"fromBuffer", "des":"source buffer path", "required":true, "default":""},
			{ "parameter":"toBuffer", "des":"target buffer path", "required":true, "default":""}
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
		"cmdDes":"Delete objects in target buffer which are identical to objects in source buffer<br>	" +
				"Note: this command only apply to object buffers",
		"parameters":[
			{ "parameter":"fromBuffer", "des":"source buffer path", "required":true, "default":""},
			{ "parameter":"toBuffer", "des":"target buffer path", "required":true, "default":""}
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
		"cmdDes":"Assign object to buffer",
		"parameterInherit":"ObjectCommand",
		"parameters":[			
			{ "parameter":"toBuffer", "des":"buffer path", "required":true, "default":""}
		],
		"examples":[
			{
				"name":"refer object by uid",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetObjectsToBuffer", <br>' +
						'	"uid":"obj01", <br>' +
						'	"toBuffer":{"ObjectManager":"RunBuffer/objsBuffer"} <br>' +
						'}'	
			},
			{
				"name":"object uid list",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetObjectsToBuffer", <br>' +
						'	"uids":["obj01", "obj02"], <br>' +
						'	"toBuffer":{"ObjectManager":"RunBuffer/objsBuffer"} <br>' +
						'}'	
			},	
			{
				"name":"refer object by id",
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
		"cmdDes":"Assign value to buffer", 
		"parameters":[
			{ "parameter":"toBuffer", "des":"buffer path", "required":true, "default":""},
			{ "parameter":"value", "des":"value to be set", "required":true, "default":""}
		],
		"examples":[
			{
				"name":"empty buffer",
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

docCreator.addDocItemFromData("Buffer", cmds)

