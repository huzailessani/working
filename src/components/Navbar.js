import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <>

            <nav class="navbar navbar-one navbar-expand-lg navbar-transparent bg-transparent">
                <div class="container-fluid">
                    <Link href="/">
                        <Image
                            width={200}
                            height={200}
                            className="sidebar__logo"
                            src="/logo.png"
                            alt="logo"
                        />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle text-white me-3" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About us
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                                    <li><Link class="dropdown-item" href="/About/OurCharter">Our Charter / Sindh Ombudsman Act</Link></li>
                                    <li><Link class="dropdown-item" href="/About/OurCommitment">Our Commitment</Link></li>
                                    <li><Link class="dropdown-item" href="/About/TheSecratariat">The Secretariat</Link></li>
                                    <li><Link class="dropdown-item" href="/About/RegionalOffices">Regional offices</Link></li>

                                </ul>
                            </li>


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
                                    <li><Link class="dropdown-item" href="/Media/PhotoGallery">Photo Gallery</Link></li>
                                </ul>
                            </li>

                            <li class="nav-item ">
                                <Link class="nav-link  text-white me-3" href="/Affiliations" id="" role="button" >
                                    Affiliations
                                </Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link  text-white me-3" href="/Tenders" id="" role="button" >
                                    Procurement
                                </Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link  text-white me-3" href="/contact" id="" role="button" >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;