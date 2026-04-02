import { NextResponse } from "next/server";
import { legalDocs } from "@/lib/mockData";

export const revalidate = 3600;

export async function GET() {
  return NextResponse.json(legalDocs);
}