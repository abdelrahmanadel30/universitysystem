$(document).ready(function() {
        "use strict";

        function playVideo(el) {
                var videoId = el.data('video');
                var video = document.getElementById(videoId);
                if (video.paused) {
                        video.play();
                        el.removeClass('paused').addClass('playing');
                } else {
                        video.pause();
                        el.removeClass('playing').addClass('paused');
                }
        }
        $(document).on('click', '.js-video-control', function(e) {
                playVideo($(this));
                e.preventDefault();
        });
});
$(function() {
        $("body").niceScroll({
                cursorcolor: "#0d2d62",
                cursoropacitymax: 1,
                cursorwidth: "8px",
                scrollspeed: 60,
        });
        $(window).scroll(function() {
                if ($(window).scrollTop() >= 200) {
                        $(".top").fadeIn();
                } else {
                        $(".top").fadeOut();
                }
        });
        $(".top").click(function() {
                $("html").animate({
                        scrollTop: '0'
                }, 500);
        });
        $(".count").countTo({});
});