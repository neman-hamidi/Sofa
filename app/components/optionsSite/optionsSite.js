import "./optionsSite.css";
import options from "./Text";
import OptionsSiteItem from "./optionsSiteItem/optionsSiteItem";
const optionsSite = () => (
  <div className="div-optionsSite mx-auto">
    <div className="optionsSite">
      {options.map((option, index) => (
        <OptionsSiteItem key={index} {...option} />
      ))}
    </div>
  </div>
);
export default optionsSite;
