import { useEffect, useRef, useState } from "react";
import "./style.scss";
import { words } from "../../utils/axios";

export default function Typer() {
  let timeD = 60;
  let [wrs, setWrs] = useState("");
  let [charIndex, setCharIndex] = useState(0);
  let [WPM, setWPM] = useState(0);
  let [mistakes, setMistakes] = useState(0);
  let [IsTyping, setIsTyping] = useState(false);
  let [timeLeft, setTimeLeft] = useState(timeD);
  const inputRef = useRef(null);
  const charRefs = useRef([]);
  const [correctWrong, setCorrectWrong] = useState([]);
  useEffect(() => {
    words.get("").then((res) => {
      const wd = res.data.toString();
      const w = wd.replace(/,/g, " ");

      setWrs(w);
    });
    inputRef.current.focus();
    setCorrectWrong(Array(charRefs.current.length).fill(""));
  }, []);
  useEffect(() => {
    if (!IsTyping || timeLeft <= 0) {
      setIsTyping(false);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);

      setWPM((prevWPM) => {
        let correctChars = charIndex - mistakes;
        let totalTime = timeD - (timeLeft - 1); 

        let wpm =
          totalTime > 0 ? Math.round((correctChars / 5 / totalTime) * 60) : 0;
        return wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [IsTyping, timeLeft]);

  const inputHandler = (event) => {
    const ignoredKeys = ["Enter", "Shift", "Control", "Alt", "Meta"];

    const characters = charRefs.current;
    let currentChar = charRefs.current[charIndex];
    let typedChar = event.key;

    // if (ignoredKeys.includes(event.key)) return;
    console.log(typedChar);
    if (charIndex < characters.length && timeLeft > 0) {
      if (!IsTyping) {
        setIsTyping(true);
      }
      if (event.key === "Backspace" && charIndex > 0) {
        // event.preventDefault();

        setCharIndex(charIndex - 1);
        setMistakes(mistakes > 0 ? mistakes - 1 : 0);
        correctWrong[charIndex - 1] = "";
      } else if (typedChar === currentChar.textContent) {
        setCharIndex(charIndex + 1);
        correctWrong[charIndex] = " correct ";
      } else if (ignoredKeys.includes(typedChar)) {
        return;
      } else {
        setCharIndex(charIndex + 1);
        setMistakes(mistakes + 1);
        correctWrong[charIndex] = " wrong ";
      }

      if (charIndex === characters.length) setIsTyping(false);
    } else {
      setIsTyping(false);
    }
  };

  const again = () => {
    if (!IsTyping) {
      setIsTyping(false);
    }
    setCharIndex(0);
    setMistakes(0);
    setCorrectWrong(Array(charRefs.current.length).fill(""));

    setTimeLeft(timeD)

    words.get("").then((res) => {
      const wd = res.data.toString();
      const w = wd.replace(/,/g, " ");

      setWrs(w);
    });

    inputRef.current.focus();
  };

  return (
    <div className="all">
      <div className="container-typer">
        <div className="params">
          <h1>Time Left: {timeLeft}</h1>
          <h1>WPM: {WPM}</h1>
          <h1>Mistakes: {mistakes}</h1>
          <button onClick={again}>Again</button>
        </div>
        <div onClick={() => inputRef.current.focus()} className="words-wrapper">
          <input
            type="text"
            ref={inputRef}
            className="input-field"
            onKeyDown={inputHandler}
          />
          {wrs.split("").map((char, index) => {
            return (
              <span
                key={index}
                ref={(e) => (charRefs.current[index] = e)}
                className={`char ${index === charIndex ? " active" : ""} ${
                  correctWrong[index]
                }`}
              >
                {char}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
