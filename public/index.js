$(document).ready(function(){
    
setTimeout(function(){ $("#div1").css({opacity:0}).animate({opacity:1}, "slow")},500);


// function result(){
//     // var t will store height of div with "parent id"
//     var t = $("#parent").height();
//     console.log(t);


// }





$("#button1").on("click", function(){
    
    $("#aboutMe").removeClass("hide");
    $("#techUsed").attr("class","hide");
   
    var result = $("#img").height();
    console.log(result)

    $("#parent").animate({height:"577px"}, "slow");

    console.log(result)
});



$("#button2").on("click", function(){
    
    $("#aboutMe").attr("class","hide");
    $("#techUsed").removeClass("hide");
   
    var result = $("#techText").height() + 15;
    console.log(result)

    $("#parent").animate({height: result}, "slow");

});


});
