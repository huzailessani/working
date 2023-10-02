import BaseLayout from "@/components/BaseLayout";
import Link from "next/link"
import { TiContacts } from "react-icons/ti";
import { GiPostOffice } from "react-icons/gi";
import { ImOffice } from "react-icons/im";
const Contact = () => {
  return <BaseLayout>

    <div className="container">
      <div className="our-value-system mt-5">
        <div className="row">
          <div className="col-md-12 ms-md-5 pe-5">
            <h2 className="values-system-heading mb-2 d-flex">Contact Us  <TiContacts className="text-success ms-3" /></h2>

            <p className="values-system-para">Secretariat Provincial Ombudsman Sindh,</p>
            <p className="values-system-para">Shahrah-e-Kamal Ataturk ,</p>
            <p className="values-system-para">Karachi, Sindh, Pakistan</p>
            <p className="values-system-para mt-5">Phone: +92-21-99211031,25,28 (PABX Ext: 200)</p>
            <p className="values-system-para">Phone: +92-21-99211026 (Direct Ombudsmans Office)</p>
            <p className="values-system-para">Fax: +92-21-99211091,99211262</p>

            <p className="values-system-para mt-3">E-Mail: mohtasibhd@yahoo.com</p>
            <div className="mt-3">
              <Link className="learn-more mt-2 underline text-success" href="/Headquarter">
                Click here for names and contacts of officers in the Provincial Ombudsman Secretariat/Headquarter
              </Link>
            </div>
            <div className="mt-3">
              <Link className="learn-more mt-3 underline text-success" href="/Regionaloffices">
                Click here for names and contacts of officers in the Provincial Ombudsman Regional Offices
              </Link>
            </div>


          </div>
        </div>
      </div>


    </div>




  </BaseLayout>;
};

export default Contact;

