$(document).ready(function(){
    
setTimeout(function(){ $("#div1").css({opacity:0}).animate({opacity:1}, "slow")},500);
// setTimeout(function(){ $("#div1").css({height:0}).animate({height:"h1"}, "slow")},500);

// setTimeout(function(){ $("#parent").css({height:0, visibility:"visible"}).animate({height:"450px"}, "slow")},1000);

$("#button1").click("click",function(){
    $("#aboutMe").attr("class","visible");
    $("#techUsed").attr("class","hidden");
    $("#img").attr("class","visible");
})

$("#button2").click("click",function(){
    $("#aboutMe").attr("class","hidden");
    $("#techUsed").attr("class","visible");
    $("#img").attr("class","hidden");
})







});
