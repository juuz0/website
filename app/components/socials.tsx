import TwitterIcon from "../icons/twitter";
import GithubIcon from "../icons/github";
import LinkedInIcon from "../icons/linkedin";

export default function Socials() {
    return (
        <span className="flex flex-row pr-20 space-x-5 items-center justify-center my-10">
            <GithubIcon width="50px" height="50px" link="github.com/juuz0" />
            <LinkedInIcon width="60px" height="60px" link="lol" />
            <TwitterIcon width="50px" height="50px" link="lol" />
        </span>
    )
}