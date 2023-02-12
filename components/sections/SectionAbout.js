import React from 'react'

import Container from '../Container'
import Section from './Section'
import SectionHeader from '../SectionHeader'

import BlockContent from '@sanity/block-content-to-react'

class SectionAbout extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  state = {
    drawerHidden: true,
  }

  toggleDrawer() {
    this.setState({
      drawerHidden: !this.state.drawerHidden,
    })
    console.log(this.state.drawerHidden)
  }

  render() {
    return (
      <>
        <Container>
          <Section>
            <SectionHeader text={this.props.title} id="about" color="#E5E5E5" />
            <div className="flex">
              <div
                className={`drawer ${
                  this.state.drawerHidden ? 'drawerClosed' : ''
                }`}
              >
                <BlockContent
                  blocks={this.props.body}
                  imageOptions={{ w: 750, fit: 'max' }}
                />
                <a
                  className="aboutMore"
                  onClick={this.toggleDrawer.bind(this)}
                >Read Full Bio</a>
                <div
                  className="drawerContents"
                >
                  <BlockContent
                    blocks={this.props.bodyReadMore}
                    imageOptions={{ w: 750, fit: 'max' }}
                  />
                </div>
              </div>
              <div
                className="sidebar"
                dangerouslySetInnerHTML={{ __html: this.props.sidebar }}
              ></div>
            </div>
          </Section>
        </Container>
        <style jsx>{`
          .drawer {
            cursor: auto;
          }
          .aboutMore {
            cursor: pointer;
            display: block;
            margin-top: 20px;
            font-size: 1rem;
            line-height: 1.5;
            font-weight: 700;
          }

          .drawer:not(.drawerClosed) .aboutMore {
            display: none;
          }

          @media screen and (min-width: 1024px) {
            .aboutMore {
              font-size: 1.125rem;
              line-height: 1.55;
            }

            .sidebar {
              width: 220px;
            }
          }
        `}</style>
        <style global jsx>
          {`
            @media screen and (max-width: 720px) {
              .sidebar {
                display: none;
              }
            }
          `}
        </style>
      </>
    )
  }
}

export default SectionAbout
