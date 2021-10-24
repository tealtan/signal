import Container from '../Container'
import Section from './Section'
import SectionHeader from '../SectionHeader'

export default function SectionPeople() {
  return (
    <>
      <Container>
        <Section>
          <SectionHeader text="People" color="#27d5ff" />
          <div id="peopleSignalTeam">
            <div className="sidebar">
              <h3>Signal Team</h3>
            </div>
            <div>
              <div className="row">
                <div className="column">
                  <p>
                    <span className="personWithBio">Lauren Radnofsky</span>
                    <em className="break">Co-Artistic/Executive Director</em>
                  </p>
                </div>
                <div className="column">
                  <p>
                    <span className="personWithBio">Brad Lubman</span>
                    <em className="break">
                      Co-Artistic Director/Music Director
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="peopleArtistRoster">
            <div className="sidebar">
              <h3>Artist Roster</h3>
              <span>
                A supergroup of independent artists who have worked closely with
                one another and with music director Brad Lubman over the last
                decade, able to appear in flexible configurations of 1-30+
                players, based on the needs of each season’s diverse
                programming.
              </span>
            </div>
            <div className="row">
              <div className="column">
                <p>
                  <em className="break">Violin</em>
                  <span className="break">Lauren Cauley</span>
                  <span className="break">Olivia De Prato</span>
                  <span className="break">Will Knuth</span>
                  <span className="break">Yuki Numata Resnick</span>
                  <span className="break">Courtney Orlando</span>
                  <span className="break">Chris Otto</span>
                  <span className="break">Ari Streisfeld</span>
                </p>
                <p>
                  <em className="break">Viola</em>
                  <span className="break">Caleb Burhans</span>
                  <span className="break">Isabel Hagen</span>
                  <span className="break">Victor Lowrie</span>
                  <span className="break">John Pickford Richards</span>
                </p>
                <p>
                  <em className="break">Cello</em>
                  <span className="break">Kevin McFarland</span>
                  <span className="break">Lauren Radnofsky</span>
                  <span className="break">Mariel Roberts</span>
                </p>
                <p>
                  <em className="break">Bass </em>
                  <span className="break">Greg Chudzik</span>
                </p>
                <p>
                  <em className="break">Flute</em>
                  <span className="break">Kelli Kathman</span>
                  <span className="break">Jessica Schmitz</span>
                </p>
                <p>
                  <em className="break">Oboe</em>
                  <span className="break">Jacqueline Leclair</span>
                  <span className="break">Christa Robinson</span>
                </p>
                <p>
                  <em className="break">Clarinet</em>
                  <span className="break">Adrián Sandí</span>
                  <span className="break">Ken Thomson</span>
                </p>
              </div>
              <div className="column">
                <p>
                  <em className="break">Bassoon</em>
                  <span className="break">Brad Balliett</span>
                </p>
                <p>
                  <em className="break">Trumpet</em>
                  <span className="break">Mike Gurfield</span>
                </p>
                <p>
                  <em className="break">Trombone</em>
                  <span className="break">Steven Parker</span>
                </p>
                <p>
                  <em className="break">Piano/Keyboard</em>
                  <span className="break">David Friend</span>
                  <span className="break">Oliver Hagen</span>
                  <span className="break">Lisa Moore</span>
                  <span className="break">Ning Yu</span>
                </p>
                <p>
                  <em className="break">Percussion</em>
                  <span className="break">Matt Evans</span>
                  <span className="break">Amy Garapic</span>
                  <span className="break">Carson Moody</span>
                  <span className="break">Doug Perkins</span>
                  <span className="break">Bill Solomon</span>
                </p>
                <p>
                  <em className="break">Cimbalom/Percussion</em>
                  <span className="break">Nick Tolle</span>
                </p>
                <p>
                  <em className="break">Harp</em>
                  <span className="break">Nuiko Wadden</span>
                </p>
                <p>
                  <em className="break">Sound Director</em>
                  <span className="break">Paul Coleman</span>
                </p>
              </div>
            </div>
          </div>
          <div id="peopleBoardOfDirectors">
            <div className="sidebar">
              <h3>Board of Directors</h3>
            </div>
            <div className="row">
              <div className="column">
                <p>
                  Kristian Bezuidenhout<em className="break">President</em>
                </p>
                <p>
                  John McDonald<em className="break">Secretary</em>
                </p>
              </div>
              <div className="column">
                <p>
                  Barbara Radnofsky<em className="break">Treasurer</em>
                </p>
                <p>Lena Saltos</p>
              </div>
            </div>
          </div>
        </Section>
      </Container>
      <style jsx>{`
        /* People */

        h3 {
          margin-top: 0;
          margin-bottom: 20px;
        }

        @media screen and (min-width: 1024px) {
          .sidebar {
            float: left;
          }
        }

        .row {
          display: flex;
        }

        @media screen and (min-width: 1024px) {
          .row {
            width: 650px;
          }
        }

        .row + .row {
          margin-top: 20px;
        }

        .column {
          width: 50%;
          padding-right: 30px;
        }

        .break {
          display: block;
        }

        #peopleSignalTeam,
        #peopleArtistRoster,
        #peopleBoardOfDirectors {
          clear: both;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        #peopleSignalTeam,
        #peopleArtistRoster {
          margin-bottom: 30px;
        }

        .personWithBio {
          cursor: pointer;
        }

        .personWithBio:after {
          content: '×';
          font-size: 28px;
          color: #27d5ff;
          display: inline-block;
          margin: 0 0 -5px 10px;
          -ms-transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      `}</style>
    </>
  )
}
