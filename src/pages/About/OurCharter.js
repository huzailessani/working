import BaseLayout from "@/components/BaseLayout";
import { GiSwordsPower } from "react-icons/gi";

const OurCharter = () => {
    return <BaseLayout>
        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ">
                        <h2 className="values-system-heading d-flex">Our Charter <GiSwordsPower className=" ms-3" /></h2>
                        <p className="values-system-para mt-2">
                            The Office of Provincial Ombudsman (Mohtasib) Sindh established through Sindh Act No. 1 of 1991 (Establishment of the Office of Ombudsman for the Province of Sindh Act, 1991), which empowers Provincial Ombudsman (Mohtasib) Sindh to diagnose, investigate, redress and rectify any injustice done to a person through mal-administration of an Agency of the Government of Sindh.
                        </p>
                        {/* <p className="values-system-para mt-2">
                            “Agency” means a Department, Commission or Office of the Provincial Government or a statutory Corporation or other institution established or controlled by the Provincial Government but does not include the High Court;

                        </p>
                        <p className="values-system-para mt-2">
                            The Act defines Maladministration as

                        </p>

                        <p className="values-system-para mt-2 ">
                            (i) a decision, process, recommendation, act of omission or commission which:
                        </p>
                        <p className="values-system-para mt-2 ms-3">
                            (a) is contrary to law, rules or regulations or is a departure from established practice or procedure, unless it is bona fide and for valid reasons; or
                        </p>
                        <p className="values-system-para mt-2 ms-3">
                            (b) is perverse, arbitrary or unreasonable, unjust, biased, oppressive, or discriminatory; or
                        </p>
                        <p className="values-system-para mt-2 ms-3">
                            (c) is based on irrelevant grounds; or
                        </p>
                        <p className="values-system-para mt-2 ms-3">
                            (d) involves the exercise of powers or the failure or refusal to do so, for corrupt or improper motives, such as, bribery, jobbery, favouritism, nepotism and administrative excesses; and
                        </p>
                        <p className="values-system-para mt-2">
                            (ii) neglect, inattention, delay, incompetence, inefficiency and ineptitude, in the administration or discharge of duties and responsibilities..
                        </p> */}
                        <p className="values-system-para mt-3">
                            <a className="underline text-success"
                                href="/knowledge/Act1.pdf"
                                download  // Add the download attribute
                            >
                                Ombudsman Sindh Act, 1991
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </BaseLayout>;
};

export default OurCharter;
