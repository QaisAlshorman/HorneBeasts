import React from 'react';
import HornedBeasts from './HornedBeasts';
import Row from 'react-bootstrap/Row';
// import Formlist from './components/react-bootstrap';




class Main extends React.Component {

  render() {
    return (
      <main>
        <Row xs={1} md={4} className="g-4">

          {
            this.props.HornedData.map((allthink) => {
              return (
                <HornedBeasts
                  imageUrl={allthink.image_url}
                  title={allthink.title}
                  description={allthink.description}
                  keyword={allthink.keyword}
                  horns={allthink.horns}
                  displayModal={this.props.displayModal}
                  displayModal2={this.props.displayModal2}
                />
              )
            })
          }

        </Row>
      </main>
    )
  }
}

export default Main;