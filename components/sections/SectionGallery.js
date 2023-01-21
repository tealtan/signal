import React from 'react'

import Container from '../Container'
import Section from './Section'

class SectionGallery extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    return (
      <>
        <Container>
          <Section hasBorder>
            <div id="gallery">
              <div className="galleryWindow">
                <div className="galleryContainer">
                  {Object.values(this.props.images).map((image) => (
                    <img
                      loading="lazy"
                      alt=""
                      key={image._key}
                      src={image.url + '?h=420&auto=format&q=75'}
                    />
                  ))}
                </div>
              </div>
              <figcaption>{this.props.photoCredit}</figcaption>
            </div>
          </Section>
        </Container>
        <style jsx>{`
          .galleryWindow {
            width: 100vw;
            margin-left: calc(-50vw + 50%);
            overflow-x: scroll;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
          }

          .galleryContainer {
            height: 150px;
            display: flex;
            flex-direction: row;
            gap: 15px;
            padding: 0 20px;
          }

          @media screen and (min-width: 720px) {
            .galleryContainer {
              height: 310px;
            }
          }

          figcaption {
            text-align: right;
          }
        `}</style>
      </>
    )
  }
}

export default SectionGallery
