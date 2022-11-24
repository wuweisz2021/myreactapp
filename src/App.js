import React from'react';
import './App.css';




function App() {
  const [color, setColor] = React.useState(JSON.parse(sessionStorage.getItem('color')) || "blue");
  const [count, setCount] = React.useState(JSON.parse(localStorage.getItem('count')) || 0);
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  React.useEffect(() => {
  sessionStorage.setItem('color', JSON.stringify(color));
  localStorage.setItem('count', JSON.stringify(count));
  const interval = setInterval(() => setTime(new Date().toLocaleTimeString(), 5000));
  return () => {clearInterval(interval);}
  }, [color, count]);
  return (<div>
  <DisplayMessage color={color} />
  <Clock2 time={time}  />
  <p>{count}</p>
  <button onClick={() => {setColor(toggle(color)); setCount(count+1)}}>
  Click me React
  </button>
  </div>
  );
  }



function toggle(color) {
if (color === "blue") {
return "red";
} else {
return "blue";
}
}

function
DisplayMessage (props){
return <h1 style={ {color:props.color } }>Hello React World703_storage.WeiWu_1798260</h1>;
}




class Clock2 extends React.PureComponent {
  constructor(props) {
      super(props);
      }
      render() {
          return (<p>React Clock 2: {this.props.time}</p>);
      }
}


export default App;
