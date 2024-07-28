import {useMsal} from "@azure/msal-react";

export function LogOut() {
    const { instance } = useMsal();

    const handleLogout = () => {
        const logoutRequest = {
            account: instance.getActiveAccount()
        };
        instance.logout(logoutRequest);
    };
    return (
        <button onClick={handleLogout}>Log Out</button>
    );
}
