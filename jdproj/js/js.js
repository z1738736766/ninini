/*
* @Author: Marte
* @Date:   2017-07-04 19:30:10
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-05 15:05:45
*/

'use strict';
var transform = -10 ;
var index = 0;
var time;
// time = setInterval(fun1,3000);
function fun1(){
    index+=1;
    console.log(transform);
     transform-=10;
    $(".image_box").css({"transform":"translateX("+transform+"%)","transform-origin":"transform","transition":"transform 1.5s"});
    var point_box = $(".point_box").children();
    point_box.removeClass("current");
    $(point_box[index]).addClass('current');
    var time1 ;
    time1 = setInterval(fun2,1500);
    function fun2(){
        if (transform == -90) {
            transform=0;
            $(".image_box").css({"transform":"translateX("+transform+"%)","transition":"transform 0s"});
        };
        clearInterval(time1);
    }

    // if (transform == -90) {
    //     transform-=10;
    //     // $(".image_box").css({"transform":"translateX("+transform+"%)","transform-origin":"transform","transition":"transform 1.5s"});
    //     $(".image_box").css({"transform":"translateX(-10%)","transition":"transform 0s"});
    //     transform=0;
    //     var point_box = $(".point_box").children();
    //     point_box.removeClass("current");
    //     $(point_box[index]).addClass('current');
    //     index=-1;
    //     // clearInterval(time)
    // }else{
    //     transform-=10;
    //      $(".image_box").css({"transform":"translateX("+transform+"%)","transform-origin":"transform","transition":"transform 1.5s"});
    //     var point_box = $(".point_box").children();
    //     point_box.removeClass("current");
    //     $(point_box[index]).addClass('current');
    // };
}
document.addEventListener('touchstart',fun,false);
document.addEventListener('touchmove',fun,false);
document.addEventListener('touchend',fun,false);
var axis_X;
var move_transform;
function fun (event) {
    var e = event || window.event;
    switch(e.type){
        case 'touchstart':
            clearInterval(time);
            time=null;
            axis_X = e.changedTouches[0].clientX;
            console.log(transform);
            move_transform = transform;
            break;
        case "touchmove":
            // div.innerHTML = "移动："+e.changedTouches[0].clientX+"-"+e.changedTouches[0].clientY;
            var move_X = e.changedTouches[0].clientX;
            // console.log(move_X,axis_X);
            if (move_X < axis_X) {
                move_transform-=0.5;
                $(".image_box").css({"transform":"translateX("+move_transform+"%)"});
            }if (move_X > axis_X) {
                move_transform+=0.5;
                $(".image_box").css({"transform":"translateX("+move_transform+"%)"});
            };;

            // console.log(innerWidth*numb+move_X);
            break;
        case 'touchend':
            console.log("结束："+e.changedTouches[0].clientX);
            if (move_transform > transform) {
                transform+=10;
                $(".image_box").css({"transform":"translateX("+transform+"%)","transform-origin":"transform","transition":"transform 1.5s"});
                move_transform = 0;
            }else{
                transform-=10;
                $(".image_box").css({"transform":"translateX("+transform+"%)","transform-origin":"transform","transition":"transform 1.5s"});
                move_transform = 0;
            };
            if (!time) {
                time=setInterval(fun1,3000);
            };
            break;
    }
}