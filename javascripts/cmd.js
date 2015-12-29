var tutorialConfig = {
	"创建/删除物体" : {
		"在空间位置上创建对象" : [{
			"cmd" : "CreatePlacement",
			"uid" : "object01",
			"pos" : [ 2, 0, 0 ],
			"bundleId" : "72E49F8970EE435EA03F6580BB9BE4F6"
		},{
			"cmd" : "CreatePlacement",
			"uid" : "object02",
			"pos" : [ 4, 0, 0 ],
			"bundleId" : "72E49F8970EE435EA03F6580BB9BE4F6"
		}],
		"删除对象" : {
			"cmd" : "Destroy",
			"uid" : "object02"
		}
	},
	"设置物体位置/旋转" : {
		"设置到一个空间位置" : {
			"cmd" : "SetPosition",
			"uid" : "object01",
			"pos" : [ 8, 0, 0 ]
		},
		"设置到另一个物体所在位置" : [ {
			"cmd" : "CreatePlacement",
			"uid" : "point01",
			"pos" : [ 12, 0, -8 ],
			"bundleId" : "02EC55309AEA4A95985B17D18C58CCC7",
			"scl" : [ 0.1, 0.02, 0.1 ]
		}, {
			"cmd" : "SetPosition",
			"uid" : "object01",
			"target" : "point01"
		} ],
		"旋转物体" : {
			"cmd" : "Rotate",
			"uid" : "object01",
			"rot" : [ 0, 90, 0 ]
		},
	},
	"显示隐藏物体" : {
		"隐藏物体" : {
			"cmd" : "Show",
			"uid" : "object01",
			"shown" : false
		},
		"显示物体" : {
			"cmd" : "Show",
			"uid" : "object01",
			"shown" : true
		}
	},
	"移动物体" : {
		"移动物体到一个空间位置" : {
			"cmd" : "MoveTo",
			"uid" : "object01",
			"pos" : [ 0, 0, -10 ],
			"time" : 3
		},
		"移动物体到另一个物体所在位置" : [ {
			"cmd" : "CreatePlacement",
			"uid" : "point01",
			"pos" : [ 12, 0, -12 ],
			"bundleId" : "02EC55309AEA4A95985B17D18C58CCC7",
			"scl" : [ 0.1, 0.02, 0.1 ]
		}, {
			"cmd" : "MoveTo",
			"uid" : "object01",
			"target" : "point01",
			"speed" : 15,
			"orientToPath" : true
		} ],
		"沿空间点移动物体" : [
				{
					"cmd" : "MoveTo",
					"uid" : "object01",
					"pos" : [ 0, 0, -10 ],
					"time" : 3
				},
				{
					"cmd" : "MovePath",
					"uid" : "object01",
					"pointPath" : [ [ 0, 0, 0 ], [ 10, 0, 0 ], [ 10, 0, 10 ],
							[ 0, 0, 10 ] ],
					"time" : 10
				} ],
		"沿物体点移动物体" : [ {
			"cmd" : "CreatePlacement",
			"uid" : "point01",
			"pos" : [ 12, 0, -8 ],
			"bundleId" : "02EC55309AEA4A95985B17D18C58CCC7",
			"scl" : [ 0.1, 0.02, 0.1 ]
		}, {
			"cmd" : "CreatePlacement",
			"uid" : "point02",
			"pos" : [ 12, 0, 6 ],
			"bundleId" : "02EC55309AEA4A95985B17D18C58CCC7",
			"scl" : [ 0.1, 0.02, 0.1 ]
		}, {
			"cmd" : "CreatePlacement",
			"uid" : "point03",
			"pos" : [ 2, 0, 6 ],
			"bundleId" : "02EC55309AEA4A95985B17D18C58CCC7",
			"scl" : [ 0.1, 0.02, 0.1 ]
		}, {
			"cmd" : "MovePath",
			"uid" : "object01",
			"objectPath" : [ "point01", "point02", "point03" ],
			"speed" : 5,
			"orientToPath" : true
		} ]
	},
	"颜色和半透明" : {
		"设置半透明" : {
			"cmd" : "SetTransparency",
			"uid" : "object01",
			"trans" : 0.25,
			"recursive" : false
		},
		"设置颜色" : {
			"cmd" : "SetColor",
			"uid" : "object01",
			"color" : [ 1, 0, 0 ],
			"ratio" : 0.75,
			"recursive" : false
		},
		"开启半透明闪烁" : {
			"cmd" : "Flash",
			"uid" : "object01",
			"start":1.0, 
			"end":0.0, 
			"time":1.0, 
			"recursive" : false
		},
		"关闭半透明闪烁" : {
			"cmd" : "Flash",
			"uid" : "object01",
			"enable" : false
		},
		"开启颜色闪烁" : {
			"cmd" : "ColorFlash",
			"uid" : "object01",
			"color" : [ 1, 0, 0 ],
			"start" : 1,
			"end" : 0,
			"time" : 1,
			"recursive" : false
		},
		"关闭颜色闪烁" : {
			"cmd" : "ColorFlash",
			"uid" : "object01",
			"enable" : false
		}
	},
	"热图" : {
		"创建热图" : [{
			  "cmd":"TestCreateSensors",
			  "sensorPrefix":"dataPoint",
			  "sensorNum":100
			}, {
			  "cmd":"CreateHeatmapObj",
			  "uid":"Heatmap01",
			  "segX": "32",
			  "segY": "32",
			  "width": "64",
			  "height": "64",
			  "pos": [0, 0, 0],
			  "sensorPrefix":"dataPoint",
			  "sensorNum":100,
			  "monitorItem":"温度监控"
			}
		]
	}	
}