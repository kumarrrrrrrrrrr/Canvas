import { useRef, useState } from "react";
import "./App.css";
import Bar from "./component/bar/Bar";
import Des from "./component/canvar_tag/Des";

function App() {
  const [desi, setdesi] = useState({});
  const [bg, setbg] = useState("");
  const [color, setc] = useState("");
  const [val, setval] = useState({ X: 50, Y: 50 });
  const [mouse, setmouse] = useState({ x: 0, y: 0 });
  const x = useRef();
  const y = useRef();

  function cal() {
    setval({ X: x.current.value, Y: y.current.value });
  }

  return (
    <div className="App">
      <div
        onMouseMove={(e) => {
          console.log(e.clientX + "" + e.clientY);
          setmouse({ x: e.clientX, y: e.clientY });
        }}
        style={{ backgroundColor: `${bg}` }}
        id="abc1234"
      >
        <div
          style={{
            left: `${mouse.x}px`,
            top: `${mouse.y}px`,
            height: `${desi != {} ? desi.h : null}px`,
            width: `${desi != {} ? desi.w : null}px`,
            backgroundColor: `${desi != {} ? desi.bg : null}`,
          }}
          id={"cursor"}
        >
          {" "}
        </div>

        <Bar d={desi} des={setdesi} fun={setbg} />

        <div id="div12234">
          <div>
            <Des dd={setdesi} va={val} c={color} />
          </div>

          <div className="input">
            <input
              onChange={(e) => {
                setc(e.target.value + "");
              }}
              type="color"
            />

            <input ref={x} type="number" placeholder="x" />
            <input ref={y} type="number" placeholder="y" />
            <button
              onClick={() => {
                cal();
              }}
              className="btn1234"
            >
              SET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
