import React from 'react';
import Header from './Header.jsx'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      title: "user"
    }
  }

  changeTitle(title){
    this.setState({title})
  }

   render() {
      return (
         <div>
            <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
            {this.state.title}!!!
         </div>
      );
   }
}

export default App;