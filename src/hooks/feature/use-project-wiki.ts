import {useEffect, useState} from "react";
import {ProjectWiki} from "@/models/project/wiki/project-wiki";
import {getProjectWikiById} from "@/service/feature/get-project-wiki-by-id";

export const useProjectWiki = (id: string) => {
    const [projectWiki, setProjectWiki] = useState<ProjectWiki | null>(null);
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        (async () => {
            if (id) {
                setLoading(true);
                const fetchedWiki = await getProjectWikiById(id); // Fetch the wiki by id asynchronously
                setProjectWiki(fetchedWiki);
                setLoading(false); // Stop loading after the fetch
            }
        })();
    }, [id]);

    return {wiki: projectWiki, loading};
}
