(function ($) {
  "use strict";

  // MENU
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // CUSTOM LINK
  $(".smoothscroll").click(function () {
    var el = $(this).attr("href");
    var elWrapped = $(el);
    var header_height = $(".navbar").height();

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $("body,html").animate(
        {
          scrollTop: totalScroll,
        },
        300
      );
    }
  });

  $(window).on("scroll", function () {
    function isScrollIntoView(elem, index) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(window).height() * 0.5;
      if (elemBottom <= docViewBottom && elemTop >= docViewTop) {
        $(elem).addClass("active");
      }
      if (!(elemBottom <= docViewBottom)) {
        $(elem).removeClass("active");
      }
      var MainTimelineContainer = $("#vertical-scrollable-timeline")[0];
      var MainTimelineContainerBottom =
        MainTimelineContainer.getBoundingClientRect().bottom -
        $(window).height() * 0.5;
      $(MainTimelineContainer)
        .find(".inner")
        .css("height", MainTimelineContainerBottom + "px");
    }
    var timeline = $("#vertical-scrollable-timeline li");
    Array.from(timeline).forEach(isScrollIntoView);
  });
})(window.jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".container1");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 1000); // delay by index * 1000 milliseconds (1 second)
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  containers.forEach((container) => {
    observer.observe(container);
  });
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function check() {
  var checkbox = document.getElementById("checkbox");
  var text1 = document.getElementsByClassName("text1");
  var text2 = document.getElementsByClassName("text2");
  for (var i = 0; i < text1.length; i++) {
    if (checkbox.checked == true) {
      text1[i].style.display = "block";
      text2[i].style.display = "none";
    } else if (checkbox.checked == false) {
      text1[i].style.display = "none";
      text2[i].style.display = "block";
    }
  }
}
check();

function submitForm() {
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  if (nameInput.value.trim() === "") {
    alert("নামের ক্ষেত্র খালি রাখা যাবে না");
    return;
  }

  if (phoneInput.value.trim() === "") {
    alert("ফোন ক্ষেত্র খালি রাখা যাবে না");
    return;
  }

  if (emailInput.value.trim() === "") {
    alert("ইমেল ক্ষেত্র খালি রাখা যাবে না");
    return;
  }

  if (messageInput.value.trim() === "") {
    alert("বার্তা ক্ষেত্র খালি রাখা যাবে না");
    return;
  }

  if (!nameInput.checkValidity()) {
    alert(nameInput.title);
    return;
  }

  if (!phoneInput.checkValidity()) {
    alert(phoneInput.title);
    return;
  }

  if (!emailInput.checkValidity()) {
    alert(emailInput.title);
    return;
  }
  if (!messageInput.checkValidity()) {
    alert(messageInput);
    return;
  }

  const name = nameInput.value;
  const phone = phoneInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  alert(`Name: ${name}\nPhone: ${phone}\nEmail:${email}\nMessage:${message}`);
  // Add your form submission logic here
}
