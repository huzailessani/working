import BaseLayout from "@/components/BaseLayout";
import { GoDesktopDownload } from "react-icons/go";
const DownloadForm = () => {
    return <BaseLayout>
        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ms-md-5 pe-5">
                        <h2 className="values-system-heading mb-2 d-flex">Download Affidavit <GoDesktopDownload className="text-success ms-3" /></h2>
                        <p className="values-system-para">Affidavit on form A
                        </p>
                        {/* <p className="values-system-para">PROVINCIAL OMBUDSMAN (MOHTASIB) SECRETARIAT</p>
                        <p className="values-system-para mt-4">HEADQUARTER</p>
                        <p className="values-system-para ">Secretariat Provincial Ombudsman, Sindh</p>
                        <p className="values-system-para ">Shahrah-e-Kamal Ataturk,</p>
                        <p className="values-system-para ">Opp. Sindh Secretariat, Karachi.</p>
                        <p className="values-system-para ">Contact : 021-99211025, 99211031</p>
                        <p className="values-system-para ">Fax : 021-99211262, 99211091</p> */}
                        <div className="col-md-12 ">
                            <ul className="values-list">
                                <li className="values-system-para mt-3">
                                    <a className="underline text-success"
                                        href="/Form A (English Version).docx"
                                        download  // Add the download attribute
                                    >
                                        Form A (English Version)
                                    </a>
                                </li>
                                <li className="values-system-para mt-3">
                                    <a className="underline text-success"
                                        href="/forms/Form A (Urdu).pdf"
                                        download  // Add the download attribute
                                    >
                                        Form A (Urdu Version)
                                    </a>
                                </li>
                                <li className="values-system-para mt-3">
                                    <a className="underline text-success"
                                        href="/forms/Form A (Sindhi).pdf"
                                        download  // Add the download attribute
                                    >
                                        Form A (Sindhi Version)
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ms-md-5 pe-5">
                        <ul className="values-list">
                            <li className="values-system-para mt-3">
                                <a className="underline"
                                    href="/forms
                                    /Form A (Eng).pdf"
                                    download  // Add the download attribute
                                >
                                    Form A (English Version)
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline"
                                    href="/forms
                                    /Form A (Urdu).pdf"
                                    download  // Add the download attribute
                                >
                                    Form A (Urdu Version)
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline"
                                    href="/forms
                                    /Form A (Sindhi).pdf"
                                    download  // Add the download attribute
                                >
                                    Form A (Sindhi Version)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}

        </div>
    </BaseLayout>;
};

export default DownloadForm;
