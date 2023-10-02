import BaseLayout from "@/components/BaseLayout";
import { BsFillPatchQuestionFill } from "react-icons/bs";

const HowCanWeHelp = () => {
    return <BaseLayout>

        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12  ">
                        <h2 className="values-system-heading d-flex">How can we help you <BsFillPatchQuestionFill className="text-success ms-3" /></h2>
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
    </BaseLayout>;
};

export default HowCanWeHelp;
