import {useEffect, useState} from "react";
import {Project} from "@/models/project/project";
import {getActiveProjects} from "@/service/feature/get-active-projects";

export const useGetProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        getActiveProjects()
            .then(project => setProjects(project))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { projects, loading, error };
}
