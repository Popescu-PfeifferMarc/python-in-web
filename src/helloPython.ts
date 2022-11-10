/* @vite-ignore */
import { loadPyodide, type PyodideInterface } from '../public/pyodide';

let pyodide: null | PyodideInterface = null;

const initPyodide = async (out: (msg: string) => void) => {
	const p = await loadPyodide({
		indexURL: '/pyodide',
		stdout: out,
		stderr: out,
	});
	await p.loadPackage('pandas');
	pyodide = p;
};

// # region setup
const pythonAdder = (a: string | number, b: string | number) => pyodide?.runPythonAsync(`${a}+${b}`);
// # endregion

// # region pandas
const pandasCode = `import pandas as pd

df = pd.DataFrame({
	"Name": [
		"Braund, Mr. Owen Harris",
		"Allen, Mr. William Henry",
		"Bonnell, Miss. Elizabeth",
	],
	"Age": [22, 35, 58],
	"Sex": ["male", "male", "female"],
})

print(df)
`;
const pandasDataFrame = () => pyodide?.runPythonAsync(pandasCode);
// # endregion

export { initPyodide, pythonAdder, pandasDataFrame };
