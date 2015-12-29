var cmds = [
	{
		"cmd":"OpenUrl",
		"cmdDes":"使用输入的url弹开一个页面,等同于在页面上调用window.open ,目前这个命令只能运行于浏览器下使用的情况",
		"parameters":[	
			{ "parameter":"url", "des":"要打开的url", "requred":false },
			{ "parameter":"urlBuffer", "des":"使用buffer提供要打开的url", "requred":false},
			{ "parameter":"param", "des":"打开页面使用的参数，格式和window.open使用的参数相同<br>	" +
					"如：‘height=100, width=400, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no’", "requred":false},
			
		],
		"examples":[	
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "OpenUrl", <br>' +
						'	"url":"http://www.3dmomoda.com", <br>' +
						'	"param": "height=100, width=400, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no"' +
						'}'	
			},
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "OpenUrl", <br>' +
						'	"urlBuffer":"url", <br>' +
						'	"param": "height=100, width=400, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no"' +
						'}'	
			}	
		]
	},
	{
		"cmd":"UrlWindow",
		"cmdDes":"使用输入的url弹开一个页面窗口 ,目前这个命令只能运行于浏览器下使用的情况",
		"parameters":[	
			{ "parameter":"url", "des":"要打开的url", "requred":false },
			{ "parameter":"urlBuffer", "des":"使用buffer提供要打开的url", "requred":false},
			{ "parameter":"title", "des":"打开窗口的title文字", "requred":false},
			{ "parameter":"titleBuffer", "des":"使用buffer提供窗口的title文字", "requred":false},
			{ "parameter":"width", "des":"打开窗口的宽度", "requred":false},
			{ "parameter":"height", "des":"打开窗口的位置", "requred":false},
		],
		"examples":[	
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "UrlWindow", <br>' +
						'	"urlBuffer":"url", <br>' +
						'	"title": "信息窗口", <br>' +
						'	"width": 512, <br>' +
						'	"height": 512 <br>' +
						'}'	
			}	
		]
	}	,
	{
		"cmd":"HtmlWindow",
		"cmdDes":"使用输入的html文本弹开一个页面窗口 ,目前这个命令只能运行于浏览器下使用的情况",
		"parameters":[	
			{ "parameter":"html", "des":"窗口里显示的html", "requred":false },
			{ "parameter":"htmlBuffer", "des":"使用buffer提供要显示的html", "requred":false},
			{ "parameter":"title", "des":"打开窗口的title文字", "requred":false},
			{ "parameter":"titleBuffer", "des":"使用buffer提供窗口的title文字", "requred":false},
			{ "parameter":"width", "des":"打开窗口的宽度", "requred":false},
			{ "parameter":"height", "des":"打开窗口的位置", "requred":false}
		],
		"examples":[	
			{
				"name":"",
				"context":	'直接输入html显示' +
						'{<br>' +
						'	"cmd": "HtmlWindow", <br>' +
						'	"html":"<ol><li>变压器</li><li>高压配电柜</li><li>低压配电柜</li></ol>", <br>' +
						'	"title": "分类窗口", <br>' +
						'	"width": 512, <br>' +
						'	"height": 512 <br>' +
						'}'	
			},
			{
				"name":"",
				"context":	'通过buffer输入html显示' +
						'{<br>' +
						'	"cmd": "HtmlWindow", <br>' +
						'	"htmlBuffer":{"ObjectManager":"RunBuffer/面板显示数据"}, <br>' +
						'	"title": "分类窗口", <br>' +
						'	"width": 512, <br>' +
						'	"height": 512 <br>' +
						'}'	
			}	
		]
	},		
	{
		"cmd":"HideWindow",
		"cmdDes":"关闭 UrlWindow和HtmlWindow打开的窗口,目前这个命令只能运行于浏览器下使用的情况",
		"parameters":[	
		],
		"examples":[	
			{
				"name":"",
				"context":	'{ "cmd": "HideWindow" }' 
			}	
		]
	},
	{
		"cmd":"ExecuteHtmlInterface",
		"cmdDes":"如果模模搭运行于页面上，可以通过这个命令调用页面的js接口",
		"parameters":[	
			{ "parameter":"interfaceName", "des":"要运行的js接口", "requred":false },
			{ "parameter":"fromBuffer", "des":"将buffer里的内容发送到页面，目前只支持发送模模搭里的物体。要求页面js接口的第一个参数是接收模模搭对象的。<br>	" +
					"注：<br>	" +
					"	1. 输出到页面的对象数据结构如下：<br>	" +
					"		{<br>	" +
					"			'ID':'J17gKNmUeUeSXpDzPH_pZA', //模模搭里面的内置ID'<br>	" +
					"			'UserID':'100007001', //用户自行输入的ID'<br>	" +
					"			'Name':'档案盒002', //用户自行输入的名字'<br>	" +					
					"			'ParentObjectUserID':'档案室一层', //物体父亲物体的UserID'<br>	" +
					"			'ParentObjectID':'144', //物体父亲物体的模模搭内置ID'<br>	" +
					"			'Position':'-21.263 2.357 -5.653', //物体的世界坐标系下的坐标'<br>	" +
					"			'LocalPosition':'-22.944 2.357 -10.038', //物体的父物体坐标系下的坐标'<br>	" +
					"			'BoundBoxMax':'-21.163 2.657 -5.630', //物体包围盒的最小点'<br>	" +
					"			'BoundBoxMin':'-21.363 2.357 -5.675', //物体包围盒的最大点'<br>	" +
					"			'BundleId':'B723E9E1B279467EBC9433D30D35F683', //物体使用的模型id'<br>	" +
					"			'BundleSize':'1.000 1.000 1.000', //物体使用模型的尺寸'<br>	" +  
					"			'BundleVersion':'1.000 1.000 1.000', //物体使用模型的版本'<br>	" +
					"			'BundleTitleEn':'Universal side box', //物体使用模型的英文版名字'<br>	" +
					"			'BundleTitle':'万能方盒子', //物体使用模型的中文版名字'<br>	" +
					"			'PropertyDict':{'物体类型':'档案盒'}, //物体的自定义属性'<br>	" +
					"			'MonitorDatas/RealTimeData':{'温度':67} //物体的监控数据'<br>	" +
					"		}<br>	" +
					"	2. 如果需要传其他参数，可通过exArguments属性传递", "requred":false},
			{ "parameter":"exArguments", "des":"输入一个数组,分别是页面js接口的每个输入的参数。", "requred":false }
		],
		"examples":[
			{
				"name":"//////////////////////////////////////////////////////////<br>" +
						"//将buffer里的物体传给页面js接口<br>" +
						"//////////////////////////////////////////////////////////<br>",
				"context":	'' +
						'//页面上定义一个接口<br>' +
						'var keeper = {};<br>' +
						'keeper.getSelectedObjs = function(objs){<br>' +
						'	objs = mmd.jsonTools.parseJSON(objs);<br>' +
						'	for(var i = 0 ; i < objs.length; i++){<br>' +
						'		......<br>' +						
						'	}<br>' +					
						'}<br>' +
						
						'<br>//使用模模搭的命令调用上面的接口<br>' +	
						'{<br>' +
						'	"cmd": "ExecuteHtmlInterface", <br>' +
						'	"interfaceName": "keeper.getSelectedObjs", <br>' +
						'	"fromBuffer":{"ObjectManager":"RunBuffer/selection"} <br>' +
						'}'	
			},	
			{
				"name":"//////////////////////////////////////////////////////////<br>" +
						"//将buffer里的物体传给页面js接口,同时接口还有其它参数需要输入<br>" +
						"//////////////////////////////////////////////////////////<br>",
				"context":	'' + 
						'//页面上定义一个接口<br>' + 
						'var keeper = {};<br>' + 
						'keeper.setColorByType = function( objs, objType, color ){<br>' + 
						'	objs = mmd.jsonTools.parseJSON(objs);<br>' +
						'	var uids = [];<br>' + 
						'	for(var i = 0 ; i < objs.length; i++){<br>' + 
						'		var obj = objs[i];<br>' + 
						'		if(obj["PropertyDict"]["物体类型"] == objType){<br>' +
						'			uids.push(obj["UserID"]);<br>' +
						'		}<br>' + 
						'	};<br>' +
						'	var cmds = [<br>' +
						'		{ "cmd":"SetColor", "uids":uids, "color":color}<br>' +
						'	];<br>' +
						'	var cmdsStr = mmd.jsonTools.toJSON(cmds);<br>' +
						'	mmd.RunCommand( cmdsStr, true);<br>' + 
						'}<br>' + 
						
						'<br>//使用模模搭的命令调用上面的接口<br>' +	
						'{<br>' +
						'	"cmd": "ExecuteHtmlInterface", <br>' +
						'	"interfaceName": "keeper.setColorByType", <br>' +
						'	"fromBuffer":{"ObjectManager":"RunBuffer/objs"}, <br>' +
						'	"exArguments":[ "100元箱子", [1,0,0]]<br>' +
						'}'	
			},
			{
				"name":"//////////////////////////////////////////////////////////<br>" +
						"//也可以不传入buffer里的物体,只传入其它参数<br>" +
						"//////////////////////////////////////////////////////////<br>",
				"context":	'' + 
						'//页面上定义一个接口<br>' + 
						'var saveLog = function( text, sync ){<br>' + 
						'	......<br>' + 
						'}<br>' + 
						
						'<br>//使用模模搭的命令调用上面的接口<br>' + 
						'{<br>' + 
						'	"cmd": "ExecuteHtmlInterface", <br>' + 
						'	"interfaceName": "saveLog", <br>' + 
						'	"exArguments":[ "已经打开场景", false]<br>' +
						'}'	
			}			
			
		]
	}	
]

docCreator.addDocItemFromData("页面", cmds)

