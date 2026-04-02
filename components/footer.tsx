

export default function Footer() {
  return (
    <footer className="h-auto !py-5 bg-[#0280cd] text-white flex items-center justify-center">
      <div className="container">
        <div className="footer-top flex justify-start items-center gap-5 addBorder w-full !py-5">
          <div>
            <img src="/img/f7916101-f0ae-4c56-b26e-1111a3f02f10" alt="Logo" className="w-32" />
          </div>
          <div>
            <h1 className="!text-white">HỖ TRỢ PHÁP LÝ CHO DOANH NGHIỆP</h1>
            <h3>Trưởng Ban biên tập: Đồng chí Lê Vệ Quốc - Cục trưởng Cục Phổ biến, giáo dục pháp luật</h3>
            <h3>Giấy phép số: 28/GP-BC ngày 25/03/2005.</h3>
            <h3>Địa chỉ: 58-60 Trần Phú, Ba Đình, Hà Nội.</h3>
            <h3>Điện thoại: 024.62739643</h3>
          </div>
        </div>
        <div className="footer-bot p-10 flex justify-center w-full !py-5">
          <p>Ghi rõ nguồn Cổng thông tin điện tử Bộ Tư Pháp (www.moj.gov.vn) khi trích dẫn lại thông tin từ địa chỉ này.</p>
        </div>
      </div>
    </footer>
  );
}