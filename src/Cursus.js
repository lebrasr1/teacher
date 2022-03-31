import { AdditionMath } from "./Question";

class Cursus {
  constructor() {}
}

class Level {
  constructor(name, question, minNumber) {
    this.m_name = name;
    this.m_question = question;
    this.m_minNumber = minNumber;
    this.m_nbAnswers = 0;
    this.m_false = 0;
    this.m_true = 0;
    this.m_dontknow = 0;
  }

  addTrue() {
    m_true++;
    m_nbAnswers++;
  }
  addFalse() {
    m_false++;
    m_nbAnswers++;
  }
  addDontknow() {
    m_dontknow++;
    m_nbAnswers++;
  }

  getLevelStatus() {
    if (this.m_nbAnswers < this.m_minNumber) return 0;
    return (100 * m_true) / m_nbAnswers;
  }
  getQuestion() {
    return this.m_question;
  }
}

export class CursusMath extends Cursus {
  constructor(minPercent) {
    super();
    this.m_levels = Array();
    this.m_currentLevel = new Level(
      "Addition",
      new AdditionMath(100, 1000, 1),
      10
    );
    this.m_levels.push(this.m_currentLevel);
    this.m_minPercent = minPercent;
  }

  getCurrentLevel() {
    this.m_levels.forEach((element) => {
      var s = element.getLevelStatus();
      if (s < this.m_minPercent) {
        console.warn(s);
        return element;
      }
      //      l = element;
      // get the first Level not fullfilled in the Cursus
      //      if (element.getLevelStatus() < this.m_minpercent) return element;
    });
    //    return null;
    return this.m_currentLevel;
  }
}
