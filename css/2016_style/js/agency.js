/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Mobile: toggle dropdown manually on touch/click for collapsed navbar
$('.navbar').on('touchstart click', 'a.dropdown-toggle', function(event) {
    var isCollapsed = $('.navbar-toggle').is(':visible');
    if (isCollapsed) {
        event.preventDefault();
        event.stopPropagation();
        var $parent = $(this).parent();
        $parent.toggleClass('open');
        $parent.siblings('.open').removeClass('open');
        return false;
    }
});

// Close dropdown when tapping outside in collapsed mode
$(document).on('touchstart click', function(event) {
    var isCollapsed = $('.navbar-toggle').is(':visible');
    if (isCollapsed) {
        if (!$(event.target).closest('.navbar .dropdown').length) {
            $('.navbar .dropdown.open').removeClass('open');
        }
    }
});

// Close the collapsed navbar only when a real link is selected (not dropdown toggles)
$('.navbar-collapse.in').on('click', 'a', function(event) {
    var $link = $(this);
    // If it's a dropdown toggle, do not close
    if ($link.is('.dropdown-toggle')) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    }
    // Otherwise close the menu
    $('.navbar-toggle:visible').trigger('click');
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});