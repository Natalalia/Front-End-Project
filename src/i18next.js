import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "Create New Game": "Create Game",
      "English-lang": "English",
      "Spanish-lang": "Spanish",
      "Create Your Game": "Create Your Game",
      "Create game header":
        "Give your new game a name and add a short description.",
      "Submit Game": "Submit Game",
      Title: "Title:",
      Description: "Description:",
      "Game completion message": "Game completion message:",
      levels: "Levels:",
      "introduction paragraph":
        "Welcome to TheHunt, where you can challenge your friends to hunt pretty much whatever you want! Set some clues(as hard or as easy as you like), find some objects, beat your friends! Can you find everything without using any clues??Pick one of the games, or create your own!",
      "Create new level": "Create level:",
      "Main clue": "Main clue:",
      "Second clue": "Second clue:",
      "Third clue": "Third clue:",
      "Select win condition": "Select a win condition:",
      Text: "Text:",
      Image: "Image",
      GPS: "GPS",
      "Level completion message": "Level completion message:",
      "Add Level": "Add Level",
      create: "Create Game"
    }
  },
  es: {
    translation: {
      "Create New Game": "Crear Juego",
      "English-lang": "Inglés",
      "Spanish-lang": "Español",
      "Create Your Game": "Crea Tu Juego",
      "Create game header":
        "Dale un nombre a tu juego y añade una descripción.",
      "Submit Game": "Enviar Juego",
      Title: "Nombre:",
      Description: "Descripción:",
      "Game completion message": "Mensaje final de juego:",
      levels: "Niveles:",
      "introduction paragraph":
        "Bienvenido a TheHunt, ¡dónde tú puedes retar a tus amigos a lo que sea! Pon algunas pistas (tan difíciles o fáciles como tú quieras), encuentra objetos, ¡machácales! ¿Eres capaz de encontrar todo sin necesitar ninguna pista? ¡Elige uno de los juegos, o crea el tuyo propio!",
      "Create new level": "Crear Nivel:",
      "Main clue": "Primera pista:",
      "Second clue": "Segunda pista:",
      "Third clue": "Tercera pista:",
      "Select win condition": "Elige como tiene que ser la respuesta:",
      Text: "Texto:",
      Image: "Imagen",
      GPS: "GPS",
      "Level completion message": "Mensaje al pasar de nivel:",
      "Add Level": "Añadir Nivel",
      create: "Crear Juego"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
