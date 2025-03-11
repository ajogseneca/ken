"use client";
import Navbar from "@/components/Navbar"; // Import Navbar

export default function TournamentPage() {
  const teams = [
    {
      name: "Mundu Mercenaries",
      members: [
        "Kurian#bozo",
        "Sukuna#cheku",
        "Pika#dmp",
        "aesgoofy#goof",
        "zEniTsu#4131",
        "Jose11#6906",
      ],
    },
    {
      name: "Sambar Snipers",
      members: [
        "Neo#mallu",
        "DABZEE#007",
        "bucky#myr",
        "malayali bro#2000",
        "Simon#",
        "Ashwin#",
      ],
    },
    {
      name: "Payyoli Panthers",
      members: [
        "Hyper#SIR",
        "Po Myree#OwO",
        "Agent01#GOAT",
        "Ranga#Suz",
        "DeepFry#0007",
        "3036",
      ],
    },
    {
      name: "Achayan Assassins",
      members: [
        "JoGion#Out",
        "SEN LWKEY#9494",
        "Krypts#007",
        "N O G E N 爱你#ooMFI",
        "Soul#9571",
        "MuniyandiOP#",
      ],
    },
    {
      name: "Team Tharikida",
      members: [
        "I need a gothmommy#241", // Escape the apostrophe here
        "kunjapanQT#0007",
        "Odiyan#PRO",
        "June#Mallu",
        "Artorias#1123",
        "Spectre#FLcN",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar /> {/* Use Navbar component */}

      {/* Tournament Banner Section */}
      <div className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: 'url(/scrims-tournament-banner.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-red-500">Scrims Tournament 2025</h1>
        </div>
      </div>

      {/* Tournament Description Section */}
      <div className="container mx-auto py-6 px-4 text-center">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">Welcome to the Scrims Tournament 2025</h2>
        <p className="text-lg text-gray-300 mb-6">
          Join the fiercest battle of the year! The Scrims Tournament brings together top-tier teams to face off in an intense competition. Who will emerge as the champion and claim ultimate bragging rights?
        </p>
        <a href="https://forms.gle/CryWv4ySpwst8GFc9" className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-600 transition">Register Your Team</a>
      </div>

      {/* Tournament Teams Section */}
      <div className="container mx-auto py-6 px-4">
        <h2 className="text-2xl font-semibold text-red-500 mb-6">Participating Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teams.map((team, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800 shadow-md rounded-lg hover:scale-105 transition-transform"
              style={{ minHeight: "300px" }}
            >
              <h3 className="text-lg font-semibold text-red-500">{team.name}</h3>
              <ul className="text-gray-300 mt-4">
                {team.members.map((member, idx) => (
                  <li key={idx} className="mt-2">{member}</li>
                ))}
              </ul>
              <div className="mt-4 flex justify-between items-center">
                <button className="text-red-500 hover:text-red-600">
                  View Team
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
