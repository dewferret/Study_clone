import BotBox2Client from "./botbox2-client";

async function getPartner() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/items/Partner`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
}

export default async function BotBox2() {

    const partner = await getPartner();

    return (
        <BotBox2Client initialPartner={partner} />
    );
}