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

            const contentType = response.headers.get('Content-Type');
            let data;

            if (contentType && contentType.includes('application/json')) {
                data = await response.json();
            } else {
                data = null;
            }

            if (response.ok) {
                setLoading(false);
                return data || { message: 'Request successful', status: response.status };
            } else {
                const errorMessage = data?.message || `Something went wrong: ${response.status}`;
                setError(errorMessage);
                setLoading(false);
                return { error: errorMessage };
            }

        } catch (err: any) {
            setLoading(false);
            setError(err.message);
            return { error: err.message };
        }
    }, []);

    return { loading, error, request };
};

export default useHttp;
