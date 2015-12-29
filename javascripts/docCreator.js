


var DocCreator = function()  {
	this.docGroupMap = {};
	this.docGroupNameList = [];
	this.docItemMap = {};
	this.baseDocItemMap = {};
	
	this.docDiv = null;
}

DocCreator.prototype.addDocItem = function( groupName , item ) {
	if(this.docItemMap[item["cmd"]]){
		alert("已经存在 " + item["cmd"] + " 这个命令!");	
		return
	}	
	
	if(!this.docGroupMap[groupName]){
		this.docGroupMap[groupName] = [];
		
	}	
	this.docGroupMap[groupName].push(item);	
	this.docItemMap[item["cmd"]] = item;	
	
	mmd.util.addNewItemToArray( groupName, this.docGroupNameList );
}

DocCreator.prototype.addDocItemFromData = function( groupName, list ) {
	for(var i = 0 ; i < list.length; i++){
		this.addDocItem(groupName, list[i]);
	}
}

DocCreator.prototype.addBaseDocItem= function( item ) {
	this.baseDocItemMap[item["name"]] = item;
}

DocCreator.prototype.getMenuHtml = function( ) {
	var count = 0;
	var html = '';
	for(var i = 0 ; i < this.docGroupNameList.length; i++){
		var curGroupName = this.docGroupNameList[i];
		var curGroup = this.docGroupMap[curGroupName];
		html += "<li class='closed collapsable' classname='closed'><span class='action_header' classname='action_header'>"+curGroupName+"</span>";		
		html += "<ul>";
		for(var ii = 0 ; ii < curGroup.length ; ii++){
			count += 1;
			var tutorial = curGroup[ii];
			html += "<li class='leaves'><a href='#' class='leaves' onclick=docCreator.clickDocItem('" + tutorial["cmd"] +"');>"+ tutorial["cmd"] +"</a></li>";
		}
		html += "</ul>";
		html += "</li>";
	}
	
	return html;
}

DocCreator.prototype.normaliseStr = function( str, useHtml ) {
	var reg= new RegExp("	","g"); 
	str = str.replace( reg, "&nbsp;&nbsp;&nbsp;&nbsp" ); 
	
	if(!useHtml){
		var reg= new RegExp("<br>","g"); 
		str = str.replace( reg, "@@br@@" ); 			
		
		var reg= new RegExp("<","g"); 
		str = str.replace( reg, "&lt" ); 
		var reg= new RegExp(">","g"); 
		str = str.replace( reg, "&gt" ); 
		
		var reg= new RegExp("@@br@@","g"); 
		str = str.replace( reg, "<br>" ); 
	}
	return str;
}

DocCreator.prototype.clickInheritItem = function( inheritItem, itemName ) {
	var curItem = this.baseDocItemMap[inheritItem];
	curItem["des"] = this.normaliseStr( curItem["des"], true ); 
	
	var html = '<section>';
	html += '<h2><b>命令基类：</b>'+ curItem["name"] +'</h2>' +
			'<p class="cmdexplain">&nbsp;&nbsp;&nbsp;&nbsp;' + curItem["des"] + '</p>' 
			
	html += '<br>' 		
	html += '<div class="detailedcont">' 
	if(curItem["parameterInherit"]){
				html += '<p><b>参数：  </b></p>&nbsp;&nbsp;&nbsp;&nbsp;' 
//				html += '<a href="#" class="leaves" onclick=docCreator.clickInheritItem("' + curItem["parameterInherit"] +'","'+ itemName + '");>继承' + curItem["parameterInherit"] + '</a>'
				html += '<a href="#" class="leaves" onclick=docCreator.clickInheritItem("' + curItem["parameterInherit"] +'","'+ itemName + '");>支持标准的物体输入参数</a>'
				
	}
	else{
				html += '<p><b>参数：  </b></p>' 
				
	}

	if(!curItem["parameters"] || curItem["parameters"].length == 0 ){
		if(!curItem["parameterInherit"]){
			html += '<p>&nbsp;&nbsp;&nbsp;&nbsp无需其他参数   </p>';
		}
	}
	else{
		for(var i = 0 ; i < curItem["parameters"].length ; i++){
			html += '<p class="cont">';
			var curParam = curItem["parameters"][i]
			var requred = "否"
			if( curParam["requred"]) requred = "是"
			
			html +=	'<b>'+ curParam["parameter"] +'</b>' +
					'<span>必填：'+ requred +'</span></span>'
					
			if(curParam["default"]){
				html += '<span>默认：'+ curParam["default"] +'</span>'
			}
			html += '</p>';	
			
			curParam["des"] = this.normaliseStr(curParam["des"]);	
			html += '<p>&nbsp;&nbsp;&nbsp;&nbsp;'+ curParam["des"] +'</p>';
			
		}
	}
	html += '</div>' ;

	html += '<button onclick=docCreator.clickDocItem("' + itemName + '")>返回</button>' ;
	
	html += '</section>';
	
	this.docDiv.html( html );	
}

DocCreator.prototype.clickDocItem = function(  itemName ) {
	var curItem = this.docItemMap[itemName];

	curItem["cmdDes"] = this.normaliseStr( curItem["cmdDes"], true ); 
	
	var html = '<section>';
	html += '<h2><b>命令：</b>'+ curItem["cmd"] +'</h2>' +
			'<p class="cmdexplain">&nbsp;&nbsp;&nbsp;&nbsp;' + curItem["cmdDes"] + '</p>' 
			
	html += '<br>' 		
	html += '<div class="detailedcont">' 
	if(curItem["parameterInherit"]){
				html += '<p><b>参数：  </b></p>&nbsp;&nbsp;&nbsp;&nbsp;' 
//				html += '<a href="#" class="leaves" onclick=docCreator.clickInheritItem("' + curItem["parameterInherit"] +'","'+ itemName + '")>继承' + curItem["parameterInherit"] + '</a>'
				html += '<a href="#" class="leaves" onclick=docCreator.clickInheritItem("' + curItem["parameterInherit"] +'","'+ itemName + '");>支持标准的物体输入参数</a>'				
	}
	else{
				html += '<p><b>参数：  </b></p>' 
				
	}

	if(!curItem["parameters"] || curItem["parameters"].length == 0 ){
		if(!curItem["parameterInherit"]){
			html += '<p>&nbsp;&nbsp;&nbsp;&nbsp无需其他参数  </p>';
		}
	}
	else{
		for(var i = 0 ; i < curItem["parameters"].length ; i++){
			html += '<p class="cont">';
			var curParam = curItem["parameters"][i]
			var requred = "否"
			if( curParam["requred"]) requred = "是"
			
			html +=	'<b>'+ curParam["parameter"] +'</b>' +
					'<span>必填：'+ requred +'</span></span>'
			
			if(curParam["default"]){
				html += '<span>默认：'+ mmd.jsonTools.toJSON(curParam["default"]) +'</span>'
			}
			html += '</p>';	
			
			curParam["des"] = this.normaliseStr(curParam["des"], true);	
			html += '<p>&nbsp;&nbsp;&nbsp;&nbsp;'+ curParam["des"] +'</p>';
			
		}
	}
	html += '</div>' ;
	
	html += '<br>' 
	if( curItem["examples"] && curItem["examples"].length > 0 ){		
		html += '<p><b>示例：</b></p>'; 
		html += '<pre>'; 
		for(var i = 0 ; i < curItem["examples"].length ; i++){
			var curExample = curItem["examples"][i]; 
			curExample["context"] = this.normaliseStr(curExample["context"]);
			
			html += '<p>'+ curExample["name"] +'</p>'; 
			html += '<p>'+ curExample["context"] +'</p>'; 
		}
		html += '</pre>'; 
	}	

	html += '</section>';
	
	this.docDiv.html( html );
}

var docCreator = new DocCreator();
docCreator.addBaseDocItem({
	"name": "ObjectCommand",
	"des": "如果命令继承了这个基础，将内置下列这些参数和功能",
	"parameters":[
		{ "parameter":"id", "des":"输入模模搭内置物体id，提供命令操作的对象。", "requred":false},
		{ "parameter":"uid", "des":"输入物体的用户定义id(UserID)，提供命令操作的对象。", "requred":false},	
		{ "parameter":"ids", "des":"使用数组输入多个模模搭内置物体id，提供命令同时操作的多个对象对象。", "requred":false},
		{ "parameter":"uids", "des":"使用数组输入多个物体的用户定义id(UserID)，提供命令同时操作的多个对象对象。", "requred":false},	
		{ "parameter":"fromBuffer", "des":"从buffer中提取内容，大部分使用情况下，里面会存放一个或多个对象，在个别命令里，也有可能用于存放其他数据。", "requred":false},	
		{ "parameter":"toBuffer", "des":"有些命令是需要放回运行结果的，运行的结果需要存放到buffer中", "requred":false}
	]
	
});

//查看动画和子物体的界面
//CreatePlacement 任意parent
//AutoRotate 输入三轴
//Fade支持回调




