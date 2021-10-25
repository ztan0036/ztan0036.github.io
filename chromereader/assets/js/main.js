$(document).ready(function() {

    // Add jQuery here
    
    // On .nav click, toggleClass ON or OFF showme.
    
  $('.nav').click(function() {
    $('.menu').toggleClass('showme');
  });
    
  
  });

  
(function () {
    let fs = 3;
    $(".c-f-s button")
      .eq(0)
      .click(function () {
        fs++;
        if (fs >= 5) {
          fs = 5;
          $(this).prop("disabled", true);
          $("#page1-content-base").css("font-size", fs + "vw");
          return;
        }
        $("#page1-content-base").css("font-size", fs + "vw");
        $("button").prop("disabled", false);
      });
  
    $(".c-f-s button")
      .eq(1)
      .click(function () {
        fs--;
        if (fs <= 1) {
          fs = 1;
          $(this).prop("disabled", true);
          $("#page1-content-base").css("font-size", fs + "vw");
          return;
        }
        $("#page1-content-base").css("font-size", fs + "vw");
        $("button").prop("disabled", false);
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

})();