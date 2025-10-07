import { useState } from "react";
import logo from "../../assets/logo.png"

const LaneSelector = () => {
  const [selectedLane, setSelectedLane] = useState("drumer");

  const laneData = {
    drumer: [
      {
        name: "Hồ Lê Thanh Tùng",
        role: "Drumer Leader",
        image: "https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/515745783_1261410559044763_6543412094676714878_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=tbxdTE62AX4Q7kNvwGEEUsg&_nc_oc=Adl_N04dbO80hmP8AZ9__DwzprBTRyXeklcvLKEiirBIUn_Rg9QTa8Se8PiHZLe7FVw&_nc_zt=23&_nc_ht=scontent.fsgn3-1.fna&_nc_gid=rx57Inbuyvs117DkI8Hi1w&oh=00_AffcX2646jvF8P_KJJpm9DJlUPNHQMESi_BWNmNOwfwBxg&oe=68EA93A1",
      },
    ],
    giutar: [
      {
        name: "Nghĩa Trần",
        role: "Giutarist",
        image: "https://res.cloudinary.com/dttqah17o/image/upload/v1759810840/giutar-nghia-tran-3_dghyyn.jpg",
      },
    ],
    vocal: [
      {
        name: "Thảo Nguyên",
        role: "Vocal",
        image: "https://res.cloudinary.com/dttqah17o/image/upload/v1759810697/vocal-thao-nguyen-1_ahilwb.jpg",
      },
    ],
  };

  const champions = laneData[selectedLane];

  return (
    <div className="container mx-auto px-4 md:px-0 h-[100vh]">
        <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
          <div className="flex flex-col flex-wrap justify-center items-center gap-3">
            <div className="w-50 h-50 md:w-150 md:h-150">
                <img src={logo} alt="T Shine Band" className="w-full h-full logo" />
            </div>
            <p className="text-lg text-gray-500">Thành viên theo vị trí</p>
              <div className="flex items-center justify-center space-x-2">
                  {Object.keys(laneData).map((lane) => (
                  <button
                    key={lane}
                    onClick={() => setSelectedLane(lane)}
                    className={`px-4 py-2 rounded font-semibold transition ${selectedLane === lane
                        ? "bg-blue-600 text-white"
                        : "bg-gray-300 text-black hover:bg-gray-400"
                      }`}
                  >
                    {lane === "drumer" && "Drummer"}
                    {lane === "giutar" && "Guitar"}
                    {lane === "vocalWomen" && "Vocal (Nữ)"}
                    {lane === "vocalMen" && "Vocal (Nam)"}
                  </button>
                ))}
              </div>
            </div>
          <div className="w-full h-full glow-wrapper">
            {champions.map((champion) => (
              <div
                key={champion.name}
                className="bg-gray-800 rounded-full p-5 shadow hover:shadow-lg transition text-white glow-circle"
              >
                <img
                  src={champion.image}
                  alt={champion.name}
                  className="w-full h-full object-cover rounded-full image-animated "
                />
                
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default LaneSelector;
