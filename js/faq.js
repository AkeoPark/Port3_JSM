$(function(){
    $('#cont_qan .qnaContents dt').click(function(){
    $(this).next().toggleClass('on');
    $(this).next().siblings('dd').removeClass('on');
  });
  
  //서브메뉴
  $('#cont_qan .qnaContents dd li').click(function(){
    $(this).find('ul.answer').toggleClass('on');
    $(this).siblings().find('ul.answer').removeClass('on');
  });
})