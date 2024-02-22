import { signOut } from "next-auth/react";
import { getSelf } from "@/lib/auth-service";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { UserAvatar } from "@/components/user-avatar";

export const UserButton = async ({ props }: any) => {
    const user = await getSelf();

    if(!user) return null;

    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar 
                    username={user.username!}
                    imageUrl={user.image!}
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{user.username}</DropdownMenuLabel>
            </DropdownMenuContent>
        </DropdownMenu>
        
    );
};