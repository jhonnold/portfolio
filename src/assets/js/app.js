// import './lib/foundation';
// $(document).foundation();
const $ = window.$;

$(document).ready(() => {
  $('main').fullpage({
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'About', 'Experience', 'Education', 'Skills'],
    sectionSelector: 'section',
    scrollOverflow: true,
  });

  $('#styles-mount').html($('#deferred-styles').text());
  $('#deferred-styles').remove();
  setTimeout(() => $('#loader').remove(), 1000);
});
