import { NextResponse } from "next/server";
import { featuredNews } from "@/lib/mockData";

export const revalidate = 3600;

export async function GET() {
    return NextResponse.json(featuredNews);
}