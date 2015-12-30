var cmds = [
	{
		"cmd":"GetValue",
		"cmdDes":"获取对象的属性。这里的对象不仅仅是场景里的物体，可以使任何能访问的对象，甚至是某些管理器。获取到的数据存放到toBuffer指定的缓冲里<br>	" +
				"可访问对象的属性：<br>	" +
				"	ID：模模搭内不生成的唯一ID <br>	" +
				"	UserID：用户在界面输入的自定义ID<br>	" +
				"	Name：用户在界面输入的物体名字，一般用于界面显示<br>	" +
				"	BundleId：改物体使用的模型ID<br>	" +
				"	PropertyDict：用户在界面中输入的自定属性，访问时需要填写多级路径如\"PropertyDict/物体类型\"，否则将访问到所有的自定义属性<br>	" +
				"	MoniterData/RealTimeData:监控数据存储的属性路径，和PropertyDict一样，要写全访问路径，否则将访问到所有的监控数据<br>	" +
				"",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"path", "des":"要访问属性的路径，可以是多个级，比如 \"PropertyDict/物体类型\"，可访问到自定义属性里的物体类型这个数据", "required":true},
			{ "parameter":"toBuffer", "des":"要存储的buffer路径" , "required":true}
		],
		"examples":[
			{
				"name":"简单获取一个自定义属性",
				"context":	'' +
						'{<br>' +
						'	"cmd": "GetValue", <br>' +
						'	"uid":"obj01" <br>' +
						'	"path":"PropertyDict/物体类型",<br>' +
						'	"toBuffer":"物体类型缓冲" <br>' +
						'}'	
			},
			{
				"name":"简单获取一项监控数据",
				"context":	'' +
						'{<br>' +
						'	"cmd": "GetValue", <br>' +
						'	"uid":"obj01" <br>' +
						'	"path":"MoniterData/RealTimeData/温度",<br>' +
						'	"toBuffer":"物体温度数据" <br>' +
						'}'	
			},				
			{
				"name":"所有的监控数据",
				"context":	'' +
						'{<br>' +
						'	"cmd": "GetValue", <br>' +
						'	"uid":"obj01" <br>' +
						'	"path":"MoniterData/RealTimeData",<br>' +
						'	"toBuffer":"物体所有监控数据" <br>' +
						'}'	
			}			
			
		]
	},
	{
		"cmd":"SetValue",
		"cmdDes":"设置对象的属性。" ,
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"path", "des":"要访问属性的路径,可以是多个级,比如 \"PropertyDict/物体类型\"", "required":true},
			{ "parameter":"value", "des":"要设置的值。<br>	" +
					"注：模模搭内部开发是使用强数据类型语言，这个命令是通用命令，不同的物体的不同属性需要不同的数据类型，这里填写数据不像在命令里那样符合json标准就行了，有的要表示数据类型。<br>	" +
					"属性的值如果是字符串，数字，布尔可以正常填写。<br>	" +
					"如果是 vector3，color等这种不能简单使用数组，要写成下面的形式<br>	" +
					"{\"Vector3\":[1,0,0]}<br>	" +
					"{\"Vector2\":[1,0]}<br>	" +
					"{\"Color\":[1,0,0,1]}<br>	", "required":true},
		],
		"examples":[
			{
				"name":"设置一个物体的Name",
				"context":	'' +
						'{<br>' +
						'	"cmd": "SetValue", <br>' +
						'	"uid":"obj01",<br>' +
						'	"path":"Name",<br>' +
						'	"value":"大厅探头01"<br>' +
						'}'	
			}
		]
	},
	{
		"cmd":"CallMethod",
		"cmdDes":"调用对象方法<br>	" +
				"可调用的对象方法：<br>	" +
				"	场景中的物体：<br>	" +
				"		show：控制是否显示 <br>	" +
				"		GetCenter：获取物体中心 <br>	" +
				"	时间对象：<br>	" +
				"		reset：重置计时器<br>	" +		
				"		setStartTime：设置计时器启动的时间[2015, 8,12,16,15,22,0]<br>	" +				
				"		setPeriod：设置计时器已经运行了的时间[0,0,0,30,0]<br>	" +				
				"		start：开始计时<br>	" +				
				"		pause：设置是否暂停<br>	" +			
				"		setSpeed：设置计时器的运行速度<br>	" 	+
				"",
		"parameterInherit":"ObjectCommand",
		"parameters":[
			{ "parameter":"path", "des":"调用方法的路径，和SetValue一样，可以是多级路径", "required":true},
			{ "parameter":"params", "des":"调用对象方法需传入的参数", "required":false},
			{ "parameter":"toBuffer", "des":"有的调用方法会返回结果，可以放到缓冲里", "required":false}
		],
		"examples":[
			{
				"name":"调用物体对象的show方法，控制物体显示或消隐,和命令 CmdShow 等效",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CallMethod", <br>' +
						'	"uid":"obj01",<br>' +
						'	"path":"show",<br>' +
						'	"params":false<br>' +
						'}'	
			},
			{
				"name":"获取物体中心，并缓存到buffer里",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CallMethod", <br>' +
						'	"uid":"obj01",<br>' +
						'	"path":"GetCenter",<br>' +
						'	"toBuffer":{"ObjectManager":"RunBuffer/curObjectCenter"}<br>' +
						'}'	
			},
			{
				"name":"设置timer开始的时间，因为setStartTtime需要传入多个参数，这里就使用数组传入",
				"context":	'' +
						'{<br>' +
						'	"cmd": "CallMethod", <br>' +
						'	"uid":"timer01",<br>' +
						'	"path":"setStartTtime",<br>' +
						'	"params":[2015,8,11,13,55,23,0]<br>' +
						'}'	
			}		
		]
	}
	
]

docCreator.addDocItemFromData("通用对象接口", cmds)

