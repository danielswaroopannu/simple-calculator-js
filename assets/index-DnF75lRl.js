(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();let i=0;function s(){const u=document.getElementById("input-number"),o=document.querySelector("#result-text"),r=document.querySelector("#calculation-text"),l=document.getElementById("btn-reset");function t(n){const d=Number(u.value),c=i;n==="+"?i+=d:n==="-"?i-=d:n==="*"?i*=d:n==="/"&&(i/=d),r.textContent=`${c} ${n} ${d}`,o.textContent=`Result: ${i}`}function e(){i=0,u.value="",o.textContent="Result: 0",r.textContent="Calculation:"}document.getElementById("btn-add").addEventListener("click",()=>t("+")),document.getElementById("btn-subtract").addEventListener("click",()=>t("-")),document.getElementById("btn-multiply").addEventListener("click",()=>t("*")),document.getElementById("btn-divide").addEventListener("click",()=>t("/")),l.addEventListener("click",e)}document.querySelector("#app").innerHTML=`
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
`;s();
