$(function () {
    "use strict";

    // data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
    });

    // contact-form 
    $(".contact-btn").on('click', function () {
        $(".contact-wrapper").addClass("show");
    });
    $(".close").on('click', function () {
        $(".contact-wrapper").removeClass("show");
    });

    // contact-form-28
    $("#contact-btn").on('click', function () {
        $("#contact-wrapper").addClass("show");
    });
    $(".close").on('click', function () {
        $("#contact-wrapper").removeClass("show");
    });
    // subscribe-form-28
    $("#subscribe-btn").on('click', function () {
        $("#subscribe-wrapper").addClass("show");
    });
    $(".close").on('click', function () {
        $("#subscribe-wrapper").removeClass("show");
    });

    // sidebar
    $(".menu-toggle-btn").on('click', function () {
        $(".sidebar").addClass("show");
    });
    $(".close").on('click', function () {
        $(".sidebar").removeClass("show");
    });

    // Scroll top 
    $(".scroll-top").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 180) { $(".scroll-top").fadeIn(); }
        else {
            $(".scroll-top").fadeOut();
        }
    });

    // Countdown and enable Launch Now button
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        
        // Store the countdown instance
        var countdownInstance = $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<div class="countdown d-flex"><div class="single-count-content"><span class="count">%D</span><p class="text">Days</p></div><div class="single-count-content"><span class="count">%H</span><p class="text">Hours</p></div><div class="single-count-content"><span class="count">%M</span><p class="text">Minutes</p></div><div class="single-count-content"><span class="count">%S</span><p class="text">Seconds</p></div></div>'));
        });

        // Function to handle the "Launch Now" button
        $('#launchButton').on('click', function () {
            // Reset countdown to 00:00:00:00
            countdownInstance.countdown('stop'); // Stop the countdown
            var now = new Date().getTime();
            var newDate = new Date(now + 0 * 0 * 0 * 0); // Reset the countdown to 1 day ahead or any desired time.
            countdownInstance.countdown(newDate); // Start the countdown from new date (i.e., 00:00:00:00)
            
            // Add a delay before executing the "Launch Now" action (redirect)
            setTimeout(function () {
                window.location.href = 'https://www.iqrahire.in'; // Redirect
            }, 400); // Delay for 1 second (adjust if needed)
        });
    });

    // WOW active
    new WOW().init();
});
