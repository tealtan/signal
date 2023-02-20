import React from 'react'

class Person extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    return (
      <>
        <div className="people">
          <p className={ this.props.group ? 'person-group' : ''}>{this.props.title}</p>
          <p><em>{this.props.position}</em></p>
        </div>
        <style jsx>{`
          p {
            margin: 0;
          }
          .person-group {
            font-style: italic;
            margin-top: 1.75rem;
          }
        `}</style>
      </>
    )
  }
}

export default Person
