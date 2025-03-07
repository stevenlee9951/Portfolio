import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaBootstrap,
  FaCss3,
  FaEthereum,
  FaFigma,
  FaGasPump,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaLess,
  FaNodeJs,
  FaReact,
  FaRust,
  FaSolarPanel,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiAuth0,
  SiCss3,
  SiExpress,
  SiFramer,
  SiGraphql,
  SiHeroku,
  SiJsonwebtokens,
  SiMaterialdesign,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReacthookform,
  SiReactrouter,
  SiRedux,
  SiReduxsaga,
  SiSass,
  SiSecurityscorecard,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWeb3Dotjs,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend",
        icons: [
          FaReact,
          SiNextdotjs,
          SiTypescript,
          SiMaterialdesign,
          SiTailwindcss,
          FaBootstrap,
          SiSass,
          SiRedux,
          SiReduxsaga,
          SiReacthookform,
          SiReactrouter,
          FaFigma,
          SiVercel,
        ],
      },
      {
        title: "Backend",
        icons: [
          SiNodedotjs,
          SiExpress,
          FaLaravel,
          SiMongodb,
          SiMysql,
          SiPostgresql,
          SiGraphql,
          SiJsonwebtokens,
          SiAuth0,
        ],
      },
      {
        title: "BlockChain",
        icons: [
          SiSolidity,
          FaEthereum,
          FaRust,
          FaSolarPanel,
          SiWeb3Dotjs,
          FaGasPump,
          SiSecurityscorecard,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Senior Blockchain & Full Stack Developer - Boville",
        stage: "2022 - 2023",
      },
      {
        title: "Senior Full Stack Developer - ALDA Tech",
        stage: "2019 - 2021",
      },
      {
        title: "Frontend Developer - Global ITN",
        stage: "2017 - 2019",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title:
          "Bachelor's Degree in Computer Science - Hong Kong University of Science and Technology",
        stage: "2011",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center flex-grow">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Senior <br />
            <span className="text-accent">FullStack & BlockChain</span> <br />
            Developer
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-5 xl:mb-12 px-2 xl:px-0"
          >
            Experienced Blockchain and Full Stack Developer with 7+ years
            building innovative dApps, Smart Contracts, and Web3 solutions on
            Ethereum, Polygon, and Binance Smart Chain. Proven track record in
            NFT and DeFi \DEX\ projects, combined with 5 years of success
            delivering full-stack web applications across various industries.
            Skilled in creating secure, scalable, and user-focused products by
            blending blockchain technology with modern web development to drive
            impactful digital experiences.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-4"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={7} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={70} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[36%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
