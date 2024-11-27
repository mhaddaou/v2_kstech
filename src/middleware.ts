import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { ServicesType } from "./utils/redux/Interfaces/ServicesType";

export function middleware(request: NextRequest) {
  NextResponse.next()
//   const chunks = request.url.split("/");
//   return chunks[chunks.length - 1] in ServicesType
//     ? NextResponse.next()
//     : NextResponse.redirect(new URL("/", request.url));
}
// export const config = {
//   matcher: "/services/:path*",
// };
