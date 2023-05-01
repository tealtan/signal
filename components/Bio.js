import React from 'react'
import Link from 'next/link'

import BlockContent from '@sanity/block-content-to-react'

class Bio extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    return (
      <>
        <div className="bioWrapper">
          <Link href="/">
            <a className="closeButton">×</a>
          </Link>
          <h1>{this.props.title}</h1>
          <div className="bioLayout">
            <div className="bioImage">
              <img
                src={ this.props.portraitPhotoImage.url + '?w=500&auto=format&q=75' }
                alt={ "Picture of " + this.props.title }
              />
              <figcaption>{this.props.photoCredit}</figcaption>
            </div>
            <div>
                <BlockContent
                    blocks={this.props.body}
                    imageOptions={{ w: 750, fit: 'max' }}
                />
            </div>
          </div>
        </div>
        <style jsx>{`
          .bioWrapper {
            position: relative;
            width: calc(100% - 30px);
            max-width: 1000px;

            margin: 20px auto;
            padding: 20px;

            background: #fff;
            border-radius: 3px;
          }

          @media screen and (min-width: 720px) {
            .bioWrapper {
              margin: 60px auto;
              padding: 60px 60px 60px 60px;
            }
          }

          .bioLayout {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          @media screen and (min-width: 720px) {
            .bioLayout {
              flex-direction: row-reverse;
              gap: 3rem;
            }
          }

          .closeButton {
            display: inline-block; width: 2.5rem; height: 2.5rem; text-align: center; line-height: 1.25;
            background: rgba(255,255,255,0.8); border-radius: 50%;

            font-size: 2rem;
            font-weight: 700;

            float: right;
            position: sticky;
            top: 16px;
          }

          .closeButton:hover {
            background: rgba(240,240,240,0.8);
          }

          @media screen and (min-width: 720px) {
            .closeButton {
              position: sticky;
              top: 16px;
              margin-top: -44px;
              transform: translateX(3rem);
            }
          }

          @media screen and (min-width: 720px) {
            .bioImage {
              align-self: flex-start; // needed to make height auto inside a flex container, to let sticky work
              position: sticky; top: 60px;
            }
          }
        `}</style>
      </>
    )
  }
}

export default Bio
