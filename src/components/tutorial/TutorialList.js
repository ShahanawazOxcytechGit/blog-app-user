import Link from "next/link";

export default function TutorialList({ tutorialData }) {
  return (
    <div className="space-y-10">
      {tutorialData &&
        tutorialData.map((tutorial) => (
          <div key={tutorial.id} className="space-y-4 ">
            <div className="flex flex-col justify-center items-center space-y-3 pb-2">
              <h2 className="text-gray-800 text-2xl font-bold">{tutorial.title}</h2>
              <Link
                href={`tutorial/${tutorial.slug}`}
                className="bg-indigo-500 hover:bg-indigo-800 text-white hover:text-gray-200 shadow-2xl hover:shadow-none font-semibold px-6 py-2 rounded-full">
                Read More
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
