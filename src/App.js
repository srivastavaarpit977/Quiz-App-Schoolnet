import React, { useState, useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import End from "./components/End";
import Question from "./components/Question";
import Start from "./components/Start";
import ProgressBar from "./components/ProgressBar";
import quizData from "./data/quiz.json";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const dispatch = useDispatch();
  const { step, answers } = useSelector((state) => state?.quizReducer);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme + "-theme";
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);

  // Use a ref to store interval ID for clearing later
  const intervalRef = React.useRef(null);

  useEffect(() => {
    if (step === 2) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    if (step === 3) {
      clearInterval(intervalRef.current);
    }

    // Clean up the interval when the component unmounts or when step changes
    return () => clearInterval(intervalRef.current);
  }, [step]);

  // Calculate progress
  const totalQuestions = quizData.data.length;
  const progress = (answers.length / totalQuestions) * 100;

  return (
    <div className="App">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      {step === 1 && <Start />}
      {step === 2 && (
        <>
          <ProgressBar progress={progress} />
          <Question />
        </>
      )}
      {step === 3 && (
        <End
          data={quizData.data}
          time={time}
          onAnswersCheck={() => setShowModal(true)}
        />
      )}
    </div>
  );
};

export default App;
