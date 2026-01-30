import { NextRequest, NextResponse } from "next/server";

export function checkAuthCandidate(request : NextRequest){
    const token = request.cookies.get("candidate_token")?.value;

    if(!token){
        return NextResponse.redirect(new URL("/signin" , request.url));
    }

    return NextResponse.next();
}