import GoogleMap from "@/components/Home/GoogleMap";
import "./globals.css";
// import Image from "next/image";
import Search from "@/components/Home/Search";




export default function Home() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div>
        <Search/>
      </div>
      <div className="col-span-2">
        <GoogleMap/>
      </div>

    </div>

    // <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
    //   <div>
    //     <h1 className="text-white text-5xl"><span className="text-black">Electric </span><span> Bicycles </span><span className="text-black"> for </span><span classname="sm:block hidden"> Economic </span><span className="text-black sm:block hidden"> Development</span></h1>
    //     &nbsp;
    //     &nbsp;
    //     &nbsp;
    //     <p className="mt-2 text-white text-4xl">
    //         We develop, assemble, sell, lease and operate<br className="sm:block hidden" />electric bicycles for commuters, <br className="sm:block hidden" /> tourists, businesses & delivery riders.
    //     </p>
    //     &nbsp;
    //     &nbsp;
    //     &nbsp;
    //     &nbsp;
    //     &nbsp;
    //     &nbsp;
    //     &nbsp;
    //     &nbsp;
    //     &nbsp;
    //     &nbsp;
    //     &nbsp;
    //     <h1>
    //       Location To
    //     </h1>
    //     <p></p>
    //     <h2>
    //       Destination To
    //     </h2>
    //   </div> 
    // </div>
)}
