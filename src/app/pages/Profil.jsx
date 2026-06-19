import React from "react";

const Profil = () => {
  const user = {
    nom: "Hawa Thiam",
    email: "hawa@gmail.com",
    role: "Développeuse Web",
    bio: "Passionnée par React, Node.js et le développement fullstack.",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md overflow-hidden">

        {/* Header gradient */}
        <div className="h-24 bg-gradient-to-r from-indigo-500 to-blue-500"></div>

        <div className="p-6 text-center -mt-12">

          {/* Avatar */}
          <div className="w-24 h-24 mx-auto rounded-full bg-indigo-600 text-white flex items-center justify-center text-3xl font-bold border-4 border-white shadow-md">
            {user.nom.charAt(0)}
          </div>

          {/* Nom */}
          <h1 className="text-2xl font-bold mt-4 text-gray-800">
            {user.nom}
          </h1>

          {/* Badge rôle */}
          <span className="inline-block mt-2 px-3 py-1 text-sm bg-indigo-100 text-indigo-600 rounded-full">
            💻 {user.role}
          </span>

          {/* Bio */}
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            {user.bio}
          </p>

          {/* Email card */}
          <div className="mt-5 bg-gray-50 rounded-lg p-3 text-sm text-gray-700 flex items-center justify-center gap-2">
            📧 <span>{user.email}</span>
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3">

            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition font-medium">
              Modifier
            </button>

            <button className="flex-1 border border-gray-300 hover:bg-gray-100 py-2 rounded-lg transition font-medium">
              Déconnexion
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Profil;