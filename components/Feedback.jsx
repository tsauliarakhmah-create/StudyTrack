"use client";

import { useState } from "react";

const field =
  "w-full rounded-[14px] border border-line bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-primary";

export default function Feedback() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
  }

  return (
    <section id="feedback" className="px-5 py-20 md:px-8 md:py-40">
      <h2 className="heading-shadow mb-2 text-center text-[32px] leading-[48px] font-semibold">
        Help Us Improve StudyTrack
      </h2>

      <div className="mx-auto flex max-w-[963px] flex-col items-center gap-1 rounded-[56px] bg-[#4B65ED2B] px-6 pt-6 pb-8 text-center md:px-24">
        <h3 className="text-xl leading-[30px] font-medium">
          Your Feedback Matters!
        </h3>
        <p className="text-[15px] leading-[22px]">
          Share your thoughts and help us make StudyTrack a better study
          companion.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-5 flex w-full flex-col gap-2 text-left"
        >
          <label className="flex flex-col gap-3 text-[13px] leading-5">
            Your Name
            <input type="text" name="name" required className={`${field} h-[49px]`} />
          </label>
          <label className="flex flex-col gap-3 text-[13px] leading-5">
            Email Address
            <input type="email" name="email" required className={`${field} h-[49px]`} />
          </label>
          <label className="flex flex-col gap-3 text-[13px] leading-5">
            Your Feedback
            <textarea name="message" required className={`${field} h-[77px] py-3`} />
          </label>

          <button
            type="submit"
            className="mt-4 h-9 w-[169px] self-center rounded-full bg-primary text-xl font-semibold text-white"
          >
            Send
          </button>
          {sent && (
            <p className="text-center text-sm font-medium">
              Terima kasih, feedback kamu sudah kami terima!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}