
import BaseLayout from "@/components/BaseLayout";
import { HiOutlineStatusOnline } from "react-icons/hi";

const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // You can now append additional data to formData if needed
    // For example, formData.append('additionalField', 'additionalValue');

    // Send the formData to your server using a fetch or axios
    // Replace 'your-api-endpoint' with the actual API endpoint
    fetch('your-api-endpoint', {
        method: 'POST',
        body: formData,
    })
        .then((response) => {
            // Handle the response from the server
        })
        .catch((error) => {
            // Handle any errors
        });
};

const MakeAComplaintOnline = () => {
    return <BaseLayout>
        <div className="container">
            {/* <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ms-md-5 pe-5">
                        <h2 className="values-system-heading mb-2 text-align-center">Online Complaint Registration</h2>

                        <p className="values-system-para text-align-center">Please enter your complaint details (Fields marked with * are mandatory).</p>
                    </div>
                </div>

                <div>

                </div>
            </div> */}
            <div className="our-value-system mt-5 text-align-center justify-content-center">
                <div className="row">

                    <div className="col-md-12 container">
                        <section id="contact">
                            <div className="contact">
                                <div className="container align-items-center d-flex justify-content-center">
                                    <div className="col-lg-12 col-md-12 pt-lg-0 pt-md-0 pt-4">
                                        <h2 className="values-system-heading mb-2 text-align-center d-flex">Online Complaint Registration <HiOutlineStatusOnline className="text-success ms-3" /></h2>

                                        <p className="values-system-para text-align-center mb-5">Please enter your complaint details </p>
                                        <form>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <div className="form-control">
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked />
                                                                <label class="form-check-label" for="inlineRadio1">General</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                                <label class="form-check-label" for="inlineRadio2">Child Related</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="form-control">
                                                            <select id="nearestOffice" name="nearestOffice" class="form-select" data-bs-placement="bottom" placeholder="Select Office">
                                                                <option value="office1">Karachi (Central)</option>
                                                                <option value="office2">Karachi (East)</option>
                                                                <option value="office3">Karachi (South)</option>
                                                                <option value="office4">Thatta</option>
                                                                <option value="office5">Sukkur</option>
                                                                <option value="office6">Hyderabad</option>
                                                                <option value="office7">Badin</option>
                                                                <option value="office8">Naushahro Feroze</option>
                                                                <option value="office9">Larkana</option>
                                                                <option value="office10">MirpurKhas</option>
                                                                <option value="office11">Mithi</option>
                                                                <option value="office12">Jacobabad</option>
                                                                <option value="office13">Dadu</option>
                                                                <option value="office14">Nawabshah</option>
                                                                <option value="office15">Khairpur</option>
                                                                <option value="office16">Ghotki</option>
                                                            </select>
                                                        </div>
                                                    </div>


                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="name"
                                                            id="name"
                                                            placeholder="Complaint name"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="subject"
                                                            id="subject"
                                                            placeholder="Subject "
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="phone"
                                                            id="phone"
                                                            placeholder="Phone "
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="cnic"
                                                            id="cnic"
                                                            placeholder="CNIC"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="mob"
                                                            id="mob"
                                                            placeholder="Mobile Number "
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            name="email"
                                                            id="email"
                                                            placeholder="Email address"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea
                                                            className="form-control"
                                                            name=""
                                                            id=""
                                                            rows="4"
                                                            placeholder="Main Point Of Complaint"
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group form-control">
                                                        <label htmlFor="file" className="me-3">Upload File</label>
                                                        <input
                                                            type="file"
                                                            className="form-control-file "
                                                            name="file"
                                                            id="file"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <button className="btn btn-success">Send Complaint</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

                <div>

                </div>
            </div>

        </div>
    </BaseLayout>;
};

export default MakeAComplaintOnline;
