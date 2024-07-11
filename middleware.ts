// The clerkMiddleware helper enables authentication and is where you'll 
// configure your protected routes. Protected rotection to prevent hacking.


import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};