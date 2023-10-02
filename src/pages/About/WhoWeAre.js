import BaseLayout from "@/components/BaseLayout";
import { BsPeopleFill } from "react-icons/bs";

const WhoWeAre = () => {
    return <BaseLayout>
        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="values-system-heading d-flex">Who We Are <BsPeopleFill className="text-success ms-3" /></h2>
                        <p className="values-system-para mt-2">
                            The Provincial Ombudsman  Sindh(Mohtasib)  is an independent institution, established by statute, to provide speedy relief to any citizen or legal resident of Pakistan who may have suffered from any maladministration at the hands of any Agency of the Government of Sindh.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </BaseLayout>;
};

export default WhoWeAre;
