import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

class Project extends React.Component {
  state = {
    drawerHidden: true,
  }

  componentDidMount() {
    // this.fetchEventsFromCurrentSeason().then(this.setEvents)
    // console.log(this.props)
  }

  toggleDrawer() {
    this.setState({
      drawerHidden: !this.state.drawerHidden,
    })
    console.log(this.state.drawerHidden)
  }

  render() {
    return (
      <>
        <div
          className={`project drawer ${
            this.state.drawerHidden ? 'drawerClosed' : ''
          }`}
          onClick={this.toggleDrawer.bind(this)}
        >
          <div className="projectHead">
            <span className="eventDate">
              {this.props.title}
            </span>
            <div
              className={`drawerToggle ${
                this.state.drawerHidden ? 'drawerClosed' : ''
              }`}
            />
          </div>
          {!this.state.drawerHidden && (
            <div className="projectDetails drawerContents">
              <BlockContent
                blocks={this.props.body}
                imageOptions={{ w: 1000, fit: 'max' }}
                projectId={"q4ur6w8h"}
                dataset={"production"}
              />
            </div>
          )}
        </div>

        <style jsx>{`
          .project {
            position: relative;
            padding: 10px 0 14px 0;
            border-top: 3px solid #000;
            font-size: 18px;
            line-height: 28px;
          }
          .projectHead {
            font-weight: 700;
            padding: 0 0;
          }
          .projectDetails {
            padding-top: 1.5rem;
          }

          @media screen and (min-width: 1024px) {
            .project {
              padding: 22px 0 18px 0;
            }
            .projectHead {
              font-size: 2.25rem;
              padding: 9px 0;
            }
          }

          @media screen and (max-width: 720px) {
            .project {
              font-size: 16px;
              line-height: 24px;
            }

            .projectHead {
              display: block;
              width: calc(100% - 70px);
            }
          }

          .drawerToggle {
            display: inline-block;
            float: none;
            position: absolute;
            top: 13px;
            right: 15px;
            background: url('/images/icon-plus-yellow@2x.png');
            background-size: 100%;
          }

          @media screen and (min-width: 1024px) {
            .drawerToggle {
              top: 30px;
              right: 30px;
            }
          }
        `}</style>
        <style global jsx>
          {`
          `}
        </style>
      </>
    )
  }
}

export default Project
