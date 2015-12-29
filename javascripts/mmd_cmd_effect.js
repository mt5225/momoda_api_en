var cmds = [
	{
		"cmd":"SetTransparency",
		"cmdDes":"设置物体透明度",
		"parameterInherit":"ObjectCommand",
		"parameters":[			
			{ "parameter":"trans", "des":"要设置的透明度，1为完全透明，0为完全不透明", "requred":true, "default":"", "option":[ ]}	
		],
		"examples":[
			{
				"name":"简单设置透明度",
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
		"cmdDes":"设置物体颜色",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"color", "des":"要设置的rgb颜色数值，如红色[ 1, 0, 0]", "requred":true},
			{ "parameter":"ratio", "des":"设置颜色生效的比例,可设置从0到1的数值", "requred":false, "default":1.0}
		],
		"examples":[
			{
				"name":"简单设置颜色",
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
		"cmdDes":"透明过渡效果",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"start", "des":"开始的透明度", "requred":true},
			{ "parameter":"end", "des":"结束的透明度", "requred":true},
			{ "parameter":"time", "des":"变化的时间", "requred":false, "default":1.0},
			{ "parameter":"endAutoRelease", "des":"变换完成后fade效果是否自动清除", "requred":false, "default":true},			
			{ "parameter":"enable", "des":"控制是否让效果生效", "requred":false, "default":true}			
		],
		"examples":[
			{
				"name":"控制物体透明度在1秒内从1到0变化",
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
				"name":"关闭这个效果",
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
		"cmdDes":"使用透明度控制的渐入效果",
		"parameterInherit":"ObjectCommand",
		"parameters":[			
			{ "parameter":"time", "des":"变化的时间", "requred":false, "default":1.0}	
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
		"cmdDes":"使用透明度控制的渐出效果",
		"parameterInherit":"ObjectCommand",
		"parameters":[			
			{ "parameter":"time", "des":"变化的时间", "requred":false, "default":1.0}	
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
		"cmdDes":"透明闪烁效果",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"start", "des":"闪烁区间的最小透明度", "requred":true},
			{ "parameter":"end", "des":"闪烁区间的最大透明度", "requred":true},
			{ "parameter":"time", "des":"变化的周期时间", "requred":false, "default":1.0},		
			{ "parameter":"enable", "des":"控制是否让效果生效", "requred":false, "default":true}			
		],
		"examples":[
			{
				"name":"控制物体透明度在1秒内从1到0变化，循环往复",
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
				"name":"关闭这个效果",
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
		"cmdDes":"颜色过渡效果",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"color", "des":"设置这个效果使用的颜色", "requred":true},
			{ "parameter":"start", "des":"颜色效果开始的浓度值", "requred":true},
			{ "parameter":"end", "des":"颜色效果结束的浓度值", "requred":true},
			{ "parameter":"time", "des":"变化的时间", "requred":false, "default":1.0},
			{ "parameter":"endAutoRelease", "des":"变换完成后效果是否自动清除", "requred":false, "default":true},			
			{ "parameter":"enable", "des":"控制是否让效果生效", "requred":false, "default":true}			
		],
		"examples":[
			{
				"name":"控制物体在1秒内从无效果色变换到红色",
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
				"name":"关闭这个效果",
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
		"cmdDes":"颜色闪烁效果",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"color", "des":"设置这个效果使用的颜色", "requred":true},
			{ "parameter":"start", "des":"闪烁区间的最小颜色浓度", "requred":true},
			{ "parameter":"end", "des":"闪烁区间的最大颜色浓度", "requred":true},
			{ "parameter":"time", "des":"变化的周期时间", "requred":false, "default":1.0},		
			{ "parameter":"enable", "des":"控制是否让效果生效", "requred":false, "default":true}			
		],
		"examples":[
			{
				"name":"控制物体颜色在1秒内从1到0变化，循环往复",
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
				"name":"关闭这个效果",
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

docCreator.addDocItemFromData("效果", cmds)