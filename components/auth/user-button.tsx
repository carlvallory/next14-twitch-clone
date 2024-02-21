"use client";

import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";

export const UserButton = ({ props }: any) => {
    const onClick = () => {
        signOut();
    }

    return(
        <Button onClick={onClick} size="sm">Logout</Button>
    );
};