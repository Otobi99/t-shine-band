import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi form tại đây (API, email, v.v.)
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">📩 Liên Hệ Đặt Band Nhạc</h2>
        <p className="text-center text-gray-600 mb-8">
          Chúng tôi chuyên cung cấp band nhạc cho các sự kiện tiệc vui như cưới, hỏi, sinh nhật, gala, lễ hội... <br />
          <strong className="text-red-500">Không nhận biểu diễn tại tang lễ hoặc sự kiện u buồn.</strong>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Họ và tên</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Nguyễn Văn A"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Số điện thoại</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="0767 xxx xxx"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Loại sự kiện</label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">-- Chọn sự kiện --</option>
              <option value="Tiệc cưới">Tiệc cưới</option>
              <option value="Tiệc hỏi">Tiệc hỏi</option>
              <option value="Sinh nhật">Sinh nhật</option>
              <option value="Gala / Hội nghị">Gala / Hội nghị</option>
              <option value="Lễ hội / Sự kiện ngoài trời">Lễ hội / Sự kiện ngoài trời</option>
              <option value="Khác">Khác</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Nội dung yêu cầu</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Mô tả yêu cầu, thời gian, địa điểm, số lượng khách..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Gửi yêu cầu
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
