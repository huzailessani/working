import BaseLayout from "@/components/BaseLayout";
import { GiArchiveRegister, GiSwordsPower, GiRocket } from "react-icons/gi";
import { BiTimeFive } from "react-icons/bi";

const OurServiceCharter = () => {
    return <BaseLayout>

        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ">
                        <h2 className="values-system-heading d-flex">Our Commitment<GiSwordsPower class="ms-3 text-success" />  </h2>
                        <p className="values-system-para mt-2">
                            We are committed to redress of public grievances in an efficient, effective and transparent manner. We constantly strive to improve our level of responsiveness to the public.
                            {/* as give below: */}
                        </p>
                    </div>
                </div>
            </div>

            {/* <div className="row align-items-center justify-content-center d-flex">
                <div className="col-md-5  col-12 ">
                    <div className="vision ">
                        <div className="row">
                            <h2 className="values-system-heading">Productivity</h2>
                            <p className="values-system-para mt-2">Every Investigating Officer shall dispose of at least thirty five complaints per month.                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-12 ms-md-5">
                    <div className="vision ">
                        <div className="row">
                            <h2 className="values-system-heading">Efficiency
                            </h2>

                            <p className="values-system-para mt-2">
                                Complaints shall be disposed of within three months of admission.

                            </p>
                        </div>
                    </div>
                </div>

            </div> */}

            {/* <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-5 col-12">
                        <div class="our-value-system">
                            <div class="row">
                                <h2 class="values-system-heading d-flex">Productivity <BiTimeFive class="ms-3 text-success" /> </h2>
                                <p class="values-system-para mt-2">
                                    Every Investigating Officer shall dispose of at least thirty five complaints per month.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 col-12">
                        <div class="our-value-system">
                            <div class="row">
                                <h2 class="values-system-heading d-flex">Efficiency <GiRocket class="ms-3 text-success" /></h2>
                                <p class="values-system-para mt-2">
                                    Complaints shall be disposed of within three months of admission.


                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="our-value-system ">
                <div className="">
                    <div className="col-md-12">
                        <h2 className="values-system-heading d-flex"> Timeline For  Registration Of The Complaints<GiArchiveRegister class="ms-3 text-success" />   </h2>
                        {/* <h2 className="values-system-heading mt-3"> Efficiency</h2> */}
                        <p className="values-system-para mt-2">
                            A decision to either admit or reject a complaint shall be made within 15 days of its receipt
                        </p>
                        <p className="values-system-para mt-2">
                            A complaint that has been admitted shall be forwarded to the concerned Investigating Officer within 15 days of its admission.
                        </p>
                        <p className="values-system-para mt-2">
                            Acknowledgement or a letter of regret to the complainant shall be sent within 15 days of the decision to admit or reject the complaint.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </BaseLayout>;
};

export default OurServiceCharter;
