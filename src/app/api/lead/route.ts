import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const email = String(form.get("email") || "");
  const role = String(form.get("role") || "");
  console.log("Lead:", { email, role, ts: new Date().toISOString() });
  // TODO: push to Supabase or Google Sheets
  return NextResponse.redirect("/", { status: 303 });
}
