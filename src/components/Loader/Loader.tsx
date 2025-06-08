import { useEffect, useState } from "react";
import css from "./Loader.module.css";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Loader: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [groupOffset, setGroupOffset] = useState(0);
  const [showDots, setShowDots] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (showDots) {
        const nextOffset = (groupOffset + 3) % alphabet.length;
        setGroupOffset(nextOffset);
        setIndex(0);
        setShowDots(false);
      } else {
        if (index < 2 && groupOffset + index + 1 < alphabet.length) {
          setIndex((prev) => prev + 1);
        } else {
          setShowDots(true);
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, [index, showDots, groupOffset]);

  const letters = alphabet
    .slice(groupOffset, groupOffset + index + 1)
    .join(" ");

  return <div className={css.loader}>{showDots ? ". . ." : letters}</div>;
};

export default Loader;
