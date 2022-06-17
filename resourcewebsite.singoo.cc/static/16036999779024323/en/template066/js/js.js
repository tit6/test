$(function() {


    $("#menuBtn").click(function() {
        $("#nav").toggleClass('toLeft');
        $(this).stop().toggleClass("active");
        $('#setBtn').removeClass('active');
        $('.headerTop').slideUp();
    });
    $("#setBtn").click(function() {
        $(".headerTop").stop().slideToggle('slow');
        $(this).stop().toggleClass("active");
        $('#menuBtn').removeClass('active');
        $('#nav').removeClass('toLeft');
    });

    $('#aside .asideList > li').each(function(){
        if($(this).find('ul').length){
            $(this).addClass('hasUl');
        }
    });

    $('#nav li').each(function(){
        if($(this).find('li').length){
            $(this).addClass('hasUl');
        }
    });

    jQuery.fn.isChildAndSelfOf = function(b){
        return (this.closest(b).length > 0);
    };

    if($(window).width() >875){
        $('#nav>li').mouseenter(function(){
            // $(this).find('>ul').stop().fadeIn(300);
            // $(this).siblings().find('>ul').fadeOut(300);
            var _this = $(this);
            _this.addClass('selected').siblings().removeClass('selected');

        });

        var controller = true;
        $('body').mouseover(function(even){
            var el = even.target;
            var timer;
            if(!$(el).isChildAndSelfOf($('#nav'))){
                controller = true;
                timer = setTimeout(function(){
                    if(controller){
                        $('#nav>li').removeClass('selected');
                        // $('#nav>li>ul').stop().fadeOut(300);
                    }
                },500);
            }else{
                controller = false;
                clearTimeout(timer);
            }
        });

        $('#aside .asideList > li>span').click(function(){
            $(this).parent().toggleClass('active');

            $(this).parent().find('>ul').slideToggle();
        });
    }else{
        $('#nav > li > span').click(function(){
            let liD = $(this).parents('li');
            if(liD.hasClass('selected2')){
                liD.removeClass('selected2');
                return false;
            }else{
                liD.addClass('selected2').siblings().removeClass('selected2');
            }

        });
    }

    if($(window).innerWidth()>1200){
        $(window).scroll(function(){
            if($(window).scrollTop() >0){
                $('#header').addClass('move');

            }else{
                $('#header').removeClass('move');
            }
        });
        $('#nav>li li').on({
            mouseenter:function(){
                $(this).find('>ul').stop().fadeIn(1);
            },
            mouseleave:function(){
                $(this).find('>ul').stop().fadeOut(1);
            }
        });
    }

    $('.seaBtn').click(function(event){
        $(this).toggleClass('selected');
        $('.searchWrap').stop().fadeToggle(400);
        event.stopPropagation();
    });

    $('.lang').click(function(){
        $(this).toggleClass('selected');
        $(this).find('ul').stop().slideToggle();
        event.stopPropagation();
    });

    $(document).click(function(e){
        $('.seaBtn').removeClass('selected');
        $('.searchWrap').stop().fadeOut();
        $('.lang').removeClass('selected');
        $('.lang').find('ul').stop().slideUp();
    });

    $('.searchWrap .search,.searchWrap label,.searchWrap button').click(function (event) {
        event.stopPropagation();
    });

    var padTop = $('.asideList>li').length*36+50;
    var kg = 0;
    $(".asideTitle").click(function() {

        if (viewport().width <= 875) {
            $(".asideList").stop().slideToggle();
            $(".asideTitle").toggleClass("listside");
            if(kg==0){
                $('.content').stop().animate({'paddingTop':padTop+'px'});
                kg=1;
                return false;
            }else{
                $('.content').stop().animate({'paddingTop':'50px'});
                kg=0;
                return false;
            }
        }
    });

    $("#tags li").eq(0).addClass("selected").siblings().removeClass("selected");
    $("#tagContent .tagContent").eq(0).show().siblings().hide();
    $("#tags li").click(function() {
        $(this).addClass("selected").siblings("#tags li").removeClass("selected");
        var num = $("#tags li").index($(this));
        $(".tagContent").eq(num).show().siblings(".tagContent").hide();
    });

    /*$.fn.parallax = function (options) {
        var parallax_element = this;
        var settings = {speed: '100', ascending: true, delay: '1000'};
        if (options) {
            $.extend(settings, options);
        }
        var ad = "+";
        if (!settings['ascending'] == true) {
            var ad = "-";
        }
        $(window).scroll(function () {
            var wScroll = $(this).scrollTop()+$(this).height()-parallax_element.parent().parent().offset().top;
            if(wScroll>0 && wScroll<$(this).height()+parallax_element.parent().parent().innerHeight()){
                parallax_element.css({
                    "transform": "translate(-50%, " + ad + wScroll * settings['speed'] + "px)",
                    "transition-duration": settings['delay'] + "ms"
                });
            }
        });
    }*/

});




