export default function SponsorSlider() {
  const sponsors = [
    "/sponsors/cocacola.png",
    "/sponsors/yamaha.png",
    "/sponsors/pepsi.png",
    "/sponsors/vinamilk.png",
    "/sponsors/samsung.png",
    "/sponsors/zara.png",
    "/sponsors/sony.png",
    "/sponsors/cocacola.png",
    "/sponsors/yamaha.png",
    "/sponsors/pepsi.png",
    "/sponsors/vinamilk.png",
    "/sponsors/samsung.png",
    "/sponsors/zara.png",
    "/sponsors/sony.png",
  ];

  return (
    <section className="relative py-12 bg-blue-50 overflow-hidden mt-10">
      <h2 className="text-center text-3xl font-bold text-blue-700 mb-6">Nhà tài trợ đồng hành</h2>
      <div className="sponsor-marquee group">
        <div className="sponsor-track group-hover:paused">
          {sponsors.map((logo, index) => (
            <div key={index} className="sponsor-logo">
              <img src={logo} alt={`Sponsor ${index}`} className="h-16 w-auto object-contain" />
            </div>
          ))}
          {/* Lặp lại để tạo hiệu ứng liên tục */}
          {sponsors.map((logo, index) => (
            <div key={`repeat-${index}`} className="sponsor-logo">
              <img src={logo} alt={`Sponsor repeat ${index}`} className="h-16 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
