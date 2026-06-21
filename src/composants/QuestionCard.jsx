import React from "react";
import { useNavigate } from "react-router-dom";

const QuestionCard = ({ question }) => {
  const navigate = useNavigate();
  const auteur = question.auteur || "Anonyme";
  const initial = auteur.charAt(0).toUpperCase();

  const heure = question.createdAt
    ? new Date(question.createdAt).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "--:--";

  const date = question.createdAt
    ? new Date(question.createdAt).toLocaleDateString()
    : "";

  return (
    <div
  onClick={() => navigate(`/question/${question._id}`)}
  className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer"
>

      {/* Titre */}
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 hover:text-blue-600 transition">
        {question.titre}
      </h2>

      {/* Description */}
      <p className="text-gray-600 mt-2 line-clamp-2">
        {question.description}
      </p>

      {/* Tags */}
      <div className="mt-2 flex flex-wrap gap-2">
        {question.tags?.map((tag, i) => (
          <span key={i} className="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded">
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">

        {/* Auteur */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
            {initial}
          </div>
          <span className="text-sm text-gray-700">
            {auteur}
          </span>
        </div>

        {/* Infos */}
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span>👍 {question.votes || 0}</span>
          <span>💬 {question.reponsesCount || 0}</span>
          <span>{heure}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;