import React from "react";

function Compilazione({ numbers }) {
  function check() {
    const nums = Array.from(document.querySelectorAll("input")).map(
      (input) => input.value
    );
    console.log(nums);
    if (nums.some((num) => isNaN(num) || num < 1 || num > 10)) {
      alert("inserisci numeri da 1 a 10");
      return;
    }
    if (new Set(nums).size !== nums.length) {
      alert("inserisci numeri diversi");
      return;
    }
    //for each number in nums, put it in numbers
    for (let i = 0; i < nums.length; i++) {
      numbers[i] = nums[i];
    }
    console.log(numbers);
  }

  return (
    <div>
      <input type="number" id="number1" placeholder="inserisci un numero..." />
      <input type="number" id="number2" placeholder="inserisci un numero..." />
      <input type="number" id="number3" placeholder="inserisci un numero..." />
      <input type="number" id="number4" placeholder="inserisci un numero..." />
      <input type="number" id="number5" placeholder="inserisci un numero..." />

      <button onClick={check}>Submit</button>
    </div>
  );
}

export default Compilazione;
