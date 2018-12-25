$(document).ready(function(){
    $(document).on('click', '.navbar li.sub >a', function(e){
        if($(window).width() < 990){
			e.preventDefault();
            $(this).closest('li').toggleClass('active');

        }
    })

    var redirectUrl;
	$('.open-hambergur').on('click', function(e){
        $('.mainNav').addClass('active');
    });
    $('.mainNav').on('click', function(e){
       if($(e.target).closest('.menu').length == 0){
            e.stopPropagation();
            $('.mainNav').removeClass('active');
       }
    });

    $('.hcproot a, .sitemap_modal a').click(function(e){
        $('#hcpmodal').removeClass('show').hide();
        var user = getCookie("hcpMenuStatus");
        var temp = $(this).attr('href');
        var urlslipt = temp.split('#');
        if (user == undefined || user == "") {
            e.preventDefault();
            $('#hcpmodal').addClass('show');
            redirectUrl = urlslipt[0];
        }else{
            window.location.href = urlslipt[0];
            }
    });

    $('.footer-links a').click(function(e){
        $('#hcpmodal').removeClass('show').hide();
        var temp = $(this).attr('href');
        var urlslipt = temp.split('#');
        var user = getCookie("hcpMenuStatus");
        if(urlslipt.length == 2 && urlslipt[0] != ''){
            if(urlslipt[1] != undefined && (user == undefined || user == "")) {
                e.preventDefault();
                $('#hcpmodal').addClass('show');
                redirectUrl = urlslipt[0];
            }else{
                window.location.href = urlslipt[0];
            }
        }
    });
    $('.footer .social-links a').click(function(e){
        e.preventDefault();
        var  href = $(this).attr("href");
        window.open(href, "Social", "top=" + 50 + ",left=" + 50 + ",toolbar=0, status=0, width=" + 710 + ",height=" + 530);
    });
    $('.sitemap .social li a').click(function(e){        
        var  href = $(this).attr("href");
        if((href.indexOf("facebook") > -1) || (href.indexOf("twitter") > -1)) {
            e.preventDefault();
            window.open(href, "Social", "top=" + 50 + ",left=" + 50 + ",toolbar=0, status=0, width=" + 710 + ",height=" + 530);
        }
    });
    $('a[href="#yes"]').click(function(e){
        e.preventDefault();
        setCookie('hcpMenuStatus', true);
        $('#hcpmodal').removeClass('show').hide();
        window.location.href = redirectUrl;
    });

    $('a[href="#no"], #hcpmodal .modal-close').click(function(e){
        e.preventDefault();
        $('#hcpmodal').removeClass('show').hide();
    });

    //cookie 
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
});

(function( func ) {
    $.fn.addClass = function() { // replace the existing function on $.fn
        func.apply( this, arguments ); // invoke the original function
        this.trigger('classAdded'); // trigger the custom event
        return this; // retain jQuery chainability
    }
})($.fn.addClass); // pass the original function as an argument

(function( func ) {
    $.fn.removeClass = function() {
        func.apply( this, arguments );
        this.trigger('classRemoved');
        return this;
    }
})($.fn.removeClass);


// document ready function
$(function(){
    $('body').append('<div class="overlaybg"></div>');

    $('.modal').on('classAdded', function (e) {
        // console.log("added", e)
        $('.overlaybg').show();
    });

    $('.modal').on('classRemoved', function (e) {
            // console.log("removed", e)
            $('.overlaybg').hide();
    });

});