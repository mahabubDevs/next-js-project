import {NextRequest, NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export { default } from "next-auth/middleware"
import { getToken } from "next-auth/jwt"
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

  const token = await getToken({req:request})
  const url = request.nextUrl
  if(token && (
    url.pathname.startsWith('/sing-in') ||
    url.pathname.startsWith('/sing-up') ||
    url.pathname.startsWith('/verify') ||
    url.pathname.startsWith('/') 
  )){
    return NextResponse.redirect(new URL('/home',request.url))
  }

  return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/sign-in',
    '/sign-up',
    '/',
    '/dashbord/:path*',
    'verify/:path*'

  ]
}