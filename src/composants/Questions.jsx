import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import axios from "axios";

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  // récupérer les questions depuis le backend
  const fetchQuestions = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/question");
      setQuestions(res.data.questions); // ⚠️ important
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              💬 Questions
            </h1>
            <p className="text-gray-600 mt-1">
              {questions.length} questions disponibles
            </p>
          </div>
        </div>

        {/* Liste */}
        <div className="grid gap-6">
          {questions.map((question) => (
            <QuestionCard key={question._id} question={question} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Questions;