import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Open_Sans } from 'next/font/google';
const roboto = Open_Sans({ weight: '300', subsets: ['latin'] })

const humanDate = (year: number, month: number, day: number) => {
    return new Date(year, month - 1, day);
}

export const blogs = [
    {
        about: 'an introduction about me and this blog :>>',
        slug: 'welcome',
        title: 'Welcome to my blog',
        publishedAt: humanDate(2023, 12, 28)
    },
];

function getMDXData(filePath: string) {
    return fs.readFileSync(filePath, 'utf-8');
}

export function getBlogPostBySlug(slug: string) {
    const obj = blogs.find((e) => e.slug == slug);
    const content = getMDXData(path.join(process.cwd(), 'content', slug + '.mdx'));
    return {
        ...obj,
        content
    }
}


const Blog: React.FC<{ pathname: string }> = ({ pathname }) => {
    const blogObj = getBlogPostBySlug(pathname);
    return (
        <div>
            <p className='text-slate-900 dark:text-slate-400 mb-2 md:mb-4'>{blogObj.publishedAt?.toDateString()}</p>
            <div className={`prose dark:prose-invert lg:prose-lg ${roboto.className}`}>
                <MDXRemote source={blogObj.content} />
            </div>
        </div>
    )
}

export default Blog;