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
            <h1> hello world</h1>
      </main>
    </>
  );
}
