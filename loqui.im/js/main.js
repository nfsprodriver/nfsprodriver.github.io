




/*
     FILE ARCHIVED ON 11:12:31 Mar 5, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:33:01 Apr 18, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
'use strict';

var Web = new function () {
  
  this.defaultSection = 'home';  
  
  this.section = function (id) {
    $('section#' + id).addClass('active').siblings('section').removeClass('active');
    $('header nav ul li[data-section="' + id + '"]').addClass('active').siblings('li').removeClass('active');
  }
  
  $('header nav ul li').on('click', function () {
    var section = $(this).data('section');
    Web.section(section);
  });
  
  this.section(this.defaultSection);
}
