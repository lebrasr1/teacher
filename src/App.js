import "./styles.css";

class Question {
  constructor() {}
  render() {
    return "";
  }
}

class QCMHistoire extends Question {
  constructor() {
    super();
  }

  render() {
    return "Hello world";
  }
}

export default function App() {
  function getData(val) {
    console.warn(val.target.value);
  }
  function handleClick() {
    console.warn("click !");
  }
  q = new QCMHistoire();
  return (
    <div className="App">
      <h1>Mathématiques</h1>
      <h2>Start editing to see some magic happen!</h2>
      1+1=
      <input type="text" onChange={getData} />
      <button onClick={handleClick}> Click me !</button>
      {q.render()}
    </div>
  );
}
