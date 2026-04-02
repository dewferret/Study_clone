"use client";

import { useState } from "react";

interface TopBox2ClientProps {
    initialDocs: any[];
    initialNotis: any[];
}

export default function TopBox2Client({ initialDocs, initialNotis }: TopBox2ClientProps) {

    const [docs, setDocs] = useState(initialDocs);

    const [loaiVanBan, setLoaiVanBan] = useState("");
    const [phanLoai, setPhanLoai] = useState("");
    const [coQuan, setCoQuan] = useState("");
    const [tuNam, setTuNam] = useState("");
    const [denNam, setDenNam] = useState("");

    const currentYear = new Date().getFullYear();
    const years = Array.from(new Array(30), (_, index) => currentYear - index);

    const handleSearch = () => {
        let result = [...initialDocs];

        if (loaiVanBan) result = result.filter(doc => doc.loai_van_ban == loaiVanBan);
        if (phanLoai) result = result.filter(doc => doc.phan_loai == phanLoai);
        if (coQuan) result = result.filter(doc => doc.co_quan_ban_hanh == coQuan);

        if (tuNam || denNam) {
            result = result.filter(doc => {
                if (!doc.date) return false;
                const docYear = parseInt(doc.date.split("/")[2]);

                let isMatch = true;
                if (tuNam && docYear < parseInt(tuNam)) isMatch = false;
                if (denNam && docYear > parseInt(denNam)) isMatch = false;

                return isMatch;
            });
        }

        setDocs(result);
    };

    return (
        <div className="top-box2">
            <h1>Văn bản pháp luật</h1>
            <div className="tim-kiem grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3 items-end">
                <div className="loai-van-ban content col-span-1 md:col-span-2">
                    <label>Loại văn bản</label>
                    <select name="loaivanban" id="loaivanban" value={loaiVanBan}
                        onChange={(e) => setLoaiVanBan(e.target.value)}>
                        <option value="">Chọn loại văn bản</option>
                        <option value="1">Nghị định</option>
                        <option value="2">Thông tư</option>
                        <option value="3">Quyết định</option>
                    </select>
                </div>
                <div className="phan-loai content col-span-1 md:col-span-2">
                    <label>Phân loại</label>
                    <select name="phanloai" id="phanloai" value={phanLoai}
                        onChange={(e) => setPhanLoai(e.target.value)}>
                        <option value="">Chọn phân loại</option>
                        <option value="1">Văn bản mới ban hành</option>
                        <option value="2">Văn bản sửa đổi, bổ sung</option>
                        <option value="3">Văn bản bãi bỏ</option>
                    </select>
                </div>
                <div className="co-quan-ban-hanh content col-span-1 md:col-span-2">
                    <label>Cơ quan ban hành</label>
                    <select
                        name="coquanbanhanh"
                        id="coquanbanhanh"
                        value={coQuan}
                        onChange={(e) => setCoQuan(e.target.value)}
                    >
                        <option value="">Chọn cơ quan ban hành</option>
                        <option value="1">Bộ Kế hoạch và Đầu tư</option>
                        <option value="2">Bộ Tài chính</option>
                        <option value="3">Chính phủ</option>
                        <option value="4">Thủ tướng Chính phủ</option>
                        <option value="5">Bộ Lao động - Thương binh và Xã hội</option>
                        <option value="6">Ngân hàng Nhà nước</option>
                        <option value="7">Bộ Tư pháp</option>
                    </select>
                </div>
                <div className="nam-phat-hanh content col-span-1 md:col-span-4">
                    <label>Năm phát hành</label>
                    <div className="box-nph">
                        <select name="nambatdau" id="nambatdau" className="w-[50%]" value={tuNam} onChange={(e) => setTuNam(e.target.value)}>
                            <option value="">Từ năm</option>
                            {years.map(year => <option key={`start-${year}`} value={year}>{year}</option>)}
                        </select>
                        <select name="namketthuc" id="namketthuc" className="w-[50%]" value={denNam} onChange={(e) => setDenNam(e.target.value)}>
                            <option value="">Đến năm</option>
                            {years.map(year => <option key={`end-${year}`} value={year}>{year}</option>)}
                        </select>
                    </div>
                </div>
                <button className="timkiem-btn col-span-1 md:col-span-2" onClick={handleSearch}>Tìm kiếm</button>
            </div>
            <div className="table-noti grid grid-cols-1 md:grid-cols-10 gap-4">
                <div className="tablescroll md:col-span-7">
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>Số hiệu</th>
                                <th>Ngày ban hành</th>
                                <th>Trích yếu</th>
                            </tr>
                        </thead>
                        <tbody>
                            {docs.map((doc) => (
                                <tr key={doc.id}>
                                    <td className="doc-number">{doc.number}</td>
                                    <td className="doc-date">{doc.date}</td>
                                    <td className="doc-summary">{doc.summary}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="noti md:col-span-3">
                    <div className="notiscroll">
                        <table className="custom-table">
                            <thead>
                                <tr>
                                    <th className="flex justify-center items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                        Thông báo
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {initialNotis.map((doc) => (
                                    <tr key={doc.id}>
                                        <td className="noti-content">{doc.text}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}