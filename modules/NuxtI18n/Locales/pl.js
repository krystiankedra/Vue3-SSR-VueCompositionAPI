export default {
  navigationWords: {
    homepage: 'Strona główna',
    posts: 'Lista postów',
    todos: 'List Zadań'
  },
  errorWords: {
    errorNoDetected: 'Nie zidentyfikowano błędu',
    errorOnApiCall: 'Błąd podczas połączenia z serwerem',
  },
  otherWords: {
    yes: 'Tak',
    no: 'Nie',
    logout: 'Wyloguj',
    loginCardHeaderText: 'Logowanie do aplikacji',
    login: 'Zaloguj',
    loginInformationText: 'Witamy w aplikacji, która ma wbudowany mechanizm zmiany kolorów w stosunku do kontrastów i dynamicznej zmiany języka. W projekcie wykorzystano generatory asynchroniczne. Aplikacja została napisana w języku Vue / Nuxt, ma technologię CI / CD. Wbudowany SSR i biblioteka dla używanego interfejsu użytkownika to Vuetify v2.',
    applicationTitle: 'Aplikacja',
    close: 'Zamknij',
    selectLanguage: 'Wybierz język',
    selectTheme: 'Wybierz motyw'
  },
  posts: {
    pageTitle: 'Lista postów',
    post: {
      title: 'Tytuł',
      body: 'Opis',
      informationAboutAuthor: 'Informacje o autorze',
      comments: 'Komentarze',
      comment: {
        email: 'Email',
        name: 'Nazwa',
        body: 'Opis'
      },
      author: {
        name: 'Imię i nazwisko',
        username: 'Nazwa użytkownika',
        email: 'Email',
        phone: 'Numer kontaktowy',
        website: 'Strona www',
        address: {
          street: 'Ulica',
          city: 'Miejscowość',
          zipcode: 'Kod pocztowy'
        },
        company: {
          name: 'Nazwa firmy'
        }
      }
    }
  },
  todos: {
    pageTitle: 'Lista zadań',
    todo: {
      title: 'Tytuł',
      completed: 'Ukończono?'
    }
  }
}
