"use client"

interface BotBox2ClientProps {
    initialPartner: any[];
}

export default function BotBox2Client({ initialPartner }: BotBox2ClientProps) {

    return (
        <div className="bot-box2">
            <div className="container">
                <div className="row w-full grid grid-cols-2 md:grid-cols-4 gap-4">
                    {initialPartner.map((partner) => (
                        <div key={partner.id} className="md:col-span-1">
                            <img src={`/img/${partner.image}`} alt={partner.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}