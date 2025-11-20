import Image from "next/image";

const telematicsSolutions = [
  { image: "/FramedSection/Framedglass1.png" },
  { image: "/FramedSection/Framedglass2.png" },
  { image: "/FramedSection/Framedglass3.png" },
  { image: "/FramedSection/Framedglass4.png" },
  { image: "/FramedSection/Framedglass5.png" },
  { image: "/FramedSection/Framedglass6.png" },
  { image: "/FramedSection/Framedglass7.png" },
  { image: "/FramedSection/Framedglass8.png" },
  { image: "/FramedSection/Framedglass9.png" },
  { image: "/FramedSection/Framedglass10.png" },
  { image: "/FramedSection/Framedglass11.png" },
  { image: "/FramedSection/Framedglass12.png" },
  { image: "/Frameless/Frameless1.png" },
  { image: "/Frameless/Frameless2.png" },
  { image: "/Frameless/Frameless3.png" },
  { image: "/Test/Test5.png" },
];
export default function TelematicsCards() {
  return (
    <section className="py-10 px-4 md:px-20 container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Glass Shower Enclosure Gallery
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See examples of some of the framed and frameless glass shower and tub enclosures we have installed in the Oklahoma City area.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {telematicsSolutions.map((solution) => (
    <div
      key={solution.image}
      className="relative h-80 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-2xl shadow-lg shadow-indigo-300 transition-transform hover:scale-105 duration-300 overflow-hidden dark:shadow-2xl dark:shadow-cyan-500/20"
    >
      <Image
        src={solution.image}
        alt="framed"
        fill
        className="object-cover rounded-2xl"
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               25vw"
        quality={90}
        priority
      />
    </div>
  ))}
</div>
    </section>
  );
}
