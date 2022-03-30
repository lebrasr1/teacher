export class Question {
  constructor() {}
  render() {
    return "";
  }
}

export class QCMHistoire extends Question {
  constructor() {
    super();
  }
  getData(val) {
    console.warn(val.target.value);
  }
  handleClick() {
    console.warn("click !");
  }

  render() {
    return (
      <div className="QCM">
        1+1=
        <input type="text" onChange={this.getData} />
        <button onClick={this.handleClick}> Click me !</button>
      </div>
    );
  }
}

export class AdditionMath extends Question {
  constructor(max) {
    super();
    this.m_a = Math.floor(Math.random() * max);
    this.m_b = Math.floor(Math.random() * max);
  }
  getData(val) {
    console.warn(val.target.value);
  }
  handleClick() {
    console.warn("click !");
  }

  render() {
    return (
      <div className="Calculmath">
        {this.m_a}+{this.m_b}=
        <input type="text" onChange={this.getData} />
        <button onClick={this.handleClick}>Résultat</button>
      </div>
    );
  }
}
