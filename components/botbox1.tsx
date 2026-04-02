import BotBox1Client from "./botbox1-client";

async function getHtpl() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/items/hoTroPhapLy`, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  const json = await res.json();
  return json.data || []; 
}

async function getTinTuc() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/items/timeTinTuc`, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  const json = await res.json();
  return json.data || []; 
}

async function getTinTucSuKien() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/items/tinTucSuKien`, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  const json = await res.json();
  return json.data || []; 
}

export default async function BotBox1() {
  const tinTuc = await getTinTuc();
  const htpl = await getHtpl();
  const tinTucSuKien = await getTinTucSuKien();

  return (
    <BotBox1Client initialTinTuc={tinTuc} initialHtpl={htpl} initialTinTucSuKien={tinTucSuKien} />
  );
}