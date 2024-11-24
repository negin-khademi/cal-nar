import './App.css';

import React, { useState } from 'react';

export default function App() {
  const [calcR, setcalcR] = useState(null);
  const [calcL, setCalcL] = useState(null);
  const [calcV, setCalcV] = useState(null);

  function handleClick() {
    if (calcV) {
      setCalcV(90 - Number(calcV));
    }

    //بازه 0 تا 90
    if (calcR > 0 && calcR < 90) {
      setcalcR(Number(calcR) + 90);
    }

    if (calcL > 0 && calcL < 90) {
      setCalcL(Number(calcL) + 270);
    }

    //بازه 90 تا 180
    if (calcR > 90 && calcR <= 180) {
      setcalcR(Number(calcR) - 90);
    }

    if (calcL > 90 && calcL < 180) {
      setCalcL(Number(calcL) + 90);
    }

    //بازه 180 تا 270
    if (calcR > 180 && calcR < 270) {
      setcalcR(Number(calcR) - 90);
    }
    if (calcL > 180 && calcL < 270) {
      setCalcL(Number(calcL) + 90);
    }

    //بازه 270 تا 360
    if (calcR > 270 && calcR < 360) {
      setcalcR(Number(calcR) - 270);
    }
    if (calcL > 270 && calcL < 360) {
      setCalcL(Number(calcL) - 90);
    }
  }

  function reset() {
    setcalcR(0);
    setCalcL(0);
    setCalcV(0);
  }

  return (
    <div className="create">
      <form>
        <label>
          <span> محاسبه R</span>
          <input type="text" value={calcR} onChange={(e) => setcalcR(e.target.value)} />
        </label>

        <label>
          <span>محاسبه L</span>
          <input type="text" value={calcL} onChange={(e) => setCalcL(e.target.value)} />
        </label>

        <label>
          <span>محاسبه V</span>
          <input type="text" value={calcV} onChange={(e) => setCalcV(e.target.value)} />
        </label>

        <button onClick={handleClick}>calc</button>
        <button onClick={reset}>reset</button>
      </form>
    </div>
  );
}
