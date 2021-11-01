$(function () {
    let index = window.location.hash.slice(2) - 1;
    let wH = $(window).outerHeight();

    $(".elevator .elevator-item")
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active");
    $(".elevator .elevator-item").click(function () {
        $("#indexpage").off("scroll");
        $(this).addClass("active").siblings().removeClass("active");
    });
    $("#indexpage").on("mousewheel", function (e) {
        console.log(e);
        $("#indexpage").scroll(function (e) {

        const scroll = $(this).scrollTop();
        index = Math.round(scroll / wH);
        $(".elevator .elevator-item")
          .eq(index)
          .addClass("active")
          .siblings()
          .removeClass("active");
        // window.location.href = "page-index.html#s" + (index + 1);,
      });
        // return false;
    });
    $("#indexpage").scroll(function () {
        const scroll = $(this).scrollTop();
        index = Math.round(scroll / wH);
        $(".elevator .elevator-item")
            .eq(index)
            .addClass("active")
            .siblings()
            .removeClass("active");
        // window.location.href = "page-index.html#s" + (index + 1);
    });
    if(window.navigator.userAgent.includes('Safari') && !window.navigator.userAgent.includes('Chrome')){
        $('.root').attr('href', './assets/css/root-light-safari.css');
    }
});
