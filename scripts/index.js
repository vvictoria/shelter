$(document).ready(function() {
    $("#carousel").owlCarousel({
        items: 4,
        pagination: false,
        autoPlay : 4000,
        // TODO: UPDATE TO VERSION 2 FOR ENDLESS SCROLL 
    });
    $('#details-carousel').owlCarousel({
        items: 4,
        pagination: false,
        autoPlay: 2000
    });

    $('.btn-more').on('click',function (e) {
        e.preventDefault();

        var target = $('.contacts');
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing');
    });

    $('.pets__pet').on('click', function(){
        $('.pets').hide();
        $('.details').show();

        var src = $(this).find('img').attr('src');
        $('.details img').attr('src', src);

        var name = $(this).find('h3').html();
        $('.details .pet-name').html(name);

        var breed = $(this).find('p').html();
        $('.details .pet-breed').html(breed);
    });

    $('.back-to-view').on('click', function(){
        $('.details').hide();
        $('.pets').show();
    })

    $('.btn-send').on('click', function(){
        $('.contacts__block-form').hide();
        $('.contacts__block-sent').show();
    })
});