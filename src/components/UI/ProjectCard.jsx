import { Link } from "react-router-dom";
import Card from "./Card";

function ProjectCard() {
  return (
    <Card className="hover:cursor-pointer hover:border-gray-600 hover:scale-120 group relative flex flex-col justify-between  space-x-2 gap-2 md:space-x-0 ">
      <Link to="https://worldwise-ten.vercel.app/">
        <div className=" absolute bg-black -top-3 -right-3 md:-top-4 md:-right-4 p-2 rounded-full hidden group-hover:flex">
          <svg
            data-testid="geist-icon"
            fill="none"
            height="20"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="20"
            className="with-icon_icon__MHUeb text-white w-3 h-3 md:w-4 md:h-4 hover:fade transition-all"
          >
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
            <path d="M15 3h6v6"></path>
            <path d="M10 14L21 3"></path>
          </svg>
        </div>

        <div className="flex items-center space-x-3  mt-0">
          <img
            src="/sample.png"
            className="object-cover rounded-full w-12 h-12"
            alt=""
          />
          <div className="flex flex-col text-sm">
            <label htmlFor="" className="font-semibold">
              worldwise
            </label>
            worldwise-ten.vercel.app
          </div>
        </div>
        <div className="text-xs mt-2 md:mt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          explicabo ducimus, dignissimos autem a assumenda harum quia dolore
          doloremque animi.
        </div>
        <div className="flex justify-between md:flex-row ">
          <div className="flex items-center justify-center gap-2  text-sm  flex-wrap md:gap-2">
            <span className="border-l pl-2 rounded-md font-semibold text-md flex items-center ">
              <span>React</span> <span>JS</span>
            </span>
            <span className="border-l  pl-2 rounded-md font-semibold text-md flex items-center ">
              <span>Context</span> <span>API</span>
            </span>
            <span className="border-l pl-2  rounded-md  font-semibold text-md flex  justify-start">
              <span>Leaflet</span>
            </span>
          </div>
          <div className="flex items-center text-sm space-x-1 hover:scale-110 transition-all">
            <Link
              to="https://github.com/jkenger/worldwise"
              className="font-semibold text-lg group-hover:cursor-pointer"
            >
              Github
            </Link>
            <svg
              className="group-hover:cursor-pointer "
              aria-label="github"
              height="20"
              viewBox="0 0 14 14"
              width="20"
            >
              <path
                d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                fill="var(--class-card-dark)"
                fillRule="nonzero"
              ></path>
            </svg>
          </div>
        </div>
      </Link>
    </Card>
  );
}

export default ProjectCard;
