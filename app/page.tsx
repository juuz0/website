import Link from "next/link";
import GithubIcon from "./icons/github";
import LinkedInIcon from "./icons/linkedin";
import Image from "next/image";
import juuz0Img from "../public/juuz0.png"
import TwitterIcon from "./icons/twitter";
import Jokes from "./components/jokes";

export default function Home() {
  return (
    <div>
      <div className="text-wrap flex flex-row">
        <section>
          <h1 className="font-medium text-5xl mb-8 tracking-tighter">
            Hey, I'm Nikhil!
          </h1>
          <p className="prose prose-neutral dark:prose-invert text-wrap text-lg">
            Welcome to my digital realm! c:
            <br /> <br />
            I am a software developer from India, interested in
            Web Development, Open Source and  C++.

            I also write about code, design and life here.
          </p>
        </section>
        <section>
          <Image src={juuz0Img} alt="random juuz0 image" className="rounded-full"></Image>
        </section>
      </div>
      <span className="flex flex-row pr-20 space-x-5 items-center justify-center my-10">
        <GithubIcon width="50px" height="50px" link="github.com/juuz0" />
        <LinkedInIcon width="60px" height="60px" link="lol" />
        <TwitterIcon width="50px" height="50px" link="lol" />
      </span>
      <div>
        <Jokes />
      </div>
    </div>
  )
}