import React from "react";
// import studio from "../../assets/studio.jpg";
import github from "../../assets/github.png";
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
    <div className="created-by">
      <div className="created-by__name">
        <p> Created By </p>
        <a
          href="https://quirosfelipe.github.io/"
          target="framename"
          className="created-by__name-name"
        >
          Felipe Quiros
        </a>
        <div className=" created-by__link">
          <a href="https://github.com/quirosfelipe" target="framename">
            <img class="created-by__image" src={github} alt="github link" />{" "}
          </a>
        </div>
      </div>
      <div className="created-by__copyright">
        <p>Copyright© Intro | Music Stores, Inc. All rights Reserved. 2020</p>
      </div>
    </div>
  </div>
);

export default HomePage;
