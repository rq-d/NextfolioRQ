import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
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
          Hello! I'm a versatile and data-driven engineer with a strong
          foundation in Python, SQL, and geospatial data analysis, complemented
          by hands-on experience in autonomous systems, machine learning, and
          advanced simulation environments. Demonstrates proven success leading
          multi-agent autonomy projects, developing real-time simulation models,
          and designing intelligent algorithms for aerial and maritime systems.
          Adept at translating complex datasets into actionable insights and
          deploying scalable, containerized solutions. Known for strong
          communication skills, self-motivation, and the ability to excel in
          both collaborative and remote work settings.
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
