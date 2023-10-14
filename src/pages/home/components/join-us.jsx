import JoinUsBG from "../../../assets/join-us-bg.png";
import { mockCardData } from "../../../utils";
import { JoinUsCard } from "./join-us-card";
export const JoinUs = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${JoinUsBG})`,
      }}
      className="min-h-screen bg-cover bg-center bg-slate-100/20 flex justify-center items-center flex-col"
    >
      <div className="text-center mt-10">
        <h1 className="text-[30px] md:text-[50px] lg:text-[60px] font-bold">
          Want to{" "}
          <span className="bg-gradient-to-r from-[#0600CE] to-[#9400D3] bg-clip-text text-transparent">
            Join
          </span>{" "}
          Us?
        </h1>
        <p className="text-sm md:text-[16px]">
          To remain with us, it is essential that you diligently follow the
          steps provided
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center justify-items-center my-4 p-4">
        {mockCardData.map((card) => (
          <JoinUsCard {...card} key={card.id} />
        ))}
      </div>

      <p className="text-xs md:text-sm my-4 text-center px-5">
        * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200{" "}
        <span className="font-bold">every day</span> until you file the form .
        There is no maximum penalty amount. So, if you don&apos;t file the form
        for a year, you will owe ₹73,000 per form
      </p>
    </div>
  );
};
