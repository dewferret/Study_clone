import TopBox1Client from "./topbox1-client";

async function getNew() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/items/featuredNews`, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  const json = await res.json();
  return json.data || []; 
}

export default async function TopBox1() {
    const news = await getNew();

    return (
        <TopBox1Client initialNews={news} />
    );
}