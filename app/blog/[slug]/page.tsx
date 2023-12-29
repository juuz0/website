import Blog from "../../components/blogs";

export default async function SlugBlog({ params }: { params: any }) {
    return (
        <div>
            <Blog pathname={params.slug}></Blog>
        </div>
    )
}