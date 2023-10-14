import ChatBubble from "../../../assets/chat.png";
import { Details } from "./details";
import SearchImage from "../../../assets/search.png";
import RESEARCHImage from "../../../assets/table_report.png";
import ACADEMYImage from "../../../assets/degree_hat.png";
import CONNECTImage from "../../../assets/connect.png";

export const ChatBubbleSection = () => {
  return (
    <div className="bg-slate-100/20 flex flex-col md:flex-row justify-center items-center min-h-screen">
      <div className="w-full p-5 md:w-1/2">
        <div>
          <h1 className="text-[30px] md:text-[50px] md:text-left text-center leading-tight font-bold">
            <span className="bg-gradient-to-r from-[#0600CE] to-[#9400D3] bg-clip-text text-transparent">
              All-in-One
            </span>{" "}
            platform <br /> that Makes Easier
          </h1>
          <p className="md:max-w-sm md:text-left text-[13px] md:text-[16px] my-4 text-center">
            We are more than a platform; We are your success partner. Discover
            our services to achieve your business and educational goals
          </p>
        </div>
        <div className="grid grid-cols-2 my-5 md:justify-items-start jusitfy-items-center place-items-center">
          <Details
            image={SearchImage}
            impText="Search"
            text="for vital company information "
          />
          <Details
            image={CONNECTImage}
            impText="CONNECT"
            text="with the resources to meet your business needs"
          />{" "}
          <Details
            image={RESEARCHImage}
            impText="RESEARCH"
            text="and generate reports that drive"
          />
          <Details
            image={ACADEMYImage}
            impText="ACADEMY"
            text="to give you the skills for success in your career"
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center p-10 md:w-1/2">
        <img src={ChatBubble} className="max-w-md" />
      </div>
    </div>
  );
};
