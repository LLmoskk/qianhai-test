import { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "./loto.css";
import LotoP from "./assets/loto-p.png";
import LotoZ from "./assets/loto-z.png";

function Loto() {
  const LotoZRef = useRef<HTMLImageElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (LotoZRef.current) {
        LotoZRef.current.style.animationPlayState = "paused";
        navigate('/qianhai-test/form');
      }
    }, 5000);
  });

  return (
    <>
      <div className="Turntable">
        <img src={LotoP} className="LotoP" />
        <img src={LotoZ} className="LotoZ" ref={LotoZRef} />
      </div>
    </>
  );
}

export default Loto;
