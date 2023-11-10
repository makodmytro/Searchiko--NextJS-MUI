import { NextResponse } from "next/server";

export async function GET(request) {
  console.log("oook");
  return NextResponse.json({ response: "Ok!" }, { status: 200 });
}
