import redditScreenshot from "../../assets/projectScreenshots/reddit-client.png";
import redditClientIcon from "../../assets/projectScreenshots/reddit-icon.svg";
import weatherScreenshot from "../../assets/projectScreenshots/weather-app.png";
import weatherIcon from "../../assets/projectScreenshots/weather-icon.svg";

const projectsData = [
  {
    name: "Reddit Client",
    image: redditScreenshot,
    icon: redditClientIcon,
    description:
      "A light and minimal Reddit client that displays the default view of Reddit using data from the Reddit JSON API.",
    links: {
      hosted: "https://effulgent-semolina-e038d2.netlify.app/",
      repo: "https://github.com/LWest001/reddit-client",
    },
  },
  {
    name: "WeatherNow",
    image: weatherScreenshot,
    icon: weatherIcon,
    description:
      "Local weather information delivered to you using the OpenWeather API.",
    links: {
      hosted: "https://amazing-starlight-c69366.netlify.app/",
      repo: "https://github.com/LWest001/ReactWeatherApp",
    },
  },
];

export default projectsData;
