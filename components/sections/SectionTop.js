import React from 'react'

import Container from '../Container'
import SignalLogo from '../SignalLogo'

class SectionTop extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    return (
      <>
        <header>
          <div
            className="coverImage"
            style={{
              backgroundImage:
                "url('" +
                this.props.backgroundImage.url +
                '?w=1400&auto=format&q=75' +
                "')",
            }}
          >
            <Container>
              <div className="logo">
                <SignalLogo />
              </div>
            </Container>
          </div>

          <figcaption>{this.props.photoCredit}</figcaption>

          <Container>
            <ul id="mainNav">
              {Object.values(this.props.links).map((navLink) => (
                <li key={navLink._key}>
                  <a href={navLink.linkUrl}>{navLink.linkText}</a>
                </li>
              ))}
            </ul>
          </Container>
        </header>
        <style jsx>{`
          /* Header */
          .coverImage {
            background-size: cover;
            background-position: center top;
            width: 100%;
            height: 100vh;
            max-height: 850px;
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

          figcaption {
            color: #cccccc;
            font-size: 12px;
            text-align: right;
            margin: 5px 5px 0 0;
          }

          #mainNav {
            margin-top: -255px;
            width: 100%;
            list-style-type: none;
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
            background-color: #000;
          }

          @media screen and (min-width: 1024px) {
            #mainNav a {
              width: 242px;
              margin: 0;
            }
          }

          #mainNav li:nth-of-type(1) a {
            background-color: #fb005a;
          }
          #mainNav li:nth-of-type(2) a {
            background-color: #e8cf2d;
          }
          #mainNav li:nth-of-type(3) a {
            background-color: #5ae798;
          }
          #mainNav li:nth-of-type(4) a {
            background-color: #7b83df;
          }
        `}</style>
        <style global jsx>{``}</style>
      </>
    )
  }
}

export default SectionTop
