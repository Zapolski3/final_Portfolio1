$(document).ready(function(){
    
setTimeout(function(){ $("#div1").css({opacity:0}).animate({opacity:1}, "slow")},500);


$("#button1").on("click", function(){

    $("#aboutMe").removeClass("hide");
    $("#techUsed").attr("class","hide");
})



$("#button2").on("click", function(){
    
    $("#aboutMe").attr("class","hide");
    $("#techUsed").removeClass("hide");
})


});
