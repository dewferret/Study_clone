import { NextResponse } from "next/server";
import { timeTinTuc } from "@/lib/mockData";

export const revalidate = 3600;

export async function GET() {
  return NextResponse.json(timeTinTuc);
}