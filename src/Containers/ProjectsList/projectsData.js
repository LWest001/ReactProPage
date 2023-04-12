// rLite
import redditClientIcon from "../../assets/projectScreenshots/reddit-icon.svg";
import redditVideo from "../../assets/projectScreenshots/reddit.mp4";
import redditMobileVideo from "../../assets/projectScreenshots/redditMobile.mp4";
import redditFallback from "../../assets/projectScreenshots/reddit-client.png";
import redditMobileFallback from "../../assets/projectScreenshots/reddit-client-mobile.png";

// WeatherNow
import weatherIcon from "../../assets/projectScreenshots/weather-icon.svg";
import weatherVideo from "../../assets/projectScreenshots/weathernow.mp4";
import weatherMobileVideo from "../../assets/projectScreenshots/weathernowMobile.mp4";
import weatherFallback from "../../assets/projectScreenshots/weather-app.png";
import weatherMobileFallback from "../../assets/projectScreenshots/weather-app-mobile.png";

class Project {
  constructor(name, icon, video, fallback, description, links) {
    this.name = name;
    this.icon = icon;
    this.video = video;
    this.fallback = fallback;
    this.description = description;
    this.links = links;
  }
}

const projectsData = [
  {
    name: "rLite Reddit Client",
    icon: redditClientIcon,
    video: { desktop: redditVideo, mobile: redditMobileVideo },
    fallback: { desktop: redditFallback, mobile: redditMobileFallback },
    description:
      "A minimal Reddit client that displays Reddit homepage, subreddits, threaded comments, and search results using data from the Reddit JSON API.",
    links: {
      hosted: "https://reddit-lw.netlify.app/",
      repo: "https://github.com/LWest001/reddit-client",
    },
  },
  {
    name: "WeatherNow",
    icon: weatherIcon,
    video: { desktop: weatherVideo, mobile: weatherMobileVideo },
    fallback: { desktop: weatherFallback, mobile: weatherMobileFallback },
    description:
      "Local weather information delivered to you using the OpenWeather API.",
    links: {
      hosted: "https://weathernow-lw.netlify.app/",
      repo: "https://github.com/LWest001/ReactWeatherApp",
    },
  },
];

export default projectsData;
