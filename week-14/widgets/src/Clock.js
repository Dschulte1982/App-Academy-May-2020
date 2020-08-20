import React from 'react';

class Clock extends React.Component {
  constructor() {
    super()
    this.state = {
      time: new Date(),
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    this.interval = clearInterval();
  }

  tick = () => {
    return (
      this.setState({ time: new Date() })
    )
  }

  render() {
    const { time } = this.state;
    return (
      <>
        <h1>Clock</h1>
        <br />
        <div className='clock'>
          <div>
            <h2 className="time">Hours:</h2>
            <h2 className="time">Minutes:</h2>
            <h2 className="time">Seconds:</h2>
            <h2 className="time">Date:</h2>
          </div>
          <ul className="actual-times">
            <li>{time.getHours()}</li>
            <li>{time.getMinutes()}</li>
            <li>{time.getSeconds()}</li>
            <li>{time.toDateString()}</li>
          </ul>
        </div>
      </>
    )
  }
}


export default Clock;
