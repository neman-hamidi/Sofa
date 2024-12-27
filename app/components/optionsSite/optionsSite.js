import "./optionsSite.css";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import SupportOutlinedIcon from "@mui/icons-material/SupportOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import NoCrashOutlinedIcon from "@mui/icons-material/NoCrashOutlined";
import OptionsSiteItem from "./optionsSiteItem/optionsSiteItem";
export default function optionsSite() {
  return (
    <div className="div-optionsSite mx-auto">
      <div className="optionsSite">
        <OptionsSiteItem title="Flexible Payment" paragraph="Pay with Multiple Credit Cards">
            <AttachMoneyOutlinedIcon/>
        </OptionsSiteItem>

        <OptionsSiteItem title="Online Support" paragraph="24 hours a day, 7 days a week">
            <SupportOutlinedIcon/>
        </OptionsSiteItem>

        <OptionsSiteItem title="Money Guarantee" paragraph="Within 30 days">
            <InventoryOutlinedIcon/>
        </OptionsSiteItem>

        <OptionsSiteItem title="Free Shipping" paragraph="Free Shipping for orders">
            <NoCrashOutlinedIcon/>
        </OptionsSiteItem>
      </div>
    </div>
  );
}
