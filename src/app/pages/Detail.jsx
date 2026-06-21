import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";


export default function Detail() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
const [contenu, setContenu] = useState("");
const fetchAnswers = async () => {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/answer/${id}`
    );
    setAnswers(res.data.answers);
  } catch (error) {
    console.error(error);
  }
};

const handleAnswer = async (e) => {
  e.preventDefault();

  try {
    await axios.post("http://localhost:3000/api/answer", {
      contenu,
      auteur: "Hawa",
      questionId: id,
    });

    setContenu("");
    fetchAnswers();
  } catch (error) {
    console.error(error);
  }
};

 useEffect(() => {
  const fetchQuestion = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/question/${id}`
      );
      setQuestion(res.data.question);
    } catch (error) {
      console.error(error);
    }
  };

  fetchQuestion();
  fetchAnswers(); // 👈 AJOUT

}, [id]);

  if (!question) {
    return <p className="text-center mt-10">Chargement...</p>;
  }

  const date = question.createdAt
    ? new Date(question.createdAt).toLocaleDateString()
    : "";

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">

      {/* Titre */}
      <h1 className="text-2xl font-bold mb-4">
        {question.titre}
      </h1>

      {/* Infos */}
      <div className="text-sm text-gray-500 mb-4">
        <span>👤 {question.auteur || "Anonyme"}</span> •{" "}
        <span>📅 {date}</span>
      </div>

      {/* Description */}
      <div className="prose max-w-none mb-6">
        <ReactMarkdown>
          {question.description}
        </ReactMarkdown>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {question.tags?.map((tag, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>
      <form onSubmit={handleAnswer} className="mt-6">
  <textarea
    value={contenu}
    onChange={(e) => setContenu(e.target.value)}
    className="border w-full p-2 rounded"
    placeholder="Ta réponse..."
  />

  <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
    Répondre
  </button>
</form>

<div className="mt-6">
  <h3 className="font-bold mb-2">
    {answers.length} réponses
  </h3>

  {answers.map((a) => (
  <div key={a._id} className="border p-3 mb-3 rounded">

    {/* contenu */}
    <p className="mb-2">{a.contenu}</p>

    {/* auteur */}
    <span className="text-sm text-gray-500">
      👤 {a.auteur}
    </span>

    {/* 👍 👎 boutons */}
    <div className="flex gap-3 mt-3">

      <button
        onClick={async () => {
          await axios.put(
            `http://localhost:3000/api/answer/like/${a._id}`
          );
          fetchAnswers(); // refresh
        }}
        className="text-green-600"
      >
        👍 {a.likes || 0}
      </button>

      <button
        onClick={async () => {
          await axios.put(
            `http://localhost:3000/api/answer/dislike/${a._id}`
          );
          fetchAnswers(); // refresh
        }}
        className="text-red-600"
      >
        👎 {a.dislikes || 0}
      </button>

    </div>
  </div>
))}
</div>

    </div>
  );
}