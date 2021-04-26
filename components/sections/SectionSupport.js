import Container from '../Container'
import Section from './Section'
import SectionHeader from '../SectionHeader'

export default () => (
  <>
    <Container>
      <Section>
        <SectionHeader text="Support & Donate" color="#7d83e6" />
        <div className="flex">
          <div>
            <h2>
              Ensemble Signal is a 501(c)(3) organization that relies on
              contributors like you! In order to sustain our programs, financial
              and in-kind donations from supporters who also believe in our
              goals are essential. Thank you so much for your consideration!
            </h2>
            <h3>Donate</h3>
            <p>
              Any size financial contribution will allow us to continue our
              mission of offering the broadest possible audience accessibility
              to a diverse range of music through performance, education,
              commissioning, and recording. All financial contributions are tax
              deductible to the extent permitted by law.
            </p>
            <h3>In-Kind Contributions</h3>
            <p>
              In addition to our own team of volunteers, Signal has a growing
              base of professionals who provide in-kind services. These great
              folks' services directly contribute to making our programs
              possible. We'd love to hear from you if you might like to learn
              more about getting involved as a volunteer!
            </p>
            <h3>Supporters</h3>
            <p>
              Ensemble Signal thanks the foundations, organizations, and
              individuals supporting our current operations or programs with
              their most appreciated financial and in-kind contributions,
              including lead support from:
            </p>
            <p>
              <em>Hughes Hubbard &amp; Reed LLP</em>
              <br />
              <em>Joan Margot Smith</em>
            </p>
          </div>
          <div className="sidebar">
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" defaultValue="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                defaultValue="L4U6SJE5UAXJ2"
              />
              <input
                type="submit"
                name="Donate"
                defaultValue="Donate"
                className="donateButton"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
              <span>
                If you would like to learn more about giving opportunities,
                please contact{' '}
                <a href="mailto:signaloffice@gmail.com">Lauren Radnofsky.</a>
              </span>
            </form>
          </div>
        </div>
      </Section>
      <Section>
        <div className="double">
          <div className="half">
            <h2 className="sectionName">Contact</h2>
            <p>
              For all inquiries, please contact: <br />
              <a href="mailto:signaloffice@gmail.com">
                Lauren Radnofsky, Co-Artistic/Executive Director
              </a>
            </p>
            <div className="socialButtons">
              <a href="https://www.facebook.com/signal.ensemble">
                <img src="images/icon-facebook.png" />
              </a>
              <a href="https://twitter.com/ensemblesignal">
                <img src="images/icon-twitter.png" />
              </a>
              <a href="https://www.instagram.com/ensemblesignal">
                <img src="images/icon-instagram.png" />
              </a>
            </div>
          </div>
          <div className="half">
            <h2 className="sectionName">Hear from Us</h2>
            <p>
              You can get news and event announcements by signing up for our
              email newsletter:
            </p>
            <div id="mc_embed_signup">
              <form
                action="http://signalensemble.us2.list-manage.com/subscribe/post?u=605dc4a28d902f04c2691f349&amp;amp;id=024f929d9d"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
                className="validate"
              >
                <div className="mc-field-group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    defaultValue=""
                    name="EMAIL"
                    id="mce-email"
                    className="required email"
                  />
                </div>
                <div id="mce-responses" className="clear">
                  <div
                    style={{ display: 'none' }}
                    id="mce-error-response"
                    className="response"
                  ></div>
                  <div
                    style={{ display: 'none' }}
                    id="mce-success-response"
                    className="response"
                  ></div>
                </div>
                <div className="clear">
                  <input
                    type="submit"
                    defaultValue="Go"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </Container>

    <style jsx>{`
      .flex {
        flex-direction: column-reverse;
      }

      @media screen and (min-width: 720px) {
        .flex {
          flex-direction: row;
        }
      }

      .donateButton {
        display: block;
        text-decoration: none;
        font-size: 28px;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        background-color: #fff;
        color: #7d83e6;
        border: 1px solid #7d83e6;
        width: 210px;
        padding: 15px 0;
        margin-bottom: 20px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }

      .half {
        margin: 0 0 30px 0;
      }

      .double .sectionName {
        margin: 0 0 15px 0;
        line-height: 1;
      }

      @media screen and (min-width: 1024px) {
        .double {
          margin: 0;
          display: flex;
        }

        .half {
          margin: 0;
        }

        .double .sectionName {
          width: 500px;
        }

        .double p {
          width: 400px;
        }
      }

      .double a {
        text-decoration: underline;
        color: #000;
      }

      .double .socialButtons {
        margin-top: 20px;
        margin-bottom: 0;
      }

      .double #mc_embed_signup {
        position: relative;
        margin-top: 20px;
      }

      .double #mc_embed_signup input#mce-email {
        border: 1px solid #000;
        padding: 15px;
        font-size: 16px;
        width: calc(100% - 70px);
      }

      .double #mc_embed_signup input#mc-embedded-subscribe {
        position: absolute;
        left: calc(100% - 60px);
        top: 0px;
        color: #fff;
        font-size: 16px;
        padding: 16px;
        width: 60px;
        background-color: #000;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }

      @media screen and (min-width: 720px) {
        .double #mc_embed_signup input#mce-email {
          width: 300px;
        }

        .double #mc_embed_signup input#mc-embedded-subscribe {
          left: 310px;
        }
      }

      /* Sidebar */

      .flex {
        display: flex;
        flex-direction: column;
      }

      @media screen and (min-width: 1024px) {
        .flex {
          flex-direction: row;
          justify-content: space-between;
        }
        .sidebar {
          width: 210px;
        }
      }

      .sidebar span {
        display: block;
        font-size: 13px;
        line-height: 20px;
        color: #666;
        margin-bottom: 20px;
      }

      .sidebar a {
        text-decoration: underline;
        color: #666;
      }
    `}</style>
  </>
)
