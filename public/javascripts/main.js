'use strict';

$(function(){
  bindModal('.show-monitor', '.modal.add-monitor');
  bindModal('.show-group', '.modal.add-group');

  $.each(['url', 'database', 'rest'], function(idx, elem){
    bindModal('.monitor.' + elem, '.modal.monitor-' + elem);
  });

  selectMonitorType();
  $('.add-monitor .type').change(function(){
    selectMonitorType();
  });

  $('.box h3').click(function(){
    $(this).parent().toggleClass('active');
  });

  $('.edit').click(function(){
    $(this).parent().parent().addClass('in-edit');
  });
  $('.show').click(function(){
    $(this).parent().parent().removeClass('in-edit');
  });
});

function bindModal(triggerButtonSelector, modalSelector){
  $(triggerButtonSelector).click(function(){
    $(modalSelector).modal('show');
  });
  $(modalSelector + ' .close').click(function(){
    $(modalSelector).modal('hide');
  });
}

function selectMonitorType(){
  var type = $('.add-monitor .type').val();
  var className = ".add-" + type.toLowerCase().replace(/\s/g, '-');
  $('.add-monitor .monitor-section').css('display', 'none');
  $('.add-monitor ' + className).css('display', 'block');
}