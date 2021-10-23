import Container from '../Container'
import Section from './Section'
import SectionHeader from '../SectionHeader'

export default () => (
  <>
    <Container>
      <Section>
        <SectionHeader text="Ensemble Signal" color="#e5e5e5" />
        <div className="flex">
          <div>
            <div className="quote">
              <div className="quoteText">
                <p>
                  “A new-music ensemble that by this point practically
                  guarantees quality performances…”
                  <span className="quoteSource">The New York Times</span>
                </p>
              </div>
            </div>
            <div className="drawer drawerClosed">
              <p>
                Ensemble Signal, described by the New York Times as “one of the
                most vital groups of its kind,” is a NY-based ensemble dedicated
                to offering the broadest possible audience access to a diverse
                range of contemporary works through performance, commissioning,
                recording, and education. Since its debut in 2008, the Ensemble
                has performed over 300 concerts, has given the NY, world, or US
                premieres of over 20 works, and co-produced ten recordings.
              </p>
              <div className="drawerContents">
                <p>
                  Signal was founded by Co-Artistic/Executive Director Lauren
                  Radnofsky and Co-Artistic Director/Conductor Brad Lubman.
                  Called a “new music dream team” (TimeOutNY), Signal regularly
                  performs with Lubman and features a supergroup of independent
                  artists from the modern music scene. Lubman, one of the
                  foremost conductors of modern music and a leading figure in
                  the field for over two decades, is a frequent guest with the
                  world’s most distinguished orchestras and new music ensembles.
                </p>
                <p>
                  Signal’s passion for the diverse range of music being written
                  today is a driving force behind their projects. The Ensemble’s
                  repertoire ranges from minimalism or pop-influenced to the
                  iconoclastic European avant-garde. Signal’s projects are
                  carefully conceived through close collaboration with
                  cooperating presenting organizations, composers, and artists.
                  Signal is flexible in size and instrumentation - everything
                  from solo to large ensemble and opera, including film or
                  multimedia, in any possible combination - enabling it to meet
                  the ever-changing demands on the 21st century performing
                  ensemble.
                </p>
                <p>
                  The Ensemble is a frequent guest of the finest concert halls
                  and international festivals including Lincoln Center Festival,
                  the Los Angeles Philharmonic’s Series at Walt Disney Concert
                  Hall, BIG EARS Festival, Carnegie Hall's Zankel Hall, Lincoln
                  Center American Songbook, The Library of Congress, Washington
                  Performing Arts, Cal Performances, Tanglewood Music Festival
                  of Contemporary Music, Ojai Music Festival, the Guggenheim
                  Museum (NY), the Wordless Music Series, and the Bang on a Can
                  Marathon. They regularly work directly with nearly all the
                  composers they perform in order to offer the most authentic
                  interpretations, a list that includes Steve Reich, Helmut
                  Lachenmann, Michael Gordon, David Lang, Julia Wolfe, Oliver
                  Knussen and Hans Abrahamsen.
                </p>
                <p>
                  Throughout 2017-18, they gave the US premieres of a new work
                  for 19 musicians by Steve Reich entitled <em>Runner</em> at
                  venues across the US. In Spring 2019 Signal performed the
                  world premiere and over 100 performances of a new work for
                  large ensemble by Steve Reich in collaboration with artwork
                  and film by Gerhard Richter at the inaugural season of New
                  York’s new multi-arts venue, The Shed. Signal’s recording of
                  Reich’s <em>Music for 18 Musicians</em> was released in May
                  2015 on harmonia mundi and received a Diapason d’or and
                  appeared on the Billboard Classical Crossover Charts.
                  Additional recordings include a CD &amp; DVD of music by
                  Lachenmann, with the composer as soloist in
                  <em>“…Zwei Gefühle…”</em> (Mode) and Steve Reich’s
                  <em>Double Sextet &amp; Radio Rewrite</em> (harmonia mundi).
                  Signal’s educational activities include community outreach
                  programs in diverse settings as well as workshops with the
                  next generation of composers and performers.
                </p>
              </div>
              <a className="aboutMore">Read Full Bio</a>
            </div>
          </div>
          <div className="sidebar">
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
            <span>
              You can get news and event announcements by signing up for our
              <a href="http://signalensemble.us2.list-manage.com/subscribe/post?u=605dc4a28d902f04c2691f349&amp;amp;id=024f929d9d">
                email newsletter.
              </a>
            </span>
            <span>
              Want to get in touch? For all inquiries, contact
              <a href="mailto:signaloffice@gmail.com">
                Co-Artistic/Executive Director Lauren Radnofsky.
              </a>
            </span>
          </div>
        </div>
      </Section>
    </Container>
    <style jsx>{`
      .drawer:not(.drawerClosed) .drawerContents {
        padding-top: 20px;
      }

      .aboutMore {
        display: block;
        margin-top: 20px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
      }

      .drawer:not(.drawerClosed) .aboutMore {
        display: none;
      }

      @media screen and (min-width: 1024px) {
        .drawer:not(.drawerClosed) .drawerContents {
          padding-top: 30px;
        }

        .aboutMore {
          font-size: 18px;
          line-height: 28px;
        }
      }

      @media screen and (max-width: 720px) {
        .sidebar {
          display: none;
        }
      }
    `}</style>
  </>
)
