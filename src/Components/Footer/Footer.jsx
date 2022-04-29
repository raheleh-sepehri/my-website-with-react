import "./Footer.css";
import Youtube from "@iconscout/react-unicons/icons/uil-youtube";
import Telegram from "@iconscout/react-unicons/icons/uil-telegram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";

const Footer = () => {
  return (
    <footer>
      <div className="f-img-back">
        <div className="f-content">
          <span>Raheleh1392@gmail.com</span>
          <div className="f-icons">
            <Youtube size="2.5rem" color="white" />
            <Telegram size="2.5rem" color="white" />
            <Github size="2.5rem" color="white" />
            <Whatsapp size="2.5rem" color="white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
