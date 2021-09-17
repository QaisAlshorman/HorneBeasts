import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

// import Modal from 'react-bootstrap/Modal'


class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        like : 0
    }
}

incrementNumberOfPets = () => {
  this.setState({
      like : this.state.like + 1  


  })
}
displayModal = ()=>{
  this.props.displayModal(this.props.title)
}

  render() {   
    return (
      <div>
<Card style={{ width: '18rem' }} onClick={this.displayModal}>
  <Card.Img variant="top" src={this.props.imageUrl} onClick={this.incrementNumberOfPets} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    ❤️ =  {this.state.like} 
    </Card.Text>
    <Card.Text>
    {this.props.description}
    </Card.Text> 
  </Card.Body>
</Card>  
      </div>
    )
  }
}
export default HornedBeasts;