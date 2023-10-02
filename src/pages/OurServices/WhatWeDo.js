import BaseLayout from "@/components/BaseLayout";
import { MdWork } from "react-icons/md";

const WhatWeDo = () => {
    return <BaseLayout>
        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12  ">
                        <h2 className="values-system-heading d-flex">What We Do <MdWork className="text-success ms-3" /></h2>
                        <p className="values-system-para mt-2 pe-3">
                            We resolve complaints and provide relief to the public by carrying out independent investigations into complaints about maladministration in any Government of Sindh Agency. We work to put things right and share lessons learned and help improve public services as a result. Our independent complaints handling service is free and open to everyone.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </BaseLayout>;
};

export default WhatWeDo;
