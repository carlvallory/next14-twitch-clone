import { auth } from "@/next-auth"

export const useAuth = () => {
    // const auth = useClerkAuth();
    // return auth;
    return null;
}

export const useUser = () => {
    // const user = useClerkUser();
    // return user;
    return null;
}

export const currentUser = async () => {
    const session = await auth();
    return session?.user;
}