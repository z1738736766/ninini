/*
* @Author: Marte
* @Date:   2017-07-06 17:10:27
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-06 17:11:32
*/

// 'use strict';
app.filter("smileFilter",function(){
    return function(str){
        return str+"☺";
    }
})