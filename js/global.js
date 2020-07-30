//Locale default
$.i18n().locale = 'en';
//Function to change the locale
var set_locale_to = function(locale) {
    if (locale) {
        $.i18n().locale = locale;
    }
    $('body').i18n();
};
//Load files of transtations
$.i18n().load( {
    'en': './js/i18n/en.json',
    'ru': './js/i18n/ru.json'
  })
  .done(
      function() {
        //Call once the page is loaded and translations are done
        //The locale itself should be fetched from the ?locale parameter. url('?locale') takes the value of the locale GET parameter
        set_locale_to(url('?locale'));
        History.Adapter.bind(window, 'statechange', function(){
            set_locale_to(url('?locale'));
          });
        //Get local chosen by user
            $('.switch-locale').on('click', 'a', function(e) {
                e.preventDefault();
                //Use pushState once a link to switch the language was clicked
                History.pushState(null, null, "?locale=" + $(this).data('locale'));
            });
        }
    );