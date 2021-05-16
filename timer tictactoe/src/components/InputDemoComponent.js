import React from 'react';


class InputDemoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            player:""
        }
    }
handleChange=(e)=>{
    this.setState({player:e.target.value})
}

render(){
    return(
        <>
        <label>{this.props.label}</label>
        <input type="text" value={this.state.player} onChange={this.handleChange} placeholder="enter player name"></input>
        <button onClick={()=>this.props.handleName(this.state.player,this.props.label)}>submit</button>
        
        </>
    )
}

}


export default InputDemoComponent;