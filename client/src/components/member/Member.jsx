import { useState } from "react";
import logo from "../../assets/logo.png";

const LaneSelector = () => {
  const laneData = [
    {
      name: "Thanh Tùng",
      role: "Drumer",
      image:
        "https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/515745783_1261410559044763_6543412094676714878_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=tbxdTE62AX4Q7kNvwGEEUsg&_nc_oc=Adl_N04dbO80hmP8AZ9__DwzprBTRyXeklcvLKEiirBIUn_Rg9QTa8Se8PiHZLe7FVw&_nc_zt=23&_nc_ht=scontent.fsgn3-1.fna&_nc_gid=rx57Inbuyvs117DkI8Hi1w&oh=00_AffcX2646jvF8P_KJJpm9DJlUPNHQMESi_BWNmNOwfwBxg&oe=68EA93A1",
    },
    {
      name: "Thảo Nguyên",
      role: "Vocal",
      image:
        "https://res.cloudinary.com/dttqah17o/image/upload/v1759810697/vocal-thao-nguyen-1_ahilwb.jpg",
    },
    {
      name: "Nghĩa Trần",
      role: "Giutarist",
      image:
        "https://res.cloudinary.com/dttqah17o/image/upload/v1759810840/giutar-nghia-tran-3_dghyyn.jpg",
    },
    {
      name: "Khánh Huyền",
      role: "Vocal",
      image:
        "https://res.cloudinary.com/dttqah17o/image/upload/v1759810724/vocal-khanh-huyen-4_nmenck.jpg",
    },
    {
      name: "Công Toàn",
      role: "Keyboard",
      image:
        "https://scontent.fsgn24-2.fna.fbcdn.net/v/t39.30808-6/552953710_4542575335969813_6181925396529485236_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=ZcEaBNveEZQQ7kNvwEzzEuc&_nc_oc=AdmO8zR5oB0-Ms_lrUpa6Ha7iSorYSLAPA4ZpziGFls0XUBA99zwItYy9nfk28l7qjM&_nc_zt=23&_nc_ht=scontent.fsgn24-2.fna&_nc_gid=_EulKnDDMNOO614otNWafQ&oh=00_AfcNpea57qSD3Fwj4jFcTiXGgVEOkvR0oFPKJJaJclBm8g&oe=68EAA968",
    },
    {
      name: "Thanh Hiếu",
      role: "Vocal Nam",
      image:
        "https://res.cloudinary.com/dttqah17o/image/upload/v1759810768/vocal-thanh-hieu-2_eaf6ug.jpg",
    },
  ];

  const [selectedName, setSelectedName] = useState(laneData[0].name);

  const nameList = [...new Set(laneData.map((member) => member.name))];
  const selectedMember = laneData.find((member) => member.name === selectedName);

  return (
    <div className="container mx-auto px-4 md:px-0 h-[100vh] bg-[#f0f4ff]">
      <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
        <div className="flex flex-col flex-wrap justify-center items-center gap-3">
          <div className="w-50 h-50 md:w-100 md:h-100">
            <img src={logo} alt="T Shine Band" className="w-full h-full logo" />
          </div>
          {selectedMember && (
            <div className="flex flex-col items-center">
              <p className="mt-4 text-center text-5xl font-semibold glowing-text">
                {selectedMember.name.split("").map((char, index) => (
                  <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                    {char}
                  </span>
                ))}
              </p>
              <p className="mt-2 text-center text-lg text-gray-500">{selectedMember.role}</p>
            </div>
          )}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {nameList.map((name) => (
              <button
                key={name}
                onClick={() => setSelectedName(name)}
                className={`px-4 py-2 rounded font-semibold transition ${
                  selectedName === name
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-black hover:bg-gray-400"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full h-full md:w-250 md:h-250 logo">
          {selectedMember && (
            <div className="flex flex-col items-center">
              <div className="w-60 h-60 rounded-full p-5 shadow hover:shadow-lg transition text-white">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LaneSelector;
