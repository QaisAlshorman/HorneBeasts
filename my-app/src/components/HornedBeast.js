import React from 'react';

class HornedBeasts extends React.Component{
    render(){
        return (
            <div>
            <h2>{this.props.titel}</h2>
            <p>{this.props.description}</p>
            <img src={this.props.imageUrl}alt={this.props.titel} titel={this.props.titel} style={{height: "300px" ,width:"300px"}}/>
            </div>
        )
    }
}

export default HornedBeasts;