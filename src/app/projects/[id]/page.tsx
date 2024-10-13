"use client";

import ProjectWikiComponent from "@/components/project/wiki/project-wiki-component";
import Loading from "@/app/loading";
import NotFound from "@/app/not-found";
import {useProjectWiki} from "@/hooks/feature/use-project-wiki";

export default function Wiki({ params }: { params: { id: string } }) {
    const { id } = params; // Get the dynamic id from the route
    const {projectWiki, loading} = useProjectWiki(id);

    if (loading) {
        return <Loading />;
    }

    if (!projectWiki) {
        return <NotFound/>;
    }

    return <ProjectWikiComponent wiki={projectWiki} />;
}
