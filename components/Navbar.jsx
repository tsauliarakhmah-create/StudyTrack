import Image from "next/image";
import Button from "@/components/Button";

export default function Navbar() {
  return (
    <header className="px-5 md:px-8">
      <nav className="mx-auto flex max-w-[1066px] items-center justify-between gap-4 py-4">
        <a href="/">
          <Image
            src="/images/logo-navbar.svg"
            alt="StudyTrack"
            width={285}
            height={63}
            priority
            className="h-auto w-44 md:w-[285px]"
          />
        </a>
        <div className="hidden items-center gap-10 text-xl md:flex">
          <a href="/#fitur">Feature</a>
          <a href="/#cara-kerja">How It Works</a>
          <a href="/#feedback">Feedback</a>
        </div>
        <Button variant="nav" href="/#unduh">
          Download Now
        </Button>
      </nav>
    </header>
  );
}