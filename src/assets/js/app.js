// const $ = window.$;
// import './lib/foundation';
// $(document).foundation();

$(document).ready(() => {
  $('main').fullpage({
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: [
      'Home',
      'About',
      'Experience',
      'Education',
      'Skills',
    ],
    sectionSelector: 'section',
  });
});
