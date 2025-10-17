import React from "react";

const sponsors = [
  "https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Cocacola-Ci.png",
  "https://inhoangha.com/ckfinder/userfiles/images/logo-acb.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3y3-eDVZKeXRyjRxHgKPPRa7-YG0iLsBiTA&s",
  "https://toppng.com/uploads/preview/tiger-full-colour-tiger-beer-logo-11563151577ymnyg2gwvb.png",
  "https://cdn.haitrieu.com/wp-content/uploads/2022/03/Logo-Heineken-Beer-Cla.png",
  "https://images.seeklogo.com/logo-png/43/2/sky-zone-logo-png_seeklogo-436721.png",
  "https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Cocacola-Ci.png",
  "https://inhoangha.com/ckfinder/userfiles/images/logo-acb.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3y3-eDVZKeXRyjRxHgKPPRa7-YG0iLsBiTA&s",
  "https://toppng.com/uploads/preview/tiger-full-colour-tiger-beer-logo-11563151577ymnyg2gwvb.png",
  "https://cdn.haitrieu.com/wp-content/uploads/2022/03/Logo-Heineken-Beer-Cla.png",
  "https://images.seeklogo.com/logo-png/43/2/sky-zone-logo-png_seeklogo-436721.png",
];

const SponsorSection = () => {
  // Lặp lại danh sách để tạo hiệu ứng liên tục
  const repeatedSponsors = [...sponsors, ...sponsors];

  return (
    <section className="w-full h-full overflow-hidden py-6">
      <div className="relative w-full h-full group">
        <div className="flex items-center gap-8 animate-marquee group-hover:paused">
          {repeatedSponsors.map((src, index) => (
            <div
              key={index}
              className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg shadow-md p-2"
            >
              <img
                src={src}
                alt={`Sponsor ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )}

export default SponsorSection;
