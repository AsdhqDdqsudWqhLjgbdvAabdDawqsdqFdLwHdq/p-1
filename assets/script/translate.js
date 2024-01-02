$(document).ready(function() {
  var translations = {
    en: {
      home: 'Home',
      language: 'EN',
    },
    ru: {
      home: 'Главная',
      language: 'RU',
    }
    uk: {
      home: 'Головний',
      language: 'UK',
    },
  };    
  var userLanguage = navigator.language || navigator.userLanguage;
  var currentLanguage = translations[userLanguage.substr(0, 2)] ? userLanguage.substr(0, 2) : 'en';

  translate(currentLanguage);

  function translate(language) {
    $('[data-translate]').each(function() {
      var key = $(this).data('translate');
      $(this).html(translations[language][key]);
    });
  }
});