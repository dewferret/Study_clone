"use client";

interface BotBox1ClientProps {
    initialTinTuc: any[];
    initialHtpl: any[];
    initialTinTucSuKien: any[];
}

export default function BotBox1Client({ initialTinTuc, initialHtpl, initialTinTucSuKien }: BotBox1ClientProps) {

    return (
        <div className="bot-box1 w-full grid grid-cols-1 md:grid-cols-14 gap-4">
            <div className="hotrophaply  md:col-span-6">
                <h1>Hỗ trợ pháp lý</h1>
                <div className="box-parent grid grid-cols-2 md:grid-cols-3 gap-2">
                    {initialHtpl.map((item) => (
                        <div key={item.id} className="box-child md:col-span-1 w-full aspect-square bg-[#017fcd] text-white">
                            <img src={`/img/${item.image}`} className="grid grid-cols-1 justify-center " alt="" />
                            <p className="line-clamp-2">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="tintucvasukien md:col-span-8">
                <h1>Tin tức sự kiện</h1>
                <div className="grid grid-cols-1 gap-4">
                    {initialTinTucSuKien.map((item) => (
                        <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-4" >
                            <div className="md:col-span-1">
                                <img src={`/img/${item.image}`} alt="" />
                            </div>
                            <div>
                                <h2>{item.title}</h2>
                                <p className="text-sm">{item.content}</p>
                            </div>
                        </div>
                    ))}
                    <div className="time">
                        <table className="custom-table">
                            <tbody>
                                {initialTinTuc.map((time) => (
                                    <tr key={time.id}>
                                        <td className="doc-date">{time.time}</td>
                                        <td className="doc-summary">{time.content}</td>
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