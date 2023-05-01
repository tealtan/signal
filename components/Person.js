import React from 'react'

class Person extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    return (
      <>
        <div className="people">
          {this.props.bioLink ? (
              <p className={this.props.group ? 'person-group' : ''}>
                <a href={this.props.bioLink}>
                  {this.props.title}
                </a>
              </p>
          ) : (
            <p className={this.props.group ? 'person-group' : ''}>
              {this.props.title}
            </p>
          )}
          <p>
            <em>{this.props.position}</em>
          </p>
        </div>
        <style jsx>{`
          a:hover {
            text-decoration: underline;
          }
          a:after {
            content: '×';
            font-size: 28px;
            color: #27D5FF;
            display: inline-block;
            margin: 0 0 -5px 10px;
            -ms-transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
          }
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
