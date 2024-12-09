import PostContent from '@/components/post/post-content';

export default function PostDetail({ params }: { params: { id: string } }) {
    const { id } = params;

    return (
        <div className="w-full h-full">
            <PostContent id={id} />
        </div>
    );
}

