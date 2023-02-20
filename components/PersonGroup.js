import React from 'react'

import Person from './Person'

class PersonGroup extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    return (
      <>
        <div className="row">
          <div className="column" style={{ gap: this.props.spacing }}>
            {this.props.leftCol.map((person) => (
              <Person key={person._id} {...person}/>
            ))}
          </div>
          <div className="column" style={{ gap: this.props.spacing }}>
            {this.props.rightCol.map((person) => (
              <Person key={person._id} {...person} />
            ))}
          </div>
        </div>
        <style jsx>{`
          @media screen and (min-width: 1024px) {
            .row {
              width: 650px;
            }
          }
          .row {
            display: flex;
            margin-top: 28px;
          }
          .column {
            padding-right: 30px;
            width: 50%;
            display: flex;
            flex-direction: column;
          }
        `}</style>
      </>
    )
  }
}

export default PersonGroup
