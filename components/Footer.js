import React from 'react'

import Container from './Container'
import Section from './sections/Section'

class Footer extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    return (
      <>
        <Container>
          <Section padding="small" hasBorder>
            <footer>
              <span>{new Date().getFullYear()}, Ensemble Signal</span>
            </footer>
          </Section>
        </Container>

        <style jsx>{`
          span {
            font-size: 0.75rem;
            color: #999;
          }
        `}</style>
      </>
    )
  }
}

export default Footer
