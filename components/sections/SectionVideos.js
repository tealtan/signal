import React from 'react'

import Container from '../Container'
import Section from './Section'

class SectionVideos extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    return (
      <>
        <Container>
          <Section padding="none">
            <div
              className="videos"
              dangerouslySetInnerHTML={{
                __html: this.props.embeds.replace(
                  /<iframe /g,
                  "<iframe title='' loading=lazy "
                ),
              }}
            ></div>
          </Section>
        </Container>
        <style global jsx>{`
          .videos {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .videos iframe {
            background-color: #000;
            margin-bottom: 15px;
          }

          @media screen and (min-width: 1024px) {
            .videos iframe {
              height: 300px;
              width: calc(50% - 25px);
              margin-bottom: 50px;
            }
          }
        `}</style>
      </>
    )
  }
}

export default SectionVideos
