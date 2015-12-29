var cmds = [
	{
		"cmd":"AddToCandidate",
		"cmdDes":"添加到候选集，让物体可以选取。<br>	" +
				"注：在模模搭内场景层级发生切换后，候选集会重新设定，要注意。",
		"parameterInherit":"ObjectCommand",
		"parameters":[			
			
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "AddToCandidate", <br>' +
						'	"uids":["obj01, "obj02".....] <br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"ClearCandidate",
		"cmdDes":"清空候选集,所有物体都不能选。<br>	" +
				"注：在模模搭内场景层级发生切换后，候选集会重新设定，要注意。",
		"parameters":[	
			
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "ClearCandidate" <br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"RemoveFromCandidate",
		"cmdDes":"让输入的物体从候选集中排除。<br>	" +
				"注：在模模搭内场景层级发生切换后，候选集会重新设定，要注意。",
		"parameterInherit":"ObjectCommand",
		"parameters":[			
			
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "RemoveFromCandidate", <br>' +
						'	"uids":["obj01, "obj02".....] <br>' +
						'}'	
			}
		]
	},		
	{
		"cmd":"AddToSelection",
		"cmdDes":"添加到选择集，让物体处于被选择状态。" ,
		"parameterInherit":"ObjectCommand",
		"parameters":[			
			
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "AddToSelection", <br>' +
						'	"uids":["obj01, "obj02".....] <br>' +
						'}'	
			}
		]
	},	
	{
		"cmd":"ClearSelection",
		"cmdDes":"清空选择集",
		"parameters":[			
			
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "ClearSelection" <br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"RemoveFromSelection",
		"cmdDes":"让输入的物体从选择集中排除。" ,
		"parameterInherit":"ObjectCommand",
		"parameters":[	
			
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "RemoveFromSelection", <br>' +
						'	"uids":["obj01, "obj02".....] <br>' +
						'}'	
			}
		]
	},	
	{
		"cmd":"GetSelection",
		"cmdDes":"获取当前正在选择的物体,存到buffer里。" ,
		"parameters":[
			{ "parameter":"toBuffer", "des":"设定要存储所选物体的buffer", "requred":true}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "GetSelection", <br>' +
						'	"toBuffer":{"ObjectManager":"RunBuffer/selection"} <br>' +
						'}'	
			}
		]
	},		
	{
		"cmd":"LockSelection",
		"cmdDes":"锁定选择集，此时已经选取的物体不能变成未选状态,也不能新选物体",
		"parameters":[			
			
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "LockSelection" <br>' +
						'}'	
			}
		]
	},	
	{
		"cmd":"UnlockSelection",
		"cmdDes":"解锁选择集",
		"parameters":[			
			
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "UnlockSelection" <br>' +
						'}'	
			}
		]
	},		
	{
		"cmd":"EnableRectangleSelect",
		"cmdDes":"开启或关闭框选功能。" ,		
		"parameters":[			
			{ "parameter":"enable", "des":"输入true或者false，控制是否开启框选功能", "requred":true}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "EnableRectangleSelect", <br>' +
						'	"enable":true <br>' +
						'}'	
			}
		]
	},
	
	{
		"cmd":"EnalbeCheckRectangleUpdate",
		"cmdDes":"设置框选时是否实时刷新选择结果。在物体数量较多的情况下，建议输入false关闭这个功能，让框选操作过程流畅，只在松开鼠标后，再计算选择结果。" ,		
		"parameters":[			
			{ "parameter":"enable", "des":"输入true或者false，控制是否开启框选实时刷新", "requred":true}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "EnalbeCheckRectangleUpdate", <br>' +
						'	"enable":true <br>' +
						'}'	
			}
		]
	},	
	
	{
		"cmd":"LimitRectangleSelectNum",
		"cmdDes":"可以控制一次框选过程中最多可以选择的物体数量。" ,		
		"parameters":[			
			{ "parameter":"num", "des":"输入一次框选过程中最多可以选择的物体数量", "requred":true}
		],
		"examples":[
			{
				"name":"",
				"context":	'' +
						'{<br>' +
						'	"cmd": "LimitRectangleSelectNum", <br>' +
						'	"num":4 <br>' +
						'}'	
			}
		]
	}
	
]

docCreator.addDocItemFromData("选择", cmds)

