import Link from "next/link";

const projects = {
    'nikhiltanwar.com': {
        link: 'https://github.com/juuz0/RARS',
        desc: `The website you're at!`,
        status: 'completed'
    },
    'rars': {
        link: 'https://github.com/juuz0/RARS',
        desc: 'Full fledged PDF reader written in Flutter (desktop app).',
        status: 'completed'
    },
    'codechef api': {
        link: 'https://github.com/juuz0/cc-api',
        desc: 'REST api to get information from codechef website.',
        status: 'completed'
    },
    'url shrinker': {
        link: 'https://github.com/juuz0/url-shrinker',
        desc: 'A URL shrinker with support for custom URLs',
        status: 'completed'
    },
};

const opensource = {
    'kiwix-desktop': {
        link: 'https://github.com/kiwix/kiwix-desktop/pulls?q=is%3Apr+author%3Ajuuz0+is%3Aclosed',
        desc: 'I worked on the frontend of kiwix-desktop app as a part of Google Summer of Code 2023',
        status: 'participating'
    },
    'libkiwix': {
        link: 'https://github.com/kiwix/libkiwix/pulls?q=is%3Apr+author%3Ajuuz0+is%3Aclosed',
        desc: 'worked on multiple features in libkiwix and kiwix-server including tag filtering, no-js endpoint, removing jquery, etc.',
        status: 'participating'
    }
};

interface ProjectProps {
    name: string;
    link: string;
    desc: string;
    status: string;
}


const ProjectCard: React.FC<ProjectProps> = ({ name, link, desc, status }) => {
    return (
        <div className="bg-neutral-100 dark:bg-niceblack border dark:border-niceblack rounded-md p-4 flex flex-col space-y-4">
            <div className="basis-1/4">
                <span className="text-xl">{name}</span>
                <span className="bg-sky-800 text-white float-right rounded-full px-2 py-1 text-center text-sm">{status}</span>
            </div>
            <div className="basis-2/4">
                <p className="text-slate-800 dark:text-slate-400 text-sm">
                    {desc}
                </p>
            </div>
            <div className="basis-1/4 flex flex-row x-space-4 pt-4 inset-x-0 bottom-0">
                <Link href={link} className="bg-anotherblack px-4 py-1 text-slate-200 dark:text-slate-400 text-sm 
                rounded-lg border border-gray-700 hover:border-gray-300 hover:text-slate-100 focus:ring-4 focus:ring-gray-200">Link</Link>
            </div>
        </div>
    )
}

export default function Projects() {
    return (
        <div>
            <h1 className="text-3xl mb-4">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(projects).map(([path, { link, desc, status }]) => {
                    return (
                        <ProjectCard desc={desc} status={status} link={link} name={path} />
                    );
                })}
            </div>
            <h1 className="text-3xl my-8">Open Source</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(opensource).map(([path, { link, desc, status }]) => {
                    return (
                        <ProjectCard desc={desc} status={status} link={link} name={path} />
                    );
                })}
            </div>

        </div>
    )
}