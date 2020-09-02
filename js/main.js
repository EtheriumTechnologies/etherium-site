$(".topnav a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 110,
      },
      800
    );
  }
});
$(".footer a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 110,
      },
      800
    );
  }
});

if (window.location.hash) scroll(0, 0);
// takes care of some browsers issue
setTimeout(function () {
  scroll(0, 0);
}, 1);

$(function () {
  //your current click function
  $("").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 110 + "px",
      },
      800,
      "swing"
    );
  });

  // if we have anchor on the url (calling from other page)
  if (window.location.hash) {
    // smooth scroll to the anchor id
    $("html,body").animate(
      {
        scrollTop: $(window.location.hash).offset().top - 110 + "px",
      },
      1000,
      "swing"
    );
  }
});
