$(document).ready(function() {
    $(".head-bottom a").mouseover(function() {
        $(".head-bottom a").css("color", "white");
        $(this).css("color", "black");
    }).mouseout(function() {
        $(this).css("color", "white");
    });

    $(".head-bottom a:last-child").mouseover(function() {
        $(".dropdown-menu").css("display", "block");
    }).mouseout(function() {
        $(".dropdown-menu").css("display", "none");
    });
    
    $(".dropdown-menu").mouseover(function() {
        $(".dropdown-menu").css("display", "block");
    }).mouseout(function() {
        $(".dropdown-menu").css("display", "none");
    });
    
    $(".collapse-button").click(function() {
        $(".collapsable-menu").toggleClass("hidden");    
    });
    
    $(".collapse-menu").click(function() {
        $(".collapse-content").toggleClass("hidden");    
    });
    
});