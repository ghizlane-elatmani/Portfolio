import weather from "../assets/projects/weather.png";
import quiz from "../assets/projects/quiz.png";
import todo from "../assets/todo.png";
import wind from "../assets/windbnb.png";
import recipe from "../assets/recipe.png";

export const projectList = [
  {
    id: "1",
    name: "Weather App",
    chips: "React Javascript Tailwind Html Css",
    desc: [
      { id: 10, title: "Get the weather forecast in a beautiful website" },
      { id: 11, title: "Developed with React and Vite." },
      { id: 12, title: "Communicates with the OpenWeatherMap API." },
      { id: 13, title: "Respects the User Stories and the given design." },
      { id: 14, title: "Deployed on Netlify" },
    ],
    urlSite: "https://weather-app-ge.netlify.app/",
    urlCode: "https://github.com/ghizlane-elatmani/Weather-app",
    picture: weather,
  },
  {
    id: "2",
    name: "Country Quiz",
    chips: "React Javascript Scss Html Css",
    desc: [
      { id: 10, title: "Quiz App about countries and their capitals" },
      { id: 15, title: "Developed with React." },
      { id: 16, title: "Communicates with the Restcountries API." },
      { id: 17, title: "Respects the User Stories and the given design." },
      { id: 18, title: "Deployed on Netlify" },
    ],
    urlSite: "https://country-quiz-ge.netlify.app/",
    urlCode: "https://github.com/ghizlane-elatmani/Country-quiz",
    picture: quiz,
  },
  // {
  //   id: "3",
  //   name: "Todo App",
  //   desc: "A modern and simple task management app",
  //   urlSite: "https://todo-app-ge.netlify.app/",
  //   urlCode: "https://github.com/ghizlane-elatmani/Todo-App",
  //   picture: todo,
  // },
  // {
  //   id: "4",
  //   name: "WindBnb",
  //   desc: "Application that displays a simple version of airbnb",
  //   urlSite: "https://windbnb-ge.netlify.app/",
  //   urlCode: "https://github.com/ghizlane-elatmani/Windbnb",
  //   picture: wind,
  // },
  // {
  //   id: "5",
  //   name: "Recipe Blog",
  //   desc: "A homepage designed for a recipe blog",
  //   urlSite: "https://recipe-blog-ge.netlify.app/",
  //   urlCode: "https://github.com/ghizlane-elatmani/Recipe-Page",
  //   picture: recipe,
  // },
];
