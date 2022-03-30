import "./styles.css";
//import {Question} from './Question.js';
import { QCMHistoire } from "./Question.js";
import { AdditionMath } from "./Question.js";

export default function App() {
  q = new AdditionMath(10);
  return (
    <div className="App">
      <h1>Mathématiques</h1>
      <h2>Start editing to see some magic happen!</h2>
      {q.render()}
    </div>
  );
}
