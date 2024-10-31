import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ServicesType } from "./utils/redux/Interfaces/ServicesType";

export function middleware(request: NextRequest) {
  const chunks = request.url.split("/");
  return chunks[chunks.length - 1] in ServicesType
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/", request.url));
}
export const config = {
  matcher: "/services/:path*",
};
