import React from "react";

const Contact = () => {
  return (
    <div className="wrapper flex flex-col justify-center items-center">
      <div className=" bg-[black] text-white opacity-70 flex flex-col justify-center items-center min-h-[92.25vh] h-[auto] w-[100%]">
        <h1 className="text-5xl font-bold m-4">Contact Us</h1>

        <div className="flex flex-col justify-center items-center w-[80vw]">
          <h1 className="text-3xl m-3">Let's Start a Coversation</h1>

          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row flex-wrap justify-center items-start gap-4 m-3 mb-5">
              <div className="flex flex-col justify-start items-center min-h-[200px]">
                <h3 className="text-3xl flex flex-col justify-center items-center">
                  Points of Contact
                </h3>

                <div className="flex flex-col justify-center">
                  <div className="">
                    <p className="flex items-center justify-center">
                      AU | Let's &lt;/&gt;
                    </p>

                    <p className="flex items-center justify-center">
                      Strathfield,Sydney, NSW 2135
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="">Billing Inquiries:</p>

                  <p className="flex items-center justify-center">
                    047238XXXXX
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-start items-center min-h-[200px]">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-3xl">Information and Sales</p>

                  <p className="">partnermarketing@letscode.com</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <p className="">Support</p>

                  <p className="">support@letscode.com</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <p className="text-header">Verification of Employment</p>

                  <p className="para-blue">voe@abcd.com</p>
                </div>
              </div>

              <div className="flex flex-col justify-start items-center min-h-[200px]">
                <h3 className="text-3xl">Another Office Locations</h3>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <p className="flex flex-col justify-center items-center">
                      Nepal <img src="../Images/nepali-flag.png" />
                    </p>

                    <p className="para-thin">Dang,Nepal</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center w-[100%] flex-wrap">
              <p className="m-3">Please note: All fields are required.</p>
              <form className="flex flex-col justify-center items-center">
                <div className="flex flex-col items-center justify-center">
                  <label for="first-name">First Name</label>
                  <input
                    type="text"
                    name="FirstName"
                    id="first-name"
                    placeholder="Enter First Name"
                    required
                  />

                  <label for="last-name">Last Name</label>
                  <input
                    type="text"
                    name="LastName"
                    id="last-name"
                    placeholder="Enter Last Name"
                    required
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-5s">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    name="Tel-phone"
                    id="tel-phone"
                    placeholder="Enter your Email"
                    required
                  />

                  <label for="tel-phone">Tel Phone</label>
                  <input
                    type="email"
                    name="Email"
                    id="email"
                    placeholder="Enter your Tel-Phone"
                    required
                  />
                </div>
                <div className="text-white flex flex-col">
                  <label for="text-white">Employment</label>
                  <select name="text-white" className="text-black">
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                    <option value="developer">Developer</option>
                    <option value="student">Student</option>
                  </select>
                </div>

                <div className="checkbox">
                  <input type="checkbox" name="Checkbox" id="checkbox" />
                  <label for="checkbox">
                    I'd like to receive more information about Let's &lt;/&gt;.
                    I understand and agree to the privacy policy.
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-black px-2 py-1 rounded-lg m-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <section id="footer">
        <div className="wrapper-footer">
          <div className="left-footer">
            <p className="footer-header">Links</p>
            <ul>
              <li>
                <a href="../index.html">Home</a>
              </li>
              <li>
                <a href="./topics.html">Topics</a>
              </li>
              <li>
                <a href="./about.html">About Us</a>
              </li>
              <li>
                <a href="./contact.html">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="right-footer">
            <div className="footer-logo">
              <a href="../index.html">
                <h1 id="logo-txt">
                  Let's{" "}
                  <span id="highlight">
                    &lt;<span id="second-highlight">/</span>&gt;
                  </span>
                </h1>
              </a>
            </div>

            <div className="social-links">
              <a href="https://www.facebook.com">
                <img src="../Images/contact/facebook.png" />
              </a>
              <a href="https://www.instagram.com">
                <img src="../Images/contact/insta.png" />
              </a>
              <a href="https://www.linkedin.com">
                <img src="../Images/contact/linkedin.png" />
              </a>
              <a href="https://www.twitter.com">
                <img src="../Images/contact/twitter.jpg" />
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
