import { RedirectToSignIn } from "@clerk/nextjs";
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware({
  afterAuth: (auth, req) => {
    if (auth.userId && auth.isPublicRoute) {
      let path = "/select-org";
      if (auth.orgId) {
        path = `/organization/${auth.orgId}`;
      }
      const orgSelection = new URL(path, req.url);
      return NextResponse.redirect(orgSelection)
    }
    if (!auth.userId &&
        !auth.isPublicRoute) {
        return RedirectToSignIn({ returnBackUrl: req.url });
    }
    if (auth.userId &&
        !auth.orgId &&
        req.nextUrl.pathname !== "/select-org") {
        return NextResponse.redirect(new URL("/select-org", req.url));
    }
  },
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:css|js|map|json|jpe?g|png|gif|svg|webp|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // ✅ Always run middleware for API routes
    "/api/:path*",
    "/trpc/:path*",
  ],
};