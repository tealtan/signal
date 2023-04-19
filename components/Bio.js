import React from 'react'

import BlockContent from '@sanity/block-content-to-react'

class Bio extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <>
        <div className="bioWrapper">
            <div>
              <img
                className="bioImage"
                src={ this.props.portraitPhotoImage.url + '?w=500&auto=format&q=75' }
                alt={ "Picture of " + this.props.title }
              />
            </div>
            <div>
                <h1>{this.props.title}</h1>
                <BlockContent
                    blocks={this.props.body}
                    imageOptions={{ w: 750, fit: 'max' }}
                />
            </div>
        </div>
        <style jsx>{`
          .bioWrapper {
            width: calc(100% - 30px);
            max-width: 1000px;

            margin: 15px auto;
            padding: 20px;

            background: #fff;
            border-radius: 3px;

            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          @media screen and (min-width: 720px) {
            .bioWrapper {
              margin: 60px auto;
              padding: 60px;

              flex-direction: row;
              gap: 3rem;
            }
          }

          @media screen and (min-width: 720px) {
            .bioImage {
              position: sticky; top: 60px;
            }
          }
        `}</style>
      </>
    )
  }
}

export default Bio
