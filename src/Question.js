/*
Cursus Mathematiques:
**Primaire
ajout de quantités
chiffres entier
nombres entier
notion de décimale
addition de nombres entiers
soustraction de nombres entiers
nombres négatifs
nombres à virgule
multiplication de nombres entiers
division de nombres entiers
**Secondaire




*/

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
  constructor(min, max, apresvirgule) {
    super();
    this.clickResult = this.clickResult.bind(this);
    this.clickDontknow = this.clickDontknow.bind(this);
    this.getData = this.getData.bind(this);

    // FIXME: bug, attention, la multiplication par 'apresvirgule' peut donner des chiffre bizarres
    this.m_a =
      min +
      Math.floor(Math.random() * (max - min) * apresvirgule) / apresvirgule;
    this.m_b =
      min +
      Math.floor(Math.random() * (max - min) * apresvirgule) / apresvirgule;
  }
  getData(val) {
    console.warn(val.target.value);
    this.m_result = val.target.value;
  }
  clickResult() {
    console.warn(this.m_result);
    if (this.m_a + this.m_b == this.m_result) console.warn("Bravo");
    else console.warn("Faux");
  }
  clickDontknow() {
    console.warn("Je ne sais pas");
  }

  render() {
    return (
      <div className="Calculmath">
        {this.m_a}+{this.m_b}=
        <input type="text" onChange={this.getData} />
        <button onClick={this.clickResult}>Vérifier</button>-
        <button onClick={this.clickDontknow}>Je ne sais pas</button>
      </div>
    );
  }
}
