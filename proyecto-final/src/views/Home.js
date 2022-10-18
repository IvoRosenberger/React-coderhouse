import React from 'react'
import SwiperCore, { Navigation, Autoplay, Pagination, A11y, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../imagenes/carruselPrincipal/mainPSG.jpg'
import img2 from '../imagenes/carruselPrincipal/mainSuperRugby.jpg'
import img3 from '../imagenes/carruselPrincipal/mainVenezia.jpg'
import img4 from '../imagenes/carruselPrincipal/mainLeinstervMunster.jpg'
import 'swiper/swiper-bundle.css';
import "../styles/Landing.css"
import { Link } from 'react-router-dom';

SwiperCore.use([Pagination, Navigation, Autoplay])

function Home({ data }) {

    const slides = [{
        img: img1,
        "index": 0
    },
    {
        img: img2,
        "index": 1
    },
    {
        img: img3,
        "index": 2
    },
    {
        img: img4,
        "index": 3
    }]

    return (
        <div className="landing" >
            <section className='galeriaPrincipal'>
                <Swiper className='galeriaSwiper' modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: "5000" }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {slides.map((element) => <SwiperSlide key={element.index}>
                        <Link to="" >
                            <img src={element.img} className="imagenCarruselPrincipal" alt="slide" />
                        </Link>
                    </SwiperSlide>)
                    }
                </Swiper>
            </section>
        </div>
    )
}

export default Home
