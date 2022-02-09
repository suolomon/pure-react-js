const element = React.createElement

const Cards=({img, alt, heading, paragraph})=> {
  return element(
    "div",
    {
      className: "flex flex-col rounded-md shadow-md lg:mb-16 bg-bookmark-white",
    },
    element(
      "div",
      { className: "p-6 flex flex-col items-center" },
      element("img", { src: img, alt: alt }),
      element(
        "h3",
        {
          className: "mt-5 mb-2 text-bookmark-blue text-lg font-bold",
        },
        heading
      ),
      element(
        "p",
        {
          className: "mb-2 text-bookmark-grey font-light",
        },
        paragraph
      )
    ),
    element("hr", { className: "border-b border-grey-200" }),
    element(
      "div",
      { className: "flex p-6" },
      element(
        "button",
        {
          type: "button",
          className:
            "flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black",
        },
        "Add & Install Extension"
      )
    )
  );
}

export default Cards;