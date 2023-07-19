import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarUI from "../../../images/slider/carui.png";
import CarUI02 from "../../../images/slider/carui02.png";
import CarUI03 from "../../../images/slider/carui03.png";
import "./homecarousel.css";

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2400,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="mySlider">
      <Slider {...settings}>
        <div>
          <img src={CarUI} alt="Slide 1" style={{ width: "100%" }} />
        </div>
        <div>
          <img src={CarUI02} alt="Slide 2" style={{ width: "100%" }} />
        </div>
        <div>
          <img src={CarUI03} alt="Slide 3" style={{ width: "100%" }} />
        </div>
      </Slider>
    </div>
  );
};

export default HomeCarousel;
