import Container from '../Container';
import NavButton from '../NavButton';

export default () => (
  <>
    <header>
      <div className="coverImage">
        <div className="logo">
          <div id="wrapper">
            <img id="mark" src="/static/images/mark.svg" />
            <img className="circles" src="/static/images/circles.svg" />
          </div>
        </div>
      </div>
      <figcaption>Photo by Stephanie Berger</figcaption>

      <Container>
        <nav id="mainNav">
          <NavButton link="#events" text="Upcoming Events" bgColor="#fb005a" />
          <NavButton link="#projects" text="Projects" bgColor="#e8cf2d" />
          <NavButton
            link="#stevereichprojects"
            text="Steve Reich Projects"
            bgColor="#2dc5ef"
          />
          <NavButton link="#support" text="Support" bgColor="#7b83df" />
        </nav>
      </Container>
    </header>
    <style jsx>{`
      #wrapper {
        position: relative;
      }
      .logo {
        margin: 0 auto;
        padding-top: 30px;
      }

      @media screen and (min-width: 1024px) {
        .logo {
          padding-top: 50px;
        }
        .logo,
        #wrapper,
        .logo img {
          width: 252px;
          height: 252px;
        }
      }

      #mark,
      .circles {
        position: absolute;
        top: 0;
        left: 0;
      }

      @media screen and (-webkit-min-device-pixel-ratio: 2) {
        .coverImage {
          background-image: url('https://images.contentful.com/iyieuwr67lde/3mafctyOWcYiGmAygAOGyY/8c966d9484c2b80da624d7d8858ff561/  header_image_3000.jpg');
        }
      }

      .coverImage {
        background-image: url('https://images.contentful.com/iyieuwr67lde/5w2hd0sLeMwYYm0cqm6aiu/d9512300a8c15e771f1dac9b7ebcd7dc/header_image_1500.jpg');
        background-size: cover;
        background-position: center top;
        width: 100%;
        height: 100vh;
        max-height: 850px;
      }

      figcaption {
        color: #ccc;
        font-size: 12px;
        text-align: right;
        margin: 5px 5px 0 0;
      }

      #mainNav {
        margin-top: -255px;
        width: 100%;
      }

      @media screen and (min-width: 1024px) {
        #mainNav {
          display: flex;
          justify-content: space-between;
          margin-top: -120px;
          margin-bottom: 65px;
          height: 50px;
          width: 100%;
        }
      }
    `}</style>
  </>
);
