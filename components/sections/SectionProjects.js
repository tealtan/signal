import React from 'react'

import Container from '../Container'
import Section from './Section'
import SectionHeader from '../SectionHeader'

import BlockContent from '@sanity/block-content-to-react'

import Project from '../Project'

class SectionProjects extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    return (
      <>
        <Container>
          <Section hasBorder>
            <SectionHeader text={this.props.title} id="projects" color="#E9D114" />
            <div style={{maxWidth: '750px'}}>
                <BlockContent
                    blocks={this.props.body}
                    imageOptions={{ w: 750, fit: 'max' }}
                />
                <p>
                    <a href="#events">
                        <strong>View complete past & current Signal projects here.</strong>
                    </a>
                </p>
            </div>
            {this.props.projects.map((project) => (
              <Project key={project._id} {...project}></Project>
            ))}
          </Section>
        </Container>
        <style jsx>{`
          .drawer {
            cursor: auto;
          }
          .aboutMore {
            cursor: pointer;
            display: block;
            margin-top: 20px;
            font-size: 1rem;
            line-height: 1.5;
            font-weight: 700;
          }

          .drawer:not(.drawerClosed) .aboutMore {
            display: none;
          }

          @media screen and (min-width: 1024px) {
            .aboutMore {
              font-size: 1.125rem;
              line-height: 1.55;
            }

            .sidebar {
              width: 220px;
            }
          }

          @media screen and (max-width: 720px) {
            .sidebar {
              display: none;
            }
          }
        `}</style>
      </>
    )
  }
}

export default SectionProjects
