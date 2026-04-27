# Hướng dẫn viết luận giải

## Cấu trúc thư mục

```
src/data/luan-giai/
├── chinh-tinh/        # 14 file - mỗi file 1 sao chính
│   ├── tu-vi.ts       # ⭐ đã có ví dụ - tham khảo
│   ├── thien-co.ts    # trống
│   └── ...
├── cung/              # 12 file - mỗi file 1 cung
│   ├── menh.ts
│   └── ...
├── HUONG-DAN.md       # file này
├── index.ts           # ⚠️ KHÔNG sửa - tự gộp các file
└── types.ts           # ⚠️ KHÔNG sửa - định nghĩa kiểu
```

## Cách thêm 1 đoạn luận giải

1. Mở file tương ứng. Ví dụ muốn viết về sao **Thiên Cơ** → mở `chinh-tinh/thien-co.ts`
2. Trong mảng `[]`, thêm 1 object như sau:

```typescript
{
  id: 'thien-co-tinh-chat-chung',  // mã không trùng - viết kebab-case
  sao: ['Thiên Cơ'],
  doUuTien: 30,
  tomTat: `Thiên Cơ là sao... (đoạn ngắn miễn phí, hỗ trợ markdown)`,
  chiTiet: `(đoạn dài, sau này trả phí)`,  // tùy chọn
},
```

3. Save file. Push lên git → Vercel tự cập nhật web.

## Quy tắc tag

| Trường | Ý nghĩa | Ví dụ |
|---|---|---|
| `sao` | Áp dụng cho sao nào | `['Tử Vi']` hoặc `['Tả Phụ', 'Hữu Bật']` |
| `cung` | Áp dụng khi sao ở cung nào | `['Mệnh']`, `['Phu Thê']` |
| `chi` | Áp dụng khi ở vị trí chi nào | `['Tý', 'Ngọ']` |
| `ketHop` | Phải có sao này CÙNG cung | `['Vũ Khúc']` |
| `doUuTien` | Số càng cao càng hiện trước (mặc định 50) | `80` cho specific, `30` cho chung |
| `tomTat` | Đoạn ngắn (miễn phí) | bắt buộc |
| `chiTiet` | Đoạn dài (trả phí) | tuỳ chọn |

**Quy tắc khớp:** Trường nào BỎ TRỐNG = áp dụng cho TẤT CẢ. Càng nhiều trường có giá trị = càng cụ thể.

## Ví dụ độ ưu tiên

- `doUuTien: 100` — chỉ khớp 1 trường hợp duy nhất, hiện ĐẦU TIÊN
- `doUuTien: 80` — Tử Vi tại Mệnh ở Ngọ
- `doUuTien: 50` — Tử Vi tại Mệnh (không cần biết chi)
- `doUuTien: 30` — Tử Vi nói chung (mọi cung)

Mặc định 50 nếu không ghi.

## Markdown được hỗ trợ

- `**đậm**`, `*nghiêng*`
- Xuống dòng (kéo dài chuỗi với `\``)
- Tiêu đề `## ...`, `### ...`
- Danh sách `- `, `1. `

## Kiểm tra trên web

Sau khi save + push:
1. Đợi Vercel build (~2 phút)
2. Vào https://tuvi5.vercel.app/
3. Lập 1 lá số có sao bạn vừa viết
4. Cuộn xuống xem nội dung hiện đúng chưa

## Sửa hoặc xóa

- **Sửa:** chỉnh trực tiếp text trong file
- **Xóa:** xóa cả object (từ `{` đến `},`)
- **Tạm ẩn:** chuyển thành comment bằng `//` ở đầu dòng

Push lên là xong.
