var cmds = [
	{
		"cmd":"ShowPanel",
		"cmdDes":"设定模模搭内置界面的显示或隐藏。",
		"parameters":[	
			{ "parameter":"panel", "des":"输入要控制面板的名字<br>	" +
					"可控制的面板清单:<br>	" +
					"	viewPointPanel： 视点和视点动画界面<br>	" +
					"	fuctionListPanel： 工具清单界面<br>	" +
					//"	searchPanel： 界面<br>	" +
					"	switch3dPanel： 3D转2D界面切换工具<br>	" +
					"	effectPanel： 效果控制界面<br>	" +
					"	screenShotPanel： 屏幕打印工具<br>	" +
					"	levelPanel： 楼层控制界面<br>	" +
					"", "required":true },
					
			{ "parameter":"enable", "des":"设定是否显示界面", "required":true }
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
		"cmdDes":"创建界面模板。",
		"parameters":[
			{ "parameter":"template", "des":"要设定模板的内容，具体内容看下方例子。", "required":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CreatePlacemarkTemplate", <br>' +
						'	"template":{ <br>' +
						'	    "name": "模板例子",<br><br>' +
						'		//设置界面整体的大小<br>' +
						'	    "bgWidth": 243,<br>' +
						'	    "bgHeight": 149,<br><br>' +
						'		//设置界面整体轴心点位置<br>' +
						'		"horizontalAlignment":"LEFT",	// 水平方向上轴心点的位置，可填写 LEFT CENTER RIGHT<br>' +
						'		"verticalAlignment":"TOP",	// 垂直方向上轴心点的位置,可填写 TOP CENTER BOTTOM<br><br>' +
						'		//配置界面中使用的控件<br>' +
						'	    "showMapping": {<br>' +
						'			"背景": {<br>' +
						'				//控件基础参数<br>' +
						'				"type": "image",<br>' +
						'	            "sortOrder": 0,<br>' +
						'	            "drawPos": [0, 0],<br>' +
						'	            "drawSize": [ 243, 149 ],<br>' +
						'				<br>' +
						'				//设置轴心点<br>' +
						'				"horizontalAlignment":"LEFT",	//水平方向上轴心点的位置<br>' +
						'				"horizontalAlignmentOffset":0,	//水平方向上轴心点的位置的偏移量<br>' +
						'				"verticalAlignment":"TOP",	//垂直方向上轴心点的位置<br>' +
						'				"verticalAlignmentOffset":0,	//水平方向上轴心点的位置的偏移量<br>' +
						'				<br>' +
						'				//控件私有参数<br>' +	
						'				"image":"userimage/4815/CustomTexture/20151023824126.png",<br>' +
						'				"color":[0,0,1],	//颜色可以和image混合生效<br>' +
						'				<br>' +
						'				//数据获取<br>' +
						'				"getMethod": "objectPropertyMapping",<br>' +
						'				"propertyPath":"MonitorDatas/RealTimeData/工作状态",<br>' +
						'				"objectPropertyMapping":{<br>' +
						'					"_default_":"userimage/4815/CustomTexture/1.png",	//设置字符串代表给image设置<br>' +
						'					"报警":{"color":[1,0.2,0.2]},	//可以不改变贴图的情况下，设置颜色<br>' +
						'					"错误":{	//可以即改变贴图又设置颜色<br>' +
						'						"image":"userimage/4815/CustomTexture/3.png",<br>' +
						'						"color":[1,0,0]<br>' +
						'					}<br>' +
						'				}<br>' +
						'		},<br>' +
						'		"名字": {<br>' +
						'				//控件基础参数<br>' +
						'				"type": "text",<br>' +
						'	            "sortOrder": 1,<br>' +
						'	            "drawPos": [0, 0],<br>' +
						'	            "drawSize": [243, 39],<br>' +
						'				<br>' +
						'				//设置轴心点<br>' +
						'				"horizontalAlignment":"LEFT",	//水平方向上轴心点的位置<br>' +
						'				"horizontalAlignmentOffset":0,	//水平方向上轴心点的位置的偏移量<br>' +
						'				"verticalAlignment":"TOP",	//垂直方向上轴心点的位置<br>' +
						'				"verticalAlignmentOffset":0,	//水平方向上轴心点的位置的偏移量<br>' +
						'				<br>' +
						'				//控件私有参数<br>' +
						'	            "fontFamily": "Arial",	//字体目前就一种<br>' +
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
						'				//数据获取<br>' +
						'				"getMethod": "objectProperty",<br>' +
						'	            "propertyPath": "UserID"<br>' +
						'	        },<br>' +
						'			"状态": {<br>' +
						'				//控件基础参数<br>' +
						'				"type": "text",<br>' +
						'	            "sortOrder": 1,<br>' +
						'	            "drawPos": [26,80],<br>' +
						'	            "drawSize": [50,30],<br>' +
						'				<br>' +
						'				//控件私有参数（只列了最常用的）<br>' +
						'	            "fontSize": 14,<br>' +
						'	            "fontColor": [1,1,1,1],<br>' +
						'				<br>' +
						'				//数据获取<br>' +
						'	            "getMethod": "objectPropertyMapping",<br>' +
						'	            "propertyPath": "MonitorDatas/RealTimeData/工作状态",<br>' +
						'				"objectPropertyMapping":{<br>' +
						'					"_default_":{"text":"正常", "fontColor":[0,1,0]},<br>' +
						'					"false":{"text": "错误", "fontColor":[1,0,0]}<br>' +
						'				}<br>' +
						'	        },		<br>' +
						'	         "条状进度条": {<br>' +
						'				//控件基础参数<br>' +
						'				"type": "progressBar",<br>' +
						'	            "sortOrder": 1,<br>' +
						'	            "drawPos": [74, 40],<br>' +
						'	            "drawSize": [128, 20],<br>' +
						'				<br>' +
						'				//设置轴心点<br>' +
						'				"horizontalAlignment":"LEFT",	//水平方向上轴心点的位置<br>' +
						'				"horizontalAlignmentOffset":0,	//水平方向上轴心点的位置的偏移量<br>' +
						'				"verticalAlignment":"TOP",	//垂直方向上轴心点的位置<br>' +
						'				"verticalAlignmentOffset":0,	//水平方向上轴心点的位置的偏移量<br>' +
						'				<br>' +
						'				//控件私有参数<br>' +
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
						'				//数据获取<br>' +
						'	            "getMethod": "objectProperty",<br>' +
						'	            "propertyPath": "MonitorDatas/RealTimeData/湿度"<br>' +
						'	        },<br>' +
						'			"饼图": {<br>' +
						'				//控件基础参数<br>' +
						'				"type": "progressPie",<br>' +
						'	            "sortOrder": 1,<br>' +
						'	            "drawPos": [99,90],<br>' +
						'	            "drawSize": [50,50],<br>' +
						'				<br>' +
						'				//设置轴心点<br>' +
						'				"horizontalAlignment":"LEFT",	//水平方向上轴心点的位置<br>' +
						'				"horizontalAlignmentOffset":0,	//水平方向上轴心点的位置的偏移量<br>' +
						'				"verticalAlignment":"TOP",	//垂直方向上轴心点的位置<br>' +
						'				"verticalAlignmentOffset":0,	//水平方向上轴心点的位置的偏移量<br>' +
						'				<br>' +
						'				//控件私有参数<br>' +
						'				"openAngle":"360",<br>' +
						'				"fillDirClockwise":true,	//顺时针<br>' +
						'				"ringImage":"uGUI/ProgressBar/img_3",	// 3是圆<br>' +
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
						'				//数据获取<br>' +
						'	            "getMethod": "objectProperty",<br>' +
						'	            "propertyPath": "MonitorDatas/RealTimeData/湿度"<br>' +
						'	 		<br>' +
						'	        },<br>' +
						'			"环状图": {<br>' +
						'				//控件基础参数<br>' +
						'				"type": "progressRing",<br>' +
						'	            "sortOrder": 1,<br>' +
						'	            "drawPos": [149,90],<br>' +
						'	            "drawSize": [50,50],<br>' +
						'				<br>' +
						'				//设置轴心点<br>' +
						'				"verticalAlignment":"CENTER",<br>' +
						'				"verticalAlignmentOffset":0,<br>' +
						'				"horizontalAlignment":"CENTER",<br>' +
						'				"horizontalAlignmentOffset":0,<br>' +
						'				<br>' +
						'				//控件私有参数<br>' +
						'				"openAngle":"360",<br>' +
						'				"fillDirClockwise":false,	// 逆时针<br>' +
						'				"ringImage":"uGUI/ProgressBar/img_2",	// 1 2 是圆环<br>' +
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
						'				//数据获取<br>' +
						'				"getMethod": "objectProperty",<br>' +
						'	            "propertyPath": "MonitorDatas/RealTimeData/湿度",<br>' +
						'	        },<br>' +
						'			"显示值": {<br>' +
						'				//控件基础参数<br>' +
						'				"type": "text",	<br>' +
						'	            "sortOrder": 2,<br>' +
						'	            "drawPos": [74,65],<br>' +
						'	            "drawSize": [128,20],<br>' +
						'				<br>' +
						'	           //数据获取<br>' +
						'	            "getMethod": "objectProperty",<br>' +
						'	            "propertyPath": "MonitorDatas/RealTimeData/湿度"<br>' +
						'	        },<br>' +
						'			"按钮": {<br>' +
						'				//控件基础参数<br>' +
						'				"type": "button",<br>' +
						'	            "sortOrder": 1,<br>' +
						'	            "drawPos": [194,98],<br>' +
						'				"drawSize": [35,22],<br>' +
						'				<br>' +
						'	            //控件私有参数<br>' +
						'	            "fontSize": 12,	<br>' +
						'	            "fontColor": [0.235,0.792,0.501,1],<br>' +
						'				"title":"详细",<br>' +
						'				"normalColor": [0.3,0.5,0.3,0],<br>' +
						'	            "highlightedColor": [1,1,1],<br>' +
						'	            "pressedColor": [0.6,0.5,0.2,0],<br>' +
						'				<br>' +
						'				"cmds":[<br>' +
						'					{"cmd":"OpenUrl", "uid":{"objectManager":"Runbuffer/按钮1"} }<br>' +
						'				],<br>' +
						'				"cmdsImmediate":false<br>' +
						'	        },<br>' +
						'			"开关按钮": {<br>' +
						'				//控件基础参数<br>' +
						'				"type": "toggle",<br>' +
						'	         	"sortOrder": 1,<br>' +
						'	            "drawPos": [194,98],<br>' +
						'				"drawSize": [35,22],<br>' +
						'				<br>' +
						'	            //控件私有参数<br>' +
						'				"images":["http://www.3momoda.com/images/add_01.png","images/add_02.png","images/add_02.png"],	// 三张图分别是1 平时图片 2鼠标放上时图片 3点击后图片,路径是可以使完全url，也可以是去除域名的相对路径<br>' +
						'	            "fontSize": 12,	<br>' +
						'	            "fontColor": [0.235,0.792,0.501,1],<br>' +
						'				"title":"开",<br>' +
						'				"checked":true,<br>' +
						'				"setCheckedExe":false,	//当通过属性checked设置按钮时，是否运行对应的命令<br>' +
						'				<br>' +
						'				"checkCmds":[<br>' +
						'					{ "cmd":"SetPlacemarkProperty","uid":"obj01" ,"templateName":"模板例子" ,"widgetName":"开关按钮" ,"property":"title" ,"value":"关" }<br>' +
						'				],<br>' +
						'				"unCheckCmds":[<br>' +
						'					{ "cmd":"SetPlacemarkProperty","uid":"obj01" ,"templateName":"模板例子" ,"widgetName":"开关按钮" ,"property":"title" ,"value":"开" }<br>' +
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
		"cmdDes":"使用已有的模板复制出一个新的",
		"parameters":[
			{ "parameter":"originName", "des":"要复制的模板名字" , "required":true },
			{ "parameter":"newName", "des":"复制后新的模板名字", "required":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CopyPlacemarkTemplate", <br>' +
						'	"originName":"温度显示牌", <br>' +
						'	"newName":"电量显示牌" <br>' +
						'}'	
			}
		]
	},	
	
	{
		"cmd":"DestroyPlacemarkTemplate",
		"cmdDes":"删除指定模板",
		"parameters":[
			{ "parameter":"name", "des":"指定要删除的模板名字" , "required":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "DestroyPlacemarkTemplate", <br>' +
						'	"name":"温度显示牌" <br>' +
						'}'	
			}
		]
	},		
	
	{
		"cmd":"SetPlacemarkTemplateConfig",
		"cmdDes":"修改模板内部使用控件的属性设置。<br>	" +
				"注：这个命令不影响已经使用这个模板创建的界面，要修改已经创建的界面，使用 SetPlacemarkProperty 命令。",
		"parameters":[
			{ "parameter":"name", "des":"指定要修改的模板名字" , "required":true },
			{ "parameter":"path", "des":"指定要修改哪个控件的哪个属性,中间使用'/'分割" , "required":true },
			{ "parameter":"config", "des":"要修改的值" , "required":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetPlacemarkTemplateConfig", <br>' +
						'	"name":"监控面板",<br>' +
						'	"path":"进度条2/styleConfig",<br>' +
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
		"cmdDes":"创建界面",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"templateName", "des":"创建时使用的模板名字" , "required":true },
			{ "parameter":"placemarkId", "des":"可以指定创建的界面的名字。<br>	" +
					"注：如果通过ObjectCommand输入物体，标示界面是创建到物体身上，此时可以不输入placemarkId。那是系统会内置使用 '物体uid_模板名字'作为placemarkId" , "required":false },
			{ "parameter":"type", "des":"指定界面是创建到3D里还是浮于屏幕上<br>	" +
					"可设置选项：<br>	" +
					"	Screen：标示这个界面是在屏幕坐标下创建的，大小不会随着摄影机远近而变化<br>	" +
					"	Plane：标示这个界面是在3D坐标下创建的，大小会随着摄影机远近而变化" , "required":false, "default":"Screen" },
//			{ "parameter":"worldSize", "des":"指定要删除的模板名字" , "required":true },
//			{ "parameter":"track", "des":"指定要删除的模板名字" , "required":true },
//			{ "parameter":"axis", "des":"指定要删除的模板名字" , "required":true },
			{ "parameter":"scale", "des":"当type设置成Plane，界面在3D中显示时，默认的大小是使用模板里定义的像素点大小变成使用'米制'，这里通过scale来控制界面的大小" , "required":false, "default":[0.2, 0.2, 0.2] },			
			{ "parameter":"presetPos", "des":"可以指定界面放置的位置。在type设置为Plane时，输入三维坐标， 在type设置为Screen时，输入二维坐标。<br>	" +
					"注：如果没有指定位置，界面又是创建在物体上时，默认显示位置是物体的头顶" , "required":false },
			{ "parameter":"posFromBuffer", "des":"同presetPos，通过buffer输入位置" , "required":false },
			{ "parameter":"layoutOffset", "des":"当创建在物体上，默认显示位置是物体的头顶，这个参数可以再设定一个偏移量。在type设置为Plane时，输入三维坐标， 在type设置为Screen时，输入二维坐标。" , "required":false },
			{ "parameter":"turnWhenNegative", "des":"输入位置的坐标是二维坐标时，如果坐标是负值：<br>	" +
					"当turnWhenNegative设置成true，标示坐标是反方向计算的。比如[-0.1, -100],表示距屏幕右边10%,下面100像素点的位置。<br>	" +
					"当turnWhenNegative设置成false，标示坐标是在屏幕外侧。比如[-0.1, -100],表示距屏幕左边-10%,上面-100像素点的位置,就是在屏幕外了。<br>	" , "required":false, "default":false },
			{ "parameter":"countPerFrame", "des":"使用命令可以同时给多个物体创建头顶的界面，这个参数控制每帧可同时创建的数量，以优化显示。当设为0时，标示一次创建所有的界面，如果数量很多可能会卡死一段时间。" , "required":false, "default":0   },
			{ "parameter":"additiveDataObjects", "des":"当界面创建在物体上，物体作为宿主可以给界面提供数据。但当界面需要多个物体数据源，或者界面是个二维屏幕界面，没有创建在物体上，有需要物体提供数据时，可以通过这个参数控制物体数据的来源。<br>	" +
					"使用键值对可输入多个数据源，键用于模板里引用属性路径，值可以输入字符或者buffer，字符代表物体的id或者uid，所有如果输入buffer，不能使用字符代表Buffer的简写方式。" , "required":false },			
			{ "parameter":"updateTime", "des":"界面上如果连接了物体显示实时数据，这个参数控制界面刷新数据的时间间隔，单位是秒" , "required":false, "default":1 }
			
		],
		"examples":[
			{
				"name":"给一个物体创建监控面板,没有输入placemarkId",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CreatePlacemark", <br>' +
						'	"uid":"senser01", <br>' +
						'	"type":"Plane", <br>' +						
						'	"templateName":"温湿度显示模板", <br>' +
						'	"layoutOffset":[0,1,0],<br>' +
						'	"scale":[0.1,0.1,0.1]<br>' +
						'}'	
			},
			{
				"name":"同时给多个物体创建监控面板，因为是多个物体同时创建，这时也就不能输入placemarkId",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CreatePlacemark", <br>' +
						'	"fromBuffer":"allSenser", <br>' +
						'	"type":"Screen", <br>' +						
						'	"templateName":"温湿度显示模板", <br>' +
						'	"layoutOffset":[0,50],<br>' +
						'	"countPerFrame":5<br>' +
						'}'	
			},	
			{
				"name":"创建一个2D界面，同时输入多个数据源",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CreatePlacemark", <br>' +
						'	"placemarkId":"监控显示面板01", <br>' +
						'	"type":"Screen", <br>' +						
						'	"templateName":"监控显示面板模板", <br>' +
						'	"presetPos":[0.5,50],<br>' +
						'	"additiveDataObjects":{<br>' +
						'		"数据源物体1": "obj01" , //输入字符串代表物体的id或者uid<br>' +
						'		"数据源物体2": {"ObjectManager": "RunBuffer/obj02"} //通过buffer输入这个数据源，但不能使用字符串的buffer简写方式<br>' +
						'	} <br>' +
						'}'	
			}				
		]
	},		
	{
		"cmd":"DestroyPlacemark",
		"cmdDes":"删除指定界面",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"placemarkId", "des":"创建时设置了placemarkId，这里需要输入placemarkId" , "required":false },
			{ "parameter":"templateName", "des":"创建时没有设置placemarkId，系统会内置使用 '物体uid_模板名字'作为placemarkId，所有使用这种方法创建时，需要传入templateName" , "required":false }
			
		],
		"examples":[
			{
				"name":"创建时没有输入placemarkId，这里需要输入物体和templateName",
				"context":	'' +
						'{<br>' +
						'	"cmd": "DestroyPlacemark", <br>' +
						'	"uid":"obj01", <br>' +
						'	"templateName":"温湿度显示模板"<br>' +
						'}'	
			},
			{
				"name":"同时控制多个物体时，在创建时无法输入placemarkId，销毁时就要传入templateName",
				"context":	'' +
						'{<br>' +
						'	"cmd": "DestroyPlacemark", <br>' +
						'	"fromBuffer":"allSenser", <br>' +
						'	"templateName":"温湿度显示模板"<br>' +
						'}'	
			},
			{
				"name":"创建是指定了placemarkId，这里可以使用placemarkId指定销毁哪个界面",
				"context":	'' +
						'{<br>' +
						'	"cmd": "DestroyPlacemark", <br>' +
						'	"placemarkId":"监控显示面板01" <br>' +
						'}'	
			}			
		]
	},
	{
		"cmd":"GetLastClickedButtonPlacemarkHost",
		"cmdDes":"和GetLastEventObj和GetLastMonitorRespondObj类似，在界面上点击button后，在后面的需要知道点击这个button的界面的物体宿主是谁。",
		"parameters":[
			{ "parameter":"toBuffer", "des":"设置物体宿主存放的buffer" , "required":true }
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
		"cmdDes":"修改已经创建的界面属性",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"placemarkId", "des":"创建时设置了placemarkId，这里需要输入placemarkId" , "required":false },
			{ "parameter":"templateName", "des":"创建时没有设置placemarkId，系统会内置使用 '物体uid_模板名字'作为placemarkId，所有使用这种方法创建时，需要传入templateName" , "required":false },
			{ "parameter":"widgetName", "des":"要控制的控件的名字" , "required":true },
			{ "parameter":"property", "des":"要设置的控件的属性名" , "required":true },
			{ "parameter":"value", "des":"要修改的值<br>	" +
					"注：模模搭内部开发是使用强数据类型语言，SetPlacemarkProperty这个命令是通用命令，不同的物体的不同属性需要不同的数据类型，这里填写数据不像在命令里那样符合json标准就行了，有的要表示数据类型。<br>	" +
					"属性的值如果是字符串，数字，布尔可以正常填写。<br>	" +
					"如果是 vector3，color等这种数据，不能简单使用数组，要写成下面的形式<br>	" +
					"{\"Vector3\":[1,0,0]}<br>	" +
					"{\"Vector2\":[1,0]}<br>	" +
					"{\"Color\":[1,0,0,1]}<br>	", "required":true}
		],
		"examples":[
			{
				"name":"属性的值如果是字符串，数字，布尔可以正常填写",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetPlacemarkProperty", <br>' +
						'	"uid":"obj01", <br>' +
						'	"templateName":"温湿度显示模板", <br>' +
						'	"widgetName":"状态", <br>' +
						'	"property":"text", <br>' +
						'	"value":"正常" <br>' +
						'}'	
			},		
			{
				"name":"如果是 vector3，color等这种数据，不能简单使用数组，需要标示数据类型",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetPlacemarkProperty", <br>' +
						'	"uid":"obj01", <br>' +
						'	"templateName":"温湿度显示模板", <br>' +
						'	"widgetName":"进度条2", <br>' +
						'	"property":"Color", <br>' +
						'	"value":{"Color":[1,0,0]} <br>' +
						'}'	
			}
		]
	},	

	{
		"cmd":"CreateLayerPanel",
		"cmdDes":"模模搭内置一个简易的功能面板,可设定多个功能组，每个组也可设置多个功能",
		"parameters":[
			{ "parameter":"config", "des":"配置图层有哪些选项" , "required":true },
			{ "parameter":"presetPos", "des":"可以指定界面放置的位置，输入二维坐标。<br>	" +
					"注：如果没有指定位置，界面又是创建在物体上时，默认显示位置是物体的头顶" , "required":false },
			{ "parameter":"posFromBuffer", "des":"同presetPos，通过buffer输入位置" , "required":false },
			{ "parameter":"turnWhenNegative", "des":"输入位置的坐标是二维坐标时，如果坐标是负值：<br>	" +
					"当turnWhenNegative设置成true，标示坐标是反方向计算的。比如[-0.1, -100],表示距屏幕右边10%,下面100像素点的位置。<br>	" +
					"当turnWhenNegative设置成false，标示坐标是在屏幕外侧。比如[-0.1, -100],表示距屏幕左边-10%,上面-100像素点的位置,就是在屏幕外了。<br>	" , "required":false, "default":false }
			
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
						//'		"drawPos":[-100, 0.5],<br>' +
						//'		"turnWhenNegative":true,<br>// 详见CreatePlacemark命令里针对turnWhenNegative的解释' +
						'		//设置面板整体的大小<br>' +						
						'		"bgWidth": 150,<br>' +
						'		"bgHeight": 330,<br><br>' +
						'		//设置界面整体轴心点位置<br>' +
						'		"horizontalAlignment":"LEFT",	// 水平方向上轴心点的位置，可填写 LEFT CENTER RIGHT<br>' +
						'		"verticalAlignment":"CENTER",	// 垂直方向上轴心点的位置,可填写 TOP CENTER BOTTOM<br><br>' +
						'		//可以创建多个功能分组,界面会列出多列<br>' +						
						'		"groups":[<br>' +	
						'			{<br>' +	
						'				"name":"基础功能",<br>' +	
						'				"icon":"userimage/3534/CustomTexture/20150708325991.png", //组可以设定一个图标<br>' +	
						'				"textConfig":{	//这里针对字的设置参数,界面模板针对text设置参数兼容<br>' +
						'					"fontFamily": "Arial",<br>' +
						'					"fontSize": 18,<br>' +
						'					"drawSize": [100,38],<br>' +
						'					"verticalTextAlignment": "CENTER",<br>' +
						'					"fontColor": [1,1,1,1] <br>' +
						'				},<br><br>' +
						'				//每组下可创建多个功能项<br>' +
						'				"items":[<br>' +
						'					{<br>' +
						'						 "name":"仓库编号",<br>' +
						'						 "textConfig":{	<br>' +	
						'							 "fontFamily": "Arial",<br>' +
						'							 "fontSize": 14,<br>' +
						'							 "fontColor": [0,0,0,1]<br>' +
						'						 },<br>' +
						'						 "initCmds":[ //一创建就执行的命令<br>' +
						'							{ "cmd":"ChangeLayerPanelItems","items":["仓库编号"],"state":true } //设置这个功能项为勾选状态<br>' +
						'						 ],<br>' +
						'						 "checkCmds":[ //这个功能项被勾选时要执行的命令<br>' +
						'							{ "cmd":"ChangeLayerPanelItems","items":["温度监控","湿度监控"],"state":false }, //取消其他功能项的勾选状态,可实现多功能项间的互斥功能<br>' +
						'							{ "cmd":"CreatePlacemark", "fromBuffer":{"ObjectManager": "RunBuffer/粮仓"}, "templateName" : "仓库编号", "type":"screen", "countPerFrame":100000}	<br>' +	
						'						 ],<br>' +
						'						 "unCheckCmds":[ //这个功能项切换成不勾选状态时要执行的命令<br>' +
						'							{ "cmd":"DestroyPlacemark", "fromBuffer":{"ObjectManager": "RunBuffer/粮仓"}, "templateName" : "仓库编号"}<br>' +
						'						 ]<br>' +
						'					 },<br>' +
						'					{<br>' +
						'						 "name":"温度监控",<br>' +
						'						......<br>' +
						'					},<br>' +
						'					......<br>' +
						'				]<br>' +
						'			},<br>' +
						'			{<br>' +
						'				"name":"高级功能",<br>' +
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
		"cmdDes":"删除功能面板",
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
		"cmdDes":"设置功能面板里功能项的勾选状态",
		"parameters":[
			{ "parameter":"items", "des":"通过数组可同时控制多个功能项" , "required":true },
			{ "parameter":"state", "des":"输入true或false，指定是否是勾选状态" , "required":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "ChangeLayerPanelItems", <br>' +
						'	"items":["温度监控","用电监控"], <br>' +
						'	"state":true <br>' +
						'}'	
			}
		]
	},	
	
	{
		"cmd":"ShowLayerPanel",
		"cmdDes":"设置是否显示功能面板",
		"parameters":[			
			{ "parameter":"enable", "des":"指定要删除的模板名字" , "required":true }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "ChangeLayerPanelItems", <br>' +
						'	"items":["温度监控","用电监控"], <br>' +
						'	"enable":true <br>' +
						'}'	
			}
		]
	},	
	{
		"cmd":"ShowHideLayerPanel",
		"cmdDes":"功能面板在显示和不显示间切换",
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
		"cmdDes":"模模搭内置一个简易的物体属性面板，输入一个物体，显示这个物体的属性。同时,面板同时可以配置多个功能按钮。",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"config", "des":"可以配置多个功能按钮" , "required":true },
			{ "parameter":"presetPos", "des":"可以指定界面放置的位置，输入二维坐标。<br>	" +
					"注：如果没有指定位置，界面又是创建在物体上时，默认显示位置是物体的头顶" , "required":false },
			{ "parameter":"posFromBuffer", "des":"同presetPos，通过buffer输入位置" , "required":false },
			{ "parameter":"turnWhenNegative", "des":"输入位置的坐标是二维坐标时，如果坐标是负值：<br>	" +
					"当turnWhenNegative设置成true，标示坐标是反方向计算的。比如[-0.1, -100],表示距屏幕右边10%,下面100像素点的位置。<br>	" +
					"当turnWhenNegative设置成false，标示坐标是在屏幕外侧。比如[-0.1, -100],表示距屏幕左边-10%,上面-100像素点的位置,就是在屏幕外了。<br>	" , "required":false, "default":false }
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
						'		"initCmds":[ //一创建就执行的命令<br>' +
						'			{ "cmd":"CopyBuffer",  "fromBuffer":{"ObjectManager":"RunBuffer/lastEventObj"}, "toBuffer":{"ObjectManager":"RunBuffer/curShowPanelObj"}} ,<br>' +
						'			{ "cmd":"ChangePropListPanelItems", "items":["基本信息"], "state":true, "exeCommands":true } //设置初始化时哪个按钮是被点击的<br>' +
						'		],<br>' +
						'		"items":[<br>' +
						'			{<br>' +
						'				"name":"基本信息",<br>' +
						'				"normalColor":[0.415,0.839,0.462,1],//正常的颜色<br>' +
						'				"highlightedColor":[0.337,0.666,0.372,1], //鼠标放上去的颜色<br>' +
						'				"pressedColor":[0.415,0.839,0.462,1], //鼠标按下的颜色<br>' +
						'				"clickCmds":[<br>' +
						'					{ "cmd": "ChangePropListPanelItems", "items":["粮情信息","报警信息"], "state":false, "exeCommands":false},//取消其他功能项的点击状态,可实现多功能项间的互斥功能<br>' +
						'					{ "cmd": "GetValue", "fromBuffer":{"ObjectManager":"RunBuffer/curShowPanelObj"}, "path":"MonitorDatas/RealTimeData", "toBuffer":{"ObjectManager":"RunBuffer/面板显示数据"}},<br>' +	
						'					{ "cmd": "SetPropListPanelKeyValue", "valueBuffer":{"ObjectManager":"RunBuffer/面板显示数据"} ,"names":["仓号","品种","库存数量","保管员","入库时间","用电量","单仓核算"]}<br>' +
						'				]<br>' +
						'			},<br>' +
						'			{<br>' +
						'				"name":"粮情信息",<br>' +
						'				"clickCmds":[<br>' +
						'					{ "cmd": "ChangePropListPanelItems", "items":["基本信息","报警信息"], "state":false, "exeCommands":false},<br>' +
						'					{ "cmd": "GetValue", "fromBuffer":{"ObjectManager":"RunBuffer/curShowPanelObj"}, "path":"MonitorDatas/RealTimeData", "toBuffer":{"ObjectManager":"RunBuffer/面板显示数据"}},<br>' +	
						'					{ "cmd": "SetPropListPanelKeyValue", "valueBuffer":{"ObjectManager":"RunBuffer/面板显示数据"} ,"names":["仓房温度","粮食温度","          上","          中上","          中下","          下","平均温度","湿度","虫害"]}<br>' +
						'				]<br>' +
						'			},<br>' +
						'			{<br>' +
						'				"name":"报警信息",<br>' +
						'				"clickCmds":[<br>' +
						'					{ "cmd": "ChangePropListPanelItems", "items":["基本信息","粮情信息"], "state":"unclicked", "exeCommands":false},<br>' +
						'					{ "cmd": "GetValue", "fromBuffer":{"ObjectManager":"RunBuffer/curShowPanelObj"}, "path":"MonitorDatas/RealTimeData", "toBuffer":{"ObjectManager":"RunBuffer/面板显示数据"}},<br>' +	
						'					{ "cmd": "SetPropListPanelKeyValue", "valueBuffer":{"ObjectManager":"RunBuffer/面板显示数据"} ,"names":["温度","火灾","虫害"]}<br>' +
						'				]<br>' +
						'			},<br>' +
						'			{<br>' +
						'				"name":"二维码",<br>' +
						'				"clickCmds":[<br>' +
						'					{ "cmd": "GetValue", "fromBuffer":{"ObjectManager":"RunBuffer/curShowPanelObj"}, "path":"MonitorDatas/RealTimeData/二维码url", "toBuffer":{"ObjectManager":"RunBuffer/二维码url"}},<br>' +
						'					{ "cmd": "UrlWindow" ,"urlBuffer":{"ObjectManager":"RunBuffer/二维码url"} ,"title":"二维码", "width":"250" , "height":"250"}<br>' +
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
		"cmdDes":"隐藏物体面板",
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
		"cmdDes":"设置物体面板里按钮的点击状态",
		"parameters":[
			{ "parameter":"items", "des":"通过数组可同时控制多个按钮项" , "required":true },
			{ "parameter":"state", "des":"输入true或false，指定是否是点击状态" , "required":true },
			{ "parameter":"exeCommands", "des":"设置状态为true时,是否运行命令" , "required":false, "default":false },
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "ChangePropListPanelItems", <br>' +
						'	"items":["粮情信息","报警信息"], <br>' +
						'	"state":false, <br>' +
						'	"exeCommands":false <br>' +
						'}'
			}
		]
	},
	{
		"cmd":"SetPropListPanelKeyValue",
		"cmdDes":"让物体属性面板显示物体数据",
		"parameters":[
			{ "parameter":"valueBuffer", "des":"需要先把属性值放到buffer里，这里引入buffer，提供过给面板显示数据" , "required":true },
			{ "parameter":"names", "des":"从buffer里取值，按照names的内容和次序" , "required":false }
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetPropListPanelKeyValue", <br>' +
						'	"valueBuffer":{"ObjectManager":"RunBuffer/面板显示数据"}, <br>' +
						'	"names":["温度","火灾","虫害"] <br>' +
						'}'
			}
		]
	}
	
]

docCreator.addDocItemFromData("界面", cmds)

