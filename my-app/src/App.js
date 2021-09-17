import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/footer';
import HornedData from './components/data.json';
import SelectedBeast from './components/SelectedBeast';

import Formlist from './components/react-bootstrap';


class App extends React.Component {


  //use constructor to save my data and to show a model in another file
  constructor(props) {
    super(props)
    this.state = {
      selectedBeast: HornedData,
      showModel: false
    }
  }





  displayModal = (title) => {
    const selectedBeast2 = HornedData.filter((item) => {
      return (item.title === title);
    });
    console.log(selectedBeast2);
    this.setState({
      showModel: true,
      selectedBeast: selectedBeast2[0],
    })
  }




  
  displayModal2 = (horn) => {
    let horns = horn.target.value;
    const selectedBeast3 = HornedData.filter((item) => {
      return (item.horns === Number(horns));
    });
    console.log(selectedBeast3);
    this.setState({
      selectedBeast: selectedBeast3,
    })
  }




  closeModal = () => {
    this.setState({
      showModel: false
    })
  }



  render() {
    return (
      <div>
        <Header />
        <Formlist displayModal2={this.displayModal2} />
        <Main HornedData={this.state.selectedBeast} displayModal={this.displayModal} />
        <SelectedBeast
          selectedBeast={this.state.selectedBeast}
          show={this.state.showModel}
          close={this.closeModal}
        />


        <Footer />
      </div>
    )
  }
}
export default App;
