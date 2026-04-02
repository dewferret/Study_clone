import { NextResponse } from "next/server";
import { botBox2Data } from "@/lib/mockData";

export const revalidate = 3600;

export async function GET() {
    return NextResponse.json(botBox2Data);
}