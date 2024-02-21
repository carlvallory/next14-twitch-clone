"use client";

import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const SignIn = () => {
    const onClick = () => {
        signIn("google");
    }

    return (
        <div className="p-4 bg-muted rounded-xl">
            <Button onClick={onClick}>
                <FcGoogle className="h-4 w-4 mr-2" />
                Sign in with Google
            </Button>
        </div>
    );
};