import "./globals.css";
function page() {
  return (
    <>
      {/* Navbar  */}
      <nav className="navbar">
        <div className="logo">
          <img src="" alt="Logo" />
        </div>
        <div className="linkss">
          <a href="#">Start Here</a>
          <a href="#">Our Blog</a>
          <a href="#">Podcast</a>
          <a href="#">Newsletter</a>
          <a href="#">
            <b>Get in Touch</b>
          </a>
        </div>
      </nav>
      {/* Section 1 */}
      <section className="hero">
        <div className="content">
          <p className="textContent">Welcome to</p>
          <h1>Authentik.</h1>
          <p className="desContent">
            We help creative entrepreneurs build an honest brand & digital
            platform.
          </p>
          <div className="Buttons">
            <button className="btnContent">START YOUR JOURNEY</button>
            <a href="#" className="moreText">
              Learn more →{" "}
            </a>
          </div>
        </div>
        <p className="endText">Snoqualmie Pass. WA-United States</p>
      </section>
      {/* Section 2 */}
      <section className="heroTwo">
        <h1>Start your journey.</h1>
        <p>
          Comes as you are. Bring your talents,your brilliance, your
          frustrations, <br /> your struggles-and let's turn them into something
          awesome.
        </p>
        <div className="cardMain">
          <div className="card">
            <img
              src="https://static.vecteezy.com/system/resources/previews/026/576/115/non_2x/flying-black-crow-isolated-png.png"
              alt="Sample Image"
              class="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">Be inspired.</h2>
              <p className="card-description">
                We wannt to give the help and support <br /> you need to make
                huge strides towards the <br /> vision you're after in your
                business.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://static.vecteezy.com/system/resources/previews/026/576/115/non_2x/flying-black-crow-isolated-png.png"
              alt="Sample Image"
              class="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">Get connected.</h2>
              <p className="card-description">
                Jam with fellow tribe members,share <br />
                experiences,stay accountable,and <br />
                encourage one another on your journey.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://static.vecteezy.com/system/resources/previews/026/576/115/non_2x/flying-black-crow-isolated-png.png"
              alt="Sample Image"
              class="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">Equip yourself.</h2>
              <p className="card-description">
                Discover the tools and resources you need <br />
                to build a beautiful website and create an <br />
                amazing brand and digital platform.
              </p>
            </div>
          </div>
          <a className="cardLink" href="#">
            TAKE THE FIRST STEP TODAY →
          </a>
        </div>
      </section>
      {/* Section 3 */}
      <section className="contact">
        <h1>Get started today.</h1>
        <p>Introducing the Authentik Frramework™for creative entrepreneurs.</p>
        <div className="contactContainer">
          <div className="contactCard">
            <h2 className="contactTitle">Authentik Living</h2>
            <p className="contactDescription">
              We believe that living an honest and <br /> intentional life will
              acrry over to the <br />
              way you run business.
            </p>
          </div>
          <div className="contactCard">
            <h2 className="contactTitle">Authentik Design</h2>
            <p className="contactDescription">
              We believe that amazing typography <br /> and white space will
              help you build a <br /> beautiful website experience.
            </p>
          </div>
          {/* Contact Form  */}

          <form>
            <div className="formImage">
              <img src="" alt="logo" />
            </div>
            <h1>Start your journey.</h1>
            <p>
              We help creative entrepreneurs build <br />
              an honest brand & digital platform.
            </p>
            <input type="text" placeholder="First Name" />
            <input type="email" placeholder="Email Address" />
            <p className="permit">
              I accept the terms of services and privacy policy.
            </p>
            <button className="submit">GET STARTED TODAY</button>
          </form>
        </div>
      </section>
      <div className="secondcard">
        <div className="contactCard">
          <h2 className="contactTitle">Authentik Living</h2>
          <p className="contactDescription">
            We believe that living an honest and <br /> intentional life will
            acrry over to the <br />
            way you run business.
          </p>
        </div>
        <div className="contactCard">
          <h2 className="contactTitle">Authentik Living</h2>
          <p className="contactDescription">
            We believe that living an honest and <br /> intentional life will
            acrry over to the <br />
            way you run business.
          </p>
        </div>
      </div>
      {/* <footer class="footer">
        <div class="footer-content">
          <div class="logo">
            <img src="logo.png" alt="Logo" />
            <h2>Create Honesty</h2>
          </div>
          <div class="center-content">
            <div class="title">
              <h2>WE BELIEVE</h2>
            </div>
            <div class="description">
              <p>
                This is a brief description of the company, its values, and
                mission.
              </p>
            </div>
            <div class="links">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#resources">Resources</a>
              <a href="#connect">Connect</a>
            </div>
          </div>
        </div>
        <div class="rights">
          <p>© 2024 All rights reserved.</p>
        </div>
      </footer> */}

      <footer class="footer">
        <div class="footer-content">
          <div class="logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <div class="center-content">
            <div class="title">
              <h2>WE BELIEVE</h2>
            </div>
            <div class="description">
              <p>
                "The key to building an authentic business is building and
                authentic life." - Brian Gardner
              </p>
            </div>
            <div class="links">
              <div class="about-section">
                <a href="#about">
                  <span>About</span>
                </a>
                <a href="#team">Our Team</a>
                <a href="#history">Our History</a>
                <a href="#careers">Careers</a>
              </div>
              <div class="services-section">
                <a href="#services">
                  <span>Services</span>
                </a>
                <a href="#consulting">Consulting</a>
                <a href="#development">Development</a>
                <a href="#design">Design</a>
              </div>
              <div class="resources-section">
                <a href="#resources">
                  <span>Resources</span>
                </a>
                <a href="#services">Services</a>
                <a href="#consulting">Consulting</a>
                <a href="#development">Development</a>
              </div>
              <div class="connect-section">
                <a href="#connect">
                  <span>Connect</span>
                </a>
                <a href="#services">Services</a>
                <a href="#consulting">Consulting</a>
                <a href="#development">Development</a>
              </div>
            </div>
            <div class="links">
              <div class="about-section">
                <a href="#about">
                  {" "}
                  <span>TERMS OF SERVICE</span>
                </a>
              </div>
              <div class="about-section">
                <a href="#about">
                  {" "}
                  <span>PRIVACY POLICY</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="rights">
          <p>© 2024 All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default page;
