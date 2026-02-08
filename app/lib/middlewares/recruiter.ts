import { NextRequest, NextResponse } from "next/server";

export function checkAuthRecruiter(request: NextRequest) {

  const token = request.cookies.get("recruiter_token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/signin/recruiter", request.url));
  }
  return NextResponse.next();
}
