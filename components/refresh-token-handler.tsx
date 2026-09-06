import {useSession} from "next-auth/react";
import {useEffect} from "react";

interface RefreshTokenHandlerProps {
    setInterval: (interval: number) => void;
}

const RefreshTokenHandler = (props: RefreshTokenHandlerProps) => {
    const {data: session} = useSession();

    useEffect(() => {
        if (!!session) {
            // We did set the token to be ready to refresh after 23 hours, here we set interval of 60 seconds.
            const timeRemaining = Math.round((((session.expires_at ?? 0 - 60000) - Date.now()) / 1000));
            props.setInterval(timeRemaining > 0 ? timeRemaining : 0);
        }
    }, [session]);

    return null;
}

export default RefreshTokenHandler;