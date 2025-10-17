import Title from "../common/Title";

const showData = [
  {
    image: "https://scontent.fsgn24-2.fna.fbcdn.net/v/t39.30808-6/558091180_1127486792919465_8976949278414680268_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=b_fDjfOz33QQ7kNvwG8ttgG&_nc_oc=AdmGVc4Ww6s1jXzCWxg5UZxuzNqS3CnJ3jN67Zt-EhC9l3zkp-yATEPzySgmXZoUqEY&_nc_zt=23&_nc_ht=scontent.fsgn24-2.fna&_nc_gid=9LvE6Qp0nGb0SrZ0ks5Weg&oh=00_AffvafGzi_s2LLVJ2So83bngvMw1k83j8O2nh3tdLTsYDw&oe=68F7BA7F",
    place: "Skyzone Nguyễn Huệ",
    time: "Thứ 6 • 20:00",
    address: "123 Nguyễn Trãi, TP Tây Ninh",
  },
  {
    image: "https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/539005759_1303886617815670_1280381222849326230_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LMbwsA67vOsQ7kNvwHLWCmp&_nc_oc=AdlftV0ie_Ws2DwNqZW1N97b7Fk8srZUJEqjp7eywtOQao9MhHTN9R2ZQPmgjQqZDCE&_nc_zt=23&_nc_ht=scontent.fsgn13-2.fna&_nc_gid=bFylzeh1D3l_egNanUOK-g&oh=00_AffMuafsBXThoy7vlHT4B00GQ7a6Lamew-5L3St9GFXGIQ&oe=68F7B8E4",
    place: "Sự kiện Tiger Beer ",
    time: "Thứ 7 • 21:00",
    address: "45 Lê Lợi, TP Tây Ninh",
  },
  {
    image: "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/488755632_4338223513071664_8599787768959471405_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jZWJL6u5LLQQ7kNvwFXIJ75&_nc_oc=Adnag4otrNPsn-qQAfpwKvLQ9PD_gq4Rh4Ckoj2fjBoDNBmhkL8ROX0JH0H10MBM_xI&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=FjIUxE0ks7rJBtrIZ4fvvw&oh=00_Afdp_sgW7NSIiCiLcIuGZbnKoKjxsyS5L94vOl7-ruF5aw&oe=68F7CEE0",
    place: "Lu Lu lo la",
    time: "Chủ nhật • 19:30",
    address: "88 Trần Hưng Đạo, TP Tây Ninh",
  },
  {
    image: "https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/560275659_1225325156296687_6851976031023161662_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3u2SJ9mY4vkQ7kNvwGlulI4&_nc_oc=Adlx-tfbfvtaXGeawHoPMlrM6iRh580YYMv0tDmS-O057hF2943W6My-QkrU0TiLM1U&_nc_zt=23&_nc_ht=scontent.fsgn3-1.fna&_nc_gid=Iw6YrKeTs9xHz_jjWCDV9w&oh=00_AffO6tQUqedqHOWXa0Bqk7bSIDWLYOVeBtzl7qiK25qCDg&oe=68F7BA94",
    place: "Mây lang thang",
    time: "Thứ 5 • 20:00",
    address: "12 Phan Chu Trinh, TP Tây Ninh",
  },
  {
    image: "https://scontent.fsgn13-1.fna.fbcdn.net/v/t39.30808-6/538165345_1117165353843631_7036014192700458933_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=80hD8j9V9YAQ7kNvwFe_peA&_nc_oc=AdmcFExEEDU_e2VZhOQb2el2kkMCSOZ_UE6aezoXNxUJJGh__wY3-s659fmQgFhgwCk&_nc_zt=23&_nc_ht=scontent.fsgn13-1.fna&_nc_gid=B9myq3GY-SetbFe_rk-ksg&oh=00_AffZV-GgLJmt7xdBvEo4ny30xBqoM38MIRQxcE1h24kjmw&oe=68F7CE1D",
    place: "Mây sài gòn",
    time: "Thứ 3 • 19:00",
    address: "67 Hùng Vương, TP Tây Ninh",
  },
  {
    image: "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/489754209_651852484416313_1286402432928303986_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TRVx36wIec0Q7kNvwF1oWVu&_nc_oc=AdksyvyoOQ63U6U2STslYfvthLOxEyrNoIwWbPxxz9sQ0Nmslmvb3-37VgJkdwjROz0&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=FmiKy4g5zFnd4yBoMoEZjQ&oh=00_AfenRb2TJx7V7bx4RKhnDtrMHgnIGUHrm8RMOInYmzLx2A&oe=68F7ADDF",
    place: "Hẹn Rooftop",
    time: "Thứ 2 • 20:30",
    address: "09 Nguyễn Văn Rốp, TP Tây Ninh",
  },
];

const ShowSection = () => {
  return (
    <section className="mt-20 relative">
      <div className="relative z-10 container mx-auto px-4 md:px-0">
        {/* Tiêu đề */}
        <div className="mb-10" data-aos="fade-up">
          <Title
            text="Lịch diễn"
            highlight="T Shine Band"
            align="center"
            size="text-4xl"
            uppercase={true}
          />
          <p
            className="text-center text-white/80 mt-4 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Những điểm diễn cố định của chúng tôi tại các quán cà phê địa phương — nơi âm nhạc và cảm xúc giao thoa. Hãy đến và cùng sống trong từng giai điệu.
          </p>
        </div>

        {/* Grid lịch diễn */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {showData.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg group"
            >
              <img
                src={item.image}
                alt={item.place}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-bold">{item.place}</h3>
                <p className="text-sm">{item.address}</p>
                <p className="text-sm mt-1 text-indigo-300">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowSection;
