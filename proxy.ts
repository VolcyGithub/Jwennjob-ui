import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkAuthCandidate } from "@/features/candidate/shared/middlewares/candidateCheck";
import { checkAuthRecruiter } from "@/features/recruiter/shared/middlewares/recruiterCheck";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/candidate") || pathname.startsWith("/cv")) {
    return checkAuthCandidate(request);
  }

  if (pathname.startsWith("/recruiter")) {
    return checkAuthRecruiter(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/candidate/:path*", "/recruiter/:path*", "/cv/:path*"],
};
