import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eos!",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's fo diverse classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eos!",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and pro trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eos!",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benifits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="md:my-5 md:w-3/5">
          <h1 className="basis-3/5 font-montserrat text-3xl font-bold">
            MORE THAN JUST A GYM
          </h1>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            sapiente molestiae reprehenderit magnam quisquam? Dolorum
            repellendus distinctio ipsa autem neque quas sequi, possimus, sed
            magnam nostrum voluptas cupiditate? Accusantium, pariatur.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="md:flex items-center justify-between gap-8 mt-5">
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
