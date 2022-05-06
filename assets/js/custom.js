 $(document).ready(function() {
     if ($(".dashboard-search-box-header").length) {
         $(".dashboard-search-box-header").on("click", function() {
             if ($(".dashboard-search-box-header").hasClass("show")) {
                 $(".dashboard-search-box-content").hide();
                 $(".dashboard-search-box-header").removeClass('show');
             } else {
                 $(".dashboard-search-box-content").show();
                 $(".dashboard-search-box-header").addClass('show');
             }

             if ($(".dashboard-search-box-head-icon i").hasClass("fa-solid fa-sort-down")) {
                 $(".dashboard-search-box-head-icon i").removeClass("fa-sort-down");
                 $(".dashboard-search-box-head-icon i").addClass("fa-sort-up");
             } else if ($(".dashboard-search-box-head-icon i").hasClass("fa-sort-up")) {
                 $(".dashboard-search-box-head-icon i").removeClass("fa-sort-up");
                 $(".dashboard-search-box-head-icon i").addClass("fa-sort-down");

             }
         })
     }
     if ($(".dashboard-search-box").length) {
         $("body").on("click", function(event) {
             if ($(event.target).closest(".dashboard-search-box").length == 0) {
                 $(".dashboard-search-box-header").removeClass('show');
                 $(".dashboard-search-box-content").hide();
                 $(".dashboard-search-box-head-icon i").removeClass("fa-sort-up");
                 $(".dashboard-search-box-head-icon i").addClass("fa-sort-down");
             }
         });
     }
     if ($(".dasboard-content-header-icons").length) {
         $(".dasboard-content-header-icons").on("click", function() {
             let dataWidth = $(this).attr("data-width");
             console.log("dataWidth ->", dataWidth)
             if (dataWidth == "half") {
                 $("#dasboard-content-wrapper").removeClass("col-md-9");
                 $("#dasboard-content-wrapper").addClass("col-md-12");
                 $("#dashboard-sidebar-wrapper").hide();
                 $(this).attr("data-width", "full");
                 console.log("111 dataWidth ->", dataWidth)
             } else if (dataWidth == "full") {
                 $("#dasboard-content-wrapper").removeClass("col-md-12");
                 $("#dasboard-content-wrapper").addClass("col-md-9");
                 $("#dashboard-sidebar-wrapper").show();
                 $(this).attr("data-width", "half");
                 console.log("222 dataWidth ->", dataWidth)

             }
         })
     }
     if ($(".quiz-answer-btn").length) {
         $(".quiz-answer-btn").on("click", function(event) {
             event.preventDefault();
             $(".quiz-answer-btn").each(function() {
                 $(this).removeClass("selected");
             })
             $(this).addClass("selected");
             $(".btn-quiz-continue").removeAttr("disabled")
             console.log(event);
         })
     }
     if ($(".profile-dashboard-main-menu").length) {
         $(".profile-dashboard-main-menu").on("click", function() {
             $(".dashboard-drop-down").toggle();
         })
     }
     let countfalse = true;
     $("#navbar-toggler-btn").click(function() {
         $(".mobile-blur-bg").fadeIn(100);
         $("body").addClass("body-overflow");
         $(".mobile-nav-wrapper").delay(1000).toggleClass("show")

     });
     $(".dashboard-menu-toggle-btn").click(function() {
         $(".mobile-blur-bg").fadeIn(100);
         $("body").addClass("body-overflow");
         $(".mobile-nav-wrapper").delay(1000).toggleClass("show")

     });
     $("#mobile-menu-close").click(function() {
         $("body").removeClass("body-overflow");
         $(".mobile-blur-bg").fadeOut(100);
         $(".mobile-nav-wrapper").delay(1000).removeClass("show");
     });

     if ($(".dashboard-course-topics-list-map").length) {
         scrollHorizontalByDragAndDrop('.dashboard-course-topics-list-map')
     }
     if ($(".course-topics-list-map").length) {
         scrollHorizontalByDragAndDrop('.course-topics-list-map')
     }
     if ($(".dashboard-coures-row").length) {
         console.log("dashboard-coures-row ==>", )
             //  if($(".dashboard-coures-row").length > 1)
         $(".dashboard-coures-row").each(function() {
             let className = "#" + $(this).attr("id")
             scrollHorizontalByDragAndDrop(className)
         })
     }

     if ($(".waveform-audio-tag").length) {
         $(".waveform-audio-tag").each(function() {
             let audioUrl = $(this).data("audiourl");
             let audioId = "#" + $(this).attr("id");
             var wavesurfer = WaveSurfer.create({
                 container: audioId,
                 waveColor: 'violet',
                 progressColor: '#6ba6ff',
                 waveColor: '#acb8d0',
                 height: "60"
             })
             wavesurfer.load(audioUrl);
             $(this).parents(".answer-teacher-section").find(".teacher-voise-player").on("click", function() {
                 let btnIcon = $(this).children(".fa-solid")
                 wavesurfer.playPause();
                 if (wavesurfer.isPlaying()) {
                     btnIcon.removeClass("fa-play")
                     btnIcon.addClass("fa-pause")
                 } else {
                     btnIcon.removeClass("fa-pause")
                     btnIcon.addClass("fa-play")
                 }
             });
         });
     }
     if ($(".accordion-list-btn").length) {
         $(".accordion-list-btn").on("click", function() {
             let contentId = $(this).data("content")
             $(".accordion-list-btn").each(function() {
                 $(this).removeClass("active");
             });
             $(this).addClass("active");

             $(".accordion-list-content").each(function() {
                 $(this).hide();
             });
             $(contentId).fadeIn(500);
         })
     }
     if ($(".custom-accordion-btn-top").length) {
         $(".custom-accordion-btn-top").on("click", function() {
             let indexAccordion = $(this).attr("data-index");

             console.log("indexAccordion =>", indexAccordion)
             if (indexAccordion > 1) {
                 --indexAccordion;
                 $(this).attr("data-index", indexAccordion);
                 $(".custom-accordion-btn-bottom").attr("data-index", indexAccordion)
             }

             $(".accordion-list-li-no-scroll").each(function() {
                 $(this).removeClass("active");
             });
             $(".accordion-list-li-no-scroll").each(function() {
                 let index = $(this).attr("data-index");
                 if (index == indexAccordion) {
                     $(this).addClass("active");
                 }
             });
             $(".accordion-list-content-sm-co").each(function() {
                 $(this).removeClass("active");
             });
             $("#accordion-list-content-sm-co-" + indexAccordion).addClass("active");
         })
     }
     if ($(".custom-accordion-btn-bottom").length) {
         $(".custom-accordion-btn-bottom").on("click", function() {
             let indexAccordion = $(this).attr("data-index");
             let listCount = $(".accordion-list-li-no-scroll").length;
             console.log("indexAccordion =>", indexAccordion)
             if (listCount > indexAccordion) {
                 ++indexAccordion;
                 $(this).attr("data-index", indexAccordion);
                 $(".custom-accordion-btn-top").attr("data-index", indexAccordion)
             }

             $(".accordion-list-li-no-scroll").each(function() {
                 $(this).removeClass("active");
             });
             $(".accordion-list-li-no-scroll").each(function() {
                 let index = $(this).attr("data-index");
                 if (index == indexAccordion) {
                     $(this).addClass("active");
                 }
             });
             $(".accordion-list-content-sm-co").each(function() {
                 $(this).removeClass("active");
             });
             $("#accordion-list-content-sm-co-" + indexAccordion).addClass("active");
         })
     }
     if ($(".accordion-btn-arrow-top").length) {
         $(".accordion-btn-arrow-top").on("click", function() {
             let listId = $(this).data("listid");
             let scrollTop = $(listId).scrollTop();
             $(listId).scrollTop(scrollTop - 50);
         })
     }
     if ($(".accordion-btn-arrow-bottom").length) {
         $(".accordion-btn-arrow-bottom").on("click", function() {
             let listId = $(this).data("listid");
             let scrollTop = $(listId).scrollTop();
             $(listId).scrollTop(scrollTop + 50);
         })
     }
     if ($(".menu-user-avatar").length) {
         $(".menu-user-avatar").on("click", function() {
             $("body").toggleClass("body-overflow");
             $(".mobile-blur-bg").fadeToggle(500);
             $(".user-drop-down-row").fadeToggle()
         });
     }
     if ($("#dashboard-nav-setting-btn").length) {
         $("#dashboard-nav-setting-btn").on("click", function() {
             $(this).toggleClass("active")
             $("body").toggleClass("body-overflow");
             $("#blur-bg-setting").fadeToggle(500);
             $(".dashboard-user-drop-down-row").fadeToggle()
         });
     }
     if ($("#blur-bg-setting").length) {
         $("#blur-bg-setting").on("click", function(event) {
             if ($(event.target).closest("#dashboard-nav-setting-btn").length === 0) {
                 $("#blur-bg-setting").fadeOut(500);
                 $("#dashboard-nav-setting-btn").removeClass("active")
                 $("body").removeClass("body-overflow");
                 $(".dashboard-user-drop-down-row").fadeOut();
             }
         });
     }

     if ($("#dashboard-nav-notification-btn").length) {
         $("#dashboard-nav-notification-btn").on("click", function() {
             $(this).toggleClass("active")
             $("body").toggleClass("body-overflow");
             $("#blur-bg-setting").fadeToggle(500);
             $(".dashboard-notification-user-drop-down-row").fadeToggle()
         });
     }
     if ($("#blur-bg-setting").length) {
         $("#blur-bg-setting").on("click", function(event) {
             if ($(event.target).closest("#dashboard-nav-notification-btn").length === 0) {
                 $("#blur-bg-setting").fadeOut(500);
                 $("#dashboard-nav-notification-btn").removeClass("active")
                 $("body").removeClass("body-overflow");
                 $(".dashboard-notification-user-drop-down-row").fadeOut();
             }
         });
     }
     $(".mobile-blur-bg").on("click", function(event) {
         if ($(event.target).closest(".user-drop-down-row").length === 0) {
             $(".mobile-blur-bg").fadeOut(500);
             $(".user-drop-down-row").fadeOut()
             $("body").removeClass("body-overflow");
         }
     });
     if ($(window).scrollTop() >= 80) {
         $("#main-nav-bar-id").addClass("scroll");
         $(".navbar-brand").css({
             width: "75px"
         })
     }
     var top = 0;
     $(window).on('scroll', function() {
         if ($(window).scrollTop() >= 80) {
             $("#main-nav-bar-id").addClass("scroll");
             $(".navbar-brand").css({
                 width: "75px"
             })
         } else if ($("#main-nav-bar-id").hasClass("scroll") && $(window).scrollTop() <= 80) {
             $("#main-nav-bar-id").removeClass("scroll");
             $(".navbar-brand").css({
                 width: "100px"
             })
         }
         $("#main-nav-bar-id").toggleClass("hide", $(window).scrollTop() > top);
         top = $(window).scrollTop();
     });
     if ($(".faq-list-questions-btn").length) {
         $(".faq-list-questions-btn").on("click", function() {
             let contentId = $(this).data("content")
             $(".faq-list-questions-btn").each(function() {
                 $(this).removeClass("active");
             });
             $(this).addClass("active");

             $(".faq-answer-content").each(function() {
                 $(this).hide();
             });
             $(contentId).fadeIn(500);
         })
     }
     if ($(".faq-list-top").length) {
         $(".faq-list-top").on("click", function() {
             let listId = $(this).data("listid");
             let scrollTop = $(listId).scrollTop();
             $(listId).scrollTop(scrollTop - 50);
         })
     }
     if ($(".faq-list-bottom").length) {
         $(".faq-list-bottom").on("click", function() {
             let listId = $(this).data("listid");
             let scrollTop = $(listId).scrollTop();
             $(listId).scrollTop(scrollTop + 50);
         })
     }

     if ($(".price-table-accordion-head")) {
         $(".price-table-accordion-head").on("click", function() {
             console.log(this)
             $(this).siblings(".price-table-accordion-content").slideToggle()
         })
     }

     if ($(".faq-list-questions-video-btn").length) {
         $(".faq-list-questions-video-btn").on("click", function() {
             let contentId = $(this).data("content")
             $(".faq-list-questions-video-btn").each(function() {
                 $(this).removeClass("active");
             });
             $(this).addClass("active");

             $(".faq-answer-video-content").each(function() {
                 $(this).hide();
             });
             $(contentId).fadeIn(500);
         })
     }

     if ($(".faq-list-video-top").length) {
         $(".faq-list-video-top").on("click", function() {
             let listId = $(this).data("listid");
             let scrollTop = $(listId).scrollTop();
             $(listId).scrollTop(scrollTop - 50);
         })
     }
     if ($(".faq-list-video-bottom").length) {
         $(".faq-list-video-bottom").on("click", function() {
             let listId = $(this).data("listid");
             let scrollTop = $(listId).scrollTop();
             $(listId).scrollTop(scrollTop + 50);
         })
     }

     if ($(".course-topics-list-map").length) {
         let courseCount = $('.course-topics-list-map .course-topics-list-li').length;
         let itemIndex = 0
         let scrollLeft = 0;
         $('.course-topics-list-map .course-topics-list-li').each(function(index) {
             if ($(this).hasClass("active")) {
                 itemIndex = index
             }
         })
         console.log((courseCount / 2) >= 5)
         console.log(itemIndex >= 5)
         scrollLeft = $('.course-topics-list-map .course-topics-list-li.active').width() * itemIndex
         console.log("scrollLeft", scrollLeft)
         $('.course-topics-list-map').animate({
             scrollLeft: scrollLeft * -1
         }, 'slow');


     }

     if ($('.testimonials-slider-wrapper').length) {
         $('.testimonials-slider-wrapper').slick({
             slidesToShow: 1,
             slidesToScroll: 1,
             autoplay: true,
             autoplaySpeed: 5000,
             rtl: true,
             arrows: true,
             nextArrow: '<button class="testimonials-right-aw"><i class="fa-solid fa-chevron-right"></i></button>',
             prevArrow: '<button class="testimonials-left-aw"><i class="fa-solid fa-angle-left"></i></button>',
         });
     }
     if ($('.teacher-social-media-slider-wrapper').length) {
         $('.teacher-social-media-slider-wrapper').slick({
             centerMode: true,
             centerPadding: '0px',
             slidesToShow: 5,
             rtl: true,
             arrows: true,
             nextArrow: '<button class="teacher-social-media-arrow right-aw"><i class="fa-solid fa-chevron-right"></i></button>',
             prevArrow: '<button class="teacher-social-media-arrow left-aw"><i class="fa-solid fa-angle-left"></i></button>',
             responsive: [{
                     breakpoint: 768,
                     settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: '40px',
                         slidesToShow: 3
                     }
                 },
                 {
                     breakpoint: 550,
                     settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: '40px',
                         slidesToShow: 3
                     }
                 }
             ]
         });
     }

     if ($('.course-participants-slider-wrapper').length) {
         $('.course-participants-slider-wrapper').slick({
             centerMode: true,
             centerPadding: '0px',
             slidesToShow: 5,
             rtl: true,
             arrows: true,
             nextArrow: '<button class="slider-arrow right-icon "><i class="fa-solid fa-chevron-right"></i></button>',
             prevArrow: '<button class="slider-arrow  left-icon"><i class="fa-solid fa-angle-left"></i></button>',
             responsive: [{
                     breakpoint: 768,
                     settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: '40px',
                         slidesToShow: 3
                     }
                 },
                 {
                     breakpoint: 550,
                     settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: '40px',
                         slidesToShow: 3
                     }
                 }
             ]
         });
     }


     if ($('.comments-course-participants-slider-wrapper').length) {
         $('.comments-course-participants-slider-wrapper').slick({
             centerMode: true,
             centerPadding: '0px',
             slidesToShow: 3,
             slidesToScroll: 1,
             rtl: true,
             arrows: true,
             asNavFor: '.comments-course-student-name-container',
             responsive: [{
                     breakpoint: 768,
                     settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: '40px',
                         slidesToShow: 1
                     }
                 },
                 {
                     breakpoint: 550,
                     settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: '40px',
                         slidesToShow: 1
                     }
                 }
             ]
         });
     }

     if ($('.course-contributor-slider-wrapper').length) {
         $('.course-contributor-slider-wrapper').slick({
             centerMode: true,
             centerPadding: '0px',
             slidesToShow: 3,
             slidesToScroll: 1,
             rtl: true,
             arrows: true,
             responsive: [{
                     breakpoint: 768,
                     settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: '40px',
                         slidesToShow: 1
                     }
                 },
                 {
                     breakpoint: 550,
                     settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: '40px',
                         slidesToShow: 1
                     }
                 }
             ]
         });
     }

     if ($('.comments-course-student-name-container').length) {
         $('.comments-course-student-name-container').slick({
             rtl: true,
             slidesToShow: 1,
             rtl: true,
             arrows: true,
             slidesToScroll: 1,
             asNavFor: '.comments-course-participants-slider-wrapper',
             nextArrow: `<button class="comments-course-student-name-arrow left"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" viewBox="0 0 25 16" fill="none">
            <path d="M8.62308 1.35352L2.14453 7.83207M2.14453 7.83207H22.8759M2.14453 7.83207L8.62308 14.3106" stroke="#6BA6FF" stroke-width="2.59142" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg></button>`,
             prevArrow: `<button class="comments-course-student-name-arrow right"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13" fill="none">
            <path d="M12.8833 1.36719L18.1328 6.61674M18.1328 6.61674H1.33423M18.1328 6.61674L12.8833 11.8663" stroke="#6BA6FF" stroke-opacity="0.44" stroke-width="2.09982" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg></button>`,
         });
     }


     if ($('.student-company-slider-wrapper').length) {
         $('.student-company-slider-wrapper').slick({
             slidesToShow: 1,
             slidesToScroll: 1,
             autoplay: true,
             autoplaySpeed: 5000,
             rtl: true,
             dots: true,
         });
     }

     $(function() {
         $('[data-toggle="tooltip"]').tooltip()
     })

     if ($(".dashboard-profile-tabs-btn")) {
         $(".dashboard-profile-tabs-btn").on("click", function() {
             let contentId = $(this).data("contentid");
             $(".dashboard-profile-tabs-btn").each(function() {
                 $(this).removeClass("active");
             });
             $(this).addClass("active");
             $(".porfile-tab-content").each(function() {
                 $(this).removeClass("active");
             });
             $(contentId).addClass("active")
             showSelect2Tag(".form-control-custom-select");
         })
     }
     if ($(".profile-tab-items-btn")) {
         $(".profile-tab-items-btn").on("click", function() {
             let contentId = $(this).data("contentid");
             $(".profile-tab-items-btn").each(function() {
                 $(this).removeClass("active");
             });
             $(this).addClass("active");
             let tabTitle = $(this).children(".profile-profile-form-title").text()
             let tabSubTitle = $(this).children(".profile-profile-form-sub-title").text()
             $(".active-item-profile-form-title").text(tabTitle);
             $(".active-item-profile-form-sub-title").text(tabSubTitle);

             $(".porfile-tab-content").each(function() {
                 $(this).removeClass("active");
             });
             $(contentId).addClass("active")
             showSelect2Tag(".form-control-custom-select");
             $([document.documentElement, document.body]).animate({
                 scrollTop: $(".dashboard-profile-tabs-wrapper").offset().top
             }, 1000);
         })
     }

     if ($(".dashboard-profile-tabs-btn")) {
         $(".dashboard-profile-tabs-btn").on("click", function() {
             let contentId = $(this).data("contentid");
             $(".dashboard-profile-tabs-btn").each(function() {
                 $(this).removeClass("active");
             });
             $(this).addClass("active");
             $(".dashboard-profile-tabs-row").each(function() {
                 $(this).removeClass("active");
             });
             $(contentId).addClass("active")
             showSelect2Tag(".form-control-custom-select");
         })
     }

     if ($(".profile-profile-form-title")) {
         $(".profile-profile-form-title").on("click", function() {
             let contentId = $(this).data("contentid");
             $(".profile-profile-form-title").each(function() {
                 $(this).removeClass("active");
             });
             $(this).addClass("active");
             let tabTitle = $(this).children(".profile-profile-form-title").text()
             let tabSubTitle = $(this).children(".profile-profile-form-sub-title").text()
             $(".active-item-profile-form-title").text(tabTitle);
             $(".active-item-profile-form-sub-title").text(tabSubTitle);

             $(".dashboard-profile-tabs-row").each(function() {
                 $(this).removeClass("active");
             });
             $(contentId).addClass("active")
             showSelect2Tag(".form-control-custom-select");
         })
     }
     if ($(".note-question-tab-btn")) {
         $(".note-question-tab-btn").on("click", function() {
             let contentId = $(this).data("contentid");
             $(".note-question-tab-btn").each(function() {
                 $(this).removeClass("active");
             })
             $(this).addClass("active");
             //  show content tab
             $(".note-question-tab-content").each(function() {
                 $(this).removeClass("active");
             })
             $(contentId).addClass("active");
         })
     }

     if ($('#dateBirth').length) {
         $('#dateBirth').datepicker({
             altFormat: 'DD، d MM yy',
         });
     }

     showSelect2Tag(".form-control-custom-select");

     if ($(".collapse-single-btn")) {
         $(".collapse-single-btn").on("click", function() {
             let contentId = $(this).data("contentid");
             $(contentId).slideToggle()
             $(contentId).toggleClass("show")
             $(this).toggleClass("collapsed")
         })
     }
     if ($(".course-btn-list-mobile-sessions")) {
         $(".course-btn-list-mobile-sessions").on("click", function() {
             $(".course-video-mobile-blure").fadeIn(500);
             $(".course-video-mobile-blure").addClass("active");
             $("body").addClass("body-overflow");
         });
     }
     if ($(".course-video-mobile-blure").length) {
         $(".course-video-mobile-blure").on("click", function(event) {
             if ($(event.target).closest(".course-video-mobile-bg").length === 0) {
                 $(".course-video-mobile-blure").fadeOut();
                 $(".course-video-mobile-blure").removeClass("active")
                 $("body").removeClass("body-overflow");
             }
         });
     }
     if ($(".course-video-link-mobile")) {
         $(".course-video-link-mobile").on("click", function() {
             let parent = $(this).siblings("ul").toggle();
         });
     }
     if ($(".course-btn-list-mobile")) {
         $(".course-btn-list-mobile").on("click", function() {
             $(".course-list-mobile-items").toggle()
         })
     }
     if ($(".course-note-ques-mobile")) {
         $(".course-note-ques-mobile").on("click", function() {
             let contentId = $(this).data("contentid");
             $('html, body').animate({
                 scrollTop: $(".dashobard-left-sidebar").offset().top
             }, 2000);

             $(".course-note-ques-mobile").each(function() {
                 $(this).removeClass("active");
             });

             $(".note-question-tab-btn").each(function() {
                 $(this).removeClass("active");
             })

             $(".note-question-tab-btn").each(function() {
                 let contentIdtab = $(this).data("contentid");
                 if (contentIdtab === contentId) {
                     $(this).addClass("active");
                 }
             })
             $(this).addClass("active");

             //  show content tab
             $(".note-question-tab-content").each(function() {
                 $(this).removeClass("active");
             })
             $(contentId).addClass("active");




         })
     }





 });

 function showSelect2Tag(selectorTag) {
     console.log("showSelect2Tag =>", selectorTag)
     console.log("showSelect2Tag =>", $(selectorTag).length)
     if ($(selectorTag).length) {
         $(selectorTag).select2({
             //  minimumResultsForSearch: Infinity
             dir: "rtl",
             width: "100%",
             language: {
                 noResults: function() {
                     return "نتیجه ای یافت نشد";
                 }
             }
         });
     }
 }

 function scrollHorizontalByDragAndDrop(elementSelector) {
     const slider = document.querySelector(elementSelector);
     let mouseDown = false;
     let startX, scrollLeft;

     let startDragging = function(e) {
         mouseDown = true;
         startX = e.pageX - slider.offsetLeft;
         scrollLeft = slider.scrollLeft;
     };
     let stopDragging = function(event) {
         mouseDown = false;
     };

     slider.addEventListener('mousemove', (e) => {
         e.preventDefault();
         if (!mouseDown) { return; }
         const x = e.pageX - slider.offsetLeft;
         const scroll = x - startX;
         slider.scrollLeft = scrollLeft - scroll;
     });

     // Add the event listeners
     slider.addEventListener('mousedown', startDragging, false);
     slider.addEventListener('mouseup', stopDragging, false);
     slider.addEventListener('mouseleave', stopDragging, false);
 }