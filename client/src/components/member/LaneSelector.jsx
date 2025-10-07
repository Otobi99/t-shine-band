import React, { useState } from "react";

// Nếu bạn tách laneData ra file riêng thì import như sau:
// import laneData from "./laneData";

const LaneSelector = () => {
  const [selectedLane, setSelectedLane] = useState("mid");

  const laneData ={
  mid: [
    {
      name: "Ahri",
      role: "Pháp sư",
      region: "Ionia",
      image: "https://example.com/ahri.png",
    },
    {
      name: "Zed",
      role: "Sát thủ",
      region: "Ionia",
      image: "https://example.com/zed.png",
    },
  ],
  top: [
    {
      name: "Garen",
      role: "Đấu sĩ",
      region: "Demacia",
      image: "https://example.com/garen.png",
    },
    {
      name: "Darius",
      role: "Đấu sĩ",
      region: "Noxus",
      image: "https://example.com/darius.png",
    },
  ],
  jungle: [
    {
      name: "Lee Sin",
      role: "Đấu sĩ",
      region: "Ionia",
      image: "https://example.com/leesin.png",
    },
    {
      name: "Kha'Zix",
      role: "Sát thủ",
      region: "Hư Không",
      image: "https://example.com/khazix.png",
    },
  ],
};


  const champions = laneData[selectedLane];

  return (
    <div className="container mx-auto px-4 md:px-0 flex justify-between items-center">
            <div className="flex flex-col gap-4 mb-6">
                <div className="flex flex-col items-center">
                    <h1>T-Shine Band</h1>
                </div>
                <p>Member</p>
                <div className="flex justify-around items-center space-x-2">
                    {["mid", "top", "jungle"].map((lane) => (
                <button
                    key={lane}
                    onClick={() => setSelectedLane(lane)}
                    className={`px-4 py-2 rounded font-semibold ${
                    selectedLane === lane
                        ? "bg-blue-600"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                >
                    {lane === "mid" && "MID"}
                    {lane === "top" && "TOP"}
                    {lane === "jungle" && "RỪNG"}
                </button>
                ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {champions.map((champion) => (
                <div
                    key={champion.name}
                    className="bg-gray-800 rounded-lg p-4 shadow hover:shadow-lg transition"
                >
                    <img
                    src={champion.image}
                    alt={champion.name}
                    className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-bold">{champion.name}</h3>
                    <p className="text-sm text-gray-400">Vai trò: {champion.role}</p>
                    <p className="text-sm text-gray-400">Khu vực: {champion.region}</p>
                    <button className="mt-4 bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white text-sm">
                    Xem chi tiết
                    </button>
                </div>
                ))}
            </div>
        </div>
      
  );
};

export default LaneSelector;
