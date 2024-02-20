import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

export const SignIn = () => {
    return (
        <div className="p-4 bg-muted rounded-xl">
            <Button>
                <FcGoogle className="h-4 w-4 mr-2" />
                Sign in with Google
            </Button>
        </div>
    );
};