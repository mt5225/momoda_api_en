//
// 文件名称(File Name):			jsForKeeper/common.js
//
// 功能描述(Description):		momoda web page common function
//
// 作者(Author): 				wxz
//
// 日期(Create Date): 			2015.8.22
//
// 修改记录(Revision History):	
//


var mmd = {} ;
mmd.util = {};


/**
 * 克隆对象
 * @param {Object} obj 克隆的对象
 * @param {Boolean} isDeep	
 * @return {Array}	克隆后的对象
 */
mmd.util.cloneObj = function(obj,isDeep){
    if(isDeep === undefined )isDeep = false;

     if (!obj || typeof obj !== 'object' ) {
         return obj;
     }
     var c = obj instanceof Array ? [] : {};
     for (var i in obj) {
         var prop = obj[i];
         if ( isDeep &&  typeof prop == 'object') {
            if (prop instanceof Array) {
                c[i] = [];

                for (var j = 0; j < prop.length; j++) {
                    if (typeof prop[j] != 'object') {
                        c[i].push(prop[j]);
                    } else {
                        c[i].push(mmd.util.cloneObj(prop[j],isDeep));
                    }
                }
            } else {
                c[i] = mmd.util.cloneObj(prop, isDeep);
            }
         } else {
            c[i] = prop;
         }
     };

     return c;
};

/**
 * 为属性解析路径
 * @param {String} name 需要解析的路径
 * @return {Array} 解析后的路径
 * @example uinv.util._parsePathForAttribute(path);
 */
mmd.util._parsePathForAttribute = function( name ){
	if( typeof(name) == "string" ){
		if( name.indexOf("/") != -1 ){
			name = name.split("/");
		}
		else if( name.indexOf("\\") != -1 ){
			name = name.split("\\");
		}	
		if(typeof(name) == "string"){
//			return [name, "_SingleName_"];
			return [name];
		}
		else{
//			if( name.length == 1 ) name.push( "_SingleName_" );
			return name;
		}
	}
	return name;		
};
/**
 * 获取属性
 * @param {Object} obj 对象
 * @param {String} path 路径
 * @return {Object} 属性值
 */
mmd.util.getAttribute = function( obj, path ){
	path = mmd.util._parsePathForAttribute(path);
	for(var i = 0 ; i < path.length ; i++){
		if(!obj) return undefined;
		obj = obj[path[i]];
	}
	return obj;

	
};
/**
 * 设置属性
 * @param {Object} obj 对象
 * @param {String} path 路径
 * @param {String} value 设置的属性值
 */
mmd.util.setAttribute = function( obj, path, value ){
	path = mmd.util._parsePathForAttribute(path);
	for(var i = 0 ; i < path.length - 1 ; i++){
		var cur = path[i];
		if(!obj[cur]) obj[cur] = {};
		obj = obj[cur];
	}	
	obj[path[path.length - 1]] = value;

};

mmd.util.clearArray = function(opArray){
	opArray.splice(0, opArray.length);
    return opArray;
};
/**
 * 在数组中找到指定元素的位置(以0开始)
 * @param {Array} opArray	对象数组
 * @param {String} opValue	要查找值
 * @return {String}	返回位置，未找到返回-1
 */
mmd.util.findItemInArray = function(opArray,opValue){
    for (var i = 0; i < opArray.length; i++ ){
        if (opArray[i] == opValue){
            return i;
        }
    };
    return -1;
};

/**
 * 在数组末尾添加元素 如果有,则返回位置;如果是新添加,则返回新数组长度
 * @param {String} opValue 要添加的元素
 * @param {Array} opArray 对象数组
 * @return {String}	数组中有该元素则返回该元素的位置，否则返回新数组长度
 */
mmd.util.addNewItemToArray = function(opValue,opArray){
    for (var i = 0; i < opArray.length; i++ ){
        if (opArray[i] == opValue){
            return i;
        }
    };
    opArray.push(opValue);
    return opArray.length;
};

//////////////////////////////////////////////////////////////////////////////////
/**
 * 向数组中插入元素
 * @param {String} opValue	插入的元素
 * @param {Array} opArray	插入的对象数组
 * @param {String} index 		插入的位置
 * @return {Array} 新数组
 */
mmd.util.insertItemToArray = function(opValue,opArray,index){
	opArray.splice(index, 0, opValue);
	return opArray;
};


mmd.hash = {};
/**
 * 获取对象中元素数目
 * @param {Object} opObject
 * @return {Number}
 */
mmd.hash.getSize = function(opObject) {
    var result = 0;
    for(var cur in opObject) {
        result += 1;
    };
    return result;
};
/**
 * 查看对象是否包含元素
 * @param {Object} opObject	
 * @return {Boolean}
 */
mmd.hash.isEmpty = function(opObject) {
    for(var cur in opObject){    	
        return false;
    };
    return true;
};
/**
 * 查看对象中是否包含指定名称的元素
 * @param {Object} opObject
 * @param {String} key
 * @return {Boolean}
 */
mmd.hash.hasKey = function(opObject,key) {
   return typeof(opObject[key]) != 'undefined';
};
/**
 * 重新命名对象元素
 * @param {Object} opObject
 * @param {String} oldKey
 * @param {String} newKey
 */
mmd.hash.renameKey = function(opObject,oldKey, newKey) {
   if(opObject[oldKey]){
   		var tmp = opObject[oldKey];
   		delete opObject[oldKey];
   		opObject[newKey] = tmp;
   }
};
/**
 * 获取第一个元素的名称
 * @param {Object} opObject
 * @return {String}
 */
mmd.hash.getFirstKey = function(opObject) {   
    for (var i in opObject) {
        return i;
    };
    return null;
};
/**
 * 获取对象所有元素的名称
 * @param {Object} opObject
 * @return {Array}
 */
mmd.hash.keys = function(opObject) {
    var keys = [];
    for (var i in opObject) {
        keys.push(i);
    };
    return keys;
};
/**
 * 获取对象中第一个元素的值
 * @param {Object} opObject
 * @return {String}
 */
mmd.hash.getFirstValue = function(opObject) {   
    for (var i in opObject) {
        return opObject[i];
    };
    return undefined ;
};
/**
 * 获取对象中所有元素的值
 * @param {Object} opObject
 * @return {Array}
 */
mmd.hash.values = function(opObject) {
	if(opObject instanceof Array) return opObject;//数组无需转换,ie8里遍历数组会把数组原型链扩展方法当做一个属性输出
    var values = [];
    for (var i in opObject) {
        values.push(opObject[i]);
    };
    return values;
};
/**
 * 清除对象中的元素
 * @param {Object} opObject
 */
mmd.hash.clear = function(opObject) {
     for(var key in opObject ){
        delete opObject[key];
    }
};
/**
 * 合并对象 A中与B相同名称的元素会被替换成B中的值 返回长大了的A
 * @param {Object} opObjectA
 * @param {Object} opObjectB
 * @param {Boolean} isDeep
 * @param {Boolean} isReturnNew
 * @param {Boolean} isCloneObjDeep
 * @return {Object}
 */
mmd.hash.combine = function(opObjectA, opObjectB, isDeep, isReturnNew, isCloneObjDeep) {
    if (isReturnNew){
    	var result = uinv.util.cloneObj(opObjectA, isCloneObjDeep);
    	uinv.hash.combine(result, opObjectB, isDeep, false);
        return result;
    }
    else{
        for(var cur in opObjectB){
        	if(isDeep){
        		if( opObjectA[cur] !== undefined && opObjectA[cur] !== null
        			&& !(opObjectA[cur] instanceof Array) && typeof opObjectA[cur] == "object"
        			&& !(opObjectB[cur] instanceof Array) && typeof opObjectB[cur] == "object" ){        			
        			uinv.hash.combine(opObjectA[cur], opObjectB[cur], isDeep, false);
        		}
        		else{
        			opObjectA[cur] = opObjectB[cur];  
        		}
        	}
        	else{
            	opObjectA[cur] = opObjectB[cur];            	
        	}
        };
        return opObjectA;
    }
};
/**
 * 合并对象 只会在A的基础上添加元素,不影响原有元素 返回长大了的A
 * @param {Object} opObjectA
 * @param {Object} opObjectB
 * @param {Boolean} isDeep
 * @param {Boolean} isReturnNew
 * @param {Boolean} isCloneObjDeep
 * @return {Object}
 */
mmd.hash.combineNew = function(opObjectA, opObjectB, isDeep, isReturnNew, isCloneObjDeep) {
    if (isReturnNew){
    	var result = uinv.util.cloneObj(opObjectA, isCloneObjDeep);
    	uinv.hash.combineNew(result, opObjectB, isDeep, false);
        return result;
    }
    else{
        for(var cur in opObjectB){            
        	if(isDeep){
        		if( opObjectA[cur] !== undefined && opObjectA[cur] !== null
        			&& !(opObjectA[cur] instanceof Array) && typeof opObjectA[cur] == "object"
        			&& !(opObjectB[cur] instanceof Array) && typeof opObjectB[cur] == "object" ){   
        			uinv.hash.combineNew(opObjectA[cur], opObjectB[cur], isDeep, false);
        		}
        		else{
        			if( opObjectA[cur] === undefined || opObjectA[cur] === null ) opObjectA[cur] = opObjectB[cur];
        		}
        	}
        	else{
            	if( opObjectA[cur] === undefined || opObjectA[cur] === null ) opObjectA[cur] = opObjectB[cur];        	
        	}            
        };
        return opObjectA;
    }
};

/**
 * 获取交叉值 以A为标准,返回A中与B相同元素组成的对象
 * @param {Object} opObjectA
 * @param {Object} opObjectB
 * @param {Boolean} keepValueSame 
 * @return {Object}
 */
mmd.hash.getIntersection = function( opObjectA, opObjectB, keepValueSame ) {
	var result = {};
	for(var cur in opObjectA){
		if(opObjectB[cur]){
			if( keepValueSame ){
				if(opObjectA[cur] ==  opObjectB[cur]) result[cur] = opObjectA[cur];
			}
			else{
				result[cur] = opObjectA[cur];
			}
		}
	}
	return result;
};

/**
 * 消减对象 消减A与B中相同的元素 返回被消减的A
 * @param {Object} opObjectA
 * @param {Object} opObjectB
 * @param {Boolean} isReturnNew
 * @return {Object}
 */
mmd.hash.subtract = function( opObjectA, opObjectB , isReturnNew) {
	if(isReturnNew === undefined) isReturnNew = true;
	if(isReturnNew){
		var result = {};
		for(var cur in opObjectA){
			if(!opObjectB || !opObjectB[cur]) result[cur] = opObjectA[cur];
		}
		return result;
	}
	else{
		for(var cur in opObjectB){
			delete opObjectA[cur];
		}
		return opObjectA;
	}
};

mmd.jsonTools = {};
(function () {
    var m = {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    },
    sort = false,
    s = {
        'array': function (x) {
        	if(sort){
	            var a = [], b, f, i, l = x.length, v;
	            for (i = 0; i < l; i += 1) {
	                v = x[i];
	                f = s[typeof v];
	                if (f) {
	                    v = f(v);
	                    if (typeof v == 'string') {
	                        if (b) {
	                            a[a.length] = ',';
	                        }
	                        a[a.length] = v;
	                        b = true;
	                    }
	                }
	            }	            
	            a = mmd.jsonTools.sortArrayByChar( a );
	            mmd.jsonTools.insertItemToArray('[', a, 0);
	            a[a.length] = ']';
	            return a.join(''); 
        	}
        	else{ 
	            var a = ['['], b, f, i, l = x.length, v;
	            for (i = 0; i < l; i += 1) {
	                v = x[i];
	                f = s[typeof v];
	                if (f) {
	                    v = f(v);
	                    if (typeof v == 'string') {
	                        if (b) {
	                            a[a.length] = ',';
	                        }
	                        a[a.length] = v;
	                        b = true;
	                    }
	                }
	            }
	            a[a.length] = ']';
	            return a.join('');        		
        	}
        },
        'boolean': function (x) {
            return String(x);
        },
        'null': function (x) {
            return "null";
        },
        'number': function (x) {
            return isFinite(x) ? String(x) : 'null';
        },
        'object': function (x) {
            if (x) {
                if (x instanceof Array) {
                    return s.array(x);
                }

                if(sort){
	                var a = ['{'], b, f, i, v;
	                var keys = mmd.jsonTools.hash.keys(x);
	                keys = mmd.jsonTools.sortArrayByChar(keys);
	                var l = keys.length;
	                for (i = 0; i < l; i += 1) {
	                    v = x[keys[i]];
	                    f = s[typeof v];
	                    if (f) {
	                        v = f(v);
	                        if (typeof v == 'string') {
	                            if (b) {
	                                a[a.length] = ',';
	                            }
	                            a.push(s.string(i), ':', v);
	                            b = true;
	                        }
	                    }
	                }
	                a[a.length] = '}';
	                return a.join('');                	
                	
                }else{
	                var a = ['{'], b, f, i, v;
	                for (i in x) {
	                    v = x[i];
	                    f = s[typeof v];
	                    if (f) {
	                        v = f(v);
	                        if (typeof v == 'string') {
	                            if (b) {
	                                a[a.length] = ',';
	                            }
	                            a.push(s.string(i), ':', v);
	                            b = true;
	                        }
	                    }
	                }
	                a[a.length] = '}';
	                return a.join('');
                }
            }
            return 'null';
        },
        'string': function (x) {
            if (/["\\\x00-\x1f]/.test(x)) {
                x = x.replace(/([\x00-\x1f\\"])/g, function(a, b) {
                    var c = m[b];
                    if (c) {
                        return c;
                    }
                    c = b.charCodeAt();
                    return '\\u00' +
                    Math.floor(c / 16).toString(16) +
                    (c % 16).toString(16);
                });
            }
            return '"' + x + '"';
        }
//        ,
//        'function':function (x) {
//            return '"' + x.toString() + '"';
//        }
    };
	/**
	 * 对象转字符串
	 */
    mmd.jsonTools.toJSON = function(v, sortByStr) {
    	//wxz_modify:如果传入["1233"],会索引到'number'
        //var f = isNaN(v) ? s[typeof v] : s['number'];
    	//if (f) return f(v);
    	/////////////////////////////////////////
    	sort = sortByStr;
    	if(v instanceof Array) return s.array(v);
    	else{
    		var f = isNaN(v) ? s[typeof v] : s['number'];
        	if (f) return f(v);
    	}
    	//wxz_modify_end
    };
/**
 * 字符串转对象
 */
   mmd.jsonTools.parseJSON = function(v, safe) {  
   		return $.jsonTo(v );
//        if (safe === undefined) safe = true;
//        if (safe && !/^("(\\.|[^"\\\n\r])*?"|[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t])+?$/.test(v))
//            return undefined;
//        return eval('('+v+')');
    };

    mmd.jsonTools.parseJSON.safe = false;
	
})();


$.jsonTo = (function () {
  var number
      = '(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)';
  var oneChar = '(?:[^\\0-\\x08\\x0a-\\x1f\"\\\\]'
      + '|\\\\(?:[\"/\\\\bfnrt]|u[0-9A-Fa-f]{4}))';
  var string = '(?:\"' + oneChar + '*\")';

  // Will match a value in a well-formed JSON file.
  // If the input is not well-formed, may match strangely, but not in an unsafe
  // way.
  // Since this only matches value tokens, it does not match whitespace, colons,
  // or commas.
  var jsonToken = new RegExp(
      '(?:false|true|null|[\\{\\}\\[\\]]'
      + '|' + number
      + '|' + string
      + ')', 'g');

  // Matches escape sequences in a string literal
  var escapeSequence = new RegExp('\\\\(?:([^u])|u(.{4}))', 'g');

  // Decodes escape sequences in object literals
  var escapes = {
    '"': '"',
    '/': '/',
    '\\': '\\',
    'b': '\b',
    'f': '\f',
    'n': '\n',
    'r': '\r',
    't': '\t'
  };
  function unescapeOne(_, ch, hex) {
    return ch ? escapes[ch] : String.fromCharCode(parseInt(hex, 16));
  }

  // A non-falsy value that coerces to the empty string when used as a key.
  var EMPTY_STRING = new String('');
  var SLASH = '\\';

  // Constructor to use based on an open token.
  var firstTokenCtors = { '{': Object, '[': Array };

  var hop = Object.hasOwnProperty;

  return function (json, opt_reviver) {
  	//wxz_add
  	if( json === undefined ||  json === null ) return undefined;
  	if(typeof json != "string" ) return json;
  	if( json === "") return "";
  	/////////////////////////
  	
    // Split into tokens
    var toks = json.match(jsonToken);
    //wxz_add
    if(toks == null){
    	if(json == "null") return null;
    	if(json == "undefined") return undefined;
    	return json;
    }
    //////////////////////////
    // Construct the object to return
    var result;
    var tok = toks[0];
    var topLevelPrimitive = false;
    if ('{' === tok) {
      result = {};
    } else if ('[' === tok) {
      result = [];
    } else {
      // The RFC only allows arrays or objects at the top level, but the JSON.parse
      // defined by the EcmaScript 5 draft does allow strings, booleans, numbers, and null
      // at the top level.
      result = [];
      topLevelPrimitive = true;
    }

    // If undefined, the key in an object key/value record to use for the next
    // value parsed.
    var key;
    // Loop over remaining tokens maintaining a stack of uncompleted objects and
    // arrays.
    var stack = [result];
    for (var i = 1 - topLevelPrimitive, n = toks.length; i < n; ++i) {
      tok = toks[i];

      var cont;
      switch (tok.charCodeAt(0)) {
        default:  // sign or digit
          cont = stack[0];
          cont[key || cont.length] = +(tok);
          key = void 0;
          break;
        case 0x22:  // '"'
          tok = tok.substring(1, tok.length - 1);
          if (tok.indexOf(SLASH) !== -1) {
            tok = tok.replace(escapeSequence, unescapeOne);
          }
          cont = stack[0];
          if (!key) {
            if (cont instanceof Array) {
              key = cont.length;
            } else {
              key = tok || EMPTY_STRING;  // Use as key for next value seen.
              break;
            }
          }
          cont[key] = tok;
          key = void 0;
          break;
        case 0x5b:  // '['
          cont = stack[0];
          stack.unshift(cont[key || cont.length] = []);
          key = void 0;
          break;
        case 0x5d:  // ']'
          stack.shift();
          break;
        case 0x66:  // 'f'
          cont = stack[0];
          cont[key || cont.length] = false;
          key = void 0;
          break;
        case 0x6e:  // 'n'
          cont = stack[0];
          cont[key || cont.length] = null;
          key = void 0;
          break;
        case 0x74:  // 't'
          cont = stack[0];
          cont[key || cont.length] = true;
          key = void 0;
          break;
        case 0x7b:  // '{'
          cont = stack[0];
          stack.unshift(cont[key || cont.length] = {});
          key = void 0;
          break;
        case 0x7d:  // '}'
          stack.shift();
          break;
      }
    }
    // Fail if we've got an uncompleted object.
    if (topLevelPrimitive) {
      if (stack.length !== 1) { throw new Error(); }
      result = result[0];
    } else {
      if (stack.length) { throw new Error(); }
    }

    if (opt_reviver) {
      // Based on walk as implemented in http://www.json.org/json2.js
      var walk = function (holder, key) {
        var value = holder[key];
        if (value && typeof value === 'object') {
          var toDelete = null;
          for (var k in value) {
            if (hop.call(value, k) && value !== holder) {
              // Recurse to properties first.  This has the effect of causing
              // the reviver to be called on the object graph depth-first.

              // Since 'this' is bound to the holder of the property, the
              // reviver can access sibling properties of k including ones
              // that have not yet been revived.

              // The value returned by the reviver is used in place of the
              // current value of property k.
              // If it returns undefined then the property is deleted.
              var v = walk(value, k);
              if (v !== void 0) {
                value[k] = v;
              } else {
                // Deleting properties inside the loop has vaguely defined
                // semantics in ES3 and ES3.1.
                if (!toDelete) { toDelete = []; }
                toDelete.push(k);
              }
            }
          }
          if (toDelete) {
            for (var i = toDelete.length; --i >= 0;) {
              delete value[toDelete[i]];
            }
          }
        }
        return opt_reviver.call(holder, key, value);
      };
      result = walk({ '': result }, '');
    }

    return result;
  };
})();
