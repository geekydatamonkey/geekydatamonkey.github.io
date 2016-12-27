/* global $ */
$(function () {
  $('#menu-button').click(function () {
    $('body').toggleClass('menu-open')
    console.log('toggling menu')
  })
})
