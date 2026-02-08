import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { checkAuthCandidate } from './app/lib/middlewares/candidate';
import { checkAuthRecruiter } from './app/lib/middlewares/recruiter';

export function proxy(request: NextRequest) {
  
   const {pathname} = request.nextUrl;

   if(pathname.startsWith('/candidate')){
    return checkAuthCandidate(request);
   }

   if(pathname.startsWith("/recruiter")){
    return checkAuthRecruiter(request);
   }

   return NextResponse.next();

}

export const config = {
  matcher: ['/candidate/:path*' , '/recruiter/:path*'],
};