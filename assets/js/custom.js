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



     showSelect2Tag(".form-control-custom-select");





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