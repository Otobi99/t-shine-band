export default function RelatedMembers({ currentMemberId }) {
  const members = [
    { id: "vocal01", name: "Trần Minh Nhật", avatar: "/members/minhnhat.jpg" },
    { id: "guitar01", name: "Nguyễn Hoàng", avatar: "/members/hoang.jpg" },
    { id: "drum01", name: "Lê Tuấn", avatar: "/members/tuan.jpg" },
  ];

  const filtered = members.filter((m) => m.id !== currentMemberId);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {filtered.map((m) => (
        <a
          key={m.id}
          href={`/members/${m.id}`}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center p-4"
        >
          <img src={m.avatar} alt={m.name} className="w-full h-40 object-cover rounded-lg mb-3" />
          <h4 className="text-blue-700 font-semibold">{m.name}</h4>
        </a>
      ))}
    </div>
  );
}
