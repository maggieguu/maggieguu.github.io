import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
// import resume from "../public/resume.pdf";

const inter = Inter({ subsets: ["latin"] });

export default function Resume() {
  return (
    <embed
      src="/resume.pdf"
      type="application/pdf"
      className="w-full h-screen"
    ></embed>
  );
}
