import React, { useState } from "react";
import css from "./bar.module.css";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";

const Bar = ({ fun, des, d }) => {
  const [arro, setarro] = useState(true);

  const color_arr = [
    { name: "AliceBlue", hex: "#F0F8FF" },
    { name: "AntiqueWhite", hex: "#FAEBD7" },
    { name: "Aqua", hex: "#00FFFF" },
    { name: "Aquamarine", hex: "#7FFFD4" },
    { name: "Azure", hex: "#F0FFFF" },
    { name: "Beige", hex: "#F5F5DC" },
    { name: "Bisque", hex: "#FFE4C4" },
    { name: "Black", hex: "#000000" },
    { name: "BlanchedAlmond", hex: "#FFEBCD" },
    { name: "Blue", hex: "#0000FF" },
    { name: "BlueViolet", hex: "#8A2BE2" },
    { name: "Brown", hex: "#A52A2A" },
    { name: "BurlyWood", hex: "#DEB887" },
    { name: "CadetBlue", hex: "#5F9EA0" },
    { name: "Chartreuse", hex: "#7FFF00" },
    { name: "Chocolate", hex: "#D2691E" },
    { name: "Coral", hex: "#FF7F50" },
    { name: "CornflowerBlue", hex: "#6495ED" },
    { name: "Cornsilk", hex: "#FFF8DC" },
    { name: "Crimson", hex: "#DC143C" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "DarkBlue", hex: "#00008B" },
    { name: "DarkCyan", hex: "#008B8B" },
    { name: "DarkGoldenRod", hex: "#B8860B" },
    { name: "DarkGray", hex: "#A9A9A9" },
    { name: "DarkGrey", hex: "#A9A9A9" },
    { name: "DarkGreen", hex: "#006400" },
    { name: "DarkKhaki", hex: "#BDB76B" },
    { name: "DarkMagenta", hex: "#8B008B" },
    { name: "DarkOliveGreen", hex: "#556B2F" },
    { name: "DarkOrange", hex: "#FF8C00" },
    { name: "DarkOrchid", hex: "#9932CC" },
    { name: "DarkRed", hex: "#8B0000" },
    { name: "DarkSalmon", hex: "#E9967A" },
    { name: "DarkSeaGreen", hex: "#8FBC8F" },
    { name: "DarkSlateBlue", hex: "#483D8B" },
    { name: "DarkSlateGray", hex: "#2F4F4F" },
    { name: "DarkSlateGrey", hex: "#2F4F4F" },
    { name: "DarkTurquoise", hex: "#00CED1" },
    { name: "DarkViolet", hex: "#9400D3" },
    { name: "DeepPink", hex: "#FF1493" },
    { name: "DeepSkyBlue", hex: "#00BFFF" },
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Red", hex: "#FF0000" },
    { name: "Green", hex: "#00FF00" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "Magenta", hex: "#FF00FF" },
    { name: "Gray", hex: "#808080" },
  ];

  return (
    <>
      <div className={css.main}>
        <div
          id={"mou123"}
          onMouseLeave={() => {
            des({ h: 25, w: 25, bg: "#A020F0", bo: 1 });
          }}
          onMouseEnter={() => {
            des({ h: 120, w: 120, bg: "rgba(0, 0, 0, 0.437)", bo: 1 });
          }}
          className={css.drop_box}
        >
          {" "}
          Select background colour{" "}
          <div
            onClick={() => {
              setarro((p) => !p);
            }}
          >
            {arro ? <AiFillDownCircle /> : <AiFillUpCircle />}
          </div>{" "}
        </div>
        {!arro ? (
          <div className={css.cont}>
            {color_arr.map((e, i) => {
              return (
                <div
                  key={i}
                  onClick={(e) => {
                    fun(e.target.innerHTML);
                  }}
                  style={{ backgroundColor: `${e.hex}` }}
                  className={css.color_box}
                >
                  {e.hex}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Bar;
