import Image from "next/image";

const stores = [
  { icon: "/images/icon-apple.png", small: "Download on the", name: "App Store", w: 65, h: 65 },
  { icon: "/images/icon-play.png", small: "GET IT NOW", name: "Google Play", w: 75, h: 59 },
];

export default function Footer() {
  return (
    <footer className="px-5 pt-16 pb-12 md:px-8">
      <div className="mx-auto max-w-[1019px]">
        <Image
          src="/images/logo-footer.svg"
          alt="StudyTrack"
          width={536}
          height={127}
          className="h-auto w-72 md:w-[536px]"
        />
        <p className="mt-4 text-xl font-semibold">
          Your study companion for a more organized and productive learning
          journey.
        </p>

        <div className="mt-8 grid gap-10 md:grid-cols-[390px_1fr_296px]">
          <div className="flex flex-col gap-2 text-xl">
            <p className="font-semibold">Explore</p>
            <a href="/#fitur" className="text-muted">Feature</a>
            <a href="/#cara-kerja" className="text-muted">How It Works</a>
            <a href="/#unduh" className="text-muted">Get Started</a>
          </div>

          <div className="flex flex-col gap-2 text-xl">
            <p className="font-semibold">Get in Touch</p>
            <a href="/#feedback" className="text-muted">Send Feedback</a>
            <a href="mailto:halo@studytrack.id" className="text-muted">Contact Us</a>
          </div>

          <div id="unduh" className="flex flex-col gap-10">
            {stores.map((store) => (
              <a
                key={store.name}
                href="#"
                className="flex h-[94px] w-[296px] items-center gap-3 rounded-2xl bg-black px-3 text-white"
              >
                <Image
                  src={store.icon}
                  alt=""
                  width={store.w}
                  height={store.h}
                  className="h-auto"
                />
                <span className="flex flex-col font-store">
                  <span className="text-sm leading-[17px]">{store.small}</span>
                  <span className="text-[32px] leading-[39px] font-semibold">
                    {store.name}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}