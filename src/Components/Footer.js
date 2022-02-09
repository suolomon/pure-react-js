const element = React.createElement;

const Footer = () => {
  return element(
    "footer",
    { className: "bg-bookmark-blue py-8" },
    element(
      "div",
      { className: "container flex flex-col md:flex-row items-center" },
      element(
        "div",
        {
          className:
            "flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12",
        },
        element("img", {
          src: "../Assets/imgs/logo-bookmark-white.png",
        })
      ),
      element(
        "div",
        { className: "flex gap-10 mt-12 md:mt-0" },
        element("li", { className: "text-white text-2xl fab fa-twitter" }),
        element("li", { className: "text-white text-2xl fab fa-facebook" })
      )
      ),
      element('p', {className:" text-xs text-center text-white mt-4"},
      "Built with ❤ by Solomon Talemwa.")
  );
};

export default Footer;
