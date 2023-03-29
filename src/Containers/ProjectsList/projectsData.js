import redditScreenshot from "../../assets/projectScreenshots/reddit-client.png";
import redditClientIcon from "../../assets/projectScreenshots/reddit-icon.svg";
import weatherScreenshot from "../../assets/projectScreenshots/weather-app.png";
import weatherIcon from "../../assets/projectScreenshots/weather-icon.svg";
import redditVideo from "../../assets/projectScreenshots/reddit.webm";
import weatherVideo from "../../assets/projectScreenshots/weathernow.webm";
import redditMobileVideo from "../../assets/projectScreenshots/redditMobile.webm";

const projectsData = [
  {
    name: "Reddit Client",
    image: redditScreenshot,
    icon: redditClientIcon,
    video: { desktop: redditVideo, mobile: redditMobileVideo },
    description:
      "A minimal Reddit client that displays Reddit homepage, subreddits, threaded comments, and search results using data from the Reddit JSON API.",
    links: {
      hosted: "https://reddit-lw.netlify.app/",
      repo: "https://github.com/LWest001/reddit-client",
    },
  },
  {
    name: "WeatherNow",
    image: weatherScreenshot,
    icon: weatherIcon,
    video: { desktop: weatherVideo },
    description:
      "Local weather information delivered to you using the OpenWeather API.",
    links: {
      hosted: "https://weathernow-lw.netlify.app/",
      repo: "https://github.com/LWest001/ReactWeatherApp",
    },
  },
];

export default projectsData;
