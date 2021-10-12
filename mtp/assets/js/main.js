(function () {
  let fs = 3;
  $(".c-f-s button")
    .eq(0)
    .click(function () {
      fs++;
      if (fs >= 5) {
        fs = 5;
        $(this).prop("disabled", true);
        $("#detail").css("font-size", fs + "vw");
        return;
      }
      $("#detail").css("font-size", fs + "vw");
      $("button").prop("disabled", false);
    });

  $(".c-f-s button")
    .eq(1)
    .click(function () {
      fs--;
      if (fs <= 1) {
        fs = 1;
        $(this).prop("disabled", true);
        $("#detail").css("font-size", fs + "vw");
        return;
      }
      $("#detail").css("font-size", fs + "vw");
      $("button").prop("disabled", false);
    });
  $(".theme span").click(function () {
    console.log(`./assets/css/root-${this.dataset["color"]}.css`);
    $(".root").attr("href", `./assets/css/root-${this.dataset["color"]}.css`);
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
  var mySwiper = new Swiper(".p2C2 .swiper-container", {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 20,
  });
})();
