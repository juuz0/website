import TwitterIcon from "../icons/twitter";
import GithubIcon from "../icons/github";
import LinkedInIcon from "../icons/linkedin";

export default function Socials() {
    return (
        <span className="flex flex-row pr-20 space-x-5 items-center justify-center my-10">
            <GithubIcon width="50px" height="50px" link="https://www.github.com/juuz0" />
            <LinkedInIcon width="60px" height="60px" link="https://www.linkedin.com/in/nikhil-tanwar-599aa8207/" />
            <TwitterIcon width="50px" height="50px" link="https://twitter.com/bigmousefly" />
        </span>
    )
}