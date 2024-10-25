import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/Tomato.png";
import project2 from "../../public/images/projects/Forkify.png";
import project3 from "../../public/images/projects/Bankist.png";
import project4 from "../../public/images/projects/TodoList.png";
import project5 from "../../public/images/projects/GymFit.jpg";
import TransitionEffect from "@/components/hooks/TransitionEffect";
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <div>
      <article className="flex items-center justify-between relative rounded-3xl border border-solid dark:text-primaryDark border-dark bg-light shadow-2xl p-12 scroll-smooth dark:bg-dark dark:border-light">
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>

        <div className="w-1/2 flex flex-col items-start justify-between pl-6">
          <span className="text-primary font-medium text-xl">{type}</span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline:offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light">
            {summary}
          </p>
          <div className="mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10">
              {" "}
              <GithubIcon />
            </Link>

            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg text-light p-2 px-6 text-lg font-semibold dark:text-light"
            >
              {" "}
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:text-light ">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline:offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline"
          >
            {" "}
            Visit Project
          </Link>
          <Link href={github} target="_blank" className="w-8">
            {" "}
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Madhav | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center ml-12">
        <Layout>
          <AnimatedText text="Imagination Trumps Knowledge" className="mb-16" />

          <div className="grid grid-cols-12 gap-24 gap-y-32 dark:border-light">
            <div className="col-span-12">
              <FeaturedProject
                title="Tomato Online Food Ordering Website"
                summary="It is an online food ordering webiste like zomato created with HTML5, CSS3,Javascript, Express Js, Node Js, Stripe, MongoDB Database."
                link="https://github.com/Madkhurana/Tomato_website"
                github="https://github.com/Madkhurana/Tomato_website"
                type="Featured Project"
                img={project1}
              />
            </div>
            <div className="col-span-6 dark:border-light">
              <Project
                title="Forkify Website"
                summary="It is an online food recipe webiste where you find different recipes and see quantity of material required. "
                link="https://github.com/Madkhurana/Forkify"
                github="https://github.com/Madkhurana/Forkify"
                type="Featured Project"
                img={project2}
              />
            </div>
            <div className="col-span-6 dark:border-light">
              {" "}
              <Project
                title="Bankist Website"
                summary="It is an online banking website where you can transfer money, see your transactions and request for loan."
                link="https://github.com/Madkhurana/Bankist"
                github="https://github.com/Madkhurana/Bankist"
                type="Featured Project"
                img={project3}
              />
            </div>

            <div className="col-span-6 dark: border-light">
              {" "}
              <Project
                title="React To-Do List"
                summary="It is an online food ordering webiste like zomato created with HTML5, CSS3,Javascript, Express Js, Node Js, Stripe, MongoDB Database."
                link="/"
                github="/"
                type="Featured Project"
                img={project4}
              />
            </div>
            <div className="col-span-6  rounded-full  dark:border border-solid border-light ">
              {" "}
              <Project
                title="GymFit"
                summary="It is an online food ordering webiste like zomato created with HTML5, CSS3,Javascript, Express Js, Node Js, Stripe, MongoDB Database."
                link="/"
                github="/"
                type="Featured Project"
                img={project5}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
