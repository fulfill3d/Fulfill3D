import ProjectWikiComponent from "@/components/project/wiki/project-wiki-component";

export default function Wiki({ params }: { params: { id: string } }) {
    const { id } = params; // Get the dynamic id from the route

    return <ProjectWikiComponent id={id} />;
}
