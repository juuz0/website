import Link from "next/link";
import { blogs } from "../components/blogs";

export default function Blogs() {
    let allBlogs = blogs;

    return (
        <section>
            <h1 className="text-3xl mb-4">Blogs</h1>
            {allBlogs
                .sort((a, b) => {
                    if (
                        a.publishedAt < b.publishedAt
                    ) {
                        return -1;
                    }
                    return 1;
                })
                .map((post) => (
                    <Link
                        key={post.slug}
                        className="flex flex-col space-y-1 mb-4"
                        href={`/blog/${post.slug}`}
                    >
                        <div className="w-full my-4">
                            <span className="text-neutral-900 dark:text-neutral-100 text-lg hover:underline tracking-wide">
                                {post.title} 🔗
                            </span>
                            <span className="float-right text-slate-800 dark:text-slate-400 text-md">
                                {post.publishedAt.toDateString()}
                            </span>
                        </div>
                    </Link>
                ))}
        </section>
    );
}