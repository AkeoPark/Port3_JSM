$(function(){
    $('.tmenu').click(function(){
      var tab_menu = $(this).attr('data-tab');
      $('.tmenu').removeClass('current');
      $('.tab-content').removeClass('current');
       
      $(this).addClass('current');
      $('#'+tab_menu).addClass('current');
    
    });
   });