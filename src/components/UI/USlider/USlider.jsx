import React from "react";
import "./USlider.scss";
import Slider from "react-slick";

const USlider = ({ images = [], project_name = "" }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div className="img_slider" key={index}>
                    <img
                        src={require(`assets/projects/${image}`)}
                        alt={`${project_name} preview ${index + 1}`}
                    />
                </div>
            ))}
        </Slider>
    );
};

export default USlider;
