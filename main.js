$(document).ready(function(){
    $(".main_btna").on("click",function(){
        $(".overlay").show();
        $(".modal").slideDown();
    });

    $(".close").on("click",function(){
        $(".modal").slideUp(function(){
            $(".overlay").hide();
        });
        
    })
});