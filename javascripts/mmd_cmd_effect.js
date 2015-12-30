var cmds = [
	{
		"cmd":"SetTransparency",
		"cmdDes":"Set transparency of given object",
		"parameterInherit":"ObjectCommand",
		"parameters":[			
			{ "parameter":"trans", "des":"[0-1] 1: 100% transparent，0: No transparency", "required":true, "default":"", "option":[ ]}	
		],
		"examples": [
			{
				"name":"Set Object Transparency",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetTransparency", <br>' +
						'	"uid":"object01", <br>' +
						'	"trans":0.25 <br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"SetColor",
		"cmdDes":"Set object color",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"color", "des":"Color in RGB，for instance, red [ 1, 0, 0]", "required":true},
			{ "parameter":"ratio", "des":"Effect ratio, range from 0 to 1", "required":false, "default":1.0}
		],
		"examples":[
			{
				"name":"Set Object Color",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetColor",<br> ' +
						'	"uid":"object01",<br> ' +
						'	"color":[1,0,0],<br> ' +
						'	"ratio":0.75 <br>' +
						'}'
			}
		]
	},
	{
		"cmd":"Fade",
		"cmdDes":"Fading effect",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"start", "des":"Start transparent value", "required":true},
			{ "parameter":"end", "des":"End transparent value", "required":true},
			{ "parameter":"time", "des":"Duration", "required":false, "default":1.0},
			{ "parameter":"endAutoRelease", "des":"If resume after effect", "required":false, "default":true},			
			{ "parameter":"enable", "des":"If enable fading effect", "required":false, "default":true}			
		],
		"examples":[
			{
				"name":"Fading Effect",
				"context":	'' +
						'{<br>' +
						'	"cmd": "Fade",<br> ' +
						'	"uid":"object01",<br> ' +
						'	"start":1.0,<br> ' +
						'	"end":0.0, <br>' +
						'	"time":1.0, <br>' +
						'	"endAutoRelease":true <br>' +
						'}'
			},
			{
				"name":"Disable Effect",
				"context":	'' +
						'{<br>' +
						'	"cmd": "Fade",<br> ' +
						'	"uid":"object01",<br> ' +
						'	"enable":false<br> ' +
						'}'
			}			
			
		]
	},
	{
		"cmd":"FadeIn",
		"cmdDes":"Fade In Effect",
		"parameterInherit":"ObjectCommand",
		"parameters":[			
			{ "parameter":"time", "des":"Duration", "required":false, "default":1.0}	
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "FadeIn",<br> ' +
						'	"uid":"object01",<br> ' +
						'	"time":1.0 <br>' +
						'}'
			}	
			
		]
	},	
	{
		"cmd":"FadeOut",
		"cmdDes":"Fade Out Effect",
		"parameterInherit":"ObjectCommand",
		"parameters":[			
			{ "parameter":"time", "des":"Duration", "required":false, "default":1.0}	
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "FadeOut",<br> ' +
						'	"uid":"object01",<br> ' +
						'	"time":1.0 <br>' +
						'}'
			}	
			
		]
	},		
	{
		"cmd":"Flash",
		"cmdDes":"Flash Effect",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"start", "des":"Minimum transparency", "required":true},
			{ "parameter":"end", "des":"Maxim transparency", "required":true},
			{ "parameter":"time", "des":"Duration", "required":false, "default":1.0},		
			{ "parameter":"enable", "des":"If enable", "required":false, "default":true}			
		],
		"examples":[
			{
				"name":"Flash Effect",
				"context":	'' +
						'{<br>' +
						'	"cmd": "Flash",<br> ' +
						'	"uid":"object01",<br> ' +
						'	"start":1.0,<br> ' +
						'	"end":0.0, <br>' +
						'	"time":1.0 <br>' +
						'}'
			},
			{
				"name":"Disable Effect",
				"context":	'' +
						'{<br>' +
						'	"cmd": "Flash",<br> ' +
						'	"uid":"object01",<br> ' +
						'	"enable":false<br> ' +
						'}'
			}			
			
		]
	},	
	{
		"cmd":"ColorFade",
		"cmdDes":"Color Fade Effect",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"color", "des":"Color used in effect", "required":true},
			{ "parameter":"start", "des":"Color density at the start [0-1]", "required":true},
			{ "parameter":"end", "des":"Color density at the end [0-1]", "required":true},
			{ "parameter":"time", "des":"Duration", "required":false, "default":1.0},
			{ "parameter":"endAutoRelease", "des":"If resume after effect", "required":false, "default":true},			
			{ "parameter":"enable", "des":"If enable", "required":false, "default":true}			
		],
		"examples":[
			{
				"name":"Change object to red in one second",
				"context":	'' +
						'{<br>' +
						'	"cmd": "ColorFade",<br>' +
						'	"uid":"object01",<br>' +
						'	"color":[1,0,0],<br>' +
						'	"start":0.0,<br> ' +
						'	"end":1.0, <br>' +
						'	"time":1.0, <br>' +
						'	"endAutoRelease":false <br>' +
						'}'
			},
			{
				"name":"Disable Effect",
				"context":	'' +
						'{<br>' +
						'	"cmd": "ColorFade",<br> ' +
						'	"uid":"object01",<br> ' +
						'	"enable":false<br> ' +
						'}'
			}			
			
		]
	},
	{
		"cmd":"ColorFlash",
		"cmdDes":"Color Flash Effect",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"color", "des":"Color used in effect", "required":true},
			{ "parameter":"start", "des":"Color density at the start [0-1]", "required":true},
			{ "parameter":"end", "des":"Color density at the end [0-1]", "required":true},
			{ "parameter":"time", "des":"Duration", "required":false, "default":1.0},		
			{ "parameter":"enable", "des":"If enable", "required":false, "default":true}			
		],
		"examples":[
			{
				"name":"Color Flash",
				"context":	'' +
						'{<br>' +
						'	"cmd": "ColorFlash",<br> ' +
						'	"uid":"object01",<br> ' +
						'	"color":[1,0,0],<br>' +
						'	"start":1.0,<br> ' +
						'	"end":0.0, <br>' +
						'	"time":1.0 <br>' +
						'}'
			},
			{
				"name":"Disable Effect",
				"context":	'' +
						'{<br>' +
						'	"cmd": "ColorFlash",<br> ' +
						'	"uid":"object01",<br> ' +
						'	"enable":false<br> ' +
						'}'
			}			
			
		]
	}
]

docCreator.addDocItemFromData("Effect", cmds)