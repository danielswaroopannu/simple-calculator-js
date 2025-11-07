import "./style.css";
import { setupCalculator } from "./calculator.js";

// Inject HTML into #app
document.querySelector("#app").innerHTML = `
  <div class="max-w-md mx-auto mt-10 p-6 border border-indigo-500 rounded-lg shadow-lg text-center">
    <h1 class="text-3xl font-bold text-indigo-600 mb-6">Simple Calculator</h1>
    <input 
      type="number" 
      id="input-number" 
      class="w-full border border-indigo-300 rounded px-4 py-2 mb-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
      placeholder="Enter a number"
    />
    <div class="grid grid-cols-2 gap-4 mb-6">
      <button id="btn-add" class="bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600">Add</button>
      <button id="btn-subtract" class="bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600">Subtract</button>
      <button id="btn-multiply" class="bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600">Multiply</button>
      <button id="btn-divide" class="bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600">Divide</button>
    </div>
    <button id="btn-reset" class="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 mb-4">Reset</button>
    <p id="calculation-text" class="text-lg text-gray-700 font-medium mb-2">Calculation:</p>
    <p id="result-text" class="text-xl text-indigo-700 font-bold">Result: 0</p>
  </div>
`;


// Setup logic
setupCalculator();