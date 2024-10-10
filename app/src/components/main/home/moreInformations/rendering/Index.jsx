import { Orbitron } from "next/font/google";
import { IllustrationRoms } from "../../../../UI/Icon";
import MoreInformationText from "./MoreInformation-text";

const orbitron = Orbitron({ subsets: ["latin"], weight: "400" });

export default function Index() {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center text-newBlack w-full h-full p-10 sm:pt-0 md:px-16 lg:px-16 xl:py-10 xl:mt-10 lg:mb-20 min-h-lvh"
    >
      <div className="flex flex-col-reverse xl:flex-row-reverse xl:w-3/4 items-center">
        <MoreInformationText orbitron={orbitron} />
        <div className="flex sm:w-[100%] lg:w-[80%] xl:w-full justify-center w-full mb-10 sm:p-10">
          <IllustrationRoms />
        </div>
      </div>
    </section>
  );
}
