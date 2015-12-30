var DocCreator = function() {
    this.docGroupMap = {};
    this.docGroupNameList = [];
    this.docItemMap = {};
    this.baseDocItemMap = {};

    this.docDiv = null;
}

DocCreator.prototype.addDocItem = function(groupName, item) {
    if (this.docItemMap[item["cmd"]]) {
        alert("已经存在 " + item["cmd"] + " 这个命令!");
        return
    }

    if (!this.docGroupMap[groupName]) {
        this.docGroupMap[groupName] = [];

    }
    this.docGroupMap[groupName].push(item);
    this.docItemMap[item["cmd"]] = item;

    mmd.util.addNewItemToArray(groupName, this.docGroupNameList);
}

DocCreator.prototype.addDocItemFromData = function(groupName, list) {
    for (var i = 0; i < list.length; i++) {
        this.addDocItem(groupName, list[i]);
    }
}

DocCreator.prototype.addBaseDocItem = function(item) {
    this.baseDocItemMap[item["name"]] = item;
}

DocCreator.prototype.getMenuHtml = function() {
    var count = 0;
    var html = '';
    for (var i = 0; i < this.docGroupNameList.length; i++) {
        var curGroupName = this.docGroupNameList[i];
        var curGroup = this.docGroupMap[curGroupName];
        html += "<li class='closed collapsable' classname='closed'><span class='action_header' classname='action_header'>" + curGroupName + "</span>";
        html += "<ul>";
        for (var ii = 0; ii < curGroup.length; ii++) {
            count += 1;
            var tutorial = curGroup[ii];
            html += "<li class='leaves'><a href='#' class='leaves' onclick=docCreator.clickDocItem('" + tutorial["cmd"] + "');>" + tutorial["cmd"] + "</a></li>";
        }
        html += "</ul>";
        html += "</li>";
    }

    return html;
}

DocCreator.prototype.normaliseStr = function(str, useHtml) {
    var reg = new RegExp("	", "g");
    str = str.replace(reg, "&nbsp;&nbsp;&nbsp;&nbsp");

    if (!useHtml) {
        var reg = new RegExp("<br>", "g");
        str = str.replace(reg, "@@br@@");

        var reg = new RegExp("<", "g");
        str = str.replace(reg, "&lt");
        var reg = new RegExp(">", "g");
        str = str.replace(reg, "&gt");

        var reg = new RegExp("@@br@@", "g");
        str = str.replace(reg, "<br>");
    }
    return str;
}

DocCreator.prototype.clickInheritItem = function(inheritItem, itemName) {
    var curItem = this.baseDocItemMap[inheritItem];
    curItem["des"] = this.normaliseStr(curItem["des"], true);

    var html = '<section>';
    html += '<h2><b>Command Base Class：</b>' + curItem["name"] + '</h2>' +
        '<p class="cmdexplain">&nbsp;&nbsp;&nbsp;&nbsp;' + curItem["des"] + '</p>'

    html += '<br>'
    html += '<div class="detailedcont">'
    if (curItem["parameterInherit"]) {
        html += '<p><b>Parameters  </b></p>&nbsp;&nbsp;&nbsp;&nbsp;'
        html += '<a href="#" class="leaves" onclick=docCreator.clickInheritItem("' + curItem["parameterInherit"] + '","' + itemName + '");>Object Reference</a>'

    } else {
        html += '<p><b>Parameters  </b></p>'

    }

    if (!curItem["parameters"] || curItem["parameters"].length == 0) {
        if (!curItem["parameterInherit"]) {
            html += '<p>&nbsp;&nbsp;&nbsp;&nbspNo parameters </p>';
        }
    } else {
        for (var i = 0; i < curItem["parameters"].length; i++) {
            html += '<p class="cont">';
            var curParam = curItem["parameters"][i]
            var required = " No"
            if (curParam["required"]) required = " Yes"

            html += '<b>' + curParam["parameter"] + '</b>' +
                '<span>Required: ' + required + '</span></span>'

            if (curParam["default"]) {
                html += '<span>Default：' + curParam["default"] + '</span>'
            }
            html += '</p>';

            curParam["des"] = this.normaliseStr(curParam["des"]);
            html += '<p>&nbsp;&nbsp;&nbsp;&nbsp;' + curParam["des"] + '</p>';

        }
    }
    html += '</div>';

    html += '<button onclick=docCreator.clickDocItem("' + itemName + '")>Back</button>';

    html += '</section>';

    this.docDiv.html(html);
}

DocCreator.prototype.clickDocItem = function(itemName) {
    var curItem = this.docItemMap[itemName];

    curItem["cmdDes"] = this.normaliseStr(curItem["cmdDes"], true);

    var html = '<section>';
    html += '<h2><b>Command: </b>' + curItem["cmd"] + '</h2>' +
        '<p class="cmdexplain">&nbsp;&nbsp;&nbsp;&nbsp;' + curItem["cmdDes"] + '</p>'

    html += '<br>'
    html += '<div class="detailedcont">'
    if (curItem["parameterInherit"]) {
        html += '<p><b>Parameters:  </b></p>&nbsp;&nbsp;&nbsp;&nbsp;'
        html += '<a href="#" class="leaves" onclick=docCreator.clickInheritItem("' + curItem["parameterInherit"] + '","' + itemName + '");>Object Reference</a>'
    } else {
        html += '<p><b>Parameters  </b></p>'

    }

    if (!curItem["parameters"] || curItem["parameters"].length == 0) {
        if (!curItem["parameterInherit"]) {
            html += '<p>&nbsp;&nbsp;&nbsp;&nbsp No parameters  </p>';
        }
    } else {
        for (var i = 0; i < curItem["parameters"].length; i++) {
            html += '<p class="cont">';
            var curParam = curItem["parameters"][i]
            var required = "No"
            if (curParam["required"]) required = "Yes"
            
            html += '<b>' + curParam["parameter"] + '</b>' +
                '<span>Required: ' + required + '</span></span>'


            if (curParam["default"]) {
                html += '<span>Default: ' + mmd.jsonTools.toJSON(curParam["default"]) + '</span>'
            }
            html += '</p>';

            curParam["des"] = this.normaliseStr(curParam["des"], true);
            html += '<p>&nbsp;&nbsp;&nbsp;&nbsp;' + curParam["des"] + '</p>';

        }
    }
    html += '</div>';

    html += '<br>'
    if (curItem["examples"] && curItem["examples"].length > 0) {
        html += '<p><b>Example: </b></p>';
        html += '<pre>';
        for (var i = 0; i < curItem["examples"].length; i++) {
            var curExample = curItem["examples"][i];
            curExample["context"] = this.normaliseStr(curExample["context"]);

            html += '<p>' + curExample["name"] + '</p>';
            html += '<p>' + curExample["context"] + '</p>';
        }
        html += '</pre>';
    }

    html += '</section>';

    this.docDiv.html(html);
}

var docCreator = new DocCreator();
docCreator.addBaseDocItem({
    "name": "ObjectCommand",
    "des": "Commands which inherits from ObjectCommand will have following methods build-in",
    "parameters": [{
        "parameter": "id",
        "des": "Get object by ID",
        "required": false
    }, {
        "parameter": "uid",
        "des": "Get object by UID, e.g. user define ID",
        "required": false
    }, {
        "parameter": "ids",
        "des": "Get objects by ID array",
        "required": false
    }, {
        "parameter": "uids",
        "des": "Get objects by UID array",
        "required": false
    }, {
        "parameter": "fromBuffer",
        "des": "Get content from buffer, would be one or more objects, or command results",
        "required": false
    }, {
        "parameter": "toBuffer",
        "des": "Buffer to save command results",
        "required": false
    }]

});