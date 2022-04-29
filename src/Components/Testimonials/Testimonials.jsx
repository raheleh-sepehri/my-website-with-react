import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profile1 from "../../img/profile1.jpg";
import profile2 from "../../img/profile2.jpg";
import profile3 from "../../img/profile3.jpg";
import profile4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { themeContext } from "../../Context";
import { useContext } from "react";
import "swiper/css";
const Testimonials = () => {
  const them = useContext(themeContext);
  const darkMode = them.state.darkMode;
  const clients = [
    {
      img: profile1,
      review:
        "1Lorem ipsum dolor sit amet. Aut natus recusandae qui facere nesciunt ut error molestias qui deleniti labore est consequatur quia non dolor minus ex repellat dolores? Nam voluptate cumque aut voluptas amet sed dolorem incidunt est assumenda incidunt ut enim consequuntur rem assumenda eius rem dolorem eaque.",
    },
    {
      img: profile2,
      review:
        "22222Lorem ipsum dolor sit amet. Aut natus recusandae qui facere nesciunt ut error molestias qui deleniti labore est consequatur quia non dolor minus ex repellat dolores? Nam voluptate cumque aut voluptas amet sed dolorem incidunt est assumenda incidunt ut enim consequuntur rem assumenda eius rem dolorem eaque.",
    },
    {
      img: profile3,
      review:
        "22222Lorem ipsum dolor sit amet. Aut natus recusandae qui facere nesciunt ut error molestias qui deleniti labore est consequatur quia non dolor minus ex repellat dolores? Nam voluptate cumque aut voluptas amet sed dolorem incidunt est assumenda incidunt ut enim consequuntur rem assumenda eius rem dolorem eaque.",
    },
    {
      img: profile4,
      review:
        "22222Lorem ipsum dolor sit amet. Aut natus recusandae qui facere nesciunt ut error molestias qui deleniti labore est consequatur quia non dolor minus ex repellat dolores? Nam voluptate cumque aut voluptas amet sed dolorem incidunt est assumenda incidunt ut enim consequuntur rem assumenda eius rem dolorem eaque.",
    },
  ];
  return (
    <section className="testimonials" id="Testimonial">
      <div className="p-heading">
        <span style={darkMode ? { color: "white" } : { color: "" }}>
          Clients always get
        </span>
        <span>Exceptional work</span>
      </div>
      <div
        className="blur"
        style={{
          background: "#c1f5ff",
          top: "12rem",
          width: "21rem",
          height: "11rem",
          left: "4rem",
        }}
      ></div>
      <div
        className="blur"
        style={{
          background: "rgb(238 210 255)",
          top: "17rem",
          width: "21rem",
          height: "11rem",
          left: "50rem",
        }}
      ></div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <img src={client.img} alt="" />
                <p>{client.review}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
