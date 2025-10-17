import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập họ tên"),
  phone: z
    .string()
    .min(10, "Số điện thoại phải có ít nhất 10 chữ số")
    .regex(/^\d+$/, "Số điện thoại không hợp lệ"),
  location: z.string().min(1, "Vui lòng nhập địa điểm biểu diễn"),
  time: z.string().min(1, "Vui lòng chọn thời gian"),
  dresscode: z.string().optional(),
  message: z.string().optional(),
  quantity: z
    .number({
      required_error: "Vui lòng nhập số lượng người",
      invalid_type_error: "Số lượng phải là số",
    })
    .min(6, "Tối thiểu 6 người")
    .max(10, "Tối đa 10 người"),
});
