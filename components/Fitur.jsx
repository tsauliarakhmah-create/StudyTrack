import Card from "@/components/Card";

const features = [
  {
    title: "Auto Generate Summary",
    description:
      "Transform lengthy study materials into concise, organized summaries. Focus on the concepts that matter most without spending hours reviewing every page.",
  },
  {
    title: "Auto Generate Question",
    description:
      "Generate practice questions from your study materials to test your understanding and prepare for exams with greater confidence.",
  },
  {
    title: "Commitment Reminder",
    description:
      "Set reminders for study plans, assignments, and personal learning goals. Get timely nudges to stay on track and follow through on what you planned.",
  },
];

export default function Fitur() {
  return (
    <section
      id="fitur"
      className="mx-auto max-w-[1060px] px-5 py-20 md:px-8 md:py-40"
    >
      <div className="mx-auto mb-12 flex max-w-[924px] flex-col items-center gap-4 text-center">
        <h2 className="heading-shadow text-[32px] leading-[48px] font-semibold">
          Everything you need to study smarter
        </h2>
        <p className="text-base md:text-xl md:leading-[30px]">
          Turn your study materials into clear summaries, practice questions,
          and timely reminders. StudyTrack helps you learn efficiently and stay
          consistent with your goals.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <h3 className="text-2xl leading-9 font-semibold">
              {feature.title}
            </h3>
            <p className="text-base">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}