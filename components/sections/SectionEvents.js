import * as contentful from 'contentful'
import Container from '../Container'
import SectionHeader from '../SectionHeader'
import Event from '../Event'

class SectionEvents extends React.Component {
  state = { events: [] }

  client = contentful.createClient({
    space: 'iyieuwr67lde',
    accessToken:
      '9b3f98f7a8648b0c76f7f43338b478be21b2b2cb13b7d1b1d81488de3ce2d3b3'
  })

  componentDidMount() {
    this.fetchEvents(2019).then(this.setEvents)
  }

  fetchEvents = (year) =>
    this.client.getEntries({
      content_type: 'events',
      'fields.date[lte]': year + 1 + '-01-01T00:00:00Z',
      'fields.date[gte]': year + '-01-01T00:00:00Z',
      order: 'fields.date'
    })

  setEvents = (response) => {
    this.setState({ events: response.items })
    console.log(response.items)
  }

  render() {
    return (
      <>
        <Container>
          <SectionHeader text="Events" color="#ff0058" />
          <div>
            {/* TODO
              - Override date if there's a custom date text
              - Add ability to load additional years
            */}
            {this.state.events.map((event) => (
              <Event
                key={event.fields.slug}
                date={event.fields.date}
                name={event.fields.name}
                location={event.fields.location}
                description={event.fields.description}
                url={event.fields.url}
              />
            ))}
          </div>
        </Container>
        <style jsx>{``}</style>
      </>
    )
  }
}

export default SectionEvents
