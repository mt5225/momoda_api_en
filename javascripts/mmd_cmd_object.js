var cmds = [
	{
		"cmd":"CreatePlacement",
		"cmdDes":"创建物体",
		"parameters":[		
			{ "parameter":"uid", "des":"给创建物体的UserID属性赋值", "requred":true},
			{ "parameter":"bundleId", "des":"创建物体使用的模型id", "requred":true},
			{ "parameter":"parentId", "des":"输入物体id指定是在哪个物体下创建这个物体。<br>	" +
					"注：目前只支持输入楼层物体，还不支持输入其他物体，如果不输入，就会在本层或者园区创建", "requred":false, "default":"在本层或园区创建"},	
			{ "parameter":"parentUid", "des":"输入物体uid指定是在哪个物体下创建这个物体。<br>	" +
					"注：目前只支持输入楼层物体，还不支持输入其他物体，如果不输入，就会在本层或者园区创建", "requred":false, "default":"在本层或园区创建"},						
			{ "parameter":"transformProxyId", "des":"输入一个物体的id，后面输入的pos、rot、scl是相对这个物体的", "requred":false},
			{ "parameter":"transformProxyUid", "des":"输入一个物体的uid，后面输入的pos、rot、scl是相对这个物体的", "requred":false},
			{ "parameter":"transformProxyFromBuffer", "des":"通过buffer输入一个物体，后面输入的pos、rot、scl是相对这个物体的", "requred":false},			
			{ "parameter":"pos", "des":"创建物体时的位置<br>	" +
					"注：如果输入了transformProxy，输入的pos会相对于transformProxy,否则是相对于parent的", "requred":false, "default":[0,0,0]},
			{ "parameter":"rot", "des":"创建物体时的旋转,输入一个3值数组，分别代表xyz三轴的旋转的角度，角度的单位是度。这个参数和qust任选其一使用这里输入的是四元数<br>	" +
					"注：如果输入了transformProxy，输入的rot会相对于transformProxy,否则是相对于parent的", "requred":false, "default":[0,0,0]},
			{ "parameter":"quat", "des":"创建物体时的旋转,这里输入的是四元数,这个参数和rot任选其一使用<br>	" +
					"注：如果输入了transformProxy，输入的quat会相对于transformProxy,否则是相对于parent的", "requred":false, "default":[0,0,0,1]},					
			{ "parameter":"scl", "des":"创建物体时的放缩<br>	" +
					"注：如果输入了transformProxy，输入的scl会相对于transformProxy,否则是相对于parent的", "requred":false, "default":[1,1,1]},
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CreatePlacement", <br>' +
						'	"uid" : "object01",<br>' +
						'	"bundleId":"F933B1A524B94050BC7A82B15D2057F5", <br>' +
						'	"transformProxyUid":"柜子01",<br>' +
						'	"pos":[0,2,0],<br>' +
						'	"rot":[0,0,0,1],<br>' +
						'	"scl":[0.1,0.2,0,2]<br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"CreatePlacementFromChildren",
		"cmdDes":"从一个模型里分离出一些子物体，分离的子物体变成独立的物体。<br>	" +
				"注：分离的子物体的uid是'原物体uid_子物体的模型名字'",
		"parameterInherit":"ObjectCommand",
		"parameters":[	
			{ "parameter":"childNameList", "des":"需要分离的子物体名字列表", "requred":true},
			{ "parameter":"toBuffer", "des":"分离的子物体存到指定的buffer", "requred":false}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CreatePlacementFromChildren", <br>' +
						'	"uid": "silo",<br>' +
						'	"childNameList": ["Window_01", "Window_02"], <br>' +
						'	"toBuffer": "窗户" <br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"GetObjectsByCondition",
		"cmdDes":"输入条件，收集符合条件的物体。",
		"parameters":[				
			{ "parameter":"condition", "des":"输入条件,详细解释见例子的注释", "requred":true},
			{ "parameter":"fromBuffer", "des":"设定一些物体，在设定的物体里查找", "requred":false},
			{ "parameter":"underLevelUid", "des":"通过uid设定一个物体，在这个物体层级下查找，目前只支持输入楼层或园区物体", "requred":false},
			{ "parameter":"underLevelBuffer", "des":"通过buffer设定一个物体，在这个物体层级下查找，目前只支持输入楼层或园区物体", "requred":false},
			{ "parameter":"toBuffer", "des":"设定存储的buffer", "requred":false}

		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "GetObjectsByCondition", <br>' +
						'	<br>' +
				        '	//使用"_default_"表明永远符合条件 <br>' +	
				       	'	//"condition": "_default_", <br><br>' +						
						'	//通过"OBJECT"指定具体针对哪个物体注册，可输入id或者uid <br>' +	
						'	//"condition": {"OBJECT":"4"}, <br><br>' +
						'	//指定给classId是3的所有物体注册 <br>' +	
						'	//"condition": {"CLASSID":3},	<br><br>' +
						'	//通过物体属性注册 <br>' +	
				        '	//"condition": {"ATTRIBUTE":{"PropertyDict/性别":"男"}}, <br><br>' +
				        '	//多个条件同时满足，也就是多个条件的"与"操作 <br>' +	
				        '	//"condition": {"AND":[{"PropertyDict/性别":"男"}, {"MoniterData/RealTimeData/状态":"正常"}]}, <br><br>' +
				        '	//多个条件有一个满足就可以，也就是多个条件的"或"操作 <br>' +	
				        '	//"condition": {"OR":[{"PropertyDict/性别":"男"}, {"MoniterData/RealTimeData/状态":"正常"}]}, <br><br>' +
				        '	//条件的"非"操作,注意"与或非"操作可以嵌套使用 <br>' +	
				        '	//"condition": {"NOT":{"AND":[{"PropertyDict/性别":"男"}, {"MoniterData/RealTimeData/状态":"正常"}]}}, <br><br>' +
				        '	//////////////////////////<br>' +
				        '	//以下是condition的简写形式<br>' +
				        '	//如输入一个数字，表示给一类classID符合条件物体注册 ，和 {"CLASSID":3}等效<br>' +
				        '	//"condition": 3, <br><br>' +
				        '	//输入字符串代表id或者uid，和{"OBJECT":"4"}等效<br>' +
						'	//"condition": "4", <br><br>' +
				        '	//输入一个键值对，代表物体属性,和{"ATTRIBUTE":{"PropertyDict/性别":"男"}}等效<br>' +
				        '	"condition": {"PropertyDict/性别":"男"}, <br><br>' +
						
						'	"toBuffer": "男人" <br>' +
						'}'	
			}
		]
	},		
	
	{
		"cmd":"Show",
		"cmdDes":"设置物体是否显示",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"enable", "des":"输入true或者false", "requred":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "Show", <br>' +
						'	"uid": "silo",<br>' +
						'	"enable": false <br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"SetPickEnable",
		"cmdDes":"设置物体是否能被拾取",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"enable", "des":"输入true或者false", "requred":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetPickEnable", <br>' +
						'	"uid": "silo",<br>' +
						'	"enable": false <br>' +
						'}'	
			}
		]
	},	
	{
		"cmd":"SetPosition",
		"cmdDes":"设置物体的位置",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"pos", "des":"设置的位置，如[0,0,0]。<br>	" +
					"注：输入的位置是相对于物体所处的楼层或者园区的位置", "requred":true}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetPosition", <br>' +
						'	"uid": "silo",<br>' +
						'	"pos": [0,0,0] <br>' +
						'}'	
			}
		]
	},	
	{
		"cmd":"SetScale",
		"cmdDes":"设置物体的放缩",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"scale", "des":"设置的放缩值，如[2,2,2]", "requred":true }
		],
		"examples":[
			{
				"name":"",
				"context":'' +
						'{<br>' +
						'	"cmd": "SetScale", <br>' +
						'	"uid": "silo",<br>' +
						'	"scale": [1,2,1] <br>' +
						'}'	
			}
		]
	},		
	{
		"cmd":"Sitdown",
		"cmdDes":"将物体放到当前的楼层或者园区地上",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			
		],
		"examples":[
			{
				"name":"",
				"context":'' +
						'{<br>' +
						'	"cmd": "Sitdown", <br>' +
						'	"uid": "椅子01"<br>' +
						'}'	
			}
		]
	},			
	{
		"cmd":"MoveTo",
		"cmdDes":"给物体设置一个位置,物体将按输入的速度移动到那个位置。",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"fromPos", "des":"设置移动的起始位置，位置是相对于所在楼层或者园区的", "requred":false, "default":"该物体当前位置" },
			{ "parameter":"pos", "des":"设置移动的结束位置，位置是相对于所在楼层或者园区的", "requred":true },
			{ "parameter":"targetUid", "des":"通过uid设置一个物体作为结束位置点", "requred":false },
			{ "parameter":"time", "des":"设置移动的时间,单位是秒,这个参数和speed任选其一设置", "requred":false, "default":2.0 },
			{ "parameter":"speed", "des":"设置移动的速度,单位是米每秒,这个参数和time任选其一设置", "requred":false ,  "default":1 },
			{ "parameter":"delay", "des":"延时触发的时间", "requred":false , "default":0.0},
			{ "parameter":"easeType", "des":"控制运动开启和结束时的缓动或急速模式。(<a onclick=showText('" +
					"easeInQuad\\n"+
					"easeOutQuad\\n"+
					"easeInOutQuad\\n"+
					"easeInCubic\\n"+
					"easeOutCubic\\n"+
					"easeInOutCubic\\n"+
					"easeInQuart\\n"+
					"easeOutQuart\\n"+
					"easeInOutQuart\\n"+
					"easeInQuint\\n"+
					"easeOutQuint\\n"+
					"easeInOutQuint\\n"+
					"easeInSine\\n"+
					"easeOutSine\\n"+
					"easeInOutSine\\n"+
					"easeInExpo\\n"+
					"easeOutExpo\\n"+
					"easeInOutExpo\\n"+
					"easeInCirc\\n"+
					"easeOutCirc\\n"+
					"easeInOutCirc\\n"+
					"linear\\n"+
					"spring\\n"+
					/* GFX47 MOD START */
					//bounce,
					"easeInBounce\\n"+
					"easeOutBounce\\n"+
					"easeInOutBounce\\n"+
					/* GFX47 MOD END */
					"easeInBack\\n"+
					"easeOutBack\\n"+
					"easeInOutBack\\n"+
					/* GFX47 MOD START */
					//elastic,
					"easeInElastic\\n"+
					"easeOutElastic\\n"+
					"easeInOutElastic\\n"+
					/* GFX47 MOD END */
					"punch" +
					"');>点击查看可使用参数列表</a>, <a onclick=showImage('images/easeType.png');>点击查看参考图</a>)" , "requred":false, "default":"linear" },
			{ "parameter":"loopType", "des":"设置循环的模式。<br>	" +
					"可设置参数:<br>	" +
					"	none:不循环<br>	" +
					"	loop:循环<br>	" +
					"	pingPong:从起始位置到结束位置，再从结束位置到起始位置循环，周而复始", "requred":false,  "default":"none" },			
//			{ "parameter":"local", "des":"设置输入的坐标是相对自身的还是", "requred":true },
//			{ "parameter":"waitComplete", "des":"设置的放缩值，如[2,2,2]", "requred":true },
//			{ "parameter":"target", "des":"设置的放缩值，如[2,2,2]", "requred":true },
			{ "parameter":"orientToPath", "des":"物体的方向始终沿路径方向", "requred":false,  "default":false  },
			{ "parameter":"autoCreate", "des":"使用这个MoveTo命令，允许要移动的物体不存在。这个属性可输入一组参数，用来自动创建物体。这是个复合参数，里面还需要其他一些参数设置", "requred":false },
			{ "parameter":"autoCreate/enable", "des":"autoCreate的子参数,标示是否开启自动创建功能", "requred":false,  "default":false  },
			{ "parameter":"autoCreate/bundleId", "des":"autoCreate的子参数，标示创建物体时使用的模型ID", "requred":false  },
			{ "parameter":"autoCreate/pos", "des":"autoCreate的子参数，标示创建时的位置，是相对于现在的楼层或场景的坐标", "requred":false  },
			{ "parameter":"autoCreate/targetUid", "des":"autoCreate的子参数，通过输入一个uid，索引到的物体位置作为创建物体的位置", "requred":false  },
			{ "parameter":"autoCreate/props", "des":"autoCreate的子参数，传入一组属性，作为创建物体的自定义属性", "requred":false  }
			
		],
		"examples":[
			{
				"name":"/////////////////////////////",
				"context":'' +
						'{<br>' +
						'	"cmd": "MoveTo", <br>' +
						'	"uid": "object01",<br>' +
						'	"pos": [1,0,1]<br>' +
						'}'	
			},
			{
				"name":"/////////////////////////////",
				"context":'' +
						'{<br>' +
						'	"cmd": "MoveTo", <br>' +
						'	"uid": "object01",<br>' +
						'	"pos": [1,0,1], <br>' +
						'	"time": 2.0,<br>' +
						'	"delay": 2.0,<br>' +
						'	"easeType": "easeInOutQuad"<br>' +
						'}'	
			},
			{
				"name":"/////////////////////////////",
				"context":'' +
						'{<br>' +
						'	"cmd": "MoveTo", <br>' +
						'	"uid": "object01",<br>' +
						'	"pos": [1,0,1], <br>' +
						'	"speed": 2.0,<br>' +
						'	"delay": 2.0,<br>' +
						'	"orientToPath": true,<br>' +
						'	"loopType": "loop",<br>' +
						'	"easeType": "linear",<br>' +
						'	"autoCreate": {<br>' +
						'		"enable": true,<br>' +
						'		"bundleId":"0AF78802F2F64DB2AEF805CB78D57E07",<br>' +
						'		"targetUid":"posObj01",<br>' +
						'		"props":{<br>' +
						'			"车牌":"A001"<br>' +
						'		}<br>' +
						'	}<br>' +
						'}'	
			}			
			
			
			
			
		]
	},
	{
		"cmd":"MovePath",
		"cmdDes":"设定一组位置,物体沿这周位置依次移动",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"pointPath", "des":"设置一组位置，依次作为路径点,位置是相对于所在楼层或者园区的", "requred":true },
			{ "parameter":"objectPath", "des":"通过uid设置一组物体，依次作为路径点", "requred":false },
			{ "parameter":"time", "des":"设置移动的时间,单位是秒,这个参数和speed任选其一设置", "requred":false, "default":2.0 },
			{ "parameter":"speed", "des":"设置移动的速度,单位是米每秒,这个参数和time任选其一设置", "requred":false ,  "default":1 },
			{ "parameter":"delay", "des":"延时触发的时间", "requred":false , "default":0.0},
			{ "parameter":"easeType", "des":"控制运动开启和结束时的缓动或急速模式。(<a onclick=showText('" +
					"easeInQuad\\n"+
					"easeOutQuad\\n"+
					"easeInOutQuad\\n"+
					"easeInCubic\\n"+
					"easeOutCubic\\n"+
					"easeInOutCubic\\n"+
					"easeInQuart\\n"+
					"easeOutQuart\\n"+
					"easeInOutQuart\\n"+
					"easeInQuint\\n"+
					"easeOutQuint\\n"+
					"easeInOutQuint\\n"+
					"easeInSine\\n"+
					"easeOutSine\\n"+
					"easeInOutSine\\n"+
					"easeInExpo\\n"+
					"easeOutExpo\\n"+
					"easeInOutExpo\\n"+
					"easeInCirc\\n"+
					"easeOutCirc\\n"+
					"easeInOutCirc\\n"+
					"linear\\n"+
					"spring\\n"+
					/* GFX47 MOD START */
					//bounce,
					"easeInBounce\\n"+
					"easeOutBounce\\n"+
					"easeInOutBounce\\n"+
					/* GFX47 MOD END */
					"easeInBack\\n"+
					"easeOutBack\\n"+
					"easeInOutBack\\n"+
					/* GFX47 MOD START */
					//elastic,
					"easeInElastic\\n"+
					"easeOutElastic\\n"+
					"easeInOutElastic\\n"+
					/* GFX47 MOD END */
					"punch" +
					"');>点击查看可使用参数列表</a>, <a onclick=showImage('images/easeType.png');>点击查看参考图</a>)" , "requred":false, "default":"linear" },
			{ "parameter":"loopType", "des":"设置循环的模式。<br>	" +
					"可设置参数:<br>	" +
					"	none:不循环<br>	" +
					"	loop:循环<br>	" +
					"	pingPong:从起始位置到结束位置，再从结束位置到起始位置循环，周而复始", "requred":false,  "default":"none" },			
//			{ "parameter":"local", "des":"设置输入的坐标是相对自身的还是", "requred":true },
//			{ "parameter":"waitComplete", "des":"设置的放缩值，如[2,2,2]", "requred":true },
//			{ "parameter":"target", "des":"设置的放缩值，如[2,2,2]", "requred":true },
			{ "parameter":"orientToPath", "des":"物体的方向始终沿路径方向", "requred":false,  "default":false  },
			{ "parameter":"autoCreate", "des":"使用这个MovePath命令，允许要移动的物体还不存在。这个属性可输入一组参数，用来自动创建物体。这是个复合参数，里面还需要其他一些参数设置", "requred":false },
			{ "parameter":"autoCreate/enable", "des":"autoCreate的子参数，标示是否开启自动创建功能", "requred":false,  "default":false  },
			{ "parameter":"autoCreate/bundleId", "des":"autoCreate的子参数，标示创建物体时使用的模型ID", "requred":false  },
			{ "parameter":"autoCreate/pos", "des":"autoCreate的子参数，标示创建时的位置，是相对于现在的楼层或场景的坐标", "requred":false  },
			{ "parameter":"autoCreate/targetUid", "des":"autoCreate的子参数，通过输入一个uid，索引到的物体位置作为创建物体的位置", "requred":false  },
			{ "parameter":"autoCreate/props", "des":"autoCreate的子参数，传入一组属性，作为创建物体的自定义属性", "requred":false  }
			
		],
		"examples":[
			{
				"name":"/////////////////////////////",
				"context":'' +
						'{<br>' +
						'	"cmd": "MovePath", <br>' +
						'	"uid": "object01",<br>' +
						'	"pointPath": [[1,0,1], [1,0,0], [12,0,0]]<br>' +
						'}'	
			},
			{
				"name":"/////////////////////////////",
				"context":'' +
						'{<br>' +
						'	"cmd": "MovePath", <br>' +
						'	"uid": "object01",<br>' +
						'	"objectPath": ["obj01", "obj02", "obj03"], <br>' +
						'	"time": 2.0,<br>' +
						'	"delay": 2.0,<br>' +
						'	"easeType": "easeInOutQuad"<br>' +
						'}'	
			},
			{
				"name":"/////////////////////////////",
				"context":'' +
						'{<br>' +
						'	"cmd": "MovePath", <br>' +
						'	"uid": "object01",<br>' +
						'	"objectPath": ["obj01", "obj02", "obj03"], <br>' +
						'	"speed": 2.0,<br>' +
						'	"delay": 2.0,<br>' +
						'	"orientToPath": true,<br>' +
						'	"loopType": "loop",<br>' +
						'	"easeType": "linear",<br>' +
						'	"autoCreate": {<br>' +
						'		"enable": true,<br>' +
						'		"bundleId":"0AF78802F2F64DB2AEF805CB78D57E07",<br>' +
						'		"targetUid":"posObj01",<br>' +
						'		"props":{<br>' +
						'			"车牌":"A001"<br>' +
						'		}<br>' +
						'	}<br>' +
						'}'	
			}	
			
		]
	},	
	{
		"cmd":"Attach",
		"cmdDes":"将物体挂接到另一个物体上",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"targetId", "des":"通过id设置目标物体", "requred":false   },
			{ "parameter":"targetUid", "des":"通过uid设置目标物体", "requred":false },
			{ "parameter":"targetFromBuffer", "des":"通过buffer设置目标物体", "requred":false },
			{ "parameter":"pos", "des":"相对目标物体的位置偏移", "requred":false },
			{ "parameter":"rot", "des":"相对目标物体的旋转偏移。输入一个3值数组，分别代表xyz三轴的旋转的角度，角度的单位是度。", "requred":false }	
		],
		"examples":[
			{
				"name":"",
				"context":'' +
						'{<br>' +
						'	"cmd": "Attach", <br>' +
						'	"uid": "眼睛",<br>' +
						'	"targetUid": "头部",<br>' +
						'	"pos": [0,0.1,0],<br>' +
						'	"rot": [0,90,0]<br>' +
						'}'	
			}
		]
	},		
	
	{
		"cmd":"Detach",
		"cmdDes":"将物体从挂接的物体断连",
		"parameterInherit":"ObjectCommand",
		"parameters":[			
		],
		"examples":[
			{
				"name":"",
				"context":'' +
						'{<br>' +
						'	"cmd": "Detach", <br>' +
						'	"uid": "眼睛"<br>' +
						'}'	
			}
		]
	},		
	
	{
		"cmd":"AutoRotate",
		"cmdDes":"让物体自己旋转",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"speed", "des":"自动旋转的速度，单位是度每秒", "requred":false, "default":180 },
			{ "parameter":"enable", "des":"如果输入false，可用于关闭自动旋转", "requred":false, "default":true   }
		],
		"examples":[
			{
				"name":"开启自动旋转",
				"context":'' +
						'{<br>' +
						'	"cmd": "AutoRotate", <br>' +
						'	"fromBuffer": "风扇"<br>' +
						'}'	
			},
			{
				"name":"关闭自动旋转",
				"context":'' +
						'{<br>' +
						'	"cmd": "AutoRotate",<br>' +
						'	"fromBuffer": "风扇",<br>' +
						'	"enable":false<br>' +
						'}'	
			}			
		]
	},		
	
	{
		"cmd":"Rotate",
		"cmdDes":"让物体旋转一定角度",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"rot", "des":"输入一个3值数组，分别代表xyz三轴的旋转的角度，角度的单位是度", "requred":false },
			{ "parameter":"space", "des":"控制输入的角度是相对于自身还是世界的。 <br>	" +
					"可输入的值：<br>	" +
					"	world：代表相对于世界<br>	" +
					"	self：代表相对于自身", "requred":false, "default":"self" }
		],
		"examples":[
			{
				"name":"",
				"context":'' +
						'{<br>' +
						'	"cmd": "Rotate", <br>' +
						'	"fromBuffer": "风扇",<br>' +
						'	"rot":[0,90,0],<br>' +
						'	"space":"self"<br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"Destroy",
		"cmdDes":"销毁输入的物体",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			
		],
		"examples":[
			{
				"name":"",
				"context":'' +
						'{<br>' +
						'	"cmd": "Destroy", <br>' +
						'	"fromBuffer": "垃圾"<br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"CalculateObjectsCenter",
		"cmdDes":"计算输入物体集合的中心点",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"offset", "des":"在计算结果上再增加一个偏移", "requred":false, "default":[0,0,0] },
			{ "parameter":"toBuffer", "des":"设置计算结果存储的buffer", "requred":true }
		],
		"examples":[
			{
				"name":"",
				"context":'' +
						'{<br>' +
						'	"cmd": "CalculateObjectsCenter", <br>' +
						'	"fromBuffer": "所选物体", <br>' +
						'	"toBuffer": "中心位置" <br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"CreateTimerObject",
		"cmdDes":"创建时间物体,可用于给界面提供显示时间用的数据。这个物体在场景中是看不到的。<br>	" +
				"时间物体可访问的属性:<br>	" +
				"	以下是当前计时器运行时间的显示日期相关属性<br>	" +
				"		YearMonthDay：当前计时器运行的时间按yyyy.MM.dd格式返回字符串<br>	" +
				"		HourMinuteSecond：当前计时器运行的时间按HH:mm:ss格式返回字符串<br>	" +
				"		HourMinuteSecondMillisecond：当前计时器运行的时间按HH:mm:ss:ffff格式返回字符串<br>	" +
				"		YearMonthDayHourMinuteSecond：当前计时器运行的时间按yyyy.MM.dd HH:mm:ss格式返回字符串<br>	" +				
				"		Year：相当于YearMonthDayHourMinuteSecond里的Year<br>	" +
				"		Month：相当于YearMonthDayHourMinuteSecond里的Month<br>	" +
				"		Day：相当于YearMonthDayHourMinuteSecond里的Day<br>	" +
				"		Hour：相当于YearMonthDayHourMinuteSecond里的Hour<br>	" +
				"		Minute：相当于YearMonthDayHourMinuteSecond里的Minute<br>	" +
				"		Second：相当于YearMonthDayHourMinuteSecond里的Second<br>	" +
				"		Millisecond：相当于HourMinuteSecondMillisecond里的Millisecond<br>	" +
				"		DayOfYear：返回当前计时器运行时间是一年中的第几天<br>	" +
				"		DayOfWeek：返回当前计时器运行时间是星期几，返回0-6,0是星期天<br>	" +				
				"	<br>	" +
				"	以下是当前计时器运行总时间长度相关属性<br>	" +
				"		TimerYear：计时器已经跑的年数<br>	" +
				"		TimerAllYear：计时器已经跑的总年数,和TimerYear相同<br>	" +
				"		TimerMonth：计时器已经跑的时间去除整年时间后，剩下的月数<br>	" +
				"		TimerAllMonth：计时器已经跑的总月数<br>	" +
				"		TimerDay：计时器已经跑的时间去除整月时间后，剩下的天数<br>	" +
				"		TimerAllDay：计时器已经跑的总天数<br>	" +
				"		TimerHour：计时器已经跑的时间去除整天时间后，剩下的小时数<br>	" +
				"		TimerAllHour：计时器已经跑的总小时数<br>	" +
				"		TimerMinute：计时器已经跑的时间去除整小时时间后，剩下的分钟数<br>	" +
				"		TimerAllMinute：计时器已经跑的总分钟数<br>	" +
				"		TimerSecond：计时器已经跑的时间去除整分钟时间后，剩下的秒数<br>	" +
				"		TimerAllSecond：计时器已经跑的总秒数<br>	" +
				"		TimerMillisecond：计时器已经跑的时间去除整秒时间后，剩下的毫秒数<br>	" +
				"		TimerAllMillisecond：计时器已经跑的总毫秒数<br>	" +
				"",
		"parameters":[
			{ "parameter":"toBuffer", "des":"指定创建的时间物体存储的buffer", "requred":true }
		],
		"examples":[
			{
				"name":"",
				"context":'' +
						'{<br>' +
						'	"cmd": "CreateTimerObject", <br>' +
						'	"toBuffer": "timer01"<br>' +
						'}'	
			}
		]
	}	
]

docCreator.addDocItemFromData("物体控制", cmds)

