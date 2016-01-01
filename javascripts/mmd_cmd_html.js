var cmds = [
	{
		"cmd":"OpenUrl",
		"cmdDes":"Open webpage,same as run javascript function window.open, only valid in browser",
		"parameters":[	
			{ "parameter":"url", "des":"URL to be open", "required":false },
			{ "parameter":"urlBuffer", "des":"Get URL by buffer", "required":false},
			{ "parameter":"param", "des":"Same as parameters used in javascript function window.open<br>	" +
					"for instance：‘height=100, width=400, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no’", "required":false},
			
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
		"cmdDes":"Open browser window with given URL, only valid in browser",
		"parameters":[	
			{ "parameter":"url", "des":"URL to be open", "required":false },
			{ "parameter":"urlBuffer", "des":"URL from buffer", "required":false},
			{ "parameter":"title", "des":"Window title", "required":false},
			{ "parameter":"titleBuffer", "des":"Window title from buffer", "required":false},
			{ "parameter":"width", "des":"Window width", "required":false},
			{ "parameter":"height", "des":"Window height", "required":false},
		],
		"examples":[	
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "UrlWindow", <br>' +
						'	"urlBuffer":"url", <br>' +
						'	"title": "message", <br>' +
						'	"width": 512, <br>' +
						'	"height": 512 <br>' +
						'}'	
			}	
		]
	}	,
	{
		"cmd":"HtmlWindow",
		"cmdDes":"Open browser windows and display given html, only valid in browser",
		"parameters":[	
			{ "parameter":"html", "des":"Content in html format", "required":false },
			{ "parameter":"htmlBuffer", "des":"Html content from buffer", "required":false},
			{ "parameter":"title", "des":"Window title", "required":false},
			{ "parameter":"titleBuffer", "des":"Window title from buffer", "required":false},
			{ "parameter":"width", "des":"Window width", "required":false},
			{ "parameter":"height", "des":"Window height", "required":false}
		],
		"examples":[	
			{
				"name":"",
				"context":	'Display HTML' +
						'{<br>' +
						'	"cmd": "HtmlWindow", <br>' +
						'	"html":"<ol><li>dog</li><li>cat</li><li>bird</li></ol>", <br>' +
						'	"title": "Catalog", <br>' +
						'	"width": 512, <br>' +
						'	"height": 512 <br>' +
						'}'	
			},
			{
				"name":"",
				"context":	'Display HTML by Buffer' +
						'{<br>' +
						'	"cmd": "HtmlWindow", <br>' +
						'	"htmlBuffer":{"ObjectManager":"RunBuffer/htmlContent"}, <br>' +
						'	"title": "Catalog", <br>' +
						'	"width": 512, <br>' +
						'	"height": 512 <br>' +
						'}'	
			}	
		]
	},		
	{
		"cmd":"HideWindow",
		"cmdDes":"Close window opened by UrlWindow or HtmlWindow, only valid in browser",
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
		"cmdDes":"Run javascript code in browser",
		"parameters":[	
			{ "parameter":"interfaceName", "des":"javascript method name", "required":false },
			{ "parameter":"fromBuffer", "des":" set buffer content(object only) to javascript method<br>	" +
					"Note：<br>	" +
					"	1. Data structure pass to javascript method：<br>	" +
					"		{<br>	" +
					"			'ID':'J17gKNmUeUeSXpDzPH_pZA', //ObjecID'<br>	" +
					"			'UserID':'100007001', //Object UID'<br>	" +
					"			'Name':'Box002', //Object name'<br>	" +					
					"			'ParentObjectUserID':'floor001', //Parent Object UID'<br>	" +
					"			'ParentObjectID':'144', //Parent Object ID'<br>	" +
					"			'Position':'-21.263 2.357 -5.653', //Coordinate in world'<br>	" +
					"			'LocalPosition':'-22.944 2.357 -10.038', //Coordinate in Parent'<br>	" +
					"			'BoundBoxMax':'-21.163 2.657 -5.630', //Object bound point (max)'<br>	" +
					"			'BoundBoxMin':'-21.363 2.357 -5.675', //Object bound point (min)'<br>	" +
					"			'BundleId':'B723E9E1B279467EBC9433D30D35F683', //Model ID'<br>	" +
					"			'BundleSize':'1.000 1.000 1.000', //Model size'<br>	" +  
					"			'BundleVersion':'1.000 1.000 1.000', //Model version'<br>	" +
					"			'BundleTitleEn':'Universal side box', //Model name in english'<br>	" +
					"			'BundleTitle':'Universal side box', //Model name'<br>	" +
					"			'PropertyDict':{'ObjectType':'box'}, //User-define properties'<br>	" +
					"			'MonitorDatas/RealTimeData':{'Temperature':67} //Monitoring data'<br>	" +
					"		}<br>	" +
					"	2. Use exArguments to pass additional values", "required":false},
			{ "parameter":"exArguments", "des":"Additional arguments in array", "required":false }
		],
		"examples":[
			{
				"name":"//////////////////////////////////////////////////////////<br>" +
						"//Pass object from buffer to javascript method<br>" +
						"//////////////////////////////////////////////////////////<br>",
				"context":	'' +
						'//define method in javascript<br>' +
						'var keeper = {};<br>' +
						'keeper.getSelectedObjs = function(objs){<br>' +
						'	objs = mmd.jsonTools.parseJSON(objs);<br>' +
						'	for(var i = 0 ; i < objs.length; i++){<br>' +
						'		......<br>' +						
						'	}<br>' +					
						'}<br>' +
						
						'<br>//call method<br>' +	
						'{<br>' +
						'	"cmd": "ExecuteHtmlInterface", <br>' +
						'	"interfaceName": "keeper.getSelectedObjs", <br>' +
						'	"fromBuffer":{"ObjectManager":"RunBuffer/selection"} <br>' +
						'}'	
			},	
			{
				"name":"//////////////////////////////////////////////////////////<br>" +
						"//Pass object from buffer to javascript method with additional arguments<br>" +
						"//////////////////////////////////////////////////////////<br>",
				"context":	'' + 
						'//define javascript method<br>' + 
						'var keeper = {};<br>' + 
						'keeper.setColorByType = function( objs, objType, color ){<br>' + 
						'	objs = mmd.jsonTools.parseJSON(objs);<br>' +
						'	var uids = [];<br>' + 
						'	for(var i = 0 ; i < objs.length; i++){<br>' + 
						'		var obj = objs[i];<br>' + 
						'		if(obj["PropertyDict"]["ObjectType"] == objType){<br>' +
						'			uids.push(obj["UserID"]);<br>' +
						'		}<br>' + 
						'	};<br>' +
						'	var cmds = [<br>' +
						'		{ "cmd":"SetColor", "uids":uids, "color":color}<br>' +
						'	];<br>' +
						'	var cmdsStr = mmd.jsonTools.toJSON(cmds);<br>' +
						'	mmd.RunCommand( cmdsStr, true);<br>' + 
						'}<br>' + 
						
						'<br>//call method<br>' +	
						'{<br>' +
						'	"cmd": "ExecuteHtmlInterface", <br>' +
						'	"interfaceName": "keeper.setColorByType", <br>' +
						'	"fromBuffer":{"ObjectManager":"RunBuffer/objs"}, <br>' +
						'	"exArguments":[ "100box", [1,0,0]]<br>' +
						'}'	
			},
			{
				"name":"//////////////////////////////////////////////////////////<br>" +
						"//Pass arguments without object data<br>" +
						"//////////////////////////////////////////////////////////<br>",
				"context":	'' + 
						'//define javascript method<br>' + 
						'var saveLog = function( text, sync ){<br>' + 
						'	......<br>' + 
						'}<br>' + 
						
						'<br>//call method<br>' + 
						'{<br>' + 
						'	"cmd": "ExecuteHtmlInterface", <br>' + 
						'	"interfaceName": "saveLog", <br>' + 
						'	"exArguments":[ "scene is open", false]<br>' +
						'}'	
			}			
			
		]
	}	
]

docCreator.addDocItemFromData("Web", cmds)

