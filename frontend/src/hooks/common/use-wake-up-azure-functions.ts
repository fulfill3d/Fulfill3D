import {useEffect} from "react";

export const useWakeUpAzureFunctions = () => {
    // PING to Wake Up Azure Functions
    // We use consumption plan so that they issue cold-start
    useEffect(() => {
        (async () => {
            try {
                const endpoints = [
                    process.env.NEXT_PUBLIC_FULFILL3D_API_ENDPOINT || ''
                ];

                // Use Promise.all to send all requests at once
                await Promise.all(endpoints.map(endpoint => fetch(endpoint)));
            } catch (error) {
                console.error('Error pinging Azure Functions:', error);
            }
        })();
    }, []);
}
