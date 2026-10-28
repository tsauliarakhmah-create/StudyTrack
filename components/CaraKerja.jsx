import Image from "next/image";

const steps = [
  {
    icon: "/images/icon-upload.png",
    title: "Upload Your Materials",
    description:
      "Upload your study materials and let StudyTrack handle the rest.",
  },
  {
    icon: "/images/icon-result.png",
    title: "Get Instant Results",
    description:
      "Automatically generate concise summaries and practice questions from your uploaded materials.",
  },
  {
    icon: "/images/icon-reminder.png",
    title: "Stay on Track",
    description:
      "Set study reminders, manage your schedule, and stay consistent with your learning goals.",
  },
];

export default function CaraKerja() {
  return (
    <section id="cara-kerja" className="px-5 py-20 md:px-8 md:py-40">
      <h2 className="heading-shadow mb-12 text-center text-[32px] leading-[48px] font-semibold">
        How It Works
      </h2>

      <div className="mx-auto flex max-w-[769px] flex-col gap-10">
        {steps.map((step) => (
          <div key={step.title} className="flex items-center gap-5 md:gap-8">
            <Image
              src={step.icon}
              alt=""
              width={107}
              height={107}
              className="size-20 shrink-0 rounded-3xl md:size-[107px]"
            />
            <div className="flex flex-col">
              <h3 className="text-xl leading-[30px] font-semibold md:text-2xl md:leading-9">
                {step.title}
              </h3>
              <p className="text-base">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}