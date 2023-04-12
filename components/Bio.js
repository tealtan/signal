import React from 'react'

import Container from './Container'

import BlockContent from '@sanity/block-content-to-react'

class Bio extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    return (
      <>
        <Container>
            <h1>{this.props.title}</h1>
            <BlockContent
                blocks={this.props.body}
                imageOptions={{ w: 750, fit: 'max' }}
            />
        </Container>
        <style jsx>{`
        `}</style>
      </>
    )
  }
}

export default Bio
