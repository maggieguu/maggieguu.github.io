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
            <h1>theWave</h1>
            {/* const com = ["theWave", "swim", "footTap", "shuffle"];
            <h1>com[1]</h1> */}

            {/* const timer = setTimeout(() => {
                <h1> com.map((com) => (<h2>{com}</h2>))}
                </h1>
            } */}
      </main>
    </>
  );
}
