
$(document).ready(function() {
    $(".various").fancybox({
        maxWidth    : 800,
        maxHeight   : 600,
        fitToView   : false,
        width       : '70%',
        height      : '70%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'fade',
        closeEffect : 'none',
        padding     : 0
    });
    initSlideBlocks();
    initPopups();
    tabs();
});

function tabs() {

    $('.service_tabs_item').click(function() {
        var tab = $(this);
        if(!(tab).hasClass('tabs_active')) {
            $('.service_tabs_item').removeClass('tabs_active');
            $(tab).addClass('tabs_active');
            if((tab).hasClass('service_tabs_item1')) {
                $('.tabs_ser').css({"opacity" : "0"});
                $('.tabs_ser2').css({"opacity" : "1"});
                $('.tabs_content').removeClass('tabs_content_active');
                $('.tabs_content_1').addClass('tabs_content_active');
            }
            if((tab).hasClass('service_tabs_item2')) {
                $('.tabs_ser').css({"opacity" : "0"});
                $('.tabs_ser2').css({"opacity" : "0"});
                $('.tabs_content').removeClass('tabs_content_active');
                $('.tabs_content_2').addClass('tabs_content_active');
            }
            if((tab).hasClass('service_tabs_item3')) {
                $('.tabs_ser').css({"opacity" : "1"});
                $('.tabs_ser2').css({"opacity" : "0"});
                $('.tabs_content').removeClass('tabs_content_active');
                $('.tabs_content_3').addClass('tabs_content_active');
            }
        }
    });

}

function initSlideBlocks() {
    $('.slide-block .name, .slide-block .button span').bind('click', function() {
        $(this).closest('.slide-block').toggleClass('open');
    });
}

function initPopups() {
    $(".get-popup").on("click", function() {
        var m = $(this).data("model");
        $(".popup-content").css("display", "none")
        $(".popup-content."+m).css("display", "block");

        switch(m) {
            case "...":
                // additional logic
                break;
        }

        $(".popup-bg").fadeIn(300);
        return false;
    });

    $(".popup-content .close").on("click", function() {
        $(".popup-bg").fadeOut(300);
    });

    $(".popup-bg").on("click", function() {
        $(".popup-bg").fadeOut(300);
    });

    $(".popup-content").on("click", function(event) {
        event.stopPropagation();
    });
}