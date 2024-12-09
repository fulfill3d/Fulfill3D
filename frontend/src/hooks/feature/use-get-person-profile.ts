import {useEffect, useState} from "react";
import {getPersonProfile} from "@/service/feature/get-person-profile";
import {Person} from "@/models/about/person";

export const useGetPersonProfile = () => {
    const [profile, setProfile] = useState<Person | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        getPersonProfile()
            .then(profile => setProfile(profile))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { profile, loading, error };
}
