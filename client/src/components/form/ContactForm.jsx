import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    dresscode: "",
    message: "",
  });

  const eventOptions = [
    "Coffee Acoustic Cố Định",
    "Tiệc cưới",
    "Tiệc hỏi",
    "YEP (Year End Party)",
    "Tất niên",
    "Tân niên",
    "Khai trương",
    "Sinh nhật",
    "Sự kiện / Event",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Thông tin khách hàng:", formData);
    // Gửi dữ liệu về server hoặc xử lý tiếp
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-[url('/bg-contact.jpg')] bg-cover bg-center">
      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-blue-200 p-8">
        <h2 className="text-4xl font-bold text-blue-700 mb-8 text-center title-font">
          Liên hệ đặt show T Shine Band
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tên */}
          <div>
            <label className="block text-blue-700 font-medium mb-1">Tên của bạn</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm">
              <FaUser className="text-blue-500 mr-2" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nguyễn Văn A"
                className="w-full outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-blue-700 font-medium mb-1">Email</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm">
              <FaEnvelope className="text-blue-500 mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@domain.com"
                className="w-full outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* Số điện thoại */}
          <div>
            <label className="block text-blue-700 font-medium mb-1">Số điện thoại</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm">
              <FaPhone className="text-blue-500 mr-2" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0909xxxxxx"
                className="w-full outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* Loại sự kiện */}
          <div>
            <label className="block text-blue-700 font-medium mb-1">Loại sự kiện</label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 bg-white shadow-sm outline-none"
              required
            >
              <option value="">-- Chọn sự kiện --</option>
              {eventOptions.map((event, index) => (
                <option key={index} value={event}>
                  {event}
                </option>
              ))}
            </select>
          </div>

          {/* Dresscode */}
          <div>
            <label className="block text-blue-700 font-medium mb-1">Dresscode mong muốn</label>
            <input
              type="text"
              name="dresscode"
              value={formData.dresscode}
              onChange={handleChange}
              placeholder="Ví dụ: trắng - đen, pastel, năng động..."
              className="w-full border rounded-lg px-3 py-2 bg-white shadow-sm outline-none"
            />
          </div>

          {/* Lời nhắn thêm */}
          <div>
            <label className="block text-blue-700 font-medium mb-1">Lời nhắn thêm</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Bạn muốn band chơi bài nào, thời gian cụ thể, yêu cầu đặc biệt..."
              className="w-full border rounded-lg px-3 py-2 bg-white shadow-sm outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-full shadow-md hover:shadow-xl transition"
            >
              Gửi yêu cầu →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
