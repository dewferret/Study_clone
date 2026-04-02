import TopBox2Client from './topbox2-client';

async function getDocs() {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/items/legalDocs`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) {
    return [];
  }
  const json = await res.json();
  return json.data || []; 
}

async function getNotis() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/items/notiContent`, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  const json = await res.json();
  return json.data || []; 
}

export default async function TopBox2() {

  const docs = await getDocs();
  const notis = await getNotis();

  return (<TopBox2Client initialDocs={docs} initialNotis={notis} />);
}