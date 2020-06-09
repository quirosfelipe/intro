import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "guitars",
          imageUrl: "https://i.ytimg.com/vi/TUT_EQ3_wUI/maxresdefault.jpg",
          id: 1,
          linkUrl: "guitars",
        },
        {
          title: "basses",
          imageUrl:
            "https://www.musikalessons.com/themes/musika_res/images/playingbass.jpg",
          id: 2,
          linkUrl: "",
        },
        {
          title: "keyboards",
          imageUrl:
            "https://www.dailydot.com/wp-content/uploads/e7b/94/5ccfc8f4cec4d024ea42aa559446b572.jpg",
          id: 3,
          linkUrl: "",
        },
        {
          title: "recording",
          imageUrl:
            "https://consordini.com/wp-content/uploads/2018/11/home-recording-studio-setup.jpg",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "microphones",
          imageUrl:
            "https://news.unl.edu/sites/default/files/media/microphone_sing_stage.jpg",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
