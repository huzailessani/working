

import BaseLayout from "@/components/BaseLayout";
import { AiFillQuestionCircle } from "react-icons/ai";

const ComplainAboutUs = () => {
    return <BaseLayout><div className="container">
        <div className="our-value-system mt-5">
            <div className="row">
                <div className="col-md-12 ms-md-5 pe-5">
                    <h2 className="values-system-heading mb-2 ">
                        <b className="d-flex">Complain About Us <AiFillQuestionCircle className="ms-3" /> </b> </h2>
                    <h2 className="values-system-heading mb-2 ">  How to complain about us? </h2>

                    <p className="values-system-para">We take complaints about our service very seriously. If you are not happy with the way we have dealt with your case - or with the service we have provided - please let us know. You can send a complaint to the Secretary, Provincial Mohtasib Secretariat, if you think we have:</p>
                    <div className="container">
                        <li className="values-system-para">treated you unfairly or rudely</li>
                        <li className="values-system-para">failed to explain things properly or</li>
                        <li className="values-system-para">caused unreasonable delays.</li>
                    </div>
                    <p className="values-system-para MT-4">Complaints can be sent directly to the Provincial Ombudsman (Mohtasib) institute over email (mohtasibhd@yahoo.com), post (Sindh Provincial Ombudsman Secretariat, Shahrah-e-Kemal Ataturk, Karachi, Sindh, Pakistan.)</p>
                    <div className="mt-4">
                        <p className="values-system-heading mb-2 "> How we will deal with your complaint about our service?</p>
                        <p className="values-system-para">We will aim to send you a full response in writing within 15 working days. If we cannot do this because of exceptional circumstances, we will update you on the status and inform you when you can expect a full response from us.</p>
                        <p className="values-system-para mt-4">If our investigation shows that your complaint about our service is justified, we will tell you how we will sort out the problem.</p>
                    </div>
                    <div className="mt-4">
                        <p className="values-system-heading mb-2 "> What to do if you are still not happy?</p>
                        <p className="values-system-para">If you are not happy with our response to your complaint about our service, you can write to the Provincial Ombudsman (Mohtasib) himself, whose decision will be final and conveyed to you in writing.</p>

                    </div>
                </div>
            </div>
        </div>
    </div></BaseLayout>;
};

export default ComplainAboutUs;
