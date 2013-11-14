$(function(){
  $('.show-monitor').click(function(){
    $('.modal.add-monitor').modal('show');
  });
  $('.modal.add-monitor .close').click(function(){
    $('.modal.add-monitor').modal('hide');
  });
  $('.show-group').click(function(){
    $('.modal.add-group').modal('show');
  });
  $('.modal.add-group .close').click(function(){
    $('.modal.add-group').modal('hide');
  });
});