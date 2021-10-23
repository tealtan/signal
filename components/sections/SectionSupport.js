import Container from '../Container'
import Section from './Section'
import SectionHeader from '../SectionHeader'

export default () => (
  <>
    <Container>
      <Section>
        <SectionHeader text="Support &amp; Donate" color="#7d83e6" />
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
        <div id="double">
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
      /* Content */

      section {
        padding: 30px 15px;
        border-bottom: 1px solid #e2e2e2;
      }

      @media screen and (min-width: 1024px) {
        section {
          padding: 70px 0;
        }
      }

      .sectionName {
        font-size: 54px;
        line-height: 54px;
        margin: 0 0 30px 0;
        text-transform: uppercase;
      }

      @media screen and (min-width: 1024px) {
        .sectionName {
          font-size: 200px;
          line-height: 175px;
          margin: 0 0 125px 0;
        }
      }

      #double .sectionName {
        font-size: 24px;
      }

      h2:not(.sectionName) {
        max-width: 750px;
        margin: 0 0 30px 0;
        font-size: 28px;
        line-height: 40px;
      }

      h3 {
        margin-top: 28px;
        margin-bottom: 3px;
      }

      p {
        color: #333;
        font-size: 16px;
        line-height: 24px;
        max-width: 660px;
      }

      p {
        margin-bottom: 18px;
      }

      @media screen and (min-width: 1024px) {
        p {
          color: #333;
          font-size: 18px;
          line-height: 28px;
          max-width: 660px;
        }

        p {
          margin-bottom: 28px;
        }
      }

      a,
      a:visited {
        color: #000;
        text-decoration: none;
      }

      figcaption {
        color: #cccccc;
        font-size: 12px;
        text-align: right;
        margin: 5px 5px 0 0;
      }

      .bigText,
      .quoteText p {
        font-size: 22px;
        line-height: 28px;
        font-style: italic;
        font-weight: 700;
        max-width: 750px;
        margin: 0 0 30px 0;
      }

      @media screen and (min-width: 720px) {
        .bigText,
        .quoteText p {
          font-size: 28px;
          line-height: 40px;
        }
      }

      .quoteSource {
        margin-left: 15px;
        text-transform: uppercase;
        font-size: 13px;
        line-height: 16px;
        font-weight: 400;
        font-style: normal;
        display: inline-block;
        color: #999;
      }

      .quote p {
        max-width: 750px;
      }

      /* Support, Contact, Newsletter */

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

      #double .sectionName {
        margin: 0 0 15px 0;
        line-height: 1;
      }

      @media screen and (min-width: 1024px) {
        #double {
          margin: 0;
          display: flex;
        }

        .half {
          margin: 0;
        }

        #double .sectionName {
          width: 500px;
        }

        #double p {
          width: 400px;
        }
      }

      #double a {
        text-decoration: underline;
        color: #000;
      }

      #double .socialButtons {
        margin-top: 20px;
        margin-bottom: 0;
      }

      #double #mc_embed_signup {
        position: relative;
        margin-top: 20px;
      }

      #double #mc_embed_signup input#mce-email {
        border: 1px solid #000;
        padding: 15px;
        font-size: 16px;
        width: calc(100% - 70px);
      }

      #double #mc_embed_signup input#mc-embedded-subscribe {
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
        #double #mc_embed_signup input#mce-email {
          width: 300px;
        }

        #double #mc_embed_signup input#mc-embedded-subscribe {
          left: 310px;
        }
      }
    `}</style>
  </>
)
