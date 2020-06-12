import React from "react";
// import studio from "../../assets/studio.jpg";
import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";
import Slideshow from "../../components/slideshow/slideshow.component";

const HomePage = () => (
  <div>
    <div>
      {/* <img
        className="homepage-image"
        src={studio}
        //src="https://artandliving.com/wp-content/uploads/2017/06/Millionaire-Blogger-Linda-Ikeji-has-announced-the-launch-of-her-music-studio.-She-announced-that-the-Music-Studio-known-as-Linda-Ikeji-Music-Studio-is-now-open-for-business.-1.jpg"
        // src="https://www.tokkoro.com/picsup/3060534-music_recording_sound-engineering_sound-mixer_sound-recording_sound-studio.jpg"
        alt="studio"
      /> */}
      <Slideshow />
    </div>
    <div className="homepage">
      <Directory />
    </div>
  </div>
);

export default HomePage;
