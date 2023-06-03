import React from 'react'

import Container from '../Container'
import Section from './Section'
import SectionHeader from '../SectionHeader'

import BlockContent from '@sanity/block-content-to-react'

class SectionDonate extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    return (
      <>
        <Container>
          <Section hasBorder>
            <SectionHeader
              text={this.props.title}
              id="support"
              color="#7D83E6"
            />
            <div className="flex">
              <div className="donateContent" style={{ maxWidth: '750px' }}>
                <BlockContent
                  blocks={this.props.body}
                  imageOptions={{ w: 750, fit: 'max' }}
                />
              </div>
              <div className="sidebar supportSidebar">
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.props.sidebarDonateButton,
                  }}
                ></div>
                <BlockContent
                  blocks={this.props.sidebarText}
                  imageOptions={{ w: 750, fit: 'max' }}
                />
              </div>
            </div>
          </Section>
        </Container>
        <style jsx>{`
          .donateContent {
            max-width: 750px;
            margin: 0 0 30px 0;
          }
          @media screen and (max-width: 720px) {
            .sidebar {
              order: -1;
            }
          }
        `}</style>
        <style global jsx>
          {`
            .donateContent h2 {
              font-size: 1.75rem;
              line-height: 1.4;
            }
            .donateContent h3 {
              font-size: 1.17rem;
            }
            .donateContent p {
              margin-bottom: 0.3rem;
              min-height: 1em;
            }
            .donateButton {
              cursor: pointer;
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
          `}
        </style>
      </>
    )
  }
}

export default SectionDonate
