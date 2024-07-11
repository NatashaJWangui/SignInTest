import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
      <div className="absolute top-10 right-0">
      <SignUp/>
      </div>
      <div>
        <h1 className="text-white text-5xl mt-4"><span className="text-black">Electric </span><span> Bicycles </span><span className="text-black"> for </span><span classname="sm:block hidden"> Economic </span><span className="text-black sm:block hidden"> Development</span></h1>
        &nbsp;
        &nbsp;
        &nbsp;
        <p className="mt-2 text-white text-4xl">
            We develop, assemble, sell, lease and operate <br className="sm:block hidden" />electric bicycles for commuters, <br className="sm:block hidden" /> tourists, businesses & delivery riders.
        </p>
      </div>

    </div>
  )
}