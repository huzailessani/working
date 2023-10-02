import BaseLayout from "@/components/BaseLayout";
import { MdHourglassEmpty } from "react-icons/md";

const Vacancies = () => {
    return <BaseLayout>
        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ms-md-5 pe-5">
                        <h2 className="values-system-heading mb-2 d-flex">Vacancies <MdHourglassEmpty class="ms-3 text-success" /> </h2>

                        <p className="values-system-para">There are currently no vacancies available...</p>
                    </div>
                </div>
            </div>
        </div>
    </BaseLayout>;
};

export default Vacancies;
