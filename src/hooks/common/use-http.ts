import { useState, useCallback } from 'react';

export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH'
}

interface UseHttpResult {
    loading: boolean;
    error: string | null;
    request: (
        url: string,
        method: HttpMethod,
        body?: any,
        headers?: { [key: string]: string },
        token?: string
    ) => Promise<any>;
}

const useHttp = (): UseHttpResult => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const request = useCallback(async (
        url: string,
        method: HttpMethod = HttpMethod.GET,
        body: any = null,
        headers: { [key: string]: string } = {},
        token?: string
    ): Promise<any> => {
        setLoading(true);
        setError(null);

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        if (body) {
            body = JSON.stringify(body);
            headers['Content-Type'] = 'application/json';
        }

        try {
            const response = await fetch(url, {
                method,
                body,
                headers,
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || 'Something went wrong');
                setLoading(false);
                return { error: data.message || 'Something went wrong' };
            }

            setLoading(false);
            return data;
        } catch (err: any) {
            setLoading(false);
            setError(err.message);
            return { error: err.message };
        }
    }, []);

    return { loading, error, request };
};

export default useHttp;
