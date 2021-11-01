(function () {
  let fs = 3;
  $(".c-f-s button")
    .eq(0)
    .click(function () {
      fs++;
      if (fs >= 5) {
        fs = 5;
        $(this).prop("disabled", true);
        $(".content").css("font-size", fs + "vw");
        mySwiperVer1.slides.forEach((item, index) => {
          item.style.height = h1Arr[fs - 1] + "px";
        });
        mySwiperVer1.updateSize();
        mySwiperVer2.slides.forEach((item, index) => {
          item.style.height = h2Arr[fs - 1] + "px";
        });
        mySwiperVer2.updateSize();
        return;
      }
      $(".content").css("font-size", fs + "vw");
      $("button").prop("disabled", false);
      mySwiperVer1.slides.forEach((item, index) => {
        item.style.height = h1Arr[fs - 1] + "px";
      });
      mySwiperVer1.updateSize();
      mySwiperVer2.slides.forEach((item, index) => {
        item.style.height = h2Arr[fs - 1] + "px";
      });
      mySwiperVer2.updateSize();
    });
  $(".c-f-s1 button")
    .eq(0)
    .click(function () {
      // console.log(123);
      fs++;
      if (fs >= 5) {
        fs = 5;
        $(this).prop("disabled", true);
        $(".content").css("font-size", fs + "vw");
        mySwiperVer1.slides.forEach((item, index) => {
          item.style.height = h1Arr[fs - 1] + "px";
        });
        mySwiperVer1.updateSize();
        mySwiperVer2.slides.forEach((item, index) => {
          item.style.height = h2Arr[fs - 1] + "px";
        });
        mySwiperVer2.updateSize();
        return;
      }
      $(".content").css("font-size", fs + "vw");
      $("button").prop("disabled", false);
      mySwiperVer1.slides.forEach((item, index) => {
        item.style.height = h1Arr[fs - 1] + "px";
      });
      mySwiperVer1.updateSize();
      mySwiperVer2.slides.forEach((item, index) => {
        item.style.height = h2Arr[fs - 1] + "px";
      });
      mySwiperVer2.updateSize();
    });

  $(".c-f-s button")
    .eq(1)
    .click(function () {
      fs--;
      if (fs <= 1) {
        fs = 1;
        $(this).prop("disabled", true);
        $(".content").css("font-size", fs + "vw");
        mySwiperVer1.slides.forEach((item, index) => {
          item.style.height = h1Arr[fs - 1] + "px";
        });
        mySwiperVer1.updateSize();
        mySwiperVer2.slides.forEach((item, index) => {
          item.style.height = h2Arr[fs - 1] + "px";
        });
        mySwiperVer2.updateSize();
        return;
      }
      $(".content").css("font-size", fs + "vw");
      $("button").prop("disabled", false);

      mySwiperVer1.slides.forEach((item, index) => {
        item.style.height = h1Arr[fs - 1] + "px";
      });
      mySwiperVer1.updateSize();
      mySwiperVer2.slides.forEach((item, index) => {
        item.style.height = h2Arr[fs - 1] + "px";
      });
      mySwiperVer2.updateSize();
    });
  $(".c-f-s1 button")
    .eq(1)
    .click(function () {
      fs--;
      if (fs <= 1) {
        fs = 1;
        $(this).prop("disabled", true);
        $(".content").css("font-size", fs + "vw");
        mySwiperVer1.slides.forEach((item, index) => {
          item.style.height = h1Arr[fs - 1] + "px";
        });
        mySwiperVer1.updateSize();
        mySwiperVer2.slides.forEach((item, index) => {
          item.style.height = h2Arr[fs - 1] + "px";
        });
        mySwiperVer2.updateSize();
        return;
      }
      $(".content").css("font-size", fs + "vw");
      $("button").prop("disabled", false);


      mySwiperVer1.slides.forEach((item, index) => {
        item.style.height = h1Arr[fs - 1] + "px";
      });
      mySwiperVer1.updateSize();
      mySwiperVer2.slides.forEach((item, index) => {
        item.style.height = h2Arr[fs - 1] + "px";
      });
      mySwiperVer2.updateSize();
    });
  $(".theme span").click(function () {
    $(".root").attr("href", `./assets/css/root-${this.dataset["color"]}.css`);
    if (
      window.navigator.userAgent.includes("Safari") &&
      !window.navigator.userAgent.includes("Chrome")
    ) {
      $(".root").attr(
        "href",
        `./assets/css/root-${this.dataset["color"]}-safari.css`
      );
    }
  });

  $(".wrapper img").hover(
    function () {
      $(this).css(
        "border-radius",
        `${getRandom()}vw ${getRandom()}vw ${getRandom()}vw ${getRandom()}vw/${getRandom()}vw ${getRandom()}vw ${getRandom()}vw ${getRandom()}vw`
      );
    },
    function () {
      $(this).css("border-radius", "0");
    }
  );
  function getRandom() {
    return Math.round(Math.random() * 10);
  }

  // $(".p2A4 .text-con").each((index, item) => {
  //   const h = $(item).find(".text-move").outerHeight(true);
  //   $(item)
  //     .find(".text-move")
  //     .html(
  //       $(item).find(".text-move").html() +
  //         "<br><br>" +
  //         $(item).find(".text-move").html()
  //     );
  //   $(item)
  //     .find(".text-move")
  //     .animate(
  //       { top: -h },
  //       5000,
  //       "linear",
  //       (fn = function () {
  //         // console.log($(this));
  //         $(this)
  //           .css("top", 0)
  //           .animate({ top: -h }, 15 * h, "linear", fn);
  //       })
  //     );
  // });
  // $(".p4C2 .text-con").each((index, item) => {
  //   const h = $(item).find(".text-move").outerHeight();
  //   $(item).css({ height: h, overflow: "hidden" });
  //   $(item)
  //     .find(".text-move")
  //     .html(
  //       $(item).find(".text-move").html() +
  //         "<br><br>" +
  //         $(item).find(".text-move").html()
  //     );
  //   $(item)
  //     .find(".text-move")
  //     .animate(
  //       { top: -h },
  //       5000,
  //       "linear",
  //       (fn = function () {
  //         // console.log($(this));
  //         $(this)
  //           .css("top", 0)
  //           .animate({ top: -h }, 15 * h, "linear", fn);
  //       })
  //     );
  // });

  var mySwiper1 = new Swiper(".ps1 .swiper-container", {
    effect: "coverflow",
    slidesPerView: "auto",
    centeredSlides: true,
    coverflowEffect: {
      rotate: 30,
      stretch: 10,
      depth: 60,
      modifier: 2,
      slideShadows : true
    },
    scrollbar: {
      el: ".ps1 .swiper-scrollbar",
      draggable: true,
      dragSize: 300,
    },
  });
  // $(" .ps1 .swiper-container .swiper-slide").each((index, item) => {
  //   $(item)
  //     .find("img")
  //     .on("load", function () {
  //       //  $(item).css("width", $(item).find("img").width());
  //       //  mySwiper1.slides.forEach(item => {
  //       // console.log($(item).find("img").width());
  //       mySwiper1.slides[index].style.width =
  //         $(item).find("img").width() + "px";
  //       mySwiper1.updateSize();
  //       //  })
  //       //  console.log($(item).find("img").height());
  //     });
  // });

  var mySwiper2 = new Swiper(".p5s2 .swiper-container", {
    effect : 'coverflow',
    slidesPerView: "auto",
    centeredSlides: true,
    coverflowEffect: {
      rotate: 30,
      stretch: 10,
      depth: 60,
      modifier: 2,
      slideShadows : true
    },
    scrollbar: {
      el: ".p5s2 .swiper-scrollbar",
      draggable: true,
      dragSize: 300,
    },
  });
  // $(".p5s2 .swiper-container .swiper-slide").each((index, item) => {
  //   $(item)
  //     .find("img")
  //     .on("load", function () {
  //       //  $(item).css("width", $(item).find("img").width());
  //       //  mySwiper1.slides.forEach(item => {
  //       // console.log($(item).find("img").width());
  //       mySwiper1.slides[index].style.width =
  //         $(item).find("img").width() + "px";
  //       mySwiper1.updateSize();
  //       //  })
  //       //  console.log($(item).find("img").height());
  //     });
  // });
  const h1Arr = [360, 1152, 2538, 4599, 7371];
  var mySwiperVer1 = new Swiper(".p4t1 .swiper-container", {
    freeMode: true,
    slidesPerView: "auto",
    direction: "vertical",
    height: h1Arr[fs - 1],
    loop: true,
    autoplay: {
      delay: 0,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    // loop: true,
    speed: 80 * h1Arr[fs - 1],
    mousewheel: true,
  });
  const h2Arr = [630, 2126, 4536, 8103, 12467];

  var mySwiperVer2 = new Swiper(".p4t2 .swiper-container", {
    freeMode: true,
    direction: "vertical",
    slidesPerView: "auto",
    loop: true,
    height: h2Arr[fs - 1] + 'px',
    autoplay: {
      delay: 0,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    // loop: true,
    speed: 80 * h2Arr[fs - 1],
    mousewheel: true,
  });
  if (
    window.navigator.userAgent.includes("Safari") &&
    !window.navigator.userAgent.includes("Chrome")
  ) {
    $(".root").attr("href", "./assets/css/root-light-safari.css");
  }

  $(".pt3 .text-con").each(function (index, item) {
    $(item).find(".text-move").css("display", "none");

    const h = $(item).find(".text-move").height();
    const text = $(item).find(".text-move").html();

    $(item).find(".swiper-slide").html(text);
    $(`.pt3 .t${index + 1} .swiper-container`).height(h);
    $(`.pt3 .t${index + 1} .swiper-slide`)
      .height(h)
      .html(text);

    new Swiper(".pt3 .t" + (index + 1) + " .swiper-container", {
      freeMode: true,
      direction: "vertical",
      autoplay: {
        delay: 0,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      loop: true,
      speed: 80 * h,
      mousewheel: true,
    });
  });
  $('.more').on('click', function(){
    // console.log($(this).prev());
    $(this).prev().css('overflow', 'auto');
  })
})();
