const INITIAL_STATE = {
  sections: [
    {
      title: "guitars",
      imageUrl: "https://i.ytimg.com/vi/TUT_EQ3_wUI/maxresdefault.jpg",
      // size: "large",
      id: 1,
      linkUrl: "shop/guitars",
    },
    {
      title: "basses",
      imageUrl:
        "https://www.musikalessons.com/themes/musika_res/images/playingbass.jpg",
      id: 2,
      linkUrl: "shop/basses",
    },
    {
      title: "keyboards",
      imageUrl:
        "https://www.dailydot.com/wp-content/uploads/e7b/94/5ccfc8f4cec4d024ea42aa559446b572.jpg",
      // size: "large",
      id: 3,
      linkUrl: "shop/keyboards",
    },
    {
      title: "recording",
      imageUrl:
        "http://blog.hughes-and-kettner.com/wp-content/uploads/2015/01/DAW-1-von-1-4.jpg",
      // "https://consordini.com/wp-content/uploads/2018/11/home-recording-studio-setup.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/recording",
    },
    {
      title: "microphones",
      imageUrl:
        "https://news.unl.edu/sites/default/files/media/microphone_sing_stage.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/microphones",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
