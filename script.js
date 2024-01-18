window.addEventListener("DOMContentLoaded", () => {
  //Swiper

  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  resizableSwiper("(max-width: 767px)", ".swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
  });

  //read-go

  const showBtn = document.querySelector("#show-brands");
  const swiper = document.querySelector(".swiper");
  let isOpen = false;

  showBtn.addEventListener("click", () => {
    if (!isOpen) {
      showBtn.classList.add("read-go--close");
      showBtn.textContent = "Скрыть";
      swiper.classList.add("swiper--open");
      isOpen = true;
    } else {
      showBtn.classList.remove("read-go--close");
      showBtn.textContent = "Показать все";
      swiper.classList.remove("swiper--open");
      isOpen = false; 
    }
  });
});
