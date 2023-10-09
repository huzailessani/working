import BaseLayout from "../components/BaseLayout";
import Image from "next/image";
import Link from 'next/link';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import { GiSwordsPower } from "react-icons/gi";
import { MdStickyNote2, MdOutlineHowToVote, MdWork, MdWorkOff } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";
// import { PiNotePencilFill } from "react-icons/pi";
import { BsArrowRight, BsFillPatchQuestionFill, BsPeopleFill, BsFileEarmarkCheck, BsFillPhoneVibrateFill, BsFillSignpostFill, BsFillPeopleFill, BsFillTelephoneFill, BsFillCalendarCheckFill, BsFillArrowRightCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";
import { FaPlaneArrival, FaGlobeAmericas, FaHandshake } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import slider1img from "../../public/img-3.jpg"
import slider2img from "../../public/img-2.jpg"
import slider3img from "../../public/img-4.jpg"
import banner1 from "../../public/banner-1.jpg"
import banner2 from "../../public/banner-2.jpg"
import banner3 from "../../public/banner-3.jpg"
import banner4 from "../../public/banner-4.jpg"
import banner5 from "../../public/banner-5.jpg"
import banner6 from "../../public/banner-6.jpg"
import banner7 from "../../public/banner-7.jpg"
import banner8 from "../../public/banner-8.jpg"
import banner9 from "../../public/banner-9.jpg"
import banner10 from "../../public/banner-10.jpg"
import banner11 from "../../public/banner-11.jpg"
import banner12 from "../../public/banner-12.jpg"
import banner13 from "../../public/banner-13.jpg"
import banner14 from "../../public/banner-14.jpg"
// import banner15 from "../../public/banner-15.jpg"
import banner16 from "../../public/banner-16.jpg"
import banner17 from "../../public/banner-17.jpg"
import banner18 from "../../public/banner-18.jpg"
import ombudsmanimg from "../../public/ombudsman-sindh.jpeg"
import ombud from "../../public/ombud.png"
import ombuds from "../../public/ombuds.png"
import supreme from "../../public/supreme.png"
import rightimg from "../../public/right-image.jpg"
import bottom1 from "../../public/bottom-pic-1.jpg"
import bottom2 from "../../public/bottom-pic-2.png"
import bottom3 from "../../public/bottom-pic-3.png"
import sliderImg from "../../public/bottom-pic-3.png"
import officeimg from "../../public/ombudsmanoffice.jpg"
import officeimg2 from "../../public/office.jpg"
import officeimg3 from "../../public/omb-homapge-banner1.png"
import ladyImg from "../../public/MicrosoftTeams-image-4.png"
import ombudsman from "../../public/ombudsman.png"
import punjab from "../../public/punjab.jpeg"
// import w1 from "../../public/w-1.PNG"
// import w2 from "../../public/w-2.PNG"
// import w3 from "../../public/w-3.PNG"
// import w4 from "../../public/w-4.PNG"
// import w5 from "../../public/w-5.jpg"

import vision from "../../public/Vision_01.png"
import mission from "../../public/mission-01.png"
import p from "../../public/p.png"
import q from "../../public/q.png"
import r from "../../public/r.png"
import s from "../../public/s.png"

// import link from "../../public/links-img.PNG"

import counterNote from "../../public/notes.png"
import counterNote2 from "../../public/note.jpg"
import counterNote3 from "../../public/counter-4.png"
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';



import CountUp from "react-countup";
const Home = () => {



  const [activeData, setActiveData] = useState(1);

  // Function to set the active data when an image is clicked
  const showData = (imageNumber) => {
    setActiveData(imageNumber);
  };


  function Counter({ number, title }) {
    const [isInView, setIsInView] = useState(false);
    const { ref } = useInView({
      triggerOnce: false,
      threshold: 0.2,
      onChange: (inView) => {
        setIsInView(inView);
      },
    });

    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
      if (isInView) {
        setCurrentNumber(number);
      } else {
        setCurrentNumber(0); // Reset the counter to zero when out of view
      }
    }, [isInView, number]);

    return (
      <div className="counter-container" ref={ref}>
        {isInView ? (
          <CountUp start={0} end={currentNumber} duration={2} />
        ) : (
          <span>{currentNumber}</span>
        )}
        <p>{title}</p>
      </div>
    );
  }


  const cards = [
    {
      "image": "w-1.jpeg",
      "title": "NUMBER PLATES",
      "subtitle": "Provincial Ombudsman Sindh directs clearance of backlog and issuance of 300,000 number plates due to owner requests",
      "new": "Whats New"
    },
    {
      "image": "w-2.PNG",
      "title": "MALNUTRITION",
      "subtitle": "Honorable Ombudsman Sindh led meetings on implementing study recommendations for malnutrition in Tharparkar.",
      "new": "Whats New"
    },
    {
      "image": "w-3.PNG",
      "title": "HELP DESK",
      "subtitle": "Establishment of help desks for differently abled persons",
      "new": "Whats New"
    },
    {
      "image": "w-4.PNG",
      "title": "GIRLS EDUCATION",
      "subtitle": "Meeting regarding implementation of recommendations of the study issues of girls education in Sindh.",
      "new": "Whats New"
    }
    ,
    {
      "image": "w-5.jpg",
      "title": "PRISON INSPECTION",
      "subtitle": "Ombudsman Sindh formed committees for prison inspections across the province.",
      "new": "Whats New"
    }
  ];

  const Article = ({ data }) => (
    <figure className="snip1584">
      <img src={data.image} alt={data.title} />
      <p className="slider-btn">{data.new}</p>
      <figcaption>
        <h3>{data.title}</h3>
        <h5 align="justify">{data.subtitle}</h5>

      </figcaption>
      <a href="#"></a>
    </figure>
  );





  //Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

  };





  return (
    <BaseLayout>
      <section className="dashboard-section" id="dashboard-section">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              {/* <img src="/img-2.jpg" alt="" className="dashboard-slider-image" /> */}
              <Image
                className="dashboard-slider-image"
                src={officeimg2}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block">
                <h5>HEADQUARTER</h5>
                <p>Provincial Ombudsman</p>
              </div>
              {/* <p className="dash-text">Karachi South</p> */}
            </div>
            <div class="carousel-item ">
              {/* <img src="/img-2.jpg" alt="" className="dashboard-slider-image" /> */}
              <Image
                className="dashboard-slider-image"
                src={banner1}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block">
                <h5>KARACHI SOUTH</h5>
                <p>Quaid-e-Azam House</p>
              </div>
            </div>
            <div class="carousel-item ">
              {/* <img src="/img-2.jpg" alt="" className="dashboard-slider-image" /> */}
              <Image
                className="dashboard-slider-image"
                src={banner2}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block">
                <h5>KARACHI CENTRAL</h5>
                <p>Quaid-e-Azam Mazar</p>
              </div>
            </div>
            <div class="carousel-item ">
              {/* <img src="/img-2.jpg" alt="" className="dashboard-slider-image" /> */}
              <Image
                className="dashboard-slider-image"
                src={banner3}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block">
                <h5>KARACHI WEST</h5>
                <p>Native Jetty Bridge</p>
              </div>
            </div>
            <div class="carousel-item ">
              {/* <img src="/img-2.jpg" alt="" className="dashboard-slider-image" /> */}
              <Image
                className="dashboard-slider-image"
                src={banner4}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block">
                <h5>KARACHI EAST</h5>
                <p>Jinnah Airport</p>
              </div>
            </div>
            <div class="carousel-item ">
              {/* <img src="/img-2.jpg" alt="" className="dashboard-slider-image" /> */}
              <Image
                className="dashboard-slider-image"
                src={banner5}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block">
                <h5>SUKKUR</h5>
                <p>Lansdowne Bridge</p>
              </div>
            </div>
            <div class="carousel-item ">
              {/* <img src="/img-2.jpg" alt="" className="dashboard-slider-image" /> */}
              <Image
                className="dashboard-slider-image"
                src={banner6}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block">
                <h5>THARPARKAR</h5>
                <p>Naukot Fort</p>
              </div>
            </div>
            <div class="carousel-item ">
              {/* <img src="/img-2.jpg" alt="" className="dashboard-slider-image" /> */}
              <Image
                className="dashboard-slider-image"
                src={banner7}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block">
                <h5>DADU</h5>
                <p>Gorakh Hill</p>
              </div>
            </div>
            <div class="carousel-item ">
              {/* <img src="/img-2.jpg" alt="" className="dashboard-slider-image" /> */}
              <Image
                className="dashboard-slider-image"
                src={banner8}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block">
                <h5>KHAIRPUR</h5>
                <p>Faiz Mahal</p>
              </div>
            </div>
            <div class="carousel-item ">
              {/* <img src="/img-2.jpg" alt="" className="dashboard-slider-image" /> */}
              <Image
                className="dashboard-slider-image"
                src={banner9}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block">
                <h5>NAUSHARO FEROZE</h5>
                <p>Grand Mosque Allahabad</p>
              </div>
            </div>
            <div class="carousel-item ">
              {/* <img src="/img-2.jpg" alt="" className="dashboard-slider-image" /> */}
              <Image
                className="dashboard-slider-image"
                src={banner10}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block">
                <h5>THATTA</h5>
                <p>Makli Necropolis</p>
              </div>
            </div>
            <div class="carousel-item ">
              {/* <img src="/img-2.jpg" alt="" className="dashboard-slider-image" /> */}
              <Image
                className="dashboard-slider-image"
                src={banner11}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block">
                <h5>HYDERABAD</h5>
                <p>Pakka Qila</p>
              </div>
            </div>
            <div class="carousel-item ">
              {/* <img src="/img-2.jpg" alt="" className="dashboard-slider-image" /> */}
              <Image
                className="dashboard-slider-image"
                src={banner12}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block">
                <h5>KORANGI</h5>
                <p>Airmen Golf Club</p>
              </div>
            </div>
            <div class="carousel-item ">
              {/* <img src="/img-2.jpg" alt="" className="dashboard-slider-image" /> */}
              <Image
                className="dashboard-slider-image"
                src={banner13}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block">
                <h5>BENAZIRABAD</h5>
                <p>Dalel Dero Fort</p>
              </div>
            </div>
            <div class="carousel-item ">
              {/* <img src="/img-2.jpg" alt="" className="dashboard-slider-image" /> */}
              <Image
                className="dashboard-slider-image"
                src={banner14}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block">
                <h5>BADIN</h5>
                <p>Agham Kot</p>
              </div>
            </div>
            <div class="carousel-item ">
              {/* <img src="/img-2.jpg" alt="" className="dashboard-slider-image" /> */}
              <Image
                className="dashboard-slider-image"
                src={banner18}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block">
                <h5>JACOBABAD</h5>
                <p>Police Building</p>
              </div>
            </div>
            <div class="carousel-item ">
              {/* <img src="/img-2.jpg" alt="" className="dashboard-slider-image" /> */}
              <Image
                className="dashboard-slider-image"
                src={banner16}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block">
                <h5>MIRPURKHAS</h5>
                <p>Chittori</p>
              </div>
            </div>
            <div class="carousel-item ">
              {/* <img src="/img-2.jpg" alt="" className="dashboard-slider-image" /> */}
              <Image
                className="dashboard-slider-image"
                src={banner17}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block">
                <h5>LARKANA</h5>
                <p>Mohenjo Daro</p>
              </div>
            </div>
            {/* <div class="carousel-item">

              <Image
                className="dashboard-slider-image"
                src={officeimg2}
                alt="slider1img"
              />
            </div>
            <div class="carousel-item">

              <Image
                className="dashboard-slider-image"
                src={officeimg2}
                alt="slider1img"
              />
            </div> */}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>


      {/* cards */}
      {/* <section>
        <div className="mb-5 container">
          <div className="d-flex cards flex-wrap align-items-center justify-content-center mb-5">

            <div className="card col-lg-2  col-md-4 col-sm-5 col-12 m-3">
              <GiSwordsPower className="dashboard-card-icon" />
              <div className="card-text">
                <Link href="/OurServiceCharter">OUR COMMITMENT</Link>
              </div>
            </div>

            <div className="card col-lg-2 col-md-4 col-sm-5 col-12 m-3">
              <MdStickyNote2 className="dashboard-card-icon" />
              <div className="card-text">
                <Link href="/MakeAComplaint/MakeAComplaintOnline">MAKE A COMPLAINT</Link>
              </div>
            </div>
            <div className="card col-lg-2 col-md-4 col-sm-5 col-12 m-3">
              <MdOutlineHowToVote className="dashboard-card-icon" />
              <div className="card-text">
                <Link href="/MakeAComplaint/MakingAComplaint">HOW TO COMPLAINT</Link>
              </div>
            </div>
            <div className="card col-lg-2 col-md-4 col-sm-5 col-12 m-3">
              <AiFillQuestionCircle className="dashboard-card-icon" />
              <div className="card-text">
                <Link href="/MakeAComplaint/ComplaintFAQs">COMPLAINT FAQS</Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="">
        <div className="row container mx-auto justify-content-center text-center bg-trans ">
          <div className="col-lg-3  col-sm-5 col-12 d-flex flex-column align-items-center border-end">

            <Image
              className="mb-3"
              src={s}
              alt="slider1img"
              width={125}
              height={125}
            />
            <div className="card-text">
              <Link href="/OurServiceCharter">OUR COMMITMENT</Link>
            </div>
          </div>
          <div className="col-lg-3   col-sm-5 col-12 d-flex flex-column align-items-center border-end">

            <Image
              className="mb-3"
              src={p}
              alt="slider1img"
              width={90}
              height={90}
            />
            <div className="card-text">
              <Link href="/MakeAComplaint/MakeAComplaintOnline">MAKE A COMPLAINT</Link>
            </div>
          </div>
          <div className="col-lg-3   col-sm-5 col-12 d-flex flex-column align-items-center border-end">

            <Image
              className="mb-3"
              src={q}
              alt="slider1img"
              width={90}
              height={90}
            />
            <div className="card-text">
              <Link href="/MakeAComplaint/MakingAComplaint">HOW TO COMPLAINT</Link>
            </div>
          </div>
          <div className="col-lg-3   col-sm-5 col-12 d-flex flex-column align-items-center border-end  ">

            <Image
              className="mb-3"
              src={r}
              alt="slider1img"
              width={90}
              height={90}
            />
            <div className="card-text">
              <Link href="/MakeAComplaint/ComplaintFAQs">COMPLAINT FAQS</Link>
            </div>
          </div>
        </div>
      </section >



      < section className="container mt-5 our-value-system p-3" >
        <div className="row m-2 justify-content-center align-items-center ">
          <div className="col-lg-4 text-center mb-4">
            <Image
              className="img-fluid  mx-auto  mt-3 "
              src={ombuds}
              alt="ombudsmanimg"
              width={400}
              height={750}
            />
            {/* <b>  <p className="ombudsman-message-text"> Mr Ajaz Ali Khan</p></b>
            <b> <p className="ombudsman-message-text"> P.A.S</p></b>
            <b> <p className="ombudsman-message-text mb-2">Ombudsman Sindh</p></b> */}
          </div>
          <div className="col-md-8">
            <strong>  <h2 className="values-system-heading d-flex">MESSAGE FROM OMBUDSMAN SINDH</h2> </strong>
            <p className="ombudsman-message-text mt-2 " align="justify">
              I am delighted to extend a warm welcome to you on the website of the office of the ombudsman Sindh. This platform has been created with the aim of offering direct accessibility to everyone, especially to citizens who may have concerns regarding the actions of any government official in Sindh. Our commitment is to address public complaints with effectiveness, efficiency, and transparency. Our aim is to improve public administration through independent objective and impartial investigation and would treasure your valuable input to keep improving our quality of service.
            </p>
            <p className="ombudsman-message-text mt-2 "> Mr Ajaz Ali Khan</p>
            <div className="ms-5"><p className="ombudsman-message-text ms-5"> P.A.S</p></div>
            {/* <p className="ombudsman-message-text ">Ombudsman Sindh</p> */}
          </div>
        </div>
      </section >




      <section className="mx-auto p-5 container vision-missionbg  bg-dark text-white row mt-5 pt-5 pb-5 downward">
        <div className="col-md-6 p-2">
          <div className="card-body">
            <div className="row">
              <div className="col-3 d-flex align-items-center">
                <Image
                  className="img"
                  src={vision}
                  alt="Image 1"

                />
              </div>
              <div className="col-9">
                <strong>  <h2 className="card-title mb-2">OUR VISION</h2></strong>
                <p className="" align="justify">
                  To promote high standards of governance, accountability, and efficiency through administrative justice services.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-2 ">
          <div className="card-body">
            <div className="row">
              <div className="col-3 d-flex align-items-center">
                <Image
                  className="img"
                  src={mission}
                  alt="Image 1"
                  width={150}
                  height={150}
                />
              </div>
              <div className="col-9">
                <strong>  <h2 className="card-title mb-2">OUR MISSION</h2></strong>
                <p className="" align="justify">
                  To effectively and comprehensively address public grievances in a fair, prompt, transparent, equitable, and efficient manner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* vision and misssion  */}

      {/* < section className="mt-5 p-3" >
        <div className="container">
          <div className="registration-content ">
            <h2 className="mb-5 ">Our Vision And Mission</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-12 p-2">
              <div className="vision-missionbg h-100">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3 d-flex align-items-center">
                      <Image
                        className="img"
                        src={vision}
                        alt="Image 1"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="col-9">
                      <strong>  <h2 className="card-title mb-2">Our Vision</h2></strong>
                      <p className="">
                        To promote high standards of governance, accountability, and efficiency through administrative justice services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 p-2">
              <div className="vision-missionbg h-100">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3 d-flex align-items-center">
                      <Image
                        className="img"
                        src={mission}
                        alt="Image 2"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="col-9">
                      <strong> <h2 className="card-title mb-2">Our Mission </h2></strong>
                      <p className="card-text">
                        To effectively and comprehensively address public grievances in a fair, prompt, transparent, equitable, and efficient manner.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section > */}









      {/* {Order Justice mandate} */}
      <section className=" registration-wrap">
        <div className="container p-5">
          <div className="row align-items-center ">
            <div className="col-md-4">
              <div className="registration-content">
                <h2>WHAT IS OUR MANDATE?</h2>
                <div className="borders"></div>
                <p align="justify">
                  The Ombudsman Sindh has the mandate to protect the rights of the people, ensuring adherence to the rule of law, diagnosing, redressing and rectifying any injustice done to a person through maladministration and administrative injustice.
                </p>
                <Link className="learn-more" href="/About/OurCharter">
                  Learn more
                </Link>
              </div>
            </div>
            <div className="col-md-8 ">
              <div className="img-section">
                <div className="left-image">
                  {/* <img src="/supreme.png" alt="" /> */}
                  <Image
                    className="ms-4"
                    src={supreme}
                    alt="mandate-image"
                    width={500}
                    height={600}
                  />
                </div>
                {/* <div className="right-image">
                  
                  <Image
                    className=""
                    src={rightimg}
                    alt="right-img"
                    width={350}
                    height={350}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* whatsnew */}
      {/* <section className="container mt-5 downward">

        <Slider {...settings}>
          <div class="carousel-item slider-part">
            <Image
              class="img"
              src={w1}
              alt="mandate-image"
              width={350}
              height={300}
            />
            <button class="slider-btn">Whats New</button>
            <span>NUMBER PLATES</span>
            <p>Provincial Ombudsman Sindh directs clearance of backlog and issuance of 300,000 number plates due to owner requests.</p>
          </div>

          <div className="carousel-item slider-part ">
            <Image
              className="img"
              src={w2}
              alt="mandate-image"
              width={350}
              height={300}
            />
            <span>MALNUTRITION</span>
            <button className="slider-btn">Whats New</button>
            <p>Honorable Ombudsman Sindh led meetings on implementing study recommendations for malnutrition in Tharparkar.</p>
          </div>
          <div className="carousel-item slider-part">
            <Image
              className="img"
              src={w3}
              alt="mandate-image"
              width={350}
              height={300}
            />
            <span>HELP DESK</span>
            <button className="slider-btn">Whats New</button>
            <p>Establishment of help desks for differently abled persons</p>
          </div>
          <div className="carousel-item slider-part">
            <Image
              className="img"
              src={w4}
              alt="mandate-image"
              width={350}
              height={300}
            />
            <span>GIRLS EDUCATION</span>
            <button className="slider-btn">Whats New</button>
            <p>Meeting regarding implementation of recommendations of the study issues of girls education in Sindh.</p>
          </div>
          <div className="carousel-item slider-part">
            <Image
              className="img"
              src={w5}
              alt="mandate-image"
              width={350}
              height={300}
            />
            <button className="slider-btn">Whats New</button>
            <span>PRISON INSPECTION</span>
            <p>Ombudsman Sindh formed committees for prison inspections across the province.</p>
          </div>
          <div className="carousel-item slider-part">
            <Image
              className="img"
              src={w2}
              alt="mandate-image"
              width={350}
              height={300}

            />
            <span>STUNTING</span>

            <button className="slider-btn">Whats New</button>
            <p>Chief Minister Sindh and President IOI address launch of the study on Assessment of Malnutrition (Stunting) in District Tharparkar.</p>
          </div>
        </Slider>
      </section> */}

      <section className="ms-5 mt-5 mb-5 p-5">
        <strong>
          <h2 className="h2">What’s New</h2>
        </strong>
        <div className="">
          <Slider {...settings}>
            {cards.map((item, index) => (
              <div key={index}>
                {/* Your Article component */}
                <Article data={item} />
              </div>
            ))}
          </Slider>
        </div>
      </section>






      {/* Thailand Trip  */}
      {/* <section className="container mb-5 d-flex justify-content-center align-items-center events-wrapper">
        <div className="row us-card">
          <div className="col-md-4 p-2">
            <article className="event-container">
              <div class="event-thumbnail4"></div>

              <div class="event-info">
                <h2 class="event-title">Thailand Trip</h2>
                <h3 class="event-spots">Group Photo</h3>

                <p class="event-description">
                  Cheque of Rs. 130,000/- presented by DMC South Karachi
                  towards 2nd installment of out standing dues on account of
                  medical reimbursement handed over to lady.
                </p>

              </div>
            </article>
          </div>
          <div className="col-md-4 p-2">
            <article className="event-container">
              <div class="event-thumbnail5"></div>
              <div class="event-info">
                <h2 class="event-title">Thailand Trip</h2>

                <h3 class="event-spots">Group Photo</h3>
                <p class="event-description">
                  Prof. (Rtd) Liaquat Ali Khawaja & two Other
                  professors received their service dues of Rs.
                  25,000,000/-(Rupees Twenty Five Million)


                </p>

              </div>
            </article>
          </div>
          <div className="col-md-4 p-2">
            <article className="event-container">
              <div class="event-thumbnail6"></div>
              <div class="event-info">
                <h2 class="event-title">Thailand Trip</h2>
                <h3 class="event-spots">Group Photo</h3>
                <p class="event-description">
                  Mr. Nazir Ahmed Qidwai, Regional Director,
                  Karachi Central handed over a cheque of
                  service dues to a widow complainant.
                </p>

              </div>
            </article>
          </div>
        </div>
      </section> */}



      {/* Counter */}
      <section className="container">
        <div className="row justify-content-center align-items-center text-center ">
          <div className="col-6 d-flex justify-content-center">
            {/* <Image
              id="image2"
              className="down"
              src={counterNote2}
              alt="Counter-img"
              width={200}
              height={200}
              onClick={() => showData(2)}
            /> */}
            <div className="vision-missionbg our-value-system downing bg-dark text-white" onClick={() => showData(2)}>
              <h1 className="counter-heading">COMPLAINTS RECEIVED</h1>
            </div>

          </div>
          <div className="col-6 d-flex justify-content-center">
            {/* <Image
              id="image1"
              className="down"
              src={counterNote}
              alt="Counter-img"
              width={200}
              height={200}
              onClick={() => showData(1)}
            /> */}
            <div className="vision-missionbg our-value-system downing bg-dark text-white" onClick={() => showData(1)}>
              <h1 className="counter-heading">DISPOSAL OF COMPLAINTS</h1>
            </div>

          </div>
          {/* <div className="col-4 d-flex justify-content-center">
            <Image
              id="image3"
              className="down"
              src={counterNote3}
              alt="Counter-img"
              width={270}
              height={270}
              onClick={() => showData(3)}
            />
          </div> */}
        </div>

        <div className="col-md-12 container  our-value-system p-5">
          <div id="data1" className="col-md-12 container p-3" style={{ display: activeData === 1 ? 'block' : 'none' }}>
            <div className="row justify-content-center">
              {/* <div className="mb-5 counter-text">
                <h1 className="text-center big-text mb-4 ">DISPOSAL OF COMPLAINTS</h1></div> */}
              <div className="col-md-4 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <BsFileEarmarkCheck className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={455} />
                  </div>
                  <div className="values-system-para">Disposed of after preliminary scrutiny
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <FaGlobeAmericas className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={178} />
                  </div>
                  <div className="values-system-para">Referred to department for necessary action (u/s 33)
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <GiNotebook className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={474} />
                  </div>
                  <div className="values-system-para">Decided after detailed investigation</div>
                </div>
              </div>
              {/* <div className="col-md-3 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <FaHandshake className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={55} />
                  </div>
                  <div>Resolved By Mediation</div>
                </div>
              </div> */}
            </div>
          </div>

          <div id="data2" className="col-md-12 container p-3" style={{ display: activeData === 2 ? 'block' : 'none' }}>
            <div className="row justify-content-center">
              {/* <div className="mb-5 counter-text"> <h1 className="text-center big-text mb-5 ">COMPLAINTS RECEIVED</h1></div> */}
              <div className="col-md-4 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <BsFillPhoneVibrateFill className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={1654} />
                  </div>
                  <div className="values-system-para">By Electronic Means / Online</div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <BsFillSignpostFill className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={110} />
                  </div>
                  <div className="values-system-para"> By Post</div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <BsFillPeopleFill className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={84} />
                  </div>
                  <div className="values-system-para">In Person</div>
                </div>
              </div>
              {/* <div className="col-md-3 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <BsFillTelephoneFill className="counter-icon mt-3" />
                  <div className="big-text ">
                    <Counter number={30} />
                  </div>
                  <div>By Phone</div>
                </div>
              </div> */}
            </div>
          </div>

          <div id="data3" className="col-md-12 container p-3" style={{ display: activeData === 3 ? 'block' : 'none' }}>
            <div className="row justify-content-center">
              <h1 className="text-center big-text mb-4 mt-4">Performance Achieved</h1>
              <div className="col-md-3 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <BsFillCalendarCheckFill className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={150} />
                  </div>
                  <div>100% Complaints Closed Within 15 days</div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <BsFillCalendarCheckFill className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={350} />
                  </div>
                  <div> Complaints Concluded Within 1 month</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <BsFillCalendarCheckFill className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={1200} />
                  </div>
                  <div>Complaints Concluded Within 3 month</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <BsFillCalendarCheckFill className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={2275} />
                  </div>
                  <div>Complaints Concluded Within 6 month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* SLiderrrr */}
      {/* <section className="container slider-container mb-5">
        <div className="slider-wrapper">
          <Slider {...settings}>
            <div className="slider-data">
              <div className="slider-icon-part">
                <FaPlaneArrival className="img-icon text-white text-light" />
                <div className="slider-title-content">
                  <h2>Our Values System</h2>

                </div>
              </div>
              <div className="slider-para-content">
                <p>
                  “The values system is a shared vision of the institution, developed by our officers. It is hoped that it will shape our strategic direction, serve as the overarching standards for our work and reflect our principles, work ethics and organizational culture.”
                </p>
              </div>
            </div>
            <div className="slider-data">
              <div className="slider-icon-part">
                <GiSwordsPower className="img-icon" />
                <div className="slider-title-content">
                  <h2>Our Commitment</h2>

                </div>
              </div>
              <div className="slider-para-content">
                <p>
                  “We are committed to redress of public grievances in an efficient, effective and transparent manner. We constantly strive to improve our level of responsiveness to the public and have therefore instituted standards for services and performance”
                </p>
              </div>
            </div>
            <div className="slider-data">
              <div className="slider-icon-part">
                <MdStickyNote2 className="img-icon" />
                <div className="slider-title-content">
                  <h2>Making a Complaint</h2>

                </div>
              </div>
              <div className="slider-para-content">
                <p>
                  “Any person aggrieved by the following actions of any functionary of the Department / Commission / Corporation of the Government of Sindh or Institution established or controlled by the Government of Sindh”
                </p>
              </div>
            </div>
            <div className="slider-data">
              <div className="slider-icon-part">
                <BsPeopleFill className="img-icon" />
                <div className="slider-title-content">
                  <h2>Who We Are</h2>

                </div>
              </div>
              <div className="slider-para-content">
                <p>
                  “The Provincial Ombudsman Sindh(Mohtasib) is an independent institution, established by statute, to provide speedy relief to any citizen or legal resident of Pakistan who may have suffered from any maladministration at the hands of any agency of the Government of Sindh.”
                </p>
              </div>
            </div>

          </Slider>
        </div>
      </section> */}


      {/* linkimg */}

      {/* <section className="mb-5">
        <Image
          id="image2"
          className=""
          src={link}
          alt="Counter-img"
          width={1500}
          height={1500}
          onClick={() => showData(2)}
        />
      </section> */}


      {/* Accordion */}
      <section className="mt-5 mb-5 container">
        <div class="accordion accordion-flush container mt-5" id="accordionFlushExample">
          <div class="accordion-item item-1">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <MdWork className=" me-3 values-system-heading" /> What we Do
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body bg-dark values-system-para text-white">We resolve complaints and provide relief to the public by carrying out independent investigations into complaints about maladministration in any Government of Sindh agency. We work to put things right and share lessons learned and help improve public services as a result. Our independent complaints handling service is free and open to everyone.</div>
            </div>
          </div>
          <div class="accordion-item item-2">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <MdWorkOff className=" me-3" />  What We Dont Do
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body bg-dark text-white">
                <p className="values-system-para mt-2 pe-3">
                  We cannot help you if your complaint is about:
                </p>
                <li className="values-system-para mt-2 pe-3">
                  Matters that are sub-judice (i.e. already under consideration of any court of law)
                </li>
                <li className="values-system-para mt-2 pe-3">
                  Service matters (relating to the public agency in which the complainant is currently employed; however, we can and do take up complaints against delay or mis-interpretation in payment of retirement benefits or discrimination meted out to the employees)
                </li>
                <li className="values-system-para mt-2 pe-3">
                  External affairs
                </li>
                <li className="values-system-para mt-2 pe-3">
                  Defence matters
                </li>
              </div>
            </div>
          </div>
          <div class="accordion-item item-3">
            <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <BsFillPatchQuestionFill className=" me-3" /> How Can We Help You
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              {/* <div class="accordion-body">
                <div className="mt-4">
                  <p className="values-system-para"> <b> What can I complain to the Provincial Ombudsman (Mohtasib) Sindh about? </b> </p>
                  <p className="values-system-para"> We can receive and handle complaints against any case of maladministration in any Government of Sindh agency. If you are not sure if your complaint is one we can help with, just ask us. </p>
                </div>
                <div className="mt-4">
                  <p className="values-system-para "> <b> What are the types of complaints the Mohtasib Sindh cant help with? </b> </p>
                  <p className="values-system-para">We cannot help you if your complaint is about:</p>
                  <div className="container">
                    <li className="values-system-para">matters that are sub-judice</li>
                    <li className="values-system-para">external Affairs</li>
                    <li className="values-system-para">defence matters</li>
                    <li className="values-system-para">service matters</li>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="values-system-para"> <b>Are there any steps I should take before making a complaint to the Mohtasib Sindh? </b> </p>
                  <p className="values-system-para"> Although it is not mandatory to do so, we advise that you complain first to the agency you believe is responsible. This may lead to an early resolution at the level of the agency itself.</p>
                </div>
                <div className="mt-4">
                  <p className="values-system-para"> <b>Is there a time limit for making a complaint?  </b> </p>
                  <p className="values-system-para">Yes. Complaints must ordinarily be filed within 3 months of the cause of your grievance. Exceptions can be made, but are subject to your providing reasonable justification for the delay in making the complaint.</p>
                </div>
                <div className="mt-4">
                  <p className="values-system-para"> <b>Will the Provincial Ombudsman (Mohtasib) Sindh investigate anonymous complaints? </b> </p>
                  <p className="values-system-para">No. The Provincial Ombudsman (Mohtasib) Sindh does not undertake an investigation into anonymous complaints.</p>
                </div>
                <div className="mt-4">
                  <p className="values-system-para"> <b>Can someone else make a complaint on my behalf? </b> </p>
                  <p className="values-system-para">No. The complaint must be made by the aggrieved person himself/herself. However, after the complaint has been made, the complainant can authorize another person well versed with the complete details of the case to represent him/her in hearings.
                  </p>
                </div>
                <div className="mt-4">
                  <p className="values-system-para"> <b>How much does it cost to make a complaint? </b> </p>
                  <p className="values-system-para">The Provincial Ombudsman (Mohtasib) Sindhs services are free.</p>
                </div>
                <div className="mt-4">
                  <p className="values-system-para"> <b>How can I make a complaint? </b> </p>
                  <p className="values-system-para">Complaints can be made to our head office or regional offices:</p>
                  <div className="container">
                    <li className="values-system-para">By email (mohtasibhd@yahoo.com)</li>
                    <li className="values-system-para">Online on our website</li>
                    <li className="values-system-para">Via postal mail</li>
                    <li className="values-system-para">In person</li>




                  </div>
                  <p className="values-system-para">Complaints can be made to our head office or regional offices:</p>
                </div>
                <div className="mt-4">
                  <p className="values-system-para"> <b>What should I include in my complaint? </b> </p>
                  <p className="values-system-para">Keep it simple and stick to the facts. Be as specific as possible about dates, names and other important details. There should be enough information for the Mohtasib Sindh to understand the circumstances of your complaint and decide how to deal with it. When writing your complaint, think about:</p>
                  <div className="container">
                    <li className="values-system-para">What happened?</li>
                    <li className="values-system-para">Where did the events take place?</li>
                    <li className="values-system-para">When (time and date)?</li>
                    <li className="values-system-para">Who was involved? Names, designations of officers or staff</li>
                    <li className="values-system-para">Do you have any documents which may be relevant? If so, you may want to supply copies with your complaint. </li>
                    <li className="values-system-para">Have you taken any action already in relation to your complaint? What happened?</li>
                    <li className="values-system-para">What action or outcome would you like to see as a result of your complaint?</li>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="values-system-para text-danger"> <b>Tips for making a complaint</b> </p>
                </div>
                <div className="mt-4">
                  <p className="values-system-para"> <b>What happens after I make a complaint? </b> </p>
                  <p className="values-system-para">All complaints made to the Provincial Ombudsman (Mohtasib) Sindh are first screened to see if they fall within our jurisdiction. If not, the complainant will be informed of the reasons why the Mohtasib Sindh will not handle his complaint. Occasionally in such cases, a letter is written to the Agency against which complaint has been made to facilitate the complainant.</p>
                  <p className="values-system-para mt-4">If the complaint falls within the jurisdiction of Provincial Ombudsman (Mohtasib) Sindh, we will process it as per our defined procedures. All complaints will be handled in the strictest confidence and the complainants will be informed of the results of their complaints.</p>
                </div>
                <div className="mt-4">
                  <p className="values-system-para"> <b>What happens next? </b> </p>
                  <div className="container">
                    <li className="values-system-para">If the Provincial Ombudsman (Mohtasib) Sindh admits your complaint, an investigation is initiated. You and the agency complained against will both be given equal opportunities to present your side of the story.</li>
                    <li className="values-system-para">After this investigation is completed, the Provincial Ombudsman (Mohtasib) Sindh gives his decision on the complaint. If he finds the agency has treated you fairly and in accordance with law, he will deny your request.</li>
                    <li className="values-system-para">In case he finds the agency guilty of maladministration, he will send his recommendations to the agency, specifying action to be taken within a defined time period.</li>
                    <li className="values-system-para">The Provincial Ombudsman (Mohtasib) Sindh then follows up with the agency on implementation of the recommendations. If the Mohtasib Sindh concludes that the agency is acting in defiance of the recommendations and willfully not implementing them he will file a formal reference to the Governor Sindh, who may at his discretion, give further directions to the agency directly.</li>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="values-system-para"> <b>How long does it take to resolve a complaint? </b> </p>
                  <p className="values-system-para">This varies from complaint to complaint but we aim to resolve complaints within 3 to 6 months.</p>

                </div>
                <div className="mt-4">
                  <p className="values-system-para"> <b>What can I expect from the Provincial Ombudsman (Mohtasib) Sindh? </b> </p>
                  <p className="values-system-para">We aim to redress grievances as fairly and quickly as possible and to deal with the complainant respectfully.
                  </p>
                </div>
                <div className="mt-4">
                  <p className="values-system-para"> <b>Can I appeal against the recommendation of the Provincial Ombudsman (Mohtasib) Sindh? </b> </p>
                  <p className="values-system-para">Once the Provincial Ombudsman (Mohtasib) Sindh has given a decision on your complaint, you can make a representation to the Governor Sindh within 30 days of receipt of the decision.
                  </p>
                </div>
                <div className="mt-4">
                  <p className="values-system-para"> <b>What if I am dissatisfied with the service provided by the Provincial Ombudsman (Mohtasib) Sindh? </b> </p>
                  <p className="values-system-para">You can write, email to the Secretary, Provincial Ombudsman (Mohtasib) Sindh Secretariat, if you think we have:
                  </p>
                  <div className="container">
                    <li className="values-system-para">treated you unfairly or rudely</li>
                    <li className="values-system-para">failed to explain things properly or caused unreasonable delays.</li>
                  </div>
                </div>
              </div> */}
              <div className="accordion-body bg-dark text-white">

                <p className="values-system-para mt-2 pe-3">
                  We are an independent statuary body that promotes good governance
                  and protect human rights;
                </p>
                <p className="values-system-para mt-2 pe-3">
                  We aim to redress public grievances as fairly and as quickly as we can, after examining all facts. If we think the Agency you are complaining about has treated you fairly, we will tell you.
                </p>
                <p className="values-system-para mt-2 pe-3">
                  If we determine that the Agency has acted wrongly, we will recommend the Agency to put things right for you. This can include recommending that the Agency provide you relief sought and to treat you fairly and in accordance with law.
                </p>
                <p className="values-system-para mt-2 pe-3">
                  To deliver free of cost and speedy justice by performing the role of bridge between the public and Government Departments/agencies.
                </p>
                <p className="values-system-para mt-2 pe-3">
                  Ombudsman Sindh accords high priority to hardship cases relating to
                  marginalized section of society specially widows, children,
                  pensioners, differently abled persons and those below the poverty
                  line;
                </p>
                <p className="values-system-para mt-2 pe-3">
                  Informal resolution of disputes;
                </p>
                <p className="values-system-para mt-2 pe-3">
                  Own Motion (Suo-Moto Power) is the unique feature of this institute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mb-5 d-flex justify-content-center align-items-center events-wrapper">
        <div className="row us-card">
          <div className="col-md-4 p-2">
            <article className="event-container">
              <div class="event-thumbnail4"></div>

              <div class="event-info">
                <h2 class="event-title">Success Story</h2>
                <h3 class="event-spots">lady complainant</h3>

                <p class="event-description">
                  Cheque of Rs. 130,000/- presented by DMC South Karachi
                  towards 2nd installment of out standing dues on account of
                  medical reimbursement handed over to lady.
                </p>

              </div>
            </article>
          </div>
          <div className="col-md-4 p-2">
            <article className="event-container">
              <div class="event-thumbnail5"></div>
              <div class="event-info">
                <h2 class="event-title">Success Story</h2>

                <h3 class="event-spots">Service Dues</h3>
                <p class="event-description">
                  Prof. (Rtd) Liaquat Ali Khawaja & two Other
                  professors received their service dues of Rs.
                  25,000,000/-(Rupees Twenty Five Million)


                </p>

              </div>
            </article>
          </div>
          <div className="col-md-4 p-2">
            <article className="event-container">
              <div class="event-thumbnail6"></div>
              <div class="event-info">
                <h2 class="event-title">Success Story</h2>
                <h3 class="event-spots">Widow Complainant</h3>
                <p class="event-description">
                  Mr. Nazir Ahmed Qidwai, Regional Director,
                  Karachi Central handed over a cheque of
                  service dues to a widow complainant.
                </p>

              </div>
            </article>
          </div>
        </div>


      </section>


      {/* bottomcards */}
      <section className="wrapper-justice mb-5">
        <div className="container-fluid">
          <div className="target-items">
            <Link href="/About/WhoWeAre">
              <div className="card-items">

                <Image
                  className="card-image"
                  src={bottom3}
                  alt="who we are"
                  width={200}
                  height={200}
                />
                <div className="card-body-content">
                  <div className="borders"></div>
                  <h3 className="title">Who We Are</h3>
                  <p className="text">
                    The Provincial Ombudsman  Sindh(Mohtasib)  is an independent institution, established by statute, to provide speedy relief to any citizen or legal resident of Pakistan.
                  </p>
                  <div className="arrow-border">
                    <BsArrowRight className="arrow-left" />
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/About/OurCharter">
              <div className="card-items">

                <Image
                  className="card-image"
                  src={bottom2}
                  alt="our charter"
                  width={500}
                  height={500}
                />
                <div className="card-body-content">
                  <div className="borders"></div>
                  <h3 className="title">Our charter</h3>
                  <p className="text">
                    We are committed to redress of public grievances in an efficient, effective and transparent manner.
                  </p>
                  <div className="arrow-border">
                    <BsArrowRight className="arrow-left" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/About/TheSecratariat">
              <div className="card-items">

                <Image
                  className="card-image"
                  src={bottom1}
                  alt="right-img"
                  width={200}
                  height={200}
                />
                <div className="card-body-content">
                  <div className="borders"></div>
                  <h3 className="title">The Secretariat</h3>
                  <p className="text">
                    The Provincial Ombudsman (Mohtasib) Sindhs Secretariat is located in Karachi and is  headed by ombudsman sindh through secretary
                  </p>
                  <div className="arrow-border">
                    <BsArrowRight className="arrow-left" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>










      {/* <section className="container">
        <div className="row justify-content-center align-items-center text-center mt-5 ">
          <div className="col-md-12 mb-2 mt-5">
            <div className="row justify-content-center align-items-center mt-5">

              <div className="row col-md-5 col-8 d-flex justify-content-center our-value-system m-4">
                <h2 className="values-system-heading d-flex text-center justify-content-center">What We Dont Do <BsFillArrowRightCircleFill className="text-success ms-3" /></h2>
                <p className="values-system-para mt-2 pe-3">
                  We cannot help you if your complaint is about:
                </p>
                <li className="values-system-para mt-2 pe-3">
                  Matters that are sub-judice (i.e. already under consideration of any court of law)
                </li>
                <li className="values-system-para mt-2 pe-3">
                  Service matters (relating to the public agency in which the complainant is currently employed; however, we can and do take up complaints against delay or mis-interpretation in payment of retirement benefits or discrimination meted out to the employees)
                </li>
                <li className="values-system-para mt-2 pe-3">
                  External affairs
                </li>
                <li className="values-system-para mt-2 pe-3">
                  Defence matters
                </li>
              </div>
              <div className="row col-md-12 col-8 d-flex justify-content-center our-value-system m-4">
                <h2 className="values-system-heading d-flex">Complaint FAQs <BsFillArrowRightCircleFill className="text-success ms-3" /></h2>
                <div className="mt-4">
                  <p className="values-system-para"> <b> What can I complain to the Provincial Ombudsman (Mohtasib) Sindh about? </b> </p>
                  <p className="values-system-para"> We can receive and handle complaints against any case of maladministration in any Government of Sindh agency. If you are not sure if your complaint is one we can help with, just ask us. </p>
                </div>
                <div className="mt-4">
                  <p className="values-system-para "> <b> What can I complain to the Provincial Ombudsman (Mohtasib) Sindh about? </b> </p>
                  <p className="values-system-para">We cannot help you if your complaint is about:</p>
                  <div className="container">
                    <li className="values-system-para">matters that are sub-judice</li>
                    <li className="values-system-para">external Affairs</li>
                    <li className="values-system-para">defence matters</li>
                    <li className="values-system-para">service matters</li>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="values-system-para"> <b>Are there any steps I should take before making a complaint to the Mohtasib Sindh? </b> </p>
                  <p className="values-system-para"> Although it is not mandatory to do so, we advise that you complain first to the agency you believe is responsible. This may lead to an early resolution at the level of the agency itself.</p>
                </div>
                <div className="mt-4">
                  <p className="values-system-para"> <b>Is there a time limit for making a complaint?  </b> </p>
                  <p className="values-system-para">Yes. Complaints must ordinarily be filed within 3 months of the cause of your grievance. Exceptions can be made, but are subject to your providing reasonable justification for the delay in making the complaint.</p>
                </div>
                <div className="mt-4">
                  <p className="values-system-para"> <b>Will the Provincial Ombudsman (Mohtasib) Sindh investigate anonymous complaints? </b> </p>
                  <p className="values-system-para">No. The Provincial Ombudsman (Mohtasib) Sindh does not undertake an investigation into anonymous complaints.</p>
                </div>
                <div className="mt-4">
                  <p className="values-system-para"> <b>Can someone else make a complaint on my behalf? </b> </p>
                  <p className="values-system-para">No. The complaint must be made by the aggrieved person himself/herself. However, after the complaint has been made, the complainant can authorize another person well versed with the complete details of the case to represent him/her in hearings.
                  </p>
                </div>
                <div className="mt-4">
                  <p className="values-system-para"> <b>How much does it cost to make a complaint? </b> </p>
                  <p className="values-system-para">The Provincial Ombudsman (Mohtasib) Sindhs services are free.</p>
                </div>
                <div className="mt-4">
                  <p className="values-system-para"> <b>How can I make a complaint? </b> </p>
                  <p className="values-system-para">Complaints can be made to our head office or regional offices:</p>
                  <div className="container">
                    <li className="values-system-para">In person</li>
                    <li className="values-system-para">By Post</li>
                    <li className="values-system-para">By email (mohtasibhd@yahoo.com)</li>
                    <li className="values-system-para">Online on our website</li>

                  </div>
                  <p className="values-system-para">Complaints can be made to our head office or regional offices:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}













      {/* upkey */}
      <section>
        <a href="#dashboard-section">
          <img src="/back-to-top.png" alt="" className="upKey" />
        </a>
      </section>


    </BaseLayout >
  );
};

export default Home;
