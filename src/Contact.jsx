import React from "react";
import { Label, Select, Checkbox, TextInput, Button } from "flowbite-react";

const Contact = () => {
  return (
    <section id="hero">
      <div className="wrapper-contact">
        <div className="hero-container">
          <div className="overlay"></div>
          <h1>Contact Us</h1>
        </div>

        <div className="wrapper-form-container">
          <h1 className="text-header">Let's Start a Coversation</h1>

          <div className="text-form-container">
            <div className="text">
              <div className="text1">
                <h3 className="text-header">Points of Contact</h3>

                <div className="bottom-text1">
                  <div className="text-1-inside">
                    <p className="text-header">AU | Let's &lt;/&gt;</p>

                    <p className="para-thin">Strathfield,Sydney, NSW 2135</p>
                  </div>

                  <div className="text-1-inside">
                    <p className="text-header">Billing Inquiries</p>

                    <p className="para-thin">047238XXXXX</p>
                  </div>

                  <div className="text-1-inside">
                    <p className="text-header">Information and Sales</p>

                    <p className="para-blue">partnermarketing@letscode.com</p>
                  </div>

                  <div className="text-1-inside">
                    <p className="text-header">Support</p>

                    <p className="para-blue">support@letscode.com</p>
                  </div>

                  <div className="text-1-inside">
                    <p className="text-header">Verification of Employment</p>

                    <p className="para-blue">voe@abcd.com</p>
                  </div>
                </div>
              </div>

              <div className="text2">
                <h3 className="text-header">Another Office Locations</h3>
                <div className="bottom-text1">
                  <div className="text-1-inside">
                    <p className="text-header">
                      Nepal
                      <img src="/assets/nepali-flag.png" className="h-[10px]" />
                    </p>

                    <p className="para-thin">Dang,Nepal</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="form">
              <p>Please note: All fields are required.</p>
              <form action="" method="post">
                <div>
                  <div className="mb-0 block">
                    <Label htmlFor="first" value="First name" />
                  </div>
                  <TextInput id="first" type="text" sizing="sm" />
                </div>

                <div>
                  <div className="mb-0 block">
                    <Label htmlFor="last" value="Last name" />
                  </div>
                  <TextInput id="last" type="text" sizing="sm" />
                </div>

                <div>
                  <div className="mb-0 block">
                    <Label htmlFor="email" value="Email" />
                  </div>
                  <TextInput id="email" type="email" sizing="sm" />
                </div>

                <div>
                  <div className="mb-0 block">
                    <Label htmlFor="telephone" value="Telephone" />
                  </div>
                  <TextInput id="telephone" type="number" sizing="sm" />
                </div>

                <div className="w-full">
                  <div className="mb-0 block">
                    <Label htmlFor="countries" value="Select your country" />
                  </div>
                  <Select id="countries" required>
                    <option>Student</option>
                    <option>Teacher</option>
                    <option>Doctor</option>
                    <option>IT Professional</option>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="accept" />
                  <Label htmlFor="accept" className="flex">
                    I agree with the&nbsp;
                    <a
                      href="#"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      terms and conditions
                    </a>
                  </Label>
                </div>

                {/* <!-- ---------------------------------button------------------------- --> */}
                <button className="bg-sky-500 text-white py-2 rounded-lg">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
