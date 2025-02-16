import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const sections = [
  {
    title: "Information",
    links: [
      { text: "Privacy policy", className: "fw-bold" },
      { text: "Refund policy", className: "fw-bold py-2" },
      { text: "Shipping & Return", className: "fw-bold" },
      { text: "Term & conditions", className: "fw-bold py-2" },
    ],
  },
  {
    title: "Quick links",
    links: [
      { text: "Product Compare", className: "fw-bold" },
      { text: "My account", className: "fw-bold py-2" },
      { text: "Shopping Cart", className: "fw-bold" },
      { text: "Wishlist", className: "fw-bold py-2" },
    ],
  },
  {
    title: "Our Store",
    description:
      "Miniture is one of the biggest international fashion companies, one of the world’s largest distribution groups.",
    icons: [
      { icon: <FacebookOutlinedIcon /> },
      { icon: <InstagramIcon /> },
      { icon: <TelegramIcon /> },
      { icon: <LinkedInIcon /> },
    ],
  },
];

export default sections;
