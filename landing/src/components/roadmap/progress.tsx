import { RoadmapDescription, RoadmapHeading } from '../text/Text';

export const Progress = () => {
  return (
    <div>
      <div>
        <div className="grid grid-rows-4 relative left-[27rem]">
          <div className="border-[#CA9E7B] w-[40%] p-4 mt-4 rounded-lg shadow-lg bg-[#CA9E7B]">
            <RoadmapHeading className="text-left" innerText="Scene Building" />
            <RoadmapDescription
              className="text-left"
              innerText="Be able to use the interface to build complex scenes, with complex transitions, and multiple type of inputs."
            />
          </div>
          <div className="border-[#CA9E7B] w-[40%] p-4 mt-4 rounded-lg shadow-lg bg-[#CA9E7B]">
            <RoadmapHeading className="text-left" innerText="Recording" />
            <RoadmapDescription
              className="text-left"
              innerText="Be able to use the interface to build complex scenes, with complex transitions, and multiple type of inputs."
            />
          </div>
          <div className="border-[#CA9E7B] w-[40%] p-4 mt-4 rounded-lg shadow-lg bg-[#CA9E7B]">
            <RoadmapHeading className="text-left" innerText="Live Streaming" />
            <RoadmapDescription
              className="text-left"
              innerText="You have the option to stream to Mumble services (default) oryou can stream to other services."
            />
          </div>

          <div className="border-[#CA9E7B] w-[40%] p-4 mt-4 rounded-lg shadow-lg bg-[#CA9E7B]">
            <RoadmapHeading className="text-left" innerText="Saving to File" />
            <RoadmapDescription
              className="text-left"
              innerText="Save everything in a project to a .mum / .mumble files, epxort things to csv.. etc.."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
