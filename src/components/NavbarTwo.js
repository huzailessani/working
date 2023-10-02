import React from "react";
import Link from "next/link";
import Image from "next/image"

const NavbarTwo = () => {
    return (
        <>

            <nav class="navbar navbar-two navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <Link href="/">
                            <Image
                                width={150}
                                height={150}
                                className="sidebar__logo"
                                src="/logo.png"
                                alt="logo"
                            />
                        </Link>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item ">
                                <Link class="nav-link  text-white me-3" href="/" id="" role="button" >
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle text-white me-3" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About us
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {/* <li><Link class="dropdown-item" href="/About/WhoWeAre">Who We Are</Link></li> */}
                                    <li><Link class="dropdown-item" href="/About/OurCharter">Our Charter</Link></li>
                                    <li><Link class="dropdown-item" href="/About/TheSecratariat">The Secretariat</Link></li>
                                    <li><Link class="dropdown-item" href="/About/RegionalOffices">Regional offices</Link></li>
                                    <li><Link class="dropdown-item" href="/About/Organization">Organization</Link></li>
                                    {/* <li><Link class="dropdown-item" href="/About/Profiles">Profiles</Link></li> */}
                                </ul>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link  text-white me-3" href="/OurValueSystem" id="" role="button" >
                                    Our Value System
                                </Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle text-white me-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Services
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" href=" /OurServices/WhatWeDo">What We Do</Link></li>
                                    <li><Link class="dropdown-item" href="/OurServices/WhatWeDontDo">What We Dont Do</Link></li>
                                    <li><Link class="dropdown-item" href="/OurServices/HowCanWeHelpYou">How Can We Help You</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link  text-white me-3" href="/OurServiceCharter" id="" role="button" >
                                    Our Commitment
                                </Link>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle text-white me-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Children Complaints Office
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" href="/ChildrenComplaint/PressRelease">Press Release</Link></li>
                                    <li><Link class="dropdown-item" href="/ChildrenComplaint/Events">Events</Link></li>
                                    <li><Link class="dropdown-item" href="/ChildrenComplaint/IntroductionCCO">Introduction CCO</Link></li>
                                    <li><Link class="dropdown-item" href="/ChildrenComplaint/Brochures">Brochures</Link></li>

                                </ul>
                            </li> */}
                            <li class="nav-item ">
                                <Link class="nav-link  text-white me-3" href="/ChildrenComplaints" id="" role="button" >
                                    Children Complaints Office
                                </Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle text-white me-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Make A Complaint
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" href="/MakeAComplaint/MakingAComplaint">How To Lodge A Complaint</Link></li>
                                    <li><Link class="dropdown-item" href="//MakeAComplaint/ComplaintFAQs">Complaint FAQs</Link></li>
                                    <li><Link class="dropdown-item" href="/MakeAComplaint/DownloadForm">Download Form</Link></li>
                                    <li><Link class="dropdown-item" href="/MakeAComplaint/MakeAComplaintOnline">Online Complaint Registration</Link></li>
                                    <li><Link class="dropdown-item" href="/MakeAComplaint/ComplainAboutUs">Complain About Us</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link  text-white me-3" href="/WhatsNew" id="" role="button" >
                                    Whats New
                                </Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle text-white me-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    News And Resources
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" href="/Media/NewsLetter">Newsletter</Link></li>
                                    <li><Link class="dropdown-item" href=" /Media/knowledgeProduct">Annual Reports</Link></li>
                                    <li><Link class="dropdown-item" href="/Media/Studies">Studies</Link></li>
                                    <li><Link class="dropdown-item" href="/Media/Seminar">Seminar</Link></li>
                                    <li><Link class="dropdown-item" href="/Media/PressClippings">Press Coverage</Link></li>
                                    <li><Link class="dropdown-item" href="/Media/Brochures">Brochures</Link></li>
                                </ul>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle text-white me-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Special Initiatives
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                                    <li><Link class="dropdown-item" href="/SpecialInitiatives/SPGRM">SPGRM</Link></li>
                                    <li><Link class="dropdown-item" href="/SpecialInitiatives/REACH">REACH</Link></li>
                                    <li><Link class="dropdown-item" href="/SpecialInitiatives/AOARETA">AOA RETA</Link></li>

                                </ul>
                            </li> */}
                            <li class="nav-item ">
                                <Link class="nav-link  text-white me-3" href="/InternationalOmbudsman" id="" role="button" >
                                    International Ombudsman Institute
                                </Link>
                            </li>
                            {/* <li class="nav-item ">
                                <Link class="nav-link  text-white me-3" href="/Vacancies" id="" role="button" >
                                    Vacancies
                                </Link>
                            </li> */}
                            <li class="nav-item ">
                                <Link class="nav-link  text-white me-3" href="/Tenders" id="" role="button" >
                                    Procurement
                                </Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link  text-white me-3" href="/Links" id="" role="button" >
                                    Links
                                </Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link  text-white me-3" href="/PhotoGallery" id="" role="button" >
                                    Photo Gallery
                                </Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link  text-white me-3" href="/contact" id="" role="button" >
                                    Contact Us
                                </Link>
                            </li>
                            {/* <li class="nav-item ">
                                <Link class="nav-link  text-white me-3" href="/SiteMap" id="" role="button" >
                                    Site Map
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavbarTwo;