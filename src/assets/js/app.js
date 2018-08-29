// import './lib/foundation';
// $(document).foundation();
import dayjs from 'dayjs';

const $ = window.$;

const getAge = () => dayjs().diff(dayjs('1995-8-30'), 'years');

$(document).ready(() => {
  $('#hero-code').html(`const <strong>Jay</strong> = {
    &nbsp;&nbsp;age: ${getAge()}
    &nbsp;&nbsp;developer: true,
    &nbsp;&nbsp;designer: true,
    };`);

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

  $('.hero__cta').click(() => {
    $.fn.fullpage.moveSectionDown();
  });
});
