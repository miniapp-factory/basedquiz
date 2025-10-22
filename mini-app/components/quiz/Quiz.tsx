"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

const questions = [
  {
    question: "Do you trade on Base?",
    options: [
      { text: "Yes, I trade frequently", score: 2 },
      { text: "Occasionally", score: 1 },
      { text: "No, I don't trade", score: 0 },
    ],
  },
  {
    question: "Do you create content about Base?",
    options: [
      { text: "Yes, I create videos, blogs, or tutorials", score: 2 },
      { text: "Sometimes", score: 1 },
      { text: "No, I don't create content", score: 0 },
    ],
  },
  {
    question: "Do you build on Base?",
    options: [
      { text: "Yes, I have built dApps or tools", score: 2 },
      { text: "I have built something once", score: 1 },
      { text: "No, I haven't built on Base", score: 0 },
    ],
  },
  {
    question: "Do you contribute to Base's community (e.g., forums, Discord, GitHub)?",
    options: [
      { text: "Yes, I actively contribute", score: 2 },
      { text: "Occasionally", score: 1 },
      { text: "No, I don't contribute", score: 0 },
    ],
  },
  {
    question: "Do you advocate for Base to others?",
    options: [
      { text: "Yes, I promote Base everywhere", score: 2 },
      { text: "Sometimes", score: 1 },
      { text: "No, I don't advocate", score: 0 },
    ],
  },
];

export function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleOptionClick = (optionScore: number) => {
    setScore((prev) => prev + optionScore);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setCompleted(true);
    }
  };

  const getResult = () => {
    if (score >= 8) return "You are super based on Base!";
    if (score >= 5) return "You are pretty based on Base.";
    return "You could be more based on Base.";
  };

  if (completed) {
    return (
      <Card className="p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Quiz Result</h2>
        <p className="mb-6">{getResult()}</p>
        <button
          onClick={() => {
            setCurrent(0);
            setScore(0);
            setCompleted(false);
          }}
          className="px-4 py-2 bg-primary text-primary-foreground rounded"
        >
          Retake Quiz
        </button>
      </Card>
    );
  }

  const { question, options } = questions[current];

  return (
    <Card className="p-6 max-w-md w-full">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <div className="flex flex-col gap-3">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionClick(opt.score)}
            className="px-4 py-2 bg-muted hover:bg-muted/80 rounded"
          >
            {opt.text}
          </button>
        ))}
      </div>
    </Card>
  );
}
