$(document).ready(function() {
    var translations = {
      en: {
          guilds: 'Guilds',
          meta: 'NoHello',
      },
      ru: {
          guilds: 'Гильдии',
          meta: 'Мета',
      }
    };    
    var userLanguage = navigator.language.substr(0, 2);
    var currentLanguage = translations[userLanguage] ? userLanguage : 'en';

    translate(currentLanguage);

    function translate(language) {
      $('[data-translate]').each(function() {
        var key = $(this).data('translate');
        $(this).html(translations[language][key]);
      });
    }
  });