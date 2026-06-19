import React from "react";

const QuestionCard = ({ question }) => {
  // valeurs par défaut pour éviter les erreurs
  const auteur = question.auteur || "Anonyme";
  const initial = auteur.charAt(0).toUpperCase();

  // format date (createdAt venant de MongoDB)
  const heure = question.createdAt
    ? new Date(question.createdAt).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "--:--";

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer">

      {/* Titre */}
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 hover:text-blue-600 transition">
        {question.titre}
      </h2>

      {/* Description */}
      <p className="text-gray-600 mt-2 line-clamp-2">
        {question.description}
      </p>

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

        {/* Heure */}
        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-500">
          {heure}
        </span>
      </div>
    </div>
  );
};

export default QuestionCard;