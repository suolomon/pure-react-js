import {
  Header,
  Hero,
  Download,
  Contact,
  Footer,
} from "./src/Components/index.js";
const element = React.createElement;

const App = () => {
  return [
    element("div", null, element(Header)),
    element(Hero),
    element(Download),
    element(Contact),
    element(Footer),
  ];
};

ReactDOM.render(element(App), document.getElementById("root"));
