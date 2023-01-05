import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import banffScene from "../assets/photos/banffHike.jpg";
import sittingUnderTree from "../assets/photos/sittingTree.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <Navbar />

        <div className="grid grid-cols-1 justify-items-center">
          <div className="py-32 w-1/3">
            <Image
              src={sittingUnderTree}
              alt="Logo"
              className="object-scale-down"
            />
            <div className="text-xs text-zinc-800 text-center">
              10/22. Caught Sitting under a Tree
            </div>
          </div>

          <div className="py-32 w-1/4">
            <Image src={banffScene} alt="Logo" className="object-scale-down" />
            <div className="text-xs text-zinc-800 text-center">
              07/20. A Stop Mid-Hike in Banff
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
