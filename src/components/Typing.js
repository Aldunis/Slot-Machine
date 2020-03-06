class Typing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disabled: false }
  }
  handleGameClik() {
    this.setState( {disabled: !this.state.disabled} )
  } 
  render() {
    return(
        <div>
          <input
                className = "typing-container"
                placeholder= " type here "
                disabled = {(this.state.disabled)? "disabled" : ""}/>
          <button  onClick = {this.handleGameClik.bind(this)}> Start</button>
        </div>
    );
  }
};