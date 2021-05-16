import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      reset: false
    };
  }
  // render() {
  //     return (
  //         <div>
  //             <p className="timer">{this.state.timer1}</p>
  //             <h2 className="player-name">{this.props.player}</h2>

  //         </div>
  //     )
  // }
  checkReset() {
    if (this.state.reset!== this.props.resetFlag) {
      this.setState({ count: 0, reset:!this.state.reset });
    }
  }
  // stopTimer=()=>{
  //     if(this.props.reset===true)
  //     clearInterval(this.iid);
  // }
  render() {
    //  console.log(this.props.playing);
    //     return(
    //         <>
    //         <h3>{this.state.count}</h3>
    //         </>
    //     )
    // }

    let seconds = this.state.count%60
    let minutes = Math.trunc(this.state.count/60);
    return (
      <>
        <p>
          {this.props.name}
          <span>
            {minutes}:{seconds}
          </span>
        </p>
      </>
    );
  }
  componentDidMount() {
    this.iid = setInterval(() => {
      if (
        this.props.id === "O" &&
        this.props.playing === true &&
        this.props.stopFlag === false
      ) {
        this.setState({
          count: this.state.count + 1,
        });
      } else if (
        this.props.id === "X" &&
        this.props.playing === false &&
        this.props.stopFlag === false
      ) {
        this.setState({
          count: this.state.count + 1,
        });
      }
      this.checkReset()
    }, 1000);
  }
}
