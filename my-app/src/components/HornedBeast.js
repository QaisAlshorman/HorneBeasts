import React from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfVotes: 0,
            numberOfFav:'',
        }
    };

    increaseNumberOfVote = () => {
        this.setState({
            numberOfVotes: this.state.numberOfVotes + 1,
            numberOfFav:this.state.numberOfFav + '❤️',
        });
        this.props.handleClose(this.props.title,this.props.description,this.props.image_url);
    }


    render() {
        return (
            <div style={{ display:"inline-block" }}>
                {/* <h2></h2>
            <p></p>
            <p>  </p>
            <img src=  alt={this.props.title} style={{height: "300px" ,width:"300px"}}/> */}
                <Card style={{margin:'2rem', width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} onClick={this.increaseNumberOfVote} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                         {this.state.numberOfVotes} {this.state.numberOfFav}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default HornedBeasts;