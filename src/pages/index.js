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

import { BsArrowRight, BsFillPatchQuestionFill, BsPeopleFill, BsFileEarmarkCheck, BsFillPhoneVibrateFill, BsFillSignpostFill, BsFillPeopleFill, BsFillTelephoneFill, BsFillCalendarCheckFill, BsFillArrowRightCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";
import { FaPlaneArrival, FaGlobeAmericas, FaHandshake } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";

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
import banner16 from "../../public/banner-16.jpg"
import banner17 from "../../public/banner-17.jpg"
import banner18 from "../../public/banner-18.jpg"
import ombuds from "../../public/ombuds.png"
import supreme from "../../public/supreme.png"
import bottom1 from "../../public/bottom-pic-1.jpg"
import bottom2 from "../../public/bottom-pic-2.png"
import bottom3 from "../../public/bottom-pic-3.png"
import officeimg2 from "../../public/office.jpg"





import vision from "../../public/Vision_01.png"
import mission from "../../public/mission-01.png"
import p from "../../public/p.png"
import q from "../../public/q.png"
import r from "../../public/r.png"
import s from "../../public/s.png"
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
        <h5 >{data.subtitle}</h5>

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

      {/* dashboard banner */}
      <section className="dashboard-section" id="dashboard-section">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item  active" data-bs-interval="3000">

              <Image
                className="dashboard-slider-image"
                src={officeimg2}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block">
                <h5>HEADQUARTER</h5>
                <p>Provincial Ombudsman</p>
              </div>

            </div>
            <div class="carousel-item " data-bs-interval="3000">

              <Image
                className="dashboard-slider-image"
                src={banner1}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block" >
                <h5>KARACHI SOUTH</h5>
                <p>Quaid-e-Azam House</p>
              </div>
            </div>
            <div class="carousel-item  " data-bs-interval="3000">

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
            <div class="carousel-item " data-bs-interval="3000">

              <Image
                className="dashboard-slider-image"
                src={banner3}
                alt="slider1img"

              />
              <div class="carousel-caption  d-none d-md-block" >
                <h5>KARACHI WEST</h5>
                <p>Native Jetty Bridge</p>
              </div>
            </div>
            <div class="carousel-item " data-bs-interval="3000">

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
            <div class="carousel-item " data-bs-interval="3000">

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
            <div class="carousel-item " data-bs-interval="3000">

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
            <div class="carousel-item " data-bs-interval="3000">

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
            <div class="carousel-item " data-bs-interval="3000">

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
            <div class="carousel-item " data-bs-interval="3000">

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
            <div class="carousel-item " data-bs-interval="3000">

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
            <div class="carousel-item " data-bs-interval="3000">

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
            <div class="carousel-item " data-bs-interval="3000">

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
            <div class="carousel-item " data-bs-interval="3000">

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
            <div class="carousel-item " data-bs-interval="3000">

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
            <div class="carousel-item " data-bs-interval="3000">

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
            <div class="carousel-item " data-bs-interval="3000">

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
            <div class="carousel-item " data-bs-interval="3000">

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


      {/* Cards */}

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
              <Link href="/About/OurCommitment">OUR COMMITMENT</Link>
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

      {/* ombudsman message */}


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

          </div>
          <div className="col-md-8">
            <strong>  <h2 className="values-system-heading d-flex">MESSAGE FROM OMBUDSMAN SINDH</h2> </strong>
            <p className="ombudsman-message-text mt-2 " align="justify">
              I am delighted to extend a warm welcome to you on the website of the office of the ombudsman Sindh. This platform has been created with the aim of offering direct accessibility to everyone, especially to citizens who may have concerns regarding the actions of any government official in Sindh. Our commitment is to address public complaints with effectiveness, efficiency, and transparency. Our aim is to improve public administration through independent objective and impartial investigation and would treasure your valuable input to keep improving our quality of service.
            </p>
            <p className="ombudsman-message-text mt-2 "> Mr Ajaz Ali Khan</p>
            <div className="ms-5"><p className="ombudsman-message-text ms-5"> P.A.S</p></div>

          </div>
        </div>
      </section >


      {/* vision and mission */}

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
                <p className="">
                  To promote high standards of governance, and efficiency through administrative justice services.
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
                <p className="">
                  To effectively and comprehensively address public grievances in a fair, prompt, transparent, equitable, and efficient manner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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


      {/* Counter */}
      <section className="container">
        <div className="row justify-content-center align-items-center text-center ">
          <div className="col-6 d-flex justify-content-center">

            <div className="vision-missionbg our-value-system downing bg-dark text-white" onClick={() => showData(2)}>
              <h1 className="counter-heading">COMPLAINTS RECEIVED</h1>
            </div>

          </div>
          <div className="col-6 d-flex justify-content-center">

            <div className="vision-missionbg our-value-system downing bg-dark text-white" onClick={() => showData(1)}>
              <h1 className="counter-heading">DISPOSAL OF COMPLAINTS</h1>
            </div>

          </div>

        </div>

        <div className="col-md-12 container  our-value-system p-5">
          <div id="data1" className="col-md-12 container p-3" style={{ display: activeData === 1 ? 'block' : 'none' }}>
            <div className="row justify-content-center">

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

            </div>
          </div>

          <div id="data2" className="col-md-12 container p-3" style={{ display: activeData === 2 ? 'block' : 'none' }}>
            <div className="row justify-content-center">
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
                  Service matters
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
                  To deliver free of cost and administrative justice by performing the role of bridge between the public and Government Departments/agencies.
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
                <h3 class="event-spots">Water And Sewerage</h3>
                <p class="event-description">
                  Mr. Hussain Muhammad filed a complaint against Karachi Water & Sewerage Board regarding delay in payment of
                  gratuity / commutation. The complaint was admitted and
                  notice was issued.
                </p>

              </div>
            </article>
          </div>
          <div className="col-md-4 p-2">
            <article className="event-container">
              <div class="event-thumbnail5"></div>
              <div class="event-info">
                <h2 class="event-title">Success Story</h2>
                <h3 class="event-spots">Controller Of Examination</h3>
                <p class="event-description">
                  Miss. Samina Anwar filed a complaint against Controller of
                  Examination, University of Sindh for issuance of Pass Certificate and Marks sheet of
                  B.Sc as she had appeared in the examination.
                </p>

              </div>
            </article>
          </div>
          <div className="col-md-4 p-2">
            <article className="event-container">
              <div class="event-thumbnail6"></div>
              <div class="event-info">
                <h2 class="event-title">Success Story</h2>
                <h3 class="event-spots">Plot Allotment</h3>
                <p class="event-description">
                  Mr. Khadim Hussain Mirani filed a complaint  against the Market Committee, Karachi. The issue is shop plot allotment and possession despite full payment in 2008.
                </p>

              </div>
            </article>
          </div>
          <Link className="learn-more mt-3 ms-3 values-system-para  text-success" href="/WhatsNew">
            load more
          </Link>
        </div>
      </section>


      {/* bottomcards */}
      <section className="wrapper-justice mb-5">
        <div className="container-fluid">
          <div className="target-items">
            <Link href="/About/OurCommitment">
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
                  <h3 className="title">Our Commitment</h3>
                  <p className="text">
                    We are committed to redress of public grievances in an efficient, effective and transparent manner.
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
