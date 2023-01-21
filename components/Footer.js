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
              <span>2023 Ensemble Signal</span>
            </footer>
          </Section>
        </Container>

        <style jsx>{`
          span {
            font-size: 12px;
            color: #999;
          }
        `}</style>
      </>
    )
  }
}

export default Footer
