import React from 'react'

import Container from '../Container'
import Section from './Section'
import SectionHeader from '../SectionHeader'
import Recording from '../Recording'

class SectionListen extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    return (
      <>
        <Container>
          <Section hasBorder>
            <div
              className="sidebar"
              dangerouslySetInnerHTML={{ __html: this.props.sidebar }}
            ></div>
            <SectionHeader text={this.props.title} color="#5AE798" id="listen" />
            <div className="albums">
              {Object.values(this.props.recordings).map((recording, i) => (
                <Recording key={recording._key} {...recording} />
              ))}
            </div>
          </Section>
        </Container>
        <style jsx>{`
          @media screen and (max-width: 720px) {
            .sectionName {
              margin-bottom: 60px;
            }
          }

          .sidebar {
            float: right;
            margin: 22px 0 0 0;
            width: 110px !important;
          }

          @media screen and (min-width: 1024px) {
            .sidebar {
              margin-top: 22px;
            }
          }

          .albums,
          .videos {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
          }
        `}</style>
      </>
    )
  }
}

export default SectionListen
