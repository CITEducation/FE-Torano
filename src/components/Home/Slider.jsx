import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
function Slider() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <img
                        src="https://res.cloudinary.com/dwtzhixbx/image/upload/v1752240082/slide_1_img_usi5jh.jpg"
                        style={{ width: "100%", height: "auto" }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://res.cloudinary.com/dwtzhixbx/image/upload/v1752240346/slide_2_img_en2prt.jpg"
                        style={{ width: "100%", height: "auto" }}
                    />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://res.cloudinary.com/dwtzhixbx/image/upload/v1752240348/slide_3_img_vvjzta.png"
                        style={{ width: "100%", height: "auto" }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://res.cloudinary.com/dwtzhixbx/image/upload/v1752240347/slide_4_img_owtdvm.jpg"
                        style={{ width: "100%", height: "auto" }} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;
