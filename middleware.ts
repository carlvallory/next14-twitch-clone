import NextAuth from "next-auth";
import authConfig from "./next-auth.config";

const { auth: middleware } = NextAuth(authConfig);

const authPaths = [
    "/sign-in",
    "/sign-up",
];

export default middleware((request) => {
    if(authPaths.includes(request.nextUrl.pathname)) {
        if(request.auth) {
            const redirectUrl = new URL("/", request.url);
            return Response.redirect(redirectUrl);
        }
    } else {

        if(!request.auth) {
            const redirectUrl = new URL("/sign-in", request.url);
            return Response.redirect(redirectUrl);
        }
    }

    return null;
});

export const config = {
    matcher: ["/u/:path*", "/sign-in", "/sign-up"]
}