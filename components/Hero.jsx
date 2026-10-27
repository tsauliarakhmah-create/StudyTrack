import Image from "next/image";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:justify-between">
        <div className="flex flex-1 flex-col items-center gap-6 text-center">
          <h1 className="heading-shadow text-4xl leading-tight font-semibold md:text-6xl lg:text-[75px] lg:leading-[112px]">
            Track your Study, Achieve your goal
          </h1>
          <p className="max-w-[655px] text-base md:text-xl md:leading-[30px]">
            Organize your tasks, track your progress, and stay focused on
            reaching your academic goals with StudyTrack.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="#fitur">Learn More</Button>
            <Button variant="light" href="#unduh">
              Download Now
            </Button>
          </div>
        </div>

        <Image
          src="/images/phone.png"
          alt="Tampilan aplikasi StudyTrack di ponsel"
          width={303}
          height={530}
          priority
          className="h-auto w-56 md:w-[303px]"
        />
      </div>
    </section>
  );
}