import BaseLayout from "@/components/BaseLayout";
import { AiTwotoneSecurityScan } from "react-icons/ai";
import { GiPostOffice } from "react-icons/gi";
import Link from "next/link"

const TheSecretariat = () => {
    return <BaseLayout>
        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12  ">
                        <h2 className="values-system-heading d-flex">The Secretariat <AiTwotoneSecurityScan className="text-success ms-3" /></h2>
                        <p className="values-system-para mt-2">
                            The Headquarter of Secretariat Provincial Ombudsman (Mohtasib) Sindh is located at Karachi and 19 Regional offices at district level throughout Sindh Province
                        </p>
                    </div>
                </div>
                <div className="mt-3">
                    <Link className="learn-more mt-2 underline text-success" href="/Headquarter">
                        Click here for names and contacts of officers in the Provincial Ombudsman Secretariat/Headquarter
                    </Link>
                </div>
                <div className="mt-3">
                    <Link className="learn-more mt-3 underline text-success" href="/Regionaloffices">
                        Click here for names and contacts of officers in the Provincial Ombudsman Regional Offices
                    </Link>
                </div>
            </div>

            {/* <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12  ">

                        <div className="row">
                            <div className=" ">
                                <h2 className="values-system-heading d-flex">HEADQUARTER  <GiPostOffice className="text-success ms-3" /></h2>
                                <p className="values-system-para mt-2">
                                    Secretariat Provincial Ombudsman , Sindh
                                </p>
                                <p className="values-system-para mt-2">
                                    Shahrah-e-Kamal Ataturk Ombudsman , Sindh Karachi
                                </p>
                                <p className="values-system-para mt-2">
                                    Contact : 021-99211025
                                </p>
                                <p className="values-system-para mt-2">
                                    Website : www.mohtasibsindh.gov.pk
                                </p>
                                <p className="values-system-para mt-2">
                                    Email : www.mohtasibhd@yahoo.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <Link className="learn-more mt-2 underline" href="/Headquarter">
                        Click here for names and contacts of officers in the Provincial Ombudsman Secretariat/Headquarter
                    </Link>
                </div>
            </div> */}
        </div>


    </BaseLayout>;
};

export default TheSecretariat;
