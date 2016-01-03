var cmds = [
	{
		"cmd":"CreatePlacement",
		"cmdDes":"Create Object",
		"parameters":[		
			{ "parameter":"uid", "des":"UserID", "required":true},
			{ "parameter":"bundleId", "des":"Model ID", "required":true},
			{ "parameter":"parentId", "des":"Parent Object ID<br>	" +
					"Note: Only supports floor or park as parent", "required":false, "default":"current floor or park"},	
			{ "parameter":"parentUid", "des":"Parent Object UID<br>	" +
					"Note: Only supports floor or park as parent", "required":false, "default":"current floor or park"},						
			{ "parameter":"transformProxyId", "des":"Reference Object ID, if specified, pos, rot and scl are relative to reference object", "required":false},
			{ "parameter":"transformProxyUid", "des":"Reference Object UID, if specified, pos, rot and scl are relative to reference object", "required":false},
			{ "parameter":"transformProxyFromBuffer", "des":"Reference Object from Buffer, if specified, pos, rot and scl are relative to reference object", "required":false},			
			{ "parameter":"pos", "des":"Object Position<br>	" +
					"Note: if transformProxy is specified, pos is relative to transformProxy object, otherwise is relative to parent object.", "required":false, "default":[0,0,0]},
			{ "parameter":"rot", "des":"Object rotation in 3-element tuple as Euler angles, use alternatively with quat, unit: degree. <br>	" +
					"<img src='images/EulerAngles.jpg'><br>	" +
					"Euler angles is essentially rotation against axis x,y and z while y is the vertical axis<br>	" +
					"Note: if transformProxy is specified, rot will based on transformProxy object coordinate, otherwise based on parent object.", "required":false, "default":[0,0,0]},
			{ "parameter":"quat", "des":"Object rotation specified by a 4-element tuple, use alternatively with ror.<br>	" +
					"Any rotation can be determinate by a single axis with rotation angle. Give a axis (x, y, z) and a angle θ, rotation can be calculated as：<br>	" +
					"	quat = [ x*sin(θ/2), y*sin(θ/2),z*sin(θ/2), cos(θ/2)] <br>	" +
					"Note: if transformProxy is specified, rot will based on transformProxy object coordinate, otherwise based on parent object.", "required":false, "default":[0,0,0,1]},			
			{ "parameter":"scl", "des":"Scale Factor<br>	" +
					"Note: if transformProxy is specified, scale factor is relative to transformProxy object, otherwise is relative to parent object.", "required":false, "default":[1,1,1]},
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CreatePlacement", <br>' +
						'	"uid" : "object01",<br>' +
						'	"bundleId":"F933B1A524B94050BC7A82B15D2057F5", <br>' +
						'	"transformProxyUid":"carbin01",<br>' +
						'	"pos":[0,2,0],<br>' +
						'	"rot":[0,0,0,1],<br>' +
						'	"scl":[0.1,0.2,0,2]<br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"CreatePlacementFromChildren",
		"cmdDes":"Create object from model<br>	" +
				"Note: name conversion for object created by this method is {object uid}_{model name}",
		"parameterInherit":"ObjectCommand",
		"parameters":[	
			{ "parameter":"childNameList", "des":"Array of object names to be created from model", "required":true},
			{ "parameter":"toBuffer", "des":"Buffer name which objects is saved to", "required":false}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CreatePlacementFromChildren", <br>' +
						'	"uid": "silo",<br>' +
						'	"childNameList": ["Window_01", "Window_02"], <br>' +
						'	"toBuffer": "window" <br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"GetObjectsByCondition",
		"cmdDes":"Get objects by search criteria",
		"parameters":[				
			{ "parameter":"condition", "des":"Search criteria", "required":true},
			{ "parameter":"fromBuffer", "des":"Specify buffer as search scope", "required":false},
			{ "parameter":"underLevelUid", "des":"Specify parent object by uid, which will includes all children objects. Parent object must be floor or park. ", "required":false},
			{ "parameter":"underLevelBuffer", "des":"Specify parent object by buffer, which will includes all children objects. Parent object must be floor or park.", "required":false},
			{ "parameter":"toBuffer", "des":"Save search results to buffer", "required":false}

		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "GetObjectsByCondition", <br>' +
						'	<br>' +
				        '	//"_default_" condition always equals to true <br>' +	
				       	'	//"condition": "_default_", <br><br>' +						
						'	//search object by id or uid <br>' +	
						'	//"condition": {"OBJECT":"4"}, <br><br>' +
						'	//search object by classId<br>' +	
						'	//"condition": {"CLASSID":3},	<br><br>' +
						'	//search object by object property <br>' +	
				        '	//"condition": {"ATTRIBUTE":{"PropertyDict/Sex":"Male"}}, <br><br>' +
				        '	//AND operator <br>' +	
				        '	//"condition": {"AND":[{"PropertyDict/sex":"Male"}, {"MoniterData/RealTimeData/Status":"Normal"}]}, <br><br>' +
				        '	//OR operator<br>' +	
				        '	//"condition": {"OR":[{"PropertyDict/sex":"Male"}, {"MoniterData/RealTimeData/Status":"Normal"}]}, <br><br>' +
				        '	//NOT operator, can be used in conjunction with AND or OR<br>' +	
				        '	//"condition": {"NOT":{"AND":[{"PropertyDict/Sex":"Male"}, {"MoniterData/RealTimeData/Status":"Normal"}]}}, <br><br>' +
				        '	//////////////////////////<br>' +
				        '	//write search condition in brief mode<br>' +
				        '	//number, which is equivalent to  {"CLASSID":3}<br>' +
				        '	//"condition": 3, <br><br>' +
				        '	//string, which is equivalent to {"OBJECT":"4"}<br>' +
						'	//"condition": "4", <br><br>' +
				        '	//key/value pair, which is equivalent to object property, e.g. {"ATTRIBUTE":{"PropertyDict/Sex":"Male"}}<br>' +
				        '	"condition": {"PropertyDict/Sex":"Male"}, <br><br>' +
						
						'	"toBuffer": "Man" <br>' +
						'}'	
			}
		]
	},		
	
	{
		"cmd":"Show",
		"cmdDes":"Set object visibility",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"enable", "des":"True or False", "required":true }
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
		"cmdDes":"If object can be 'pick'",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"enable", "des":"True or False", "required":true }
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
		"cmdDes":"Set object position",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"pos", "des":"Coordinate, for instance，[0,0,0]<br>	" +
					"Note: Coordinate is relative to current floor or park", "required":true}
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
		"cmdDes":"Set object scale",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"scale", "des":"scale value, for instance, [2,2,2]", "required":true }
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
		"cmdDes":"Place object on the ground",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			
		],
		"examples":[
			{
				"name":"",
				"context":'' +
						'{<br>' +
						'	"cmd": "Sitdown", <br>' +
						'	"uid": "chair_01"<br>' +
						'}'	
			}
		]
	},			
	{
		"cmd":"MoveTo",
		"cmdDes":"Move object to given position with given speed.",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"fromPos", "des":"Start position, relative to current floor or park", "required":false, "default":"current position" },
			{ "parameter":"pos", "des":"End position, relative to current floor or park", "required":true },
			{ "parameter":"targetUid", "des":"End position by object ID", "required":false },
			{ "parameter":"time", "des":"Duration in seconds, use with 'speed' alternatively", "required":false, "default":2.0 },
			{ "parameter":"speed", "des":"Moving speed in meter per second, use with 'time' alternatively", "required":false ,  "default":1 },
			{ "parameter":"delay", "des":"Delay", "required":false , "default":0.0},
			{ "parameter":"easeType", "des":"Start and/or ending mode (<a onclick=showText('" +
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
					"');>click to show all modes</a>, <a onclick=showImage('images/easeType.png');>click to view reference diagram</a>)" , "required":false, "default":"linear" },
			{ "parameter":"loopType", "des":"Repeat mode<br>	" +
					"can be one of:<br>	" +
					"	none: do not repeat<br>	" +
					"	loop: repeat<br>	" +
					"	pingPong: move from start to end , then move from end to start, repeat the process", "required":false,  "default":"none" },	
			{ "parameter":"orientToPath", "des":"Align with moving direction", "required":false,  "default":false  },
			{ "parameter":"autoCreate", "des":"Create new object and move it", "required":false },
			{ "parameter":"autoCreate/enable", "des":"Sub parameter of autoCreate:if enable autoCreate", "required":false,  "default":false  },
			{ "parameter":"autoCreate/bundleId", "des":"Sub parameter of autoCreate，specify model ID while create new moving object", "required":false  },
			{ "parameter":"autoCreate/pos", "des":"Sub parameter of autoCreate: object position, relative to current floor or park.", "required":false  },
			{ "parameter":"autoCreate/targetUid", "des":"Sub parameter of autoCreate，set coordinate of new object by existing object uid", "required":false  },
			{ "parameter":"autoCreate/props", "des":"Sub parameter of autoCreate，set properties of new object.", "required":false  }
			
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
						'			"Plate":"A001"<br>' +
						'		}<br>' +
						'	}<br>' +
						'}'	
			}			
			
			
			
			
		]
	},
	{
		"cmd":"MovePath",
		"cmdDes":"Set moving path",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"pointPath", "des":"A set of positions as moving path, relative to floor or park.", "required":true },
			{ "parameter":"objectPath", "des":"A set of object uid as moving path", "required":false },
			{ "parameter":"time", "des":"Duration in seconds, use with 'speed' alternatively", "required":false, "default":2.0 },
			{ "parameter":"speed", "des":"Moving speed in meter per second, use with 'time' alternatively", "required":false ,  "default":1 },
			{ "parameter":"delay", "des":"Delay", "required":false , "default":0.0},
			{ "parameter":"easeType", "des":"Start and/or ending mode(<a onclick=showText('" +
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
					"');>click to show all modes</a>, <a onclick=showImage('images/easeType.png');>click to view reference diagram</a>)" , "required":false, "default":"linear" },
						{ "parameter":"loopType", "des":"Repeat mode<br>	" +
					"can be one of:<br>	" +
					"	none: do not repeat<br>	" +
					"	loop: repeat<br>	" +
					"	pingPong: move from start to end , then move from end to start, repeat the process", "required":false,  "default":"none" },	
			{ "parameter":"orientToPath", "des":"Align with moving direction", "required":false,  "default":false  },
			{ "parameter":"autoCreate", "des":"Create new object and move it", "required":false },
			{ "parameter":"autoCreate/enable", "des":"Sub parameter of autoCreate:if enable autoCreate", "required":false,  "default":false  },
			{ "parameter":"autoCreate/bundleId", "des":"Sub parameter of autoCreate，specify model ID while create new moving object", "required":false  },
			{ "parameter":"autoCreate/pos", "des":"Sub parameter of autoCreate: object position, relative to current floor or park.", "required":false  },
			{ "parameter":"autoCreate/targetUid", "des":"Sub parameter of autoCreate，set coordinate of new object by existing object uid", "required":false  },
			{ "parameter":"autoCreate/props", "des":"Sub parameter of autoCreate，set properties of new object.", "required":false  }
			
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
						'			"Plate":"A001"<br>' +
						'		}<br>' +
						'	}<br>' +
						'}'	
			}	
			
		]
	},	
	{
		"cmd":"Attach",
		"cmdDes":"Attach to object",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"targetId", "des":"Set target object by ID", "required":false   },
			{ "parameter":"targetUid", "des":"Set target object by UID", "required":false },
			{ "parameter":"targetFromBuffer", "des":"Set target object from buffer", "required":false },
			{ "parameter":"pos", "des":"Offset to target object", "required":false },
			{ "parameter":"rot", "des":"Rotation relative to target object", "required":false }	
		],
		"examples":[
			{
				"name":"",
				"context":'' +
						'{<br>' +
						'	"cmd": "Attach", <br>' +
						'	"uid": "eyes",<br>' +
						'	"targetUid": "head",<br>' +
						'	"pos": [0,0.1,0],<br>' +
						'	"rot": [0,90,0]<br>' +
						'}'	
			}
		]
	},		
	
	{
		"cmd":"Detach",
		"cmdDes":"Detach from object",
		"parameterInherit":"ObjectCommand",
		"parameters":[			
		],
		"examples":[
			{
				"name":"",
				"context":'' +
						'{<br>' +
						'	"cmd": "Detach", <br>' +
						'	"uid": "eyes"<br>' +
						'}'	
			}
		]
	},		
	
	{
		"cmd":"AutoRotate",
		"cmdDes":"Rotate object",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"speed", "des":"Rotate speed by degree per second", "required":false, "default":180 },
			{ "parameter":"enable", "des":"Stop auto rotating if set to false", "required":false, "default":true   }
		],
		"examples":[
			{
				"name":"Start auto rotating",
				"context":'' +
						'{<br>' +
						'	"cmd": "AutoRotate", <br>' +
						'	"fromBuffer": "fan"<br>' +
						'}'	
			},
			{
				"name":"Stop auto rotating",
				"context":'' +
						'{<br>' +
						'	"cmd": "AutoRotate",<br>' +
						'	"fromBuffer": "fan",<br>' +
						'	"enable":false<br>' +
						'}'	
			}			
		]
	},		
	
	{
		"cmd":"Rotate",
		"cmdDes":"Rotate object by a given angle",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"rot", "des":"A 3-element array as rotation angle. unit = degree", "required":false },
			{ "parameter":"space", "des":"rotate against world or itself. <br>	" +
					"can be one of ：<br>	" +
					"	world: rotate against world<br>	" +
					"	self: rotate as itself", "required":false, "default":"self" }
		],
		"examples":[
			{
				"name":"",
				"context":'' +
						'{<br>' +
						'	"cmd": "Rotate", <br>' +
						'	"fromBuffer": "fan",<br>' +
						'	"rot":[0,90,0],<br>' +
						'	"space":"self"<br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"Destroy",
		"cmdDes":"Destroy object",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			
		],
		"examples":[
			{
				"name":"",
				"context":'' +
						'{<br>' +
						'	"cmd": "Destroy", <br>' +
						'	"fromBuffer": "Trash"<br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"CalculateObjectsCenter",
		"cmdDes":"Calculate objects center",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"offset", "des":"Offset to calculated result", "required":false, "default":[0,0,0] },
			{ "parameter":"toBuffer", "des":"Save to buffer", "required":true }
		],
		"examples":[
			{
				"name":"",
				"context":'' +
						'{<br>' +
						'	"cmd": "CalculateObjectsCenter", <br>' +
						'	"fromBuffer": "source_buffer", <br>' +
						'	"toBuffer": "center_location" <br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"CreateTimerObject",
		"cmdDes":"Create timer object, can be used as data source, invisible in UI<br>	" +
				"Properties of timer object:<br>	" +
				"	Properties of current time<br>	" +
				"		YearMonthDay：return string as yyyy.MM.dd<br>	" +
				"		HourMinuteSecond：return string as HH:mm:ss<br>	" +
				"		HourMinuteSecondMillisecond：return string as HH:mm:ss:ffff<br>	" +
				"		YearMonthDayHourMinuteSecond：return string as yyyy.MM.dd HH:mm:ss<br>	" +				
				"		Year：Year of YearMonthDayHourMinuteSecond<br>	" +
				"		Month：Month of YearMonthDayHourMinuteSecond<br>	" +
				"		Day：Day of YearMonthDayHourMinuteSecond<br>	" +
				"		Hour：Hour of YearMonthDayHourMinuteSecond<br>	" +
				"		Minute：Minute of YearMonthDayHourMinuteSecond<br>	" +
				"		Second：Second of YearMonthDayHourMinuteSecond<br>	" +
				"		Millisecond: Millisecond of HourMinuteSecondMillisecond<br>	" +
				"		DayOfYear：Day of year<br>	" +
				"		DayOfWeek：Day of week，[0-6] while 0 is Sunday<br>	" +				
				"	<br>	" +
				"	Properties of running time in total <br>	" +
				"		TimerYear：Year of total running time<br>	" +
				"		TimerAllYear：Same as TimerYear<br>	" +
				"		TimerMonth：Month, mod year<br>	" +
				"		TimerAllMonth：Total month<br>	" +
				"		TimerDay：Day mod month<br>	" +
				"		TimerAllDay：Total day<br>	" +
				"		TimerHour: Hours mod day<br>	" +
				"		TimerAllHour：Total hours<br>	" +
				"		TimerMinute：Minutes mod hour<br>	" +
				"		TimerAllMinute：Total minutes<br>	" +
				"		TimerSecond：Seconds mod minute<br>	" +
				"		TimerAllSecond：Total seconds<br>	" +
				"		TimerMillisecond：Milliseconds mod second<br>	" +
				"		TimerAllMillisecond：Total milliseconds<br>	" +
				"",
		"parameters":[
			{ "parameter":"toBuffer", "des":"Buffer to store time object", "required":true }
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

docCreator.addDocItemFromData("Object Control", cmds)

