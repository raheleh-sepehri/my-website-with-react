import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import sidebar from "../../img/sidebar.png";
import ecommerce from "../../img/ecommerce.png";
import hoc from "../../img/hoc.png";
import musicapp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Portfolio = () => {
  const them = useContext(themeContext);
  const darkMode = them.state.darkMode;
  return (
    <section className="portfolio" id="Protfoilio">
      <div className="p-heading">
        <span style={darkMode ? { color: "white" } : { color: "" }}>
          Present Project
        </span>
        <span>Portfolio</span>
      </div>
      {/* slider */}
      <Swiper slidesPerView={3} grabCursor={true} className="portfolio-slider">
        <SwiperSlide>
          <img src={sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hoc} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={musicapp} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Portfolio;
