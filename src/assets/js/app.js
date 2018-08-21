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
    scrollOverflowReset: true,
  });

  $('#styles-mount').html($('#deferred-styles').text());
  $('#deferred-styles').remove();
});
