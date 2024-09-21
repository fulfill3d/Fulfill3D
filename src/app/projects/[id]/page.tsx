"use client";

import {ProjectWiki} from "@/models/project/wiki/project-wiki";
import ProjectWikiComponent from "@/components/project/wiki/project-wiki-component";
import {useEffect, useState} from "react";
import {projectList} from "@/mock/project/data";

// Mock function to fetch post based on id (replace this with actual API call)
const fetchWikiById = (id: string): ProjectWiki | null => {
    const data = projectList.find((product) => product.id.toString() === id);
    if (data) {
        return ProjectWiki.fromJson(data.wiki);
    }
    return null;
};

export default function Wiki({ params }: { params: { id: string } }) {
    const { id } = params; // Get the dynamic id from the route
    const [projectWiki, setProjectWiki] = useState<ProjectWiki | null>(null);

    useEffect(() => {
        if (id) {
            const fetchedPost = fetchWikiById(id); // Fetch the post by id
            setProjectWiki(fetchedPost);
        }
    }, [id]);

    if (!projectWiki) {
        return <div>Loading...</div>; // Show a loading state while fetching the post
    }

    return(
        <ProjectWikiComponent wiki={projectWiki}/>
    );
}
