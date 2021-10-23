import Container from '../Container'
import NavButton from '../NavButton'

export default () => (
  <>
    <header>
      <div className="coverImage">
        <div className="logo">
          <div id="wrapper">
            <svg className="mark" viewBox="0 0 644 644" version="1.1">
              <path d="M310 256.6c-1.2-3.4-3.3-6-5.5-7.8-3.7-2.8-7.8-3.1-11.2-3.1-3.7 0-8.5.6-12.6 4.2-3 2.7-5.2 7.2-5.2 11.8 0 3.1 1.2 6.4 4.2 9.1 1.9 1.8 6.3 4.2 8.4 5.2l9 4.2c4.6 2.1 9.1 4.8 12.7 8.5 5.7 5.8 6.7 11.1 6.7 17.5 0 5.8-1 15-8.4 22.6-8.4 8.7-18.9 9.6-25.9 9.6-8.1 0-14.7-1.5-20.6-7.5-4.3-4.5-7.6-11.1-8.4-18.3l11.1-3c.3 5.1 2.2 9.7 5.4 13 4.3 4.5 9.3 5.2 14.2 5.2 4.8 0 10.9-.7 15.6-5.5 3.7-3.9 5.4-9.7 5.4-14.5 0-6-2.7-10.3-5.4-12.7-1.9-1.8-6.6-4.5-9.7-6l-7.9-3.7c-2.7-1.2-8.5-4.2-11.8-7.6-2.7-2.8-5.7-7.6-5.7-15.4 0-7 2.1-13.3 7.8-18.9 6.3-6.1 13.6-8.4 22-8.4 4.3 0 11.1.6 16.5 4.2 3.9 2.5 7.2 6.7 9 11.4l-9.7 5.9z" fill="#fff"/>
              <path d="M327.2 189.1L315 288.9h-11.1l12.3-99.8h11z" fill="#fff"/>
              <path d="M370.4 307.3h33.2l-.3 2.4c-1.2 9.3-3.9 23.2-14.7 34.7-10.2 10.9-22.7 14.8-36.5 14.8-12.6 0-24.5-3.6-34.1-13.2-7.3-7.3-13.2-18.1-13.2-33.4 0-17.8 7.3-31.6 16.5-40.7 12-12.1 25.7-16 41.2-16 9.6 0 18 1.6 26.2 6.9 7 4.3 11.4 9.9 14.2 14.8l-9.1 7.5c-2.7-5.4-6.4-9.7-12.1-13.3-5.8-3.7-11.7-5.4-19.3-5.4-16.3 0-26.9 6.7-32.8 12.4-9.1 9.1-13.3 22.3-13.3 33.5 0 10 3.9 19.6 10.3 26.2 7.9 8.2 17.7 10.2 26.6 10.2 8.2 0 18.3-1.5 26.6-10.2 5.7-5.7 9.1-13.6 10.6-20.8h-21.3l1.3-10.4z" fill="#fff"/>
              <path d="M240.4 416.7l12.7-104 60.1 72.5 17.5-38.7 7 1.9-29.6 48-47.2-57-9.4 77.4h-11.1v-.1zM376.8 345.1l-9.3 75.7H395l-1.3 10.5h-38.6l10-81.4 11.7-4.8z" fill="#fff"/>
              <path d="M334.6 350.1l-.6-1.8-3.5-.4-2.3-.5-1.3 2.1L273 445h12.5l15.4-27.7 5.7-10.2 21.9-39.8 11.9 40 3 10 8.3 27.7h11.9l-29-94.9z" fill="#fff"/>
            </svg>

            <svg className="circles" viewBox="0 0 644 644" version="1.1">
              <g fill="#FFF" fillRule="evenodd">
                <path id="c1" className="st" d="M322 644C144.2 644 0 499.8 0 322S144.2 0 322 0s322 144.2 322 322-144.2 322-322 322zm0-2c176.7 0 320-143.3 320-320S498.7 2 322 2 2 145.3 2 322s143.3 320 320 320z"/>
                <path id="c2" className="st" d="M321 616C158.6 616 27 484.4 27 322S158.6 28 321 28s294 131.6 294 294-131.6 294-294 294zm0-1.8c161.4 0 292.2-130.8 292.2-292.2 0-161.4-130.8-292.2-292.2-292.2C159.6 29.8 28.8 160.6 28.8 322c0 161.4 130.8 292.2 292.2 292.2z"/>
                <path id="c3" className="st" d="M322 590C174 590 54 470 54 322S174 54 322 54s268 120 268 268-120 268-268 268zm0-1.7c147.1 0 266.3-119.2 266.3-266.3 0-147.1-119.2-266.3-266.3-266.3C174.9 55.7 55.7 174.9 55.7 322c0 147.1 119.2 266.3 266.3 266.3z"/>
                <path id="c4" className="st" d="M321.5 565C187.6 565 79 456.4 79 322.5S187.6 80 321.5 80 564 188.6 564 322.5 455.4 565 321.5 565zm0-1.5c133.1 0 241-107.9 241-241s-107.9-241-241-241-241 107.9-241 241 107.9 241 241 241z"/>
                <path id="c5" className="st" d="M322.5 536C204.6 536 109 440.4 109 322.5S204.6 109 322.5 109 536 204.6 536 322.5 440.4 536 322.5 536zm0-1.3c117.2 0 212.2-95 212.2-212.2 0-117.2-95-212.2-212.2-212.2-117.2 0-212.2 95-212.2 212.2 0 117.2 95 212.2 212.2 212.2z"/>
              </g>
            </svg>

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

/* Header */

.coverImage {
  background-image: url('https://images.contentful.com/iyieuwr67lde/5w2hd0sLeMwYYm0cqm6aiu/d9512300a8c15e771f1dac9b7ebcd7dc/header_image_1500.jpg');
  background-size: cover;
  background-position: center top;
  width: 100%;
  height: 100vh;
  max-height: 850px;
}

@media screen and (-webkit-min-device-pixel-ratio: 2),
@media screen and (min-device-pixel-ratio: 2) {
  .coverImage { background-image: url('https://images.contentful.com/iyieuwr67lde/3mafctyOWcYiGmAygAOGyY/8c966d9484c2b80da624d7d8858ff561/header_image_3000.jpg'); }
}

header .logo {
  margin: 0 auto;
  padding-top: 30px;
}

header .logo,
header #wrapper,
header .logo img {
  width: 150px;
  height: 150px;
}

@media screen and (min-width: 1024px) {
  header .logo {
    padding-top: 50px;
  }

  header .logo,
  header #wrapper,
  header .logo img {
    width: 252px;
    height: 252px;
  }
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

#mainNav a {
  display: block;
  padding: 14px 15px;
  margin: 5px 15px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
}

@media screen and (min-width: 1024px) {
  #mainNav a {
    width: 242px;
    margin: 0;
  }
}

#mainNav a#nav1 { background-color: #FB005A; }
#mainNav a#nav2 { background-color: #E8CF2D; }
#mainNav a#nav3 { background-color: #2DC5EF; }
#mainNav a#nav4 { background-color: #7B83DF; }

/* Logo Animation */

#wrapper {
  position: relative;
}
#mark {
  position: absolute;
  top: 0;
  left: 0;
}
.circles {
  position: absolute;
  top: 0;
  left: 0;
}
@keyframes pulse5 {
  0% { opacity: 0; }
  15% { opacity: 1; }
  50% { opacity: 0.05; }
  100% { opacity: 0.05; }
}
@keyframes pulse4 {
  0% { opacity: 0; }
  15% { opacity: 0.8; }
  65% { opacity: 0.05; }
  100% { opacity: 0.05; }
}
@keyframes pulse3 {
  0% { opacity: 0; }
  15% { opacity: 0.6; }
  80% { opacity: 0.05; }
  100% { opacity: 0.05; }
}
@keyframes pulse2 {
  0% { opacity: 0; }
  15% { opacity: 0.4; }
  95% { opacity: 0.05; }
  100% { opacity: 0.05; }
}
@keyframes pulse1 {
  0% { opacity: 0; }
  20% { opacity: 0.2; }
  95% { opacity: 0.05; }
  100% { opacity: 0.05; }
}
#c5 { animation: pulse5 4s linear infinite; }
#c4 { animation: pulse4 4s linear infinite; animation-delay: 0.2s; }
#c3 { animation: pulse3 4s linear infinite; animation-delay: 0.3s; }
#c2 { animation: pulse2 4s linear infinite; animation-delay: 0.4s; }
#c1 { animation: pulse1 4s linear infinite; animation-delay: 0.5s; }

/* Shared */

figcaption {
  color: #CCCCCC;
  font-size: 12px;
  text-align: right;
  margin: 5px 5px 0 0;
}

    `}</style>
  </>
)
