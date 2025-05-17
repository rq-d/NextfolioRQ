import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/IMG_9623.jpeg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Raul Quintana</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am an engineer with a strong foundation in mechanical systems and
          deep experience in autonomy, AI/ML, and robotics. My work spans across
          advanced flight simulations, autonomous vehicle integration,
          multi-agent coordination, and real-time system deployment—most
          recently at Lockheed Martin. I’ve contributed to mission-critical
          defense simulations, developed autonomy planning services, built CI/CD
          pipelines from the ground up, and created intelligent algorithms for
          aircraft guidance and threat response. My portfolio reflects a blend
          of software engineering, control systems, and machine learning
          projects—Each project highlights my commitment to solving complex
          problems with robust, scalable solutions.
        </p>
        {/* <p>
          Nextfolio has everything you need for a portfolio: MDX blog, SEO, RSS,
          Atom & JSON feeds, analytics, Tweet & YouTube embeds, KaTeX and {""}
          <a
            target="_blank"
            href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features"
          >
            more
          </a>
          .
        </p> */}
      </div>
    </section>
  );
}
