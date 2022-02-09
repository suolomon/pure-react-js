const element = React.createElement;

const Hero = () => {
  return element(
    "section",
    { className: "relative" },
    element(
      "div",
      {
        className:
          "container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28",
      },
      element(
        "div",
        { className: "flex flex-1 flex-col items-center lg:items-start" },
        element(
          "h2",
          {
            className:
              "text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6",
          },
          "A simple Bookmark Manager"
        ),
        element(
          "p",
          {
            className:
              "text-bookmark-grey text-lg text-center lg:text-left mb-6",
          },
          "A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free."
        ),
        element(
          "div",
          { className: "flex justify-center flex-wrap gap-6" },
          element(
            "button",
            {
              type: "button",
              className:
                "btn btn-purple hover:bg-bookmark-white hover:text-black",
            },
            "Get it on DuckDuckGo"
          ),
          element(
            "button",
            {
              type: "button",
              className:
                "btn btn-white hover:bg-bookmark-purple hover:text-white",
            },
            "Get it on Brave"
          )
        )
      ),
      element(
        "div",
        { className: "flex justify-center flex-1 mb-10 md:mb-16 lg:md-0 z-10" },
        element("img", {
          src: "../Assets/imgs/hero-bg.png",
          alt: "hero-bg",
          className: "w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full",
        })
      )
    ),

    element("div", {
      className:
        "hidden md:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 ",
    })
  );
};

export default Hero;
