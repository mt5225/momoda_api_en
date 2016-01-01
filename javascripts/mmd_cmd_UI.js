var cmds = [
	{
		"cmd":"ShowPanel",
		"cmdDes":"Show or hide setting panel",
		"parameters":[	
			{ "parameter":"panel", "des":"Name of the panel<br>	" +
					"can be one of:<br>	" +
					"	viewPointPanel： Viewpoint Panel<br>	" +
					"	fuctionListPanel： Function List Panel<br>	" +
					"	switch3dPanel： 2D-3D Switch Panel<br>	" +
					"	effectPanel： Effect Panel<br>	" +
					"	screenShotPanel： ScreenShot Panel<br>	" +
					"	levelPanel： Floor Panel<br>	" +
					"", "required":true },
					
			{ "parameter":"enable", "des":"Show or hide panel", "required":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "ShowPanel", <br>' +
						'	"panel":"viewPointPanel", <br>' +
						'	"enable":false <br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"CreatePlacemarkTemplate",
		"cmdDes":"Create new UI panel",
		"parameters":[
			{ "parameter":"template", "des":"Panel settings, refer to below example for details", "required":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CreatePlacemarkTemplate", <br>' +
						'	"template":{ <br>' +
						'	    "name": "Template Example",<br><br>' +
						'		//panel size<br>' +
						'	    "bgWidth": 243,<br>' +
						'	    "bgHeight": 149,<br><br>' +
						'		//position of panel axis<br>' +
						'		"horizontalAlignment":"LEFT",	// horizontal position, can be one of LEFT CENTER RIGHT<br>' +
						'		"verticalAlignment":"TOP",	// vertical position, can be one of TOP CENTER BOTTOM<br><br>' +
						'		//controls included in panel<br>' +
						'	    "showMapping": {<br>' +
						'			"Background": {<br>' +
						'				//parameters<br>' +
						'				"type": "image",<br>' +
						'	            "sortOrder": 0,<br>' +
						'	            "drawPos": [0, 0],<br>' +
						'	            "drawSize": [ 243, 149 ],<br>' +
						'				<br>' +
						'				//control axis position<br>' +
						'				"horizontalAlignment":"LEFT",	//horizontal position, can be one of LEFT CENTER RIGHT<br>' +
						'				"horizontalAlignmentOffset":0,	//horizontal offset<br>' +
						'				"verticalAlignment":"TOP",	//vertical position, can be one of TOP CENTER BOTTOM<br>' +
						'				"verticalAlignmentOffset":0,	//vertical offset<br>' +
						'				<br>' +
						'				//private parameters<br>' +	
						'				"image":"userimage/4815/CustomTexture/20151023824126.png",<br>' +
						'				"color":[0,0,1],	//color settings may mix with image <br>' +
						'				<br>' +
						'				//data source settings<br>' +
						'				"getMethod": "objectPropertyMapping",<br>' +
						'				"propertyPath":"MonitorDatas/RealTimeData/status",<br>' +
						'				"objectPropertyMapping":{<br>' +
						'					"_default_":"userimage/4815/CustomTexture/1.png",	//image location<br>' +
						'					"alarms":{"color":[1,0.2,0.2]},	//change color<br>' +
						'					"error":{	//change color and texture at the same time<br>' +
						'						"image":"userimage/4815/CustomTexture/3.png",<br>' +
						'						"color":[1,0,0]<br>' +
						'					}<br>' +
						'				}<br>' +
						'		},<br>' +
						'		"name": {<br>' +
						'				//parameters<br>' +
						'				"type": "text",<br>' +
						'	            "sortOrder": 1,<br>' +
						'	            "drawPos": [0, 0],<br>' +
						'	            "drawSize": [243, 39],<br>' +
						'				<br>' +
						'				//axis position<br>' +
						'				"horizontalAlignment":"LEFT",	//horizontal position, can be one of LEFT CENTER RIGHT<br>' +
						'				"horizontalAlignmentOffset":0,	//horizontal offset<br>' +
						'				"verticalAlignment":"TOP",	//vertical position, can be one of TOP CENTER BOTTOM<br>' +
						'				"verticalAlignmentOffset":0,	//vertical offset<br>' +
						'				<br>' +
						'				//private  parameters<br>' +
						'	            "fontFamily": "Arial",	//font family<br>' +
						'	            "fontSize": 14,<br>' +
						'	            "fontColor": [1,1,1,1],<br>' +
						'	            "fontStyle": "Bold",<br>' +
						'	            "fontShadow": false,<br>' +
						'	            "fontShadowThickness": 2,<br>' +
						'	            "fontShadowColour": [0,0,0],<br>' +
						'	            "fontShadowOffset": [2, 2],<br>' +
						'	            "fontOutline": true,<br>' +
						'	            "fontOutlineThickness": 2,<br>' +
						'	            "horizontalOverflow": false,<br>' +
						'	            "verticalOverflow": true,<br>' +
						'	            "fontOutlineColour": [0,0,0],<br>' +
						'				<br>' +
						'	            "horizontalTextAlignment": "CENTER",<br>' +
						'	            "verticalTextAlignment": "CENTER",<br>' +
						'	            "horizontalWriterAlignment": "TOP",<br>' +
						'	            "verticalWriterAlignment": "LEFT",<br>' +
						'				<br>' +
						'				//data source<br>' +
						'				"getMethod": "objectProperty",<br>' +
						'	            "propertyPath": "UserID"<br>' +
						'	        },<br>' +
						'			"status": {<br>' +
						'				//control parameters<br>' +
						'				"type": "text",<br>' +
						'	            "sortOrder": 1,<br>' +
						'	            "drawPos": [26,80],<br>' +
						'	            "drawSize": [50,30],<br>' +
						'				<br>' +
						'				//control private paramters, list only common ones<br>' +
						'	            "fontSize": 14,<br>' +
						'	            "fontColor": [1,1,1,1],<br>' +
						'				<br>' +
						'				//data source<br>' +
						'	            "getMethod": "objectPropertyMapping",<br>' +
						'	            "propertyPath": "MonitorDatas/RealTimeData/status",<br>' +
						'				"objectPropertyMapping":{<br>' +
						'					"_default_":{"text":"Normal", "fontColor":[0,1,0]},<br>' +
						'					"false":{"text": "Error", "fontColor":[1,0,0]}<br>' +
						'				}<br>' +
						'	        },		<br>' +
						'	         "progressBar": {<br>' +
						'				//parameters<br>' +
						'				"type": "progressBar",<br>' +
						'	            "sortOrder": 1,<br>' +
						'	            "drawPos": [74, 40],<br>' +
						'	            "drawSize": [128, 20],<br>' +
						'				<br>' +
						'				//axis position<br>' +
						'				"horizontalAlignment":"LEFT",	//horizontal position, can be one of LEFT CENTER RIGHT<br>' +
						'				"horizontalAlignmentOffset":0,	//horizontal offset<br>' +
						'				"verticalAlignment":"TOP",	//vertical position, can be one of TOP CENTER BOTTOM<br>' +
						'				"verticalAlignmentOffset":0,	//vertical offset<br>' +
						'				<br>' +
						'				//private parameters<br>' +
						'				"fillDir": "right",	//"up" "down" "left" "right"<br>' +
						'				"barImage":"uGUI/ProgressBar/img_0",<br>' +
						'	            "min": 20,<br>' +
						'	            "max": 30,<br>' +
						'	            "color": [0.513,0.874,0.552,1],<br>' +
						'	            "styleConfig": {<br>' +
						'	                "0.25": [0.36,0.58,0.16],<br>' +
						'	                "0.50": [1,0.83,0.4],<br>' +
						'	                "0.75": [1,0.4,0],<br>' +
						'	                "0.90": [1,0.15,0.15]<br>' +
						'	            },<br>' +
						'				<br>' +
						'				//data source<br>' +
						'	            "getMethod": "objectProperty",<br>' +
						'	            "propertyPath": "MonitorDatas/RealTimeData/humidity"<br>' +
						'	        },<br>' +
						'			"pieChart": {<br>' +
						'				//parameters<br>' +
						'				"type": "progressPie",<br>' +
						'	            "sortOrder": 1,<br>' +
						'	            "drawPos": [99,90],<br>' +
						'	            "drawSize": [50,50],<br>' +
						'				<br>' +
						'				//axis position<br>' +
						'				"horizontalAlignment":"LEFT",	//horizontal position, can be one of LEFT CENTER RIGHT<br>' +
						'				"horizontalAlignmentOffset":0,	//horizontal offset<br>' +
						'				"verticalAlignment":"TOP",	//vertical position, can be one of TOP CENTER BOTTOM<br>' +
						'				"verticalAlignmentOffset":0,	//horizontal offset<br>' +
						'				<br>' +
						'				//private parameters<br>' +
						'				"openAngle":"360",<br>' +
						'				"fillDirClockwise":true,	//clockwise<br>' +
						'				"ringImage":"uGUI/ProgressBar/img_3",	//image path<br>' +
						'				"rotation":0,<br>' +
						'	            "min": 20,<br>' +
						'	            "max": 30,<br>' +
						'	            "color": [0.513,0.874,0.552,1],<br>' +
						'	            "styleConfig": {<br>' +
						'	                "0.25": [0.36,0.58,0.16],<br>' +
						'	                "0.50": [1,0.83,0.4],<br>' +
						'	                "0.75": [1,0.4,0],<br>' +
						'	                "0.90": [1,0.15,0.15]<br>' +
						'	            },	<br>' +
						'				<br>' +
						'				//data source<br>' +
						'	            "getMethod": "objectProperty",<br>' +
						'	            "propertyPath": "MonitorDatas/RealTimeData/humidity"<br>' +
						'	 		<br>' +
						'	        },<br>' +
						'			"ringChart": {<br>' +
						'				//parameters<br>' +
						'				"type": "progressRing",<br>' +
						'	            "sortOrder": 1,<br>' +
						'	            "drawPos": [149,90],<br>' +
						'	            "drawSize": [50,50],<br>' +
						'				<br>' +
						'				//axis<br>' +
						'				"verticalAlignment":"CENTER",<br>' +
						'				"verticalAlignmentOffset":0,<br>' +
						'				"horizontalAlignment":"CENTER",<br>' +
						'				"horizontalAlignmentOffset":0,<br>' +
						'				<br>' +
						'				//private control<br>' +
						'				"openAngle":"360",<br>' +
						'				"fillDirClockwise":false,	// counter clockwise <br>' +
						'				"ringImage":"uGUI/ProgressBar/img_2",	//image path<br>' +
						'				"rotation":0,<br>' +
						'	            "min": 20,<br>' +
						'	            "max": 30,<br>' +
						'	            "color": [0.513,0.874,0.552,1],<br>' +
						'	            "styleConfig": {<br>' +
						'	                "0.25": [0.36,0.58,0.16],<br>' +
						'	                "0.50": [1,0.83,0.4],<br>' +
						'	                "0.75": [1,0.4,0],<br>' +
						'	                "0.90": [1,0.15,0.15]<br>' +
						'	            },	<br>' +
						'				<br>' +
						'				//data source<br>' +
						'				"getMethod": "objectProperty",<br>' +
						'	            "propertyPath": "MonitorDatas/RealTimeData/humidity",<br>' +
						'	        },<br>' +
						'			"DisplyValue": {<br>' +
						'				//parameters<br>' +
						'				"type": "text",	<br>' +
						'	            "sortOrder": 2,<br>' +
						'	            "drawPos": [74,65],<br>' +
						'	            "drawSize": [128,20],<br>' +
						'				<br>' +
						'	           //data source<br>' +
						'	            "getMethod": "objectProperty",<br>' +
						'	            "propertyPath": "MonitorDatas/RealTimeData/humidity"<br>' +
						'	        },<br>' +
						'			"Button": {<br>' +
						'				//parameters<br>' +
						'				"type": "button",<br>' +
						'	            "sortOrder": 1,<br>' +
						'	            "drawPos": [194,98],<br>' +
						'				"drawSize": [35,22],<br>' +
						'				<br>' +
						'	            //private parameters<br>' +
						'	            "fontSize": 12,	<br>' +
						'	            "fontColor": [0.235,0.792,0.501,1],<br>' +
						'				"title":"Details",<br>' +
						'				"normalColor": [0.3,0.5,0.3,0],<br>' +
						'	            "highlightedColor": [1,1,1],<br>' +
						'	            "pressedColor": [0.6,0.5,0.2,0],<br>' +
						'				<br>' +
						'				"cmds":[<br>' +
						'					{"cmd":"OpenUrl", "uid":{"objectManager":"Runbuffer/Button1"} }<br>' +
						'				],<br>' +
						'				"cmdsImmediate":false<br>' +
						'	        },<br>' +
						'			"SwitchButton": {<br>' +
						'				//parameters<br>' +
						'				"type": "toggle",<br>' +
						'	         	"sortOrder": 1,<br>' +
						'	            "drawPos": [194,98],<br>' +
						'				"drawSize": [35,22],<br>' +
						'				<br>' +
						'	            //private parameters<br>' +
						'				"images":["http://www.3momoda.com/images/add_01.png","images/add_02.png","images/add_02.png"],	//images use for normal, mouse over and mouse leave events. image url can be absolute，or relative to mmd server url<br>' +
						'	            "fontSize": 12,	<br>' +
						'	            "fontColor": [0.235,0.792,0.501,1],<br>' +
						'				"title":"Open",<br>' +
						'				"checked":true,<br>' +
						'				"setCheckedExe":false,	//if run command while checked<br>' +
						'				<br>' +
						'				"checkCmds":[<br>' +
						'					{ "cmd":"SetPlacemarkProperty","uid":"obj01" ,"templateName":"Template" ,"widgetName":"SwitchButton" ,"property":"title" ,"value":"Close" }<br>' +
						'				],<br>' +
						'				"unCheckCmds":[<br>' +
						'					{ "cmd":"SetPlacemarkProperty","uid":"obj01" ,"templateName":"Template" ,"widgetName":"SwitchButton" ,"property":"title" ,"value":"开" }<br>' +
						'				],	<br>' +
						'				"cmdsImmediate":false<br>' +
						'	        }<br>' +
						'	    }<br>' +			
							
						'	}<br>' +						
						'}'	
			}
		]
	},	

	{
		"cmd":"CopyPlacemarkTemplate",
		"cmdDes":"Create new control by clone existing one",
		"parameters":[
			{ "parameter":"originName", "des":"The control to be cloned" , "required":true },
			{ "parameter":"newName", "des":"Name of new control", "required":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CopyPlacemarkTemplate", <br>' +
						'	"originName":"Temperatureplacemark", <br>' +
						'	"newName":"Powerplacemark" <br>' +
						'}'	
			}
		]
	},	
	
	{
		"cmd":"DestroyPlacemarkTemplate",
		"cmdDes":"Delete Control",
		"parameters":[
			{ "parameter":"name", "des":"Name of Control to be deleted" , "required":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "DestroyPlacemarkTemplate", <br>' +
						'	"name":"Temperatureplacemark" <br>' +
						'}'	
			}
		]
	},		
	
	{
		"cmd":"SetPlacemarkTemplateConfig",
		"cmdDes":"Modify Control configuration<br>	" +
				"Note: this command will not modify look and feel of the control, to change control look and feel, please use command 'SetPlacemarkProperty'.",
		"parameters":[
			{ "parameter":"name", "des":"name of the control" , "required":true },
			{ "parameter":"path", "des":"list of properties to be modified, seperated by '/'" , "required":true },
			{ "parameter":"config", "des":"target value" , "required":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetPlacemarkTemplateConfig", <br>' +
						'	"name":"MonitoringPanel",<br>' +
						'	"path":"ProgressBar2/styleConfig",<br>' +
						'	"config":{<br>' +
						'		"0.25":[0.36,0.58,0.16],<br>' +
						'		"0.50":[1,0.83,0.4],<br>' +
						'		"0.75":[1,0.4,0],<br>' +
						'		"0.90":[1,0.15,0.15]<br>' +
						'	}<br>' +
						'}'	
			}
		]
	},	
	{
		"cmd":"CreatePlacemark",
		"cmdDes":"Placemark Creator",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"templateName", "des":"Name of the placemark template" , "required":true },
			{ "parameter":"placemarkId", "des":"Name of the placemark<br>	" +
					"Note: if placemark is created on the surface of object, placemarkId can be ignored. system will generate placemakrkId automatically using name conversion: {Object uid}_{Template Name}" , "required":false },
			{ "parameter":"type", "des":"coordinate type of UI<br>	" +
					"can of one of:<br>	" +
					"	Screen：Placemark is created under screen coordinate, so it will not change during camera zoom in/zoom out<br>	" +
					"	Plane：Placemark is created under 3D coordinate, so it could changes sizes with movement of camera" , "required":false, "default":"Screen" },
			{ "parameter":"scale", "des":" placemark scale, used to control sizes of placemark" , "required":false, "default":[0.2, 0.2, 0.2] },			
			{ "parameter":"presetPos", "des":"placemark position. if placemark type is 'Plane', use (x,y,z) as coordinate, if placemark type is 'screen'， use (x,y) as coordinate.<br>	" +
					"Note: if 'presetPos' is not specified, and placemark is created against object, the placemark is located on the top of the object by default." , "required":false },
			{ "parameter":"posFromBuffer", "des":"Same as presetPos，set placemark position by buffer" , "required":false },
			{ "parameter":"layoutOffset", "des":"offset from target object, if placemark type is 'Plane', use (x,y,z) as coordinate, if placemark type is 'screen'， use (x,y) as coordinate." , "required":false },
			{ "parameter":"turnWhenNegative", "des":"Apply to (x,y) coordinate<br>	" +
					"if turnWhenNegative=true，coordinate is calculated as opposite, for instance, [-0.1, -100] point to position with right 10%, 100 pixels below<br>	" +
					"if turnWhenNegative=false，coordinate is located outside the screen. for instance, [-0.1, -100]point to position left -10%, up -100 pixels<br>	" , "required":false, "default":false },
			{ "parameter":"countPerFrame", "des":"Number of placemark object can be shown simultaneously" , "required":false, "default":0   },
			{ "parameter":"additiveDataObjects", "des":"While placemark is created against object, target object be used as data source. If placemark need multiple data source , or not created against object, this parameter can be used to specifiy data source <br>	" +
					"can be key-value, id, uid or buffer" , "required":false },			
			{ "parameter":"updateTime", "des":"Data refresh interval in seconds, if placemark is linked to external data source" , "required":false, "default":1 }
			
		],
		"examples":[
			{
				"name":"Create a monitoring panel to an object without placemarkId",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CreatePlacemark", <br>' +
						'	"uid":"senser01", <br>' +
						'	"type":"Plane", <br>' +						
						'	"templateName":"T&H Template", <br>' +
						'	"layoutOffset":[0,1,0],<br>' +
						'	"scale":[0.1,0.1,0.1]<br>' +
						'}'	
			},
			{
				"name":"Create monitoring panel to multiple objects",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CreatePlacemark", <br>' +
						'	"fromBuffer":"allSenser", <br>' +
						'	"type":"Screen", <br>' +						
						'	"templateName":"T&H Panel", <br>' +
						'	"layoutOffset":[0,50],<br>' +
						'	"countPerFrame":5<br>' +
						'}'	
			},	
			{
				"name":"Create 2D placemark with multiple data source",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CreatePlacemark", <br>' +
						'	"placemarkId":"Monitor01", <br>' +
						'	"type":"Screen", <br>' +						
						'	"templateName":"MonitorPanel", <br>' +
						'	"presetPos":[0.5,50],<br>' +
						'	"additiveDataObjects":{<br>' +
						'		"ds1": "obj01" , //object id or uid<br>' +
						'		"ds2": {"ObjectManager": "RunBuffer/obj02"} //use buffer as data source<br>' +
						'	} <br>' +
						'}'	
			}				
		]
	},		
	{
		"cmd":"DestroyPlacemark",
		"cmdDes":"Destroy Placemark",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"placemarkId", "des":"placemarkId" , "required":false },
			{ "parameter":"templateName", "des":"If no placemarkId is specified while placemark is created, use   'object uid_template name' as placemarkId，so templateName is need to delete placemark" , "required":false }
			
		],
		"examples":[
			{
				"name":"use object id and template name to destroy placemark",
				"context":	'' +
						'{<br>' +
						'	"cmd": "DestroyPlacemark", <br>' +
						'	"uid":"obj01", <br>' +
						'	"templateName":"T&H Panel"<br>' +
						'}'	
			},
			{
				"name":"use templateName to bulk delete placemark",
				"context":	'' +
						'{<br>' +
						'	"cmd": "DestroyPlacemark", <br>' +
						'	"fromBuffer":"allSenser", <br>' +
						'	"templateName":"T&H Panel Template"<br>' +
						'}'	
			},
			{
				"name":"use placemarkId to delete placemark",
				"context":	'' +
						'{<br>' +
						'	"cmd": "DestroyPlacemark", <br>' +
						'	"placemarkId":"TH01" <br>' +
						'}'	
			}			
		]
	},
	{
		"cmd":"GetLastClickedButtonPlacemarkHost",
		"cmdDes":"Simular to GetLastEventObj and GetLastMonitorRespondObj，click on placemark will return object reference",
		"parameters":[
			{ "parameter":"toBuffer", "des":"buffer which store the object" , "required":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "GetLastClickedButtonPlacemarkHost", <br>' +
						'	"toBuffer":"lastPlacemarkHost" <br>' +
						'}'
			}
		]
	},	
	{
		"cmd":"SetPlacemarkProperty",
		"cmdDes":"Modify property of existing placemark",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"placemarkId", "des":"Must specify placemarkId if placemark is created with placemarkId" , "required":false },
			{ "parameter":"templateName", "des":"TemplateName, note that if placemark is created without placemarkId, system will use {object_uid}_{template name} as placemarkId" , "required":false },
			{ "parameter":"widgetName", "des":"control name" , "required":true },
			{ "parameter":"property", "des":"Control property name" , "required":true },
			{ "parameter":"value", "des":"value to be modified<br>	" +
					"Note: system use strong type internally. String, number or boolean can be used as normal, for other data type, the name of data type need to be specified.<br>	" +
					"for instance, vector3，color should be wrote as<br>	" +
					"{\"Vector3\":[1,0,0]}<br>	" +
					"{\"Vector2\":[1,0]}<br>	" +
					"{\"Color\":[1,0,0,1]}<br>	", "required":true}
		],
		"examples":[
			{
				"name":"String, number or boolean used as normal",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetPlacemarkProperty", <br>' +
						'	"uid":"obj01", <br>' +
						'	"templateName":"T&H Panel", <br>' +
						'	"widgetName":"Status", <br>' +
						'	"property":"text", <br>' +
						'	"value":"Normal" <br>' +
						'}'	
			},		
			{
				"name":"need to specify data type if data type is vector3，color, etc.",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetPlacemarkProperty", <br>' +
						'	"uid":"obj01", <br>' +
						'	"templateName":"T&H Panel", <br>' +
						'	"widgetName":"Progressbar2", <br>' +
						'	"property":"Color", <br>' +
						'	"value":{"Color":[1,0,0]} <br>' +
						'}'	
			}
		]
	},	

	{
		"cmd":"CreateLayerPanel",
		"cmdDes":"A build-in, easy to use, multi-function Panel provided by system",
		"parameters":[
			{ "parameter":"config", "des":"Option list" , "required":true },
			{ "parameter":"presetPos", "des":"Position, use (x,y) as coordinate<br>	" +
					"Note: default position is on top of object." , "required":false },
			{ "parameter":"posFromBuffer", "des":"same as presetPos，set position from buffer" , "required":false },
			{ "parameter":"turnWhenNegative", "des":"Apply to (x,y) coordinate<br>	" +
					"if turnWhenNegative=true，coordinate is calculated as opposite, for instance, [-0.1, -100] point to position with right 10%, 100 pixels below<br>	" +
					"if turnWhenNegative=false，coordinate is located outside the screen. for instance, [-0.1, -100]point to position left -10%, up -100 pixels<br>	" , "required":false, "default":false }
			
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CreateLayerPanel", <br>' +
						'	"presetPos":[-100, 0.5],<br>' +
						'	"turnWhenNegative":true,<br>' +
						'	"config":{<br>' +
						
						'		//set panel size<br>' +						
						'		"bgWidth": 150,<br>' +
						'		"bgHeight": 330,<br><br>' +
						'		//panel axis position<br>' +
						'		"horizontalAlignment":"LEFT",	// horizontal position, can be one of  LEFT CENTER RIGHT<br>' +
						'		"verticalAlignment":"CENTER",	// vertical position, can be one of TOP CENTER BOTTOM<br><br>' +
						'		//function groups<br>' +						
						'		"groups":[<br>' +	
						'			{<br>' +	
						'				"name":"basic function",<br>' +	
						'				"icon":"userimage/3534/CustomTexture/20150708325991.png", //icon path<br>' +	
						'				"textConfig":{	//set text<br>' +
						'					"fontFamily": "Arial",<br>' +
						'					"fontSize": 18,<br>' +
						'					"drawSize": [100,38],<br>' +
						'					"verticalTextAlignment": "CENTER",<br>' +
						'					"fontColor": [1,1,1,1] <br>' +
						'				},<br><br>' +
						'				//multiable functions inside one function group<br>' +
						'				"items":[<br>' +
						'					{<br>' +
						'						 "name":"warehouse_index",<br>' +
						'						 "textConfig":{	<br>' +	
						'							 "fontFamily": "Arial",<br>' +
						'							 "fontSize": 14,<br>' +
						'							 "fontColor": [0,0,0,1]<br>' +
						'						 },<br>' +
						'						 "initCmds":[ //run command after creation<br>' +
						'							{ "cmd":"ChangeLayerPanelItems","items":["warehouse_index"],"state":true } //set status as checked<br>' +
						'						 ],<br>' +
						'						 "checkCmds":[ //run command if checked<br>' +
						'							{ "cmd":"ChangeLayerPanelItems","items":["TemperatureControl","humidityControl"],"state":false }, //uncheck other items<br>' +
						'							{ "cmd":"CreatePlacemark", "fromBuffer":{"ObjectManager": "RunBuffer/warehouse"}, "templateName" : "warehouse_index", "type":"screen", "countPerFrame":100000}	<br>' +	
						'						 ],<br>' +
						'						 "unCheckCmds":[ //run command if unchecked<br>' +
						'							{ "cmd":"DestroyPlacemark", "fromBuffer":{"ObjectManager": "RunBuffer/warehouse"}, "templateName" : "warehouse_index"}<br>' +
						'						 ]<br>' +
						'					 },<br>' +
						'					{<br>' +
						'						 "name":"temperature monitoring",<br>' +
						'						......<br>' +
						'					},<br>' +
						'					......<br>' +
						'				]<br>' +
						'			},<br>' +
						'			{<br>' +
						'				"name":"advance settings",<br>' +
						'				......<br>' +
						'			},<br>' +
						'			......<br>' +
						'		]<br>' +
						'	} <br>' +
						'}'	
			}
		]
	},	
	
	{
		"cmd":"DestroyLayerPanel",
		"cmdDes":"Destroy Layer Panel",
		"parameters":[
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "DestroyLayerPanel" <br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"ChangeLayerPanelItems",
		"cmdDes":"Check or uncheck panel item",
		"parameters":[
			{ "parameter":"items", "des":"Set check status by array" , "required":true },
			{ "parameter":"state", "des":"true means check, false means uncheck" , "required":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "ChangeLayerPanelItems", <br>' +
						'	"items":["Temperature Monitoring","Power Monitoring"], <br>' +
						'	"state":true <br>' +
						'}'	
			}
		]
	},	
	
	{
		"cmd":"ShowLayerPanel",
		"cmdDes":"Show or hide Panel",
		"parameters":[			
			{ "parameter":"enable", "des":"panel name" , "required":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "ChangeLayerPanelItems", <br>' +
						'	"items":["temperature monitoring","power monitoring"], <br>' +
						'	"enable":true <br>' +
						'}'	
			}
		]
	},	
	{
		"cmd":"ShowHideLayerPanel",
		"cmdDes":"Show or hide panel",
		"parameters":[
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "ShowHideLayerPanel" <br>' +
						'}'	
			}
		]
	},
	

	{
		"cmd":"ShowPropListPanel",
		"cmdDes":"A build-in, easy to use 'object property panel', can be also used to config function buttons.",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"config", "des":"Can be assign many function buttons" , "required":true },
			{ "parameter":"presetPos", "des":"Panel position, use (x,y) as coordinate.<br>	" +
					"Note: default position is on top of object" , "required":false },
			{ "parameter":"posFromBuffer", "des":"same as presetPos，set " , "required":false },
			{ "parameter":"turnWhenNegative", "des":"Apply to (x,y) coordinate<br>	" +
					"if turnWhenNegative=true，coordinate is calculated as opposite, for instance, [-0.1, -100] point to position with right 10%, 100 pixels below<br>	" +
					"if turnWhenNegative=false，coordinate is located outside the screen. for instance, [-0.1, -100]point to position left -10%, up -100 pixels<br>	" , "required":false, "default":false }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "ShowPropListPanel", <br>' +
						'	"fromBuffer":{"ObjectManager": "RunBuffer/lastEventObj"},<br>' +
						'	"presetPos":[100, 0.5],<br>' +
						'	"turnWhenNegative":true,<br>' +				
						'	"config":{ <br>' +
						'		"initCmds":[ //run command after creation<br>' +
						'			{ "cmd":"CopyBuffer",  "fromBuffer":{"ObjectManager":"RunBuffer/lastEventObj"}, "toBuffer":{"ObjectManager":"RunBuffer/curShowPanelObj"}} ,<br>' +
						'			{ "cmd":"ChangePropListPanelItems", "items":["basicInfo"], "state":true, "exeCommands":true } //set which button is clicked after creation<br>' +
						'		],<br>' +
						'		"items":[<br>' +
						'			{<br>' +
						'				"name":"basicInfo",<br>' +
						'				"normalColor":[0.415,0.839,0.462,1],//color on normal status<br>' +
						'				"highlightedColor":[0.337,0.666,0.372,1], //color on mouse over<br>' +
						'				"pressedColor":[0.415,0.839,0.462,1], //color on mouse click<br>' +
						'				"clickCmds":[<br>' +
						'					{ "cmd": "ChangePropListPanelItems", "items":["warehouseInfo","alarmInfo"], "state":false, "exeCommands":false},//uncheck other function button.<br>' +
						'					{ "cmd": "GetValue", "fromBuffer":{"ObjectManager":"RunBuffer/curShowPanelObj"}, "path":"MonitorDatas/RealTimeData", "toBuffer":{"ObjectManager":"RunBuffer/panelData"}},<br>' +	
						'					{ "cmd": "SetPropListPanelKeyValue", "valueBuffer":{"ObjectManager":"RunBuffer/panelData"} ,"names":["warehouse_index","Catelog","Qualtity","Manager","UpdateTime","Power Consumption","CheckNumber"]}<br>' +
						'				]<br>' +
						'			},<br>' +
						'			{<br>' +
						'				"name":"Warehouse Info",<br>' +
						'				"clickCmds":[<br>' +
						'					{ "cmd": "ChangePropListPanelItems", "items":["basicInfo","alarmInfo"], "state":false, "exeCommands":false},<br>' +
						'					{ "cmd": "GetValue", "fromBuffer":{"ObjectManager":"RunBuffer/curShowPanelObj"}, "path":"MonitorDatas/RealTimeData", "toBuffer":{"ObjectManager":"RunBuffer/panelData"}},<br>' +	
						'					{ "cmd": "SetPropListPanelKeyValue", "valueBuffer":{"ObjectManager":"RunBuffer/panelData"} ,"names":["Temperature","WarehouseTemperature","          Up","          MiddleUp","          MiddleDown","          Down","AvgTemperature","Humidity","InsectControl"]}<br>' +
						'				]<br>' +
						'			},<br>' +
						'			{<br>' +
						'				"name":"alarmInfo",<br>' +
						'				"clickCmds":[<br>' +
						'					{ "cmd": "ChangePropListPanelItems", "items":["basicInfo","warehouseInfo"], "state":"unclicked", "exeCommands":false},<br>' +
						'					{ "cmd": "GetValue", "fromBuffer":{"ObjectManager":"RunBuffer/curShowPanelObj"}, "path":"MonitorDatas/RealTimeData", "toBuffer":{"ObjectManager":"RunBuffer/panelData"}},<br>' +	
						'					{ "cmd": "SetPropListPanelKeyValue", "valueBuffer":{"ObjectManager":"RunBuffer/panelData"} ,"names":["Temperature","Fire","InsectControl"]}<br>' +
						'				]<br>' +
						'			},<br>' +
						'			{<br>' +
						'				"name":"Barcode",<br>' +
						'				"clickCmds":[<br>' +
						'					{ "cmd": "GetValue", "fromBuffer":{"ObjectManager":"RunBuffer/curShowPanelObj"}, "path":"MonitorDatas/RealTimeData/barcode_url", "toBuffer":{"ObjectManager":"RunBuffer/barcode_url"}},<br>' +
						'					{ "cmd": "UrlWindow" ,"urlBuffer":{"ObjectManager":"RunBuffer/barcode_url"} ,"title":"Barcode", "width":"250" , "height":"250"}<br>' +
						'				]<br>' +
						'			}<br>' +
						'		]<br>' +
						'	}<br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"HidePropListPanel",
		"cmdDes":"Hide property list panel",
		"parameters":[
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "HidePropListPanel" <br>' +
						'}'	
			}
		]
	},	
	
	{
		"cmd":"ChangePropListPanelItems",
		"cmdDes":"Change panel button status",
		"parameters":[
			{ "parameter":"items", "des":"Array to set button status in bulk" , "required":true },
			{ "parameter":"state", "des":"ture means clicked, false means unclicked" , "required":true },
			{ "parameter":"exeCommands", "des":"Run command while change to clicked" , "required":false, "default":false },
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "ChangePropListPanelItems", <br>' +
						'	"items":["warehouseInfo","alarmInfo"], <br>' +
						'	"state":false, <br>' +
						'	"exeCommands":false <br>' +
						'}'
			}
		]
	},
	{
		"cmd":"SetPropListPanelKeyValue",
		"cmdDes":"Show object property on panel",
		"parameters":[
			{ "parameter":"valueBuffer", "des":"Buffer name" , "required":true },
			{ "parameter":"names", "des":"Get data from buffer by order of name array" , "required":false }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetPropListPanelKeyValue", <br>' +
						'	"valueBuffer":{"ObjectManager":"RunBuffer/panelData"}, <br>' +
						'	"names":["Temperature","Fire","InsectControl"] <br>' +
						'}'
			}
		]
	}
	
]

docCreator.addDocItemFromData("UI", cmds)

