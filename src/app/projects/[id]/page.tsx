"use client";

import { ProjectWiki } from "@/models/project/wiki/project-wiki";
import ProjectWikiComponent from "@/components/project/wiki/project-wiki-component";
import { useEffect, useState } from "react";
import { projectList } from "@/mock/project/data";
import Loading from "@/app/loading";
import NotFound from "@/app/not-found";

// Mock async function to fetch wiki based on id (simulate async behavior)
const fetchWikiById = async (uid: string): Promise<ProjectWiki | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = projectList.find((product) => product.uuid === uid);
            if (data) {
                resolve(ProjectWiki.fromJson(data.wiki));
            } else {
                resolve(null);
            }
        }, 600); // Simulate a 1.5-second delay
    });
};

export default function Wiki({ params }: { params: { id: string } }) {
    const { id } = params; // Get the dynamic id from the route
    const [projectWiki, setProjectWiki] = useState<ProjectWiki | null>(null);
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        const fetchWiki = async () => {
            if (id) {
                setLoading(true);
                const fetchedWiki = await fetchWikiById(id); // Fetch the wiki by id asynchronously
                setProjectWiki(fetchedWiki);
                setLoading(false); // Stop loading after the fetch
            }
        };
        fetchWiki();
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (!projectWiki) {
        return <NotFound/>;
    }

    return <ProjectWikiComponent wiki={projectWiki} />;
}
