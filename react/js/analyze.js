/**
 * Created by hk61 on 2016/4/20.
 */
/*
 * 分析一个对象或函数
 * @Param {Function/Object} obj
 * @Param {DOMElement} container 可选，默认body
 * @Param {String} name 分析的对象名称
 * */
function analyze(obj, container, name){
    var temp = '<dl>';

    name = name ? name : '';

    temp += '<dt>'+ name +'对象方法:</dt>';
    for(var k in obj){
        if(typeof obj[k] === 'function'){
            temp += '<dd class="function">' + k + '</dd>'
        }else{
            temp += '<dd class="attributes">'+ k + '===============' + typeof obj[k]  + '</dd>'
        }
    }

    temp += '<dt>'+ name +'原型:</dt>';
    for(var k in obj.prototype){
        if(typeof obj[k] === 'function'){
            temp += '<dd class="function">' +  k + '</dd>'
        }else{
            temp += '<dd class="attributes">' + k + '===============' + '</dd>'
        }
    }

    container = container ? container : document.body;
    container.innerHTML += temp;
}