const element = React.createElement;
import Cards from "./Cards.js";
const Download = () => {
  return element(
    "section",
    { className: "py-20 mt-20 bg-gray-200" },
    element(
      "div",
      { className: "sm:w-3/4 lg:w-5/12 mx-auto px-2" },
      element(
        "h1",
        { className: "text-3xl text-center text-bookmark-blue" },
        "Download the extension"
      ),
      element(
        "p",
        { className: "text-center text-bookmark-grey mt-4" },
        " We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize."
      )
    ),
    element(
      "div",
      {
        className:
          "container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16 ",
      },
      element(Cards, {
        heading: "Add to Chrome",
        paragraph: "Minimum version 62",
        img: "../Assets/imgs/logo-chrome.svg",
        alt:"chrome-logo"
      }),
      element(Cards, {
        heading: "Add to Firefox",
        paragraph: "Minimum version 62",
        img: "../Assets/imgs/logo-firefox.svg",
        alt:"firefox-logo"
      }),
      element(Cards, {
        heading: "Add to Opera",
        paragraph: "Minimum version 62",
        img: "../Assets/imgs/logo-opera.svg",
        alt:"opera-logo"
      })
    )
  );
};

export default Download;
