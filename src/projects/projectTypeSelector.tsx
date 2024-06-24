import { ProjectType } from "./projectType";
import usefilterStore from "../store";
import { useEffect } from "react";
export default function ProjectTypeSelector() {
  const currentfilter = usefilterStore((state) => state.ogfilter);
  const setfilter = usefilterStore((state) => state.setfilter);

  useEffect(() => {
    console.log(currentfilter);
  }, [currentfilter]);

  return (
    <div>
      <div>Select Project type</div>

      <div className="border-2 rounded-lg border-gray-950 flex justify-evenly p-2 mt-4">
        <button
          className="border-2 rounded-lg border-gray-950 p-2 hover:bg-indigo-300"
          onClick={() => {
            setfilter(ProjectType.ALL);
          }}
        >
          All
        </button>
        <button
          className="border-2 rounded-lg border-gray-950 p-2 hover:bg-indigo-300"
          onClick={() => {
            setfilter(ProjectType.FE);
          }}
        >
          FE
        </button>
        <button
          className="border-2 rounded-lg border-gray-950 p-2 hover:bg-indigo-300"
          onClick={() => {
            setfilter(ProjectType.BE);
          }}
        >
          BE
        </button>
        <button
          className="border-2 rounded-lg border-gray-950 p-2 hover:bg-indigo-300"
          onClick={() => {
            setfilter(ProjectType.FULL_STACK);
          }}
        >
          Full stack
        </button>
      </div>
    </div>
  );
}
