/*
* @Author: Marte
* @Date:   2017-07-05 20:27:19
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-06 14:26:58
*/

//'use strict';
var time ;
time = setInterval(time_fun,1000);
// console.log(new Date().getHours())
var Year = new Date().getFullYear();
var Month =  new Date().getMonth()+1;
var Date_D =  new Date().getDate();
function time_fun(){
    var data = new Date().getTime();
    if (new Date().getHours() < 12) {
        var Definition_time = new Date(Year,Month,Date_D,12,00,00).getTime()-data;
        var hour = parseInt(Definition_time/1000/60/60%24);
        var minute = parseInt(Definition_time/1000/60%60);
        var second = parseInt(Definition_time/1000%60);
        // console.log(hour+":"+minute+":"+second);
        $(".hour_time_Ten").text(parseInt(hour/10));
        $(".hour_time_individual").text(parseInt(hour%10));
        $(".branch_time_Ten").text(parseInt(minute/10));
        $(".branch_time_individual").text(parseInt(minute%10));
        $(".second_time_Ten").text(parseInt(second/10));
        $(".second_time_individual").text(parseInt(second%10));
    }else if (new Date().getHours() == 12) {
        $(".hour_time_Ten").text(0);
        $(".hour_time_individual").text(0);
        $(".branch_time_Ten").text(0);
        $(".branch_time_individual").text(0);
        $(".second_time_Ten").text(0);
        $(".second_time_individual").text(0);
    }else if (new Date().getHours() > 12) {
        var Definition_time = new Date(Year,Month,Date_D+1,12,00,00).getTime()-data;
        var hour = parseInt(Definition_time/1000/60/60%24);
        var minute = parseInt(Definition_time/1000/60%60);
        var second = parseInt(Definition_time/1000%60);
        // console.log(hour+":"+minute+":"+second);
        $(".hour_time_Ten").text(parseInt(hour/10));
        $(".hour_time_individual").text(parseInt(hour%10));
        $(".branch_time_Ten").text(parseInt(minute/10));
        $(".branch_time_individual").text(parseInt(minute%10));
        $(".second_time_Ten").text(parseInt(second/10));
        $(".second_time_individual").text(parseInt(second%10));
    }

    // console.log(Definition_time);
    // var hour = parseInt(Definition_time/1000/60/60%24);
    // var minute = parseInt(Definition_time/1000/60%60);
    // var second = parseInt(Definition_time/1000%60);
    // console.log(hour+":"+minute+":"+second);
    // $(".hour_time_Ten").text(parseInt(hour/10));
    // $(".hour_time_individual").text(parseInt(hour%10));
    // $(".branch_time_Ten").text(parseInt(minute/10));
    // $(".branch_time_individual").text(parseInt(minute%10));
    // $(".second_time_Ten").text(parseInt(second/10));
    // $(".second_time_individual").text(parseInt(second%10));
}

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 1500
    });
