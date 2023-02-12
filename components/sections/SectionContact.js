import React from 'react'

import Container from '../Container'
import Section from './Section'

import BlockContent from '@sanity/block-content-to-react'

class SectionContact extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    return (
      <>
        <Container>
          <Section hasBorder>
            <div className="contact-section">
              <div className="half">
                <h3>{this.props.title}</h3>
                <BlockContent
                  blocks={this.props.body}
                  imageOptions={{ w: 750, fit: 'max' }}
                />
                <div
                  dangerouslySetInnerHTML={{ __html: this.props.socialButtons }}
                ></div>
              </div>

              <div className="half">
                <h3>{this.props.emailTitle}</h3>
                <BlockContent
                  blocks={this.props.emailBody}
                  imageOptions={{ w: 750, fit: 'max' }}
                />
                <div
                  dangerouslySetInnerHTML={{ __html: this.props.emailForm }}
                ></div>
              </div>
            </div>
          </Section>
        </Container>
        <style jsx>{`
          h3 {
            text-transform: uppercase;
          }
          .contact-section {
            display: flex;
          }
          .half {
            margin: 0 0 30px 0;
          }

          @media screen and (min-width: 1024px) {
            .contact-section {
              margin: 0;
              display: flex;
            }

            .half {
              margin: 0;
              width: 500px;
            }
          }
        `}</style>
        <style global jsx>{`
          @media screen and (min-width: 1024px) {
            .contact-section p {
              width: 400px;
            }
          }

          .contact-section a {
            text-decoration: underline;
            color: #000;
          }

          .contact-section .socialButtons {
            margin-top: 20px;
            margin-bottom: 0;
          }

          .contact-section #mc_embed_signup {
            position: relative;
            margin-top: 20px;
          }

          .contact-section #mc_embed_signup input#mce-email {
            border: 1px solid #000;
            padding: 15px;
            font-size: 16px;
            width: calc(100% - 70px);
          }

          .contact-section #mc_embed_signup input#mc-embedded-subscribe {
            cursor: pointer;
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
            .contact-section #mc_embed_signup input#mce-email {
              width: 300px;
            }

            .contact-section #mc_embed_signup input#mc-embedded-subscribe {
              left: 310px;
            }
          }
        `}</style>
      </>
    )
  }
}

export default SectionContact
