import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import axios from "axios";


const Questions = () => {
  const [questions, setQuestions] = useState([]);
 
const [selectedTag, setSelectedTag] = useState("all");

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
  const fetchQuestions = async () => {
    const res = await axios.get("http://localhost:3000/api/question");
    setQuestions(res.data.questions);
  };

  fetchQuestions();
}, []);

const filteredQuestions =
  selectedTag === "all"
    ? questions
    : questions.filter(
        (q) => q.categorie === selectedTag
      );

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

        <div className="flex gap-2 mb-5">

  <button onClick={() => setSelectedTag("all")} className="px-3 py-1 bg-gray-200 rounded">
    Tous
  </button>

  <button onClick={() => setSelectedTag("react")} className="px-3 py-1 bg-blue-200 rounded">
    React
  </button>

  <button onClick={() => setSelectedTag("node")} className="px-3 py-1 bg-green-200 rounded">
    Node
  </button>

</div>

        {/* Liste */}
        <div className="grid gap-6">
          {filteredQuestions.map((question) => (
            <QuestionCard key={question._id} question={question} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Questions;