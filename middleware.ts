import NextAuth from "next-auth";
import authConfig from "./next-auth.config";

const { auth: middleware } = NextAuth(authConfig);

const authPaths = [
    "/sign-in",
    "/sign-up"
];

export default middleware((request) => {
    if(authPaths.includes(request.nextUrl.pathname)) {
        if(request.auth) {
            const redirectUrl = new URL("/", request.url);
            return Response.redirect(redirectUrl);
        }
    }

    /* if(!request.auth) {
        const redirectUrl = new URL("/sign-in", request.url);
        return Response.redirect(redirectUrl);
    }

    return Response.redirect(new URL("/", request.url)); */

});

export const config = {
    matcher: ["/u/:path*", "/sign-in", "/sign-up"]
}