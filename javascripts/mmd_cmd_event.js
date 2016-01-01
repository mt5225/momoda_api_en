var cmds = [
	{
		"cmd":"RegEvent",
		"cmdDes":"Event Register<br>	" +
				"Note: use id or uid for object reference",
		"parameters":[			
			{ "parameter":"id", "des":"Object id", "required":false},
			{ "parameter":"uid", "des":"Object uid(UserID)", "required":false},
			{ "parameter":"condition", "des":"Trigger condition", "required":false},
			{ "parameter":"event", "des":"Trigger event, to avoid conflict, use \"/\" to separate callbacks, for instance, AddToSelection/callBack1<br>	" +
					"<br>	" +
					"<a onclick=showText('" +
					"//MouseEvents\\n"+
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
					
					"//SelectionEvents\\n"+
					"ChangedSelection\\n"+
					"AddToSelection\\n"+
					"RemoveFromSelection\\n"+
					"RemoveLastFromSelection\\n\\n"+
							
					"//ObjectLifeCycleEvents\\n"+
					"CreateObject\\n"+
					"CreateObjectMoveTo\\n"+
					"DestroyObject\\n\\n"+			
					"CreateDeployObject\\n"+
					"DeployObjects\\n\\n"+
					
					"//LayerChangeEvents\\n"+
					"ChangeObjectLevel\\n"+
					"EnterObjectLevel\\n"+
					"LeaveObjectLevel\\n"+
					"EnterRoomLevel\\n"+
					"LeaveRoomLevel\\n\\n"+
					
					"//ViewpointEvents\\n"+
					"StartSnapshot\\n"+
					"EndSnapshot\\n"+
					"StartRecoverSnapshot\\n"+
					"EndRecoverSnapshot\\n"+
					"StartSnapshotAnim\\n"+
					"EndSnapshotAnim\\n"+
					"SnapshotAnimToolsStartAnim\\n"+
					"SnapshotAnimToolsEndAnim"+
					"');>(Event List)</a>", "required":true},
			{ "parameter":"priority", "des":"Priority, Event with higher priority will be trigger first", "required":false,"default":50},
			{ "parameter":"cmds", "des":"Callback commands", "required":true}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "RegEvent", <br>' +
						'	<br>' +
				        '	//"_default_" means always trigger <br>' +	
				       	'	//"condition": "_default_", <br><br>' +						
						'	//register by object id or uid <br>' +	
						'	//"condition": {"OBJECT":"4"}, <br><br>' +
						'	//register by classId <br>' +	
						'	//"condition": {"CLASSID":3},	<br><br>' +
						'	//register by object properties <br>' +	
				        '	//"condition": {"ATTRIBUTE":{"PropertyDict/sex":"male"}}, <br><br>' +
				        '	//AND operator<br>' +	
				        '	//"condition": {"AND":[{"PropertyDict/sex":"male"}, {"MoniterData/RealTimeData/status":"normal"}]}, <br><br>' +
				        '	//OR operator <br>' +	
				        '	//"condition": {"OR":[{"PropertyDict/sex":"male"}, {"MoniterData/RealTimeData/status":"normal"}]}, <br><br>' +
				        '	//NOT operator<br>' +	
				        '	//"condition": {"NOT":{"AND":[{"PropertyDict/sex":"male"}, {"MoniterData/RealTimeData/status":"normal"}]}}, <br><br>' +
				        '	//////////////////////////<br>' +
				        '	//condition shortcuts<br>' +
				        '	//a number，same as {"CLASSID":3}<br>' +
				        '	//"condition": 3, <br><br>' +
				        '	//a string, means id or uid，same as {"OBJECT":"4"}<br>' +
						'	//"condition": "4", <br><br>' +
				        '	//a key/value pair，means object properties, same as {"ATTRIBUTE":{"PropertyDict/sex":"male"}}<br>' +
				        '	"condition": {"PropertyDict/sex":"male"}, <br><br>' +
						'	<br>' +
						'	"event":"AddToSelection/callBack1",<br>' +
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
		"cmdDes":"Unregister Event" ,
		"parameters":[
			{ "parameter":"id", "des":"Object id", "required":false},
			{ "parameter":"uid", "des":"Object uid", "required":false},
			{ "parameter":"condition", "des":"Same as conditions parameter in RegEvent command", "required":false},
			{ "parameter":"event", "des":"Same as event parameter in RegEvent<br>	" +
					"Note: if no callback is specified, all callbacks under this event will be unregistered.", "required":true}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "UnregEvent", <br>' +
						'	"condition":{"PropertyDict/sex":"male"}, <br>' +
						'	"event":"AddToSelection/callBack1" <br>' +
						'}'	
			}
		]
	},	
	{
		"cmd":"GetLastEventObj",
		"cmdDes":"Get object associated with event and save to buffer" ,
		"parameters":[
			{ "parameter":"toBuffer", "des":"buffer <br>	" +
					"Note: object is save to {\"ObjectManager\":\"RunBuffer/lastEventObj\"} by system automatically", "required":true}
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
		"cmdDes":"Suppress events" ,
		"parameters":[
			{ "parameter":"condition", "des":"Same as condition parameter in RegEvent", "required":true},
			{ "parameter":"event", "des":"Same as event parameter in RegEvent <br>		" +
					"Note: if no callback is specified, all callbacks under this event will be suppressed.", "required":true}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "RegIgnoreEvent", <br>' +
						'	"condition":"_default_", //suppress all AddToSelection events<br>' +
						'	"event":"AddToSelection" <br>' +
						'}'	
			}
		]
	},	
	{
		"cmd":"UnregIgnoreEvent",
		"cmdDes":"Resume suppressed events" ,
		"parameters":[
			{ "parameter":"condition", "des":"Same as condition parameter in RegEvent", "required":true},
			{ "parameter":"event", "des":"Same as event parameter in RegEvent", "required":true}
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

docCreator.addDocItemFromData("Event", cmds)

