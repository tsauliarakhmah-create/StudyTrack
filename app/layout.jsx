import { Inter, Poppins } from "next/font/google";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
});

export const metadata = {
  title: "StudyTrack",
  description:
    "Teman belajar yang merangkum materi, membuat soal latihan, dan mengingatkan jadwal belajarmu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${poppins.variable} ${inter.variable} relative isolate font-sans antialiased`}
      >
        <Background />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}