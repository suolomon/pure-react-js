const element = React.createElement;

const Contact = () => {
  return element(
    "section",
    { className: "bg-bookmark-purple text-white py-20" },
    element(
      "div",
      { className: "container" },
      element(
        "div",
        { className: "sm:w-3/4 lg:w-2/4 mx-auto" },
        element(
          "p",
          { className: "font-light uppercase text-center mb-8" },
          "Join the 30,000+ happy users!"
        ),
        element(
          "h1",
          { className: "text-3xl text-center" },
          "Stay up-to-date with what we're doing"
        ),
        element(
          "div",
          { className: "flex flex-col sm:flex-row gap-6 mt-8" },
          element("input", {
            type: "text",
            placeholder: "Enter your email address",
            className:
              "focus:outline-none flex-1 px-2 py-3 rounded-md text-black",
          }),
          element(
            "button",
            {
              type: "button",
              className:
                "btn bg-bookmark-red hover:bg-bookmark-white hover:text-black",
            },
            "Contact Us"
          )
        )
      )
    )
  );
};

export default Contact;
