const element = React.createElement;

const Header = () => {
  return element(
    "header",
    null,
    element(
      "nav",
      { className: "container flex items-center py-4 mt-4 sm:mt-12" },
      element(
        "div",
        { className: "py-1" },
        element("img", {
          src: "../Assets/imgs/logo-bookmark.svg",
          alt: "logo",
        })
      ),
      element(
        "ul",
        {
          className:
            "hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs",
        },
        element("li", { className: "cursor-pointer" }, "Features"),
        element("li", { className: "cursor-pointer" }, "Pricing"),
        element("li", { className: "cursor-pointer" }, "Contact"),
        element(
          "button",
          {
            type: "button",
            className:
              "bg-bookmark-red text-white rounded-md px-7 py-3 uppercase",
          },
          "Login"
        )
      ),
      element("div", {
        className:
          "flex sm:hidden flex-1 justify-end text-2xl fa-solid fa-bars",
      })
    )
  );
};

export default Header;
