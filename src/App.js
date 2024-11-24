import './App.css';

import React, { useState } from 'react';

export default function App() {
  // Initialize state with null to indicate "no input"
  const [calcR, setcalcR] = useState(null);
  const [calcL, setCalcL] = useState(null);
  const [calcV, setCalcV] = useState(null);

  // handleClick function to calculate the values
  function handleClick(e) {
    e.preventDefault();

    // Convert inputs to numbers for calculations
    const R = Number(calcR);
    const L = Number(calcL);
    const V = Number(calcV);

    // Check if inputs are valid numbers
    if (isNaN(R) || isNaN(L) || isNaN(V)) {
      alert('Please enter valid numbers for all fields');
      return;
    }

    // Adjust calcV if it's provided
    if (V !== 0) {
      setCalcV(90 - V);
    }

    // Adjust calcR based on ranges
    if (R > 0 && R < 90) {
      setcalcR(R + 90);
    } else if (R >= 90 && R <= 180) {
      setcalcR(R - 90);
    } else if (R > 180 && R < 270) {
      setcalcR(R - 90);
    } else if (R >= 270 && R < 360) {
      setcalcR(R - 270);
    }

    // Adjust calcL based on ranges
    if (L > 0 && L < 90) {
      setCalcL(L + 270);
    } else if (L >= 90 && L < 180) {
      setCalcL(L + 90);
    } else if (L >= 180 && L < 270) {
      setCalcL(L + 90);
    } else if (L >= 270 && L < 360) {
      setCalcL(L - 90);
    }
  }

  // Reset function to clear the fields
  function reset() {
    setcalcR(null);
    setCalcL(null);
    setCalcV(null);
  }

  return (
    <div className="create">
      <div className="form">
        <label>
          <span>محاسبه R</span>
          <input
            type="number"
            value={calcR || ''}
            onChange={(e) => setcalcR(e.target.value ? Number(e.target.value) : null)}
            placeholder="Enter value for R"
          />
        </label>

        <label>
          <span>محاسبه L</span>
          <input
            type="number"
            value={calcL || ''}
            onChange={(e) => setCalcL(e.target.value ? Number(e.target.value) : null)}
            placeholder="Enter value for L"
          />
        </label>

        <label>
          <span>محاسبه V</span>
          <input
            type="number"
            value={calcV || ''}
            onChange={(e) => setCalcV(e.target.value ? Number(e.target.value) : null)}
            placeholder="Enter value for V"
          />
        </label>

        <button onClick={handleClick}>Calculate</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

// import './App.css';

// import React, { useState } from 'react';

// export default function App() {
//   const [calcR, setcalcR] = useState(0);
//   const [calcL, setCalcL] = useState(0);
//   const [calcV, setCalcV] = useState(0);

//   function handleClick(e) {
//     e.preventDefault();
//     if (calcV) {
//       setCalcV(90 - Number(calcV));
//     }

//     //بازه 0 تا 90
//     if (calcR > 0 && calcR < 90) {
//       setcalcR(Number(calcR) + 90);
//     }

//     if (calcL > 0 && calcL < 90) {
//       setCalcL(Number(calcL) + 270);
//     }

//     //بازه 90 تا 180
//     if (calcR > 90 && calcR <= 180) {
//       setcalcR(Number(calcR) - 90);
//     }

//     if (calcL > 90 && calcL < 180) {
//       setCalcL(Number(calcL) + 90);
//     }

//     //بازه 180 تا 270
//     if (calcR > 180 && calcR < 270) {
//       setcalcR(Number(calcR) - 90);
//     }
//     if (calcL > 180 && calcL < 270) {
//       setCalcL(Number(calcL) + 90);
//     }

//     //بازه 270 تا 360
//     if (calcR > 270 && calcR < 360) {
//       setcalcR(Number(calcR) - 270);
//     }
//     if (calcL > 270 && calcL < 360) {
//       setCalcL(Number(calcL) - 90);
//     }
//     return { calcL, calcR, calcV };
//   }

//   function reset() {
//     setcalcR(0);
//     setCalcL(0);
//     setCalcV(0);
//   }

//   return (
//     <div className="create">
//       <div className="form">
//         <label>
//           <span> محاسبه R</span>
//           <input type="number" value={calcR} onChange={(e) => setcalcR(e.target.value)} />
//         </label>

//         <label>
//           <span>محاسبه L</span>
//           <input type="number" value={calcL} onChange={(e) => setCalcL(e.target.value)} />
//         </label>

//         <label>
//           <span>محاسبه V</span>
//           <input type="number" value={calcV} onChange={(e) => setCalcV(e.target.value)} />
//         </label>

//         <button onClick={(e) => handleClick(e)}>calc</button>
//         <button onClick={reset}>reset</button>
//       </div>
//     </div>
//   );
// }
