import BaseLayout from "@/components/BaseLayout";
import { GiPostOffice } from "react-icons/gi";


const TheSecretariat = () => {
    return <BaseLayout>
        <div className="container">
            <div className="our-value-system mt-5">
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
            </div>
        </div>


    </BaseLayout>;
};

export default TheSecretariat;
