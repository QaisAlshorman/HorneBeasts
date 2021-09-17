import React from 'react';

import {Form} from 'react-bootstrap';

class Forminfo extends React.Component {






    render() {

        console.log(this.props);
        return (

           <div>
                <Form onChange={this.props.displayModal2}> 
                <Form.Select aria-label="Default select example" >
                    <option>Open this select menu</option>
                    <option  value="1">One</option>
                    <option  value="2">Two</option>
                    <option  value="3">Three</option>
                </Form.Select>
                </Form> 
            </div>

        );

    }


}

export default Forminfo;