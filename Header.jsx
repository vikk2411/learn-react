import React from 'React';

export default class Header extends React.Component {
  handleChange(e){
   const title = e.target.value;
   this.props.changeTitle(title);
  }

  render(){
    return(
     <div>
        <h1>Hello, {this.props.title}</h1>
        <input value={this.props.title} onChange={this.handleChange.bind(this)} id="tester"/>
     </div>
      );
  }
}