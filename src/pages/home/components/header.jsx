import HeaderRight from "../../../assets/headerRight.png";
import { SearchUser } from "./search-user";
export const Header = () => {
  return (
    <div className="relative bg-slate-100/20">
      <div
        className="min-h-screen"
        style={{
          background:
            "linear-gradient(150deg, #fff 5%, #FCF6FC 50%, #C5EAED 70%)",
          clipPath: "polygon(0 0, 100% 0, 100% 75vh, 0 100%)",
        }}
      ></div>
      <section className="flex flex-col lg:flex-row justify-center items-center min-h-screen absolute top-[80px] lg:top-0 left-0">
        <div className="w-full px-20 lg:w-1/2">
          <div className="w-full">
            <h1 className="text-[30px] lg:text-[50px] lg:text-left text-center leading-tight font-bold w-full">
              Find
              <span className="bg-gradient-to-r from-[#0600CE] to-[#9400D3] bg-clip-text text-transparent">
                {" "}
                Partners{" "}
              </span>
              (CAs) available online
            </h1>
            <p className="lg:max-w-sm lg:text-left text-[13px] lg:text-[16px] text-center my-4">
              <span className="font-bold text-zinc-400">CONNECT</span> with us
              where your services are listed and visible to a myriad of
              businesses seeking CA’s for compliance support
            </p>
          </div>
          <SearchUser />
        </div>
        <div className="w-full flex justify-center items-center lg:pr-10 lg:w-1/2">
          <img src={HeaderRight} className="max-w-sm lg:max-w-xl z-50" />
        </div>
      </section>
    </div>
  );
};
