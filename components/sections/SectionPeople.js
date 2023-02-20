import React from 'react'

import Container from '../Container'
import Section from './Section'
import SectionHeader from '../SectionHeader'
  import Person from '../Person'
import PersonGroup from '../PersonGroup'

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
              <PersonGroup
                leftCol={this.props.sectionAofPeopleLeftCol}
                rightCol={this.props.sectionAofPeopleRightCol}
                spacing='28px'
              />
            </div>
            <div className="flex">
              <div className="sidebar">
                <BlockContent
                  blocks={this.props.sectionB}
                />
              </div>
              <PersonGroup
                leftCol={this.props.sectionBofPeopleLeftCol}
                rightCol={this.props.sectionBofPeopleRightCol}
                spacing='0'
              />
            </div>
            <div className="flex">
              <div className="sidebar">
                <BlockContent
                  blocks={this.props.sectionC}
                />
              </div>
              <PersonGroup
                leftCol={this.props.sectionCofPeopleLeftCol}
                rightCol={this.props.sectionCofPeopleRightCol}
                spacing='28px'
              />
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
