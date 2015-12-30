var cmds = [
	{
		"cmd":"RegEvent",
		"cmdDes":"注册事件。<br>	" +
				"注：这个命令不支持全部的标准物体输入参数，只支持id和uid",
		"parameters":[			
			{ "parameter":"id", "des":"输入模模搭内置物体id，指定给哪个物体设置事件", "required":false},
			{ "parameter":"uid", "des":"输入物体的用户定义id(UserID)，指定给哪个物体设置事件", "required":false},
			{ "parameter":"condition", "des":"输入条件，指定给符合这个条件的物体设置事件", "required":false},
			{ "parameter":"event", "des":"设定要触发的事件，为了支持同一个事件驱动多个回调，这里可以自由添加子名称，使用\"/\"分隔，如 AddToSelection/回调1。<br>	" +
					"比如：一个模块对一个物体注册了选择时弹出物体面板，另一个模块又对这个物体注册了选择时头顶图标，两个事件都是选择，所以需要一个子名称来区别。<br>	" +
					"<a onclick=showText('" +
					"//鼠标操作\\n"+
					"ClickObject\\n"+
					"DbClickObject\\n"+					
					"RightClickObject\\n"+
					"RightDbClickObject\\n"+							
					"LeftClickObject\\n"+
					"LeftDbClickObject\\n"+					
					"RightClick\\n"+
					"LeftClick\\n"+					
					"RightDbClick\\n"+
					"LeftDbClick\\n"+
					"OnMouseEnterObject\\n"+
					"OnMouseLeaveObject\\n\\n"+
					"OnMouseEnterPlacemark\\n"+
					"OnMouseLeavePlacemark\\n"+	
					
					"//选择\\n"+
					"ChangedSelection\\n"+
					"AddToSelection\\n"+
					"RemoveFromSelection\\n"+
					"RemoveLastFromSelection\\n\\n"+
							
					"//物体生存周期\\n"+
					"CreateObject\\n"+
					"CreateObjectMoveTo\\n"+
					"DestroyObject\\n\\n"+			
					"CreateDeployObject\\n"+
					"DeployObjects\\n\\n"+
					
					"//场景层级切换\\n"+
					"ChangeObjectLevel\\n"+
					"EnterObjectLevel\\n"+
					"LeaveObjectLevel\\n"+
					"EnterRoomLevel\\n"+
					"LeaveRoomLevel\\n\\n"+
					
					"//视点和视点动画\\n"+
					"StartSnapshot\\n"+
					"EndSnapshot\\n"+
					"StartRecoverSnapshot\\n"+
					"EndRecoverSnapshot\\n"+
					"StartSnapshotAnim\\n"+
					"EndSnapshotAnim\\n"+
					"SnapshotAnimToolsStartAnim\\n"+
					"SnapshotAnimToolsEndAnim"+
					"');>(可调用的事件列表)</a>", "required":true},
			{ "parameter":"priority", "des":"对同一个物体同时发生多个相同事件时，通过这个属性设置优先级，越大越优先执行", "required":false,"default":50},
			{ "parameter":"cmds", "des":"事件发生时的回调", "required":true}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "RegEvent", <br>' +
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
						'	<br>' +
						'	"event":"AddToSelection/回调1",<br>' +
						'	"priority":50,<br>' +
						'	"cmds":[ <br>' +
						'		{	"cmd":"GetLastEventObj",  "toBuffer":{"ObjectManager":"RunBuffer/lastEventObj"} } , <br>' +
						'		{	"cmd":"ChangePlacementBundle",  "fromBuffer":{"ObjectManager":"RunBuffer/lastEventObj"} , "bundleId":"F933B1A524B94050BC7A82B15D2057F5"} <br>' +
						'	]<br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"UnregEvent",
		"cmdDes":"注销事件" ,
		"parameters":[
			{ "parameter":"id", "des":"输入模模搭内置物体id，指定给哪个物体注销事件", "required":false},
			{ "parameter":"uid", "des":"输入物体的用户定义id(UserID)，指定给哪个物体注销事件", "required":false},
			{ "parameter":"condition", "des":"输入条件，指定给符合这个条件的物体注销事件，和RegEvent里的condition兼容", "required":false},
			{ "parameter":"event", "des":"设定要触发的事件，同RegEvent一样，需要填写子名称 <br>	" +
					"注：如果不填写子名称，将把所有挂在事件下回调都注销", "required":true}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "UnregEvent", <br>' +
						'	"condition":{"PropertyDict/性别":"男"}, <br>' +
						'	"event":"AddToSelection/回调1" <br>' +
						'}'	
			}
		]
	},	
	{
		"cmd":"GetLastEventObj",
		"cmdDes":"当一个事件发生时，获取这个事件的对象放到缓冲里" ,
		"parameters":[
			{ "parameter":"toBuffer", "des":"设定要放置的缓冲 <br>	" +
					"注：其实内部已经将事件物体放到了{\"ObjectManager\":\"RunBuffer/lastEventObj\"}", "required":true}
		],
		"examples":[
			{
				"name":"",
				"context":	'{	"cmd":"GetLastEventObj",  "toBuffer":{"ObjectManager":"RunBuffer/lastEventObj"} }'
			}
		]
	},	
	{
		"cmd":"RegIgnoreEvent",
		"cmdDes":"通过条件可以临时屏蔽事件，等需要时再恢复" ,
		"parameters":[
			{ "parameter":"condition", "des":"输入条件，指定给符合这个条件的物体临时屏蔽事件，和RegEvent里的condition兼容", "required":true},
			{ "parameter":"event", "des":"设定要屏蔽的事件，同RegEvent一样，需要填写子名称 <br>		" +
					"注：如果不填写子名称，将把所有挂在事件下回调都屏蔽", "required":true}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "RegIgnoreEvent", <br>' +
						'	"condition":"_default_", //屏蔽所有的AddToSelection事件<br>' +
						'	"event":"AddToSelection" <br>' +
						'}'	
			}
		]
	},	
	{
		"cmd":"UnregIgnoreEvent",
		"cmdDes":"恢复临时屏蔽的事件，要求和使用RegIgnoreEvent注册时输入的内容保持一致" ,
		"parameters":[
			{ "parameter":"condition", "des":"使用RegIgnoreEvent注册时输入的条件", "required":true},
			{ "parameter":"event", "des":"	使用RegIgnoreEvent注册时输入的事件", "required":true}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "UnregIgnoreEvent", <br>' +
						'	"condition":"_default_",<br>' +
						'	"event":"AddToSelection" <br>' +
						'}'	
			}
		]
	}	
]

docCreator.addDocItemFromData("事件", cmds)

