
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
                                        <h2 className="values-system-heading mb-2 text-align-center d-flex">Online Complaint Registration <HiOutlineStatusOnline className=" ms-3" /></h2>

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
                                                            name="address"
                                                            id="address"
                                                            placeholder="Address "
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="district"
                                                            id="district"
                                                            placeholder="District "
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
                                                <h2>Select the Sindh Govt. Office against which the complaint is being made</h2>
                                                <div className="form-group">
                                                    <div className="form-control">
                                                        <select id="nearestOffice" name="nearestOffice" class="form-select" data-bs-placement="bottom" placeholder="Select Office">
                                                            <option value="Accountant General Sindh">Accountant General Sindh</option>
                                                            <option value="Agriculture Supply & Prices Department">Agriculture Supply & Prices Department</option>
                                                            <option value="Auqaf Religious Affairs Zakat & Ushr Department">Auqaf Religious Affairs Zakat & Ushr Department</option>
                                                            <option value="Benazir Bhutto Shaheed Human Resource Research and Development Board">Benazir Bhutto Shaheed Human Resource Research and Development Board</option>
                                                            <option value="Cooperation Department">Cooperation Department</option>
                                                            <option value="Culture Tourism and Antiquities Department">Culture Tourism and Antiquities Department </option>
                                                            <option value="Education & Literacy Department (Colleges Education)">Education & Literacy Department (Colleges Education)</option>
                                                            <option value="Education & Literacy Department (Schools Education)">Education & Literacy Department (Schools Education)</option>
                                                            <option value="Energy Department">Energy Department</option>
                                                            <option value="Enquiries and Anti Corruption Establishment">Enquiries and Anti Corruption Establishment </option>
                                                            <option value="Environment Climate Change and Costal Development Department">Environment Climate Change and Costal Development Department</option>
                                                            <option value="Environmental Alternate Energy">Environmental Alternate Energy </option>
                                                            <option value="Excise Taxation and Narcotics Department">Excise Taxation and Narcotics Department </option>
                                                            <option value="Finance Department">Finance Department</option>
                                                            <option value="Forest & Wildlife Department">Forest & Wildlife Department</option>
                                                            <option value="Food Department">Food Department</option>
                                                            <option value="Health Department">Health Department </option>
                                                            <option value="Home Department">Home Department</option>
                                                            <option value="Human Rights Department">Human Rights Department</option>
                                                            <option value="Industries & Commerce Department">Industries & Commerce Department</option>
                                                            <option value="Information & Archives Department">Information & Archives Department</option>
                                                            <option value="Information Science & Technology Department">Information Science & Technology Department</option>
                                                            <option value="Irrigation Department">Irrigation Department</option>
                                                            <option value="Karachi Municipal Cooperation">Karachi Municipal Cooperation</option>
                                                            <option value="Karachi Development Authority">Karachi Development Authority</option>
                                                            <option value="Karachi Water and Sewerage Board">Karachi Water and Sewerage Board</option>
                                                            <option value="Katchi Abadies and Spatial Development Department">Katchi Abadies and Spatial Development Department</option>
                                                            <option value="Labour  and Human Resources Department">Labour  and Human Resources Department</option>
                                                            <option value="Law and Parliamentary Affairs Department">Law and Parliamentary Affairs Department</option>
                                                            <option value="Live Stock & Fisheries Department">Live Stock & Fisheries Department</option>
                                                            <option value="Local Government and Housing Town Planning Department">Local Government and Housing Town Planning Department</option>
                                                            <option value="Lyari Development Authority">Lyari Development Authority </option>
                                                            <option value="Malir Development Authority">Malir Development Authority </option>
                                                            <option value="Mines and Mineral Development Department">Mines and Mineral Development Department</option>
                                                            <option value="Minorities Affairs Department">Minorities Affairs Department</option>
                                                            <option value="Planning & Development Department">Planning & Development Department</option>
                                                            <option value="Police Department">Police Department</option>
                                                            <option value="Population & Welfare Department">Population & Welfare Department</option>
                                                            <option value="Power Department">Power Department</option>
                                                            <option value="Public Health Engineering and Rural Development Department">Public Health Engineering and Rural Development Department</option>
                                                            <option value="Revenue Department">Revenue Department</option>
                                                            <option value="Services General Administration & Coordination Department">Services General Administration & Coordination Department</option>
                                                            <option value="Sindh Building Control Authority">Sindh Building Control Authority</option>
                                                            <option value="Sindh Employees Social Security Institution">Sindh Employees Social Security Institution</option>
                                                            <option value="Sindh Higher Education Commission Karachi">Sindh Higher Education Commission Karachi </option>
                                                            <option value="Sindh Public Service Commission">Sindh Public Service Commission </option>
                                                            <option value="Social Welfare Department">Social Welfare Department</option>
                                                            <option value="Special Education Department">Special Education Department</option>
                                                            <option value="Sport & Youth  Affairs Department">Sport & Youth  Affairs Department</option>
                                                            <option value="Transport & Mass Transit Department">Transport & Mass Transit Department</option>
                                                            <option value="Women Development Department">Women Development Department</option>
                                                            <option value="Work & Services Department">Work & Services Department </option>
                                                        </select>
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
                                                <table>
                                                    <tr>
                                                        <td colspan="2" >
                                                            Please read the following and check the box before submitting your complaint:
                                                            <br />
                                                            <textarea class="form-control mt-3" rows="10" cols="100%" readonly>
                                                                I do hereby solemnly affirm:

                                                                (a) That  the facts mentioned in this complaint are correct to the best of my knowledge and belief.

                                                                (b) That no complaint on this subject has previously been lodged with Provincial Mohtasib (Ombudsman) by me, or on my behalf, in the Head Office or any the Regional Offices.

                                                                (c) That no suit,appeal,petition or other judicial proceeding in connection with the subject matter of this complaint is pending in any court, tribunal or board.

                                                                (d) I made a representation to the the senior Officers of the Agency in this connection but have failed to elicit a reply/my representation has been unjustly turned down.
                                                            </textarea>
                                                        </td>

                                                    </tr>

                                                    <tr >
                                                        <td>
                                                            <input type="checkbox" name="vsAffidavit" value="I do affirm the Affidavit" required /> I do affirm the Affidavit.
                                                        </td>
                                                        <td>
                                                            &nbsp;
                                                        </td>
                                                    </tr>
                                                </table>
                                                <div className="col-md-12 mt-3">
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
