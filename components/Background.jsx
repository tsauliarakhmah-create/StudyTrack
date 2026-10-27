const blobs = [
  "left-[751px] top-[-163px] h-[935px] w-[1185px] bg-[#4B65ED]",
  "left-[-826px] top-[198.5px] h-[935px] w-[1185px] bg-[#4B65ED82]",
  "left-[-577px] bottom-[-296px] h-[935px] w-[1185px] bg-[#4B65ED82]",
  "left-[974px] top-[374px] h-[935px] w-[1185px] bg-[#6DCDCC99]",
  "left-[-27px] top-[734px] h-[506px] w-[728px] bg-[#898FCDFA]",
  "left-[160px] top-[160px] h-[389px] w-[1007px] bg-white",
  "left-[171px] bottom-[-405px] h-[935px] w-[1185px] bg-[#6DCDCC99]",
  "left-[934px] bottom-[-416px] h-[935px] w-[1185px] bg-[#4B65ED82]",
];

export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-white"
    >
      <div className="relative h-full w-[1440px] md:left-1/2 md:-translate-x-1/2">
        {blobs.map((blob) => (
          <div
            key={blob}
            className={`absolute rounded-full blur-[250px] ${blob}`}
          />
        ))}
      </div>
    </div>
  );
}