import React from 'react'

import Container from '../Container'
import Section from './Section'
import SectionHeader from '../SectionHeader'

import BlockContent from '@sanity/block-content-to-react'

class SectionPeople extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    return (
      <>
        <Container>
          <Section>
            <SectionHeader text={this.props.title} id="people" color="#27D5FF" />
            <div className="flex">
              <div className="sidebar">
                <BlockContent
                  blocks={this.props.sectionA}
                />
              </div>
            </div>
            <div className="flex">
              <div className="sidebar">
                <BlockContent
                  blocks={this.props.sectionB}
                />
              </div>
            </div>
            <div className="flex">
              <div className="sidebar">
                <BlockContent
                  blocks={this.props.sectionC}
                />
              </div>
            </div>
          </Section>
        </Container>
        <style jsx>{`
        `}</style>
      </>
    )
  }
}

export default SectionPeople
