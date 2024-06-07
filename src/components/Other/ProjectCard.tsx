import Image from "next/image";
import Reveal from "./Reveal";

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <Reveal y={30}>
      <div className="rounded-2xl border-4 border-neutral-800 p-4 min-w-[17rem] max-w-[17rem] h-[350px]  hover:z-0 z-10">
        <div className="flex flex-col justify-center items-start">
          <div className="w-full flex justify-center">
            <Reveal y={10}>
              <Image
                src={project.image}
                alt={project.title}
                width={215}
                height={150}
                className="mb-4 rounded"
              />
            </Reveal>
          </div>

          <Reveal x={-100}>
            <h6 className="mb-2 font-semibold ml-2">{project.title}</h6>
          </Reveal>

          <Reveal x={-100}>
            <p className="mb-3 ml-2 text-neutral-400 text-ellipsis whitespace-wrap max-w-full line-clamp-2">{project.des}</p>
          </Reveal>

          <div className="flex flex-wrap">
            {project.tech.map((tech: any, idx: number) => (
              <Reveal
                key={idx}
                x={-100}
              >
                <div className="flex flex-wrap w-fit">
                  <span className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 m-1 ">
                    <Reveal y={100}>
                      <p>{tech}</p>
                    </Reveal>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectCard;
