import { initPyodide, pandasDataFrame, pythonAdder } from './helloPython';
import './style.css';

// #region adder
const inputA = document.querySelector<HTMLInputElement>('#adderInputA')!;
const inputB = document.querySelector<HTMLInputElement>('#adderInputB')!;
const inputButton = document.querySelector<HTMLButtonElement>('#adderButton')!;
const output = document.querySelector<HTMLSpanElement>('#adderOutput')!;
inputButton.onclick = async () => {
	output.innerHTML = '';
	output.innerHTML = await pythonAdder(inputA.value, inputB.value);
};
// #endregion

// #region pandas
const pandasButton = document.querySelector<HTMLButtonElement>('#pandasButton')!;
const pandasOutput = document.querySelector<HTMLSpanElement>('#pandasOutput')!;
pandasButton.onclick = async () => {
	pandasOutput.innerHTML = '';
	pandasOutput.innerHTML = await pandasDataFrame();
};
// #endregion

// #region console & global setup
const consoleOutput = document.querySelector<HTMLSpanElement>('#consoleOutput')!;
initPyodide((message) => (consoleOutput.innerHTML += `${message}\n`));
// #endregion
