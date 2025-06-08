$(document).ready(function () {
  $(".load-more-container").each(function () {
    let container = $(this);
    let itemsToShow = 5;
    let items = container.find(".content-list .item");
    let button = container.find(".load-more-btn");

    items.slice(0, itemsToShow).fadeIn();

    button.click(function () {
      itemsToShow += 3;
      items.slice(0, itemsToShow).fadeIn();

      if (itemsToShow >= items.length) {
        button.fadeOut();
      }
    });
  });
});

$(document).ready(function () {
  $(".read-more-btn").click(function () {
    let container = $(this).closest("div");
    let fullText = container.find(".full-text");

    if (fullText.is(":hidden")) {
      fullText.fadeIn();
      $(this).text("Daha Az Göster");
    } else {
      fullText.fadeOut();
      $(this).text("Devamını Göster");
    }
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#scrollToTop").removeClass("hidden");
    } else {
      $("#scrollToTop").addClass("hidden");
    }
  });

  $("#scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "fast");
    return false;
  });
});

$(document).ready(function () {
  $(".open-popup").click(function () {
    var targetPopup = $(this).data("target");
    $("#" + targetPopup)
      .fadeIn()
      .removeClass("tw-hidden");
  });

  $(".close-popup, .popup-overlay").click(function (event) {
    // Yalnızca .popup-overlay veya .close-popup'a tıklanırsa kapat
    if ($(event.target).hasClass("popup-overlay") || $(event.target).hasClass("close-popup")) {
      $(this).closest(".popup-overlay").fadeOut().addClass("tw-hidden");
    }
  });

  $(".popup-content").click(function (event) {
    event.stopPropagation();
  });
});

$(document).ready(function () {
  $(".accordion-header").click(function () {
    if ($(window).width() < 768) {
      $(this).next(".accordion-content").slideToggle();
    } else {
      $(this).next(".accordion-content").slideToggle();
    }
  });

  if ($(window).width() >= 768) {
    $(".accordion-content").show();
  }

  $(window).resize(function () {
    if ($(window).width() >= 768) {
      $(".accordion-content").show();
    } else {
      $(".accordion-content").hide();
    }
  });
});

$(document).ready(function () {
  $(".menu-container").hover(
    function () {
      $(this).find(".menu").stop(true, true).fadeIn(200);
    },
    function () {
      $(this).find(".menu").stop(true, true).fadeOut(200);
    }
  );
});

$(document).ready(function () {
  $("#menu-toggle").click(function () {
    $("body").addClass("menu-open");
    $("#mobile-menu").removeClass("-translate-x-full");
  });

  $("#menu-close, .overlay").click(function () {
    $("body").removeClass("menu-open");
    $("#mobile-menu").addClass("-translate-x-full");
  });
});

$(document).ready(function () {
  $("#open-popup").click(function () {
    $("#popup").addClass("open");
  });

  $("#close-popup, #popup").click(function (e) {
    if (e.target.id === "popup" || e.target.id === "close-popup") {
      $("#popup").removeClass("open");
    }
  });
});
$(document).ready(function () {
  $(".dropdown-button").on("click", function (event) {
    $(this).parent().toggleClass("dropdown-open");
    event.stopPropagation();
  });

  // Kapatma butonuna tıklama olayı
  $(".dropdown-close").on("click", function () {
    $(this).closest(".dropdown").removeClass("dropdown-open");
  });

  $(".dropdown-search").on("input", function () {
    var searchTerm = $(this).val().toLowerCase();

    $(this)
      .closest(".dropdown")
      .find(".ilce-checkbox")
      .each(function () {
        var label = $(this).next("span").text().toLowerCase();
        if (label.indexOf(searchTerm) > -1) {
          $(this).parent().show();
        } else {
          $(this).parent().hide();
        }
      });
  });

  $(document).on("click", function (event) {
    if (!$(event.target).closest(".dropdown").length) {
      $(".dropdown").removeClass("dropdown-open");
    }
  });

  $(".ilce-checkbox").on("change", function () {
    var selectedIlceler = [];
    $(".ilce-checkbox:checked").each(function () {
      selectedIlceler.push($(this).val());
    });
    console.log("Seçilen ilçeler: ", selectedIlceler.join(", "));
  });
});


flatpickr("#calendar", {
  inline: true,
  enableTime: true,
  dateFormat: "Y-m-d",
  time_24hr: true,
  defaultDate: new Date(),
});


