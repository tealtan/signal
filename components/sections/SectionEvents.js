import React from 'react'

import client from '../../sanityClient'

import Container from '../Container'
import Section from './Section'
import SectionHeader from '../SectionHeader'
import Event from '../Event'

// For the year nav
const currentYear = new Date().getFullYear()
const startYear = 2008
const getYearRange = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

let yearRange = getYearRange(currentYear, startYear, -1)
yearRange = yearRange.filter((year) => year != 2020) // Skip 2020

class SectionEvents extends React.Component {
  state = { events: [] }

  componentDidMount() {
    this.setEvents(this.props.eventsList)
  }

  setEvents = (response) => {
    this.setState({ events: response })
    console.log(response)
  }

  fetchEventsFromYear = (year) => {
    client
      .fetch(
        `*[_type == "event"
          && date > "${year}-01-01"
          && date < "${year}-12-31'"]
          | order(date)`
      )
      .then((data) => {
        this.setEvents(data)
      })
      .catch(console.error)
  }

  render() {
    return (
      <>
        <Container>
          <Section hasBorder>
            <SectionHeader
              text={this.props.title}
              color="#FF0058"
              id="events"
            />
            <div className="pastEvents">
              <h3>Past events</h3>
              <nav>
                {yearRange.map((year, i) => (
                  <a
                    className="pastEventsYear"
                    data-year={year}
                    href={`#year-${year}`}
                    onClick={() => this.fetchEventsFromYear(year)}
                    key={i}
                  >
                    {year}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              {this.state.events.map((event) => (
                <Event key={event._id} {...event} />
              ))}
            </div>
          </Section>
        </Container>
        <style jsx>{`
          .pastEvents {
            margin: 0 0 30px 0;
          }
          @media screen and (min-width: 720px) {
            .pastEvents {
              margin: -105px 0 125px 0;
            }
          }

          .pastEvents h3 {
            display: inline;
            font-size: 1.125rem;
            margin-right: 0.625rem;
          }
          .pastEvents nav {
            display: inline;
          }
          .pastEventsYear {
            display: inline-block;
            font-size: 1.125rem;
            font-weight: 700;
            margin-right: 0.625rem;
            color: #ff0058;
          }
        `}</style>
      </>
    )
  }
}

export default SectionEvents
