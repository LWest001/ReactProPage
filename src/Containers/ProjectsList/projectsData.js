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

// Research Project
import researchIcon from "/src/assets/projectScreenshots/research-icon.svg";
import researchVideo from "../../assets/projectScreenshots/researchVideo.mp4";
import researchMobile from "../../assets/projectScreenshots/researchMobile.mp4";

import researchFallback from "../../assets/projectScreenshots/research.png";

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
  new Project(
    "rLite Reddit Client",
    redditClientIcon,
    { desktop: redditVideo, mobile: redditMobileVideo },
    { desktop: redditFallback, mobile: redditMobileFallback },
    [
      "A minimal Reddit client that displays Reddit homepage, subreddits, threaded comments, and search results using data from the Reddit JSON API.",
    ],
    {
      hosted: "https://reddit-lw.netlify.app/",
      repo: "https://github.com/LWest001/reddit-client",
    }
  ),
  new Project(
    "WeatherNow",
    weatherIcon,
    { desktop: weatherVideo, mobile: weatherMobileVideo },
    { desktop: weatherFallback, mobile: weatherMobileFallback },
    ["Local weather information delivered to you using the OpenWeather API."],
    {
      hosted: "https://weathernow-lw.netlify.app/",
      repo: "https://github.com/LWest001/ReactWeatherApp",
    }
  ),
  new Project(
    "Undergraduate Research Project",
    researchIcon,
    {
      desktop: researchVideo,
      mobile: researchMobile,
    },
    { desktop: researchFallback, mobile: researchFallback },
    [
      "Experimental cognitive neuroscience research conducted for Senior Honors Thesis, UMass Boston. \
      The experiment was deployed online to participants around the globe.",
      'We adapted "Scene wheels: Measuring perception and memory of real-world scenes with a continuous stimulus space" \
      by Son, Walther & Mack, using the jsPsych library for JavaScript.',
      "This was my first foray into programming. Some of the code I wrote for this project does not follow best practices, but working on it gave me a base for understanding HTML, CSS, JavaSCript, andweb development in general. \
      This project also makes use of JavaScript ES5 rather than ES6.",
      "Explore the demo version below, or watch the conference presentation to get a better understanding of our methods and findings.",
    ],
    {
      demo: "https://routewheels.netlify.app/",
      repo: "https://github.com/YibiaoLiang/onRoute/tree/3-part-pilot",
      presentation: "https://www.youtube.com/watch?v=J9gYwK8d7WE",
    }
  ),
];

export default projectsData;
