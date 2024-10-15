import {useEffect, useState} from "react";
import {Company} from "@/models/about/company";
import {getCompanyProfile} from "@/service/feature/get-company-profile";

export const useGetCompanyProfile = () => {
    const [profile, setProfile] = useState<Company | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        getCompanyProfile()
            .then(profile => setProfile(profile))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { profile, loading, error };
}
