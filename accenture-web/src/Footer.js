import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-white">
      <section className="border-bottom" style={{ backgroundColor: "#70259B" }}>
        <br />
        <div className="container mt-5">

          <div className="row mt-3">
            <div className="col-md-8">

              <h2 className="text-uppercase fw-bold mb-4">
                Have a project in mind?<br />
                Let's make it happen
              </h2>
            </div>

            <div className="col-md-4">
              <p>
                <a href="#!" style={{ whiteSpace: 'pre-line' }} className="text-reset text-white">
                  22 Street Name, Suburb, 8000, <br />
                  Cape Town, South Africa<br />
                  +27 21 431 0001<br />
                  enquirie@website.co.za
                </a>
              </p>
            </div>

          </div>

          <div className="row mt-3">
            <div className="col-md-2">
              <p>
                <a href="#!" style={{ whiteSpace: 'pre-line' }} className="text-reset text-white">
                  Terms of service <br />
                  Privacy policy <br />
                  Impressum
                </a>
              </p>
            </div>

            <div className="col-md-2">
              <p>
                <a href="#!" style={{ whiteSpace: 'pre-line' }} className="text-reset text-white">
                  Facebook <br />
                  Instagram <br />
                  Twitter
                </a>
              </p>
            </div>

            <div className="col-md-2">
              <p>
                <a href="#!" style={{ whiteSpace: 'pre-line' }} className="text-reset text-white">
                  Github <br />
                  Linkedin <br />
                  Teams
                </a>
              </p>
            </div>

            <div className="col-md-2">
              <p>
                <a href="#!" style={{ whiteSpace: 'pre-line' }} className="text-reset text-white">
                  Youtube <br />
                  Behance <br />
                  Dribbble
                </a>
              </p>
            </div>

            <div className="col-md-4">
              <p>
                <a href="#!" className="text-reset text-white">Explore open jobs <br /> <br />
                  ©2000—2023 Company Name</a>
              </p>
            </div>
          </div>

        </div>
      </section>

    </footer>
  );
}

export default Footer;
