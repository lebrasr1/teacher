import "./styles.css";
//import {Question} from './Question.js';
import { QCMHistoire } from "./Question.js";
import { AdditionMath } from "./Question.js";
import { CursusMath } from "./Cursus.js";

export default function App() {
  var c = new CursusMath(80);
  var l = c.getCurrentLevel();
  //  console.warn(c.getMinPercent());
  q = l.getQuestion(); //new AdditionMath(100, 1000, 100);
  return (
    <div className="App">
      <h1>Mathématiques</h1>
      <h2>Start editing to see some magic happen!</h2>
      {q.render()}
    </div>
  );
}
