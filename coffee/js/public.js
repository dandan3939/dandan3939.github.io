$(".inner .top").hover(function(){
    $(".describe-top").css("display","block");
},function(){
    $(".describe-top").css("display","none");
});
$(".inner .bottom").hover(function(){
    $(".describe-bottom").css("display","block");
},function(){
    $(".describe-bottom").css("display","none");
});
$('#your-carousel-id').carousel({
    itemWidth: 350, // 图片宽度
    itemHeight: 200, // 图片高度
    reflectionVisible: true, //倒影可见
    reflectionDistance: 0, //反射距离
    autoSlideshow: 1, //自动幻灯片
    enableMouseWheel: 0,//滚轮控制导航
});
$(".city").on("click",function() {
    $(".city-info").toggleClass("none");
    $(".city>img:nth-of-type(2)").toggle();
    $(".city>img:nth-of-type(1)").toggle();
})
$(".city-info ul li").on("click",function() {
    var x = $(this).attr("data-storex");
    var y = $(this).attr("data-storey");
    var namess = $(this).html();
    $("#map").empty();
    $("#map").height($("#map").width()/3)
    var map = new BMap.Map("map");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(x,y), 17);  // 初始化地图,设置中心点坐标和地图级别
    var marker1 = new BMap.Marker(new BMap.Point(x,y),17);  // 创建标注
    map.addOverlay(marker1);
    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    map.setCurrentCity(namess);
});

    window.onscroll = function(){
        if (document.body.scrollTop>50) {
            $(".returnTop").show()
        }else{
            $(".returnTop").hide()
        }
    }
    var timer;
    $(".returnTop").on("click",function() {
        var start = document.body.scrollTop;
        var end = 0;
        var change = end- start;
        var step = 0;
        var maxStep = 30;
        if (timer) {
            clearInterval(timer);
        }
        timer = setInterval(function(){
            step++;
            if (step==maxStep) {
                clearInterval(timer);
            }
        document.body.scrollTop = start + change/maxStep*step ;
        },16)
    })
    var backTop = function(){
        $(window).scroll(function(){
            var height = $("#myCarousel1").height();
            if ($(window).scrollTop()>height){
                $(".topbtn").fadeIn(0);
                $("header").css({
                   "background": "#fff",
                   "color": "#000",
                });
                $("#example-navbar-collapse li a").css({
                   "color": "#000",
                })
                $(".navbar-header img").attr({
                   "src":"img/logo-black.png"
                })
            }else{
                $(".topbtn").fadeOut(0);
                $("header").css({
                    backgroundColor: "rgba(20, 20, 20, 0.498039)",
                });
                $("#example-navbar-collapse li a").css({
                   "color": "#fff",
                })
                $(".navbar-header img").attr({
                   "src":"img/logo.png"
                })
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $(".topbtn").click(function(){
            $('body,html').animate({scrollTop:0},500);
            return false;
        });
    }
    backTop();
    function scroll(){
        $('.nav li a').click(function () {
            $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
            return false;
        });
    }
    scroll();
