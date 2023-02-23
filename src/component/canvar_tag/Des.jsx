import React, { useEffect, useRef, useState } from "react";
import css from "./des.module.css";

const ra = parseInt(Math.random() * 10) + "" + parseInt(Math.random() * 10);

const Des = ({ c, va, dd }) => {
  const canva = useRef();

  useEffect(() => {
    const ctx = canva.current.getContext("2d");

    ctx.fillRect(0, 0, va.X, va.Y);
    ctx.fillStyle = `${c}`;
    ctx.font = "30pt Calibri";
    ctx.fillText(`${ra}`, 700, 100);
  }, [c, va]);

  return (
    <>
      <div className={css.main}>
        <canvas
          onMouseEnter={() => {
            dd({ h: 120, w: 120, bg: "rgba(0, 0, 0, 0.437)", bo: 1 });
          }}
          onMouseLeave={() => {
            dd({ h: 25, w: 25, bg: "#A020F0", bo: 1 });
          }}
          ref={canva}
          height={500}
          width={1015}
          className={css.canva}
        ></canvas>
      </div>
    </>
  );
};

export default Des;
