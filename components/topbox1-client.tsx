"use client"
import Image from "next/image";

interface TopBox1ClientProps {
    initialNews: any[];
}

export default function TopBox1Client({ initialNews }: TopBox1ClientProps) {

    return (
        <div className="top-box1 grid grid-cols-1 md:grid-cols-10 gap-4">
            <div className="md:col-span-6 overflow-hidden">
                <Image src="/img/d158971e-2e3d-4eed-9218-59cc78228080" alt="News Image" width={1200} height={600} className="object-cover w-full h-auto" />
            </div>
            <div className="tin-noi-bat md:col-span-4">
                <p className="h-12">Tin Nổi Bật</p>
                <div className="new-list">
                    {initialNews.map((news) => (
                        <div className="item" key={news.id}>
                            <h3 className="news-title">{news.title}</h3>
                            <p className="news-desc">{news.description}</p>
                            <div className="news-footer">
                                <span className="news-time">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#014282"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    <p>{news.time}</p>
                                </span>
                                <a href="#" className="read-more">Xem thêm</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}