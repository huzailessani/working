import BaseLayout from "@/components/BaseLayout";
import { Gi3DGlasses, GiRocket } from "react-icons/gi";
import { FaUserCog } from "react-icons/fa";


const OurCharter = () => {
    return <BaseLayout>

        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ">
                        <h2 className="values-system-heading d-flex">Our Value System <FaUserCog className="text-success ms-3" /> </h2>
                        <p className="values-system-para mt-2">
                            The values system is a shared vision of the institution, developed by our officers. It is hoped that it will shape our strategic direction, serve as the overarching standards for our work and reflect our principles, work ethics and organizational culture.
                        </p>
                    </div>
                </div>
            </div>

            {/* <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-5 col-12">
                        <div class="our-value-system">
                            <div class="row">
                                <h2 class="values-system-heading d-flex">Our Vision <Gi3DGlasses class="ms-3 text-success" /></h2>
                                <p class="values-system-para mt-2">
                                    To promote high standards of governance, accountability, and efficiency through administrative justice services.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 col-12">
                        <div class="our-value-system">
                            <div class="row">
                                <h2 class="values-system-heading d-flex">Our Mission <GiRocket class="ms-3 text-success" /></h2>
                                <p class="values-system-para mt-2">
                                    To effectively and comprehensively address public grievances in a fair, prompt, transparent, equitable, and efficient manner.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


        </div>
    </BaseLayout>;
};

export default OurCharter;
