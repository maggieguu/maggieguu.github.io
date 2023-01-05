import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import granvilleImage from "../assets/index/granville island photo.jpg";
import ramensf from "../assets/index/ramensf.jpg";
import ramen from "../assets/index/Sunset at ubc.jpg";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <section className="space-y-4 py-8">
          <h2 className="text-center text-3xl">Programming Projects</h2>
          <div className="columns-1 gap-4 space-y-4 p-8 md:columns-3">
            <div className="h-min w-full break-inside-avoid-column rounded border p-4 shadow transition-shadow duration-100 ease-in-out hover:shadow-lg">
              <h2 className="text-xl">UBC Schedule App</h2>
              <h3 className="text-md">Javascript, React, Google Maps API</h3>
              <p className="py-4">
                Mobile application for UBC students to send and compare class
                schedules and locations. Also collates and analyzes user-fed
                data, with Google Map data, to calculate the shortest distance
                between class locations.
              </p>

              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black rounded-md group-hover:bg-opacity-0">
                  GitHub Link Coming Soon...
                </span>
              </button>
            </div>

            <div className="h-min w-full break-inside-avoid-column rounded border p-4 shadow transition-shadow duration-100 ease-in-out hover:shadow-lg">
              <h2 className="text-xl">Personal Website Redesign</h2>
              <h3 className="text-md">
                Javascript, Typescript, Next.js, Tailwind CSS
              </h3>
              <p className="py-4">Redesign of this website.</p>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <a
                  href="https://github.com/maggieguu/maggieguu.github.io"
                  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black rounded-md group-hover:bg-opacity-0"
                >
                  GitHub Link
                </a>
              </button>
            </div>

            <div className="h-min w-full break-inside-avoid-column rounded border p-4 shadow transition-shadow duration-100 ease-in-out hover:shadow-lg">
              <h2 className="text-xl">Planet Spice Search Game</h2>
              <h3 className="text-md">Java</h3>
              <p className="py-4">
                Programmed graph search based game to optimize planet and spice
                search. Spaceship has to start at Earth and seek plant Kamino
                before returning back to Earth while optimizing spice collection
                on passing by planets.
              </p>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <a
                  href="https://github.com/maggieguu/221miniproject2"
                  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black rounded-md group-hover:bg-opacity-0"
                >
                  GitHub Link
                </a>
              </button>
            </div>

            <div className="h-min w-full break-inside-avoid-column rounded border p-4 shadow transition-shadow duration-100 ease-in-out hover:shadow-lg">
              <h2 className="text-xl">CPU & RAM Design</h2>
              <h3 className="text-md">SystemVerilog</h3>
              <p className="py-4">
                Focused on optimization of read and write of information into
                RAM.
              </p>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <a
                  href="https://github.com/maggieguu/211cpu"
                  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black rounded-md group-hover:bg-opacity-0"
                >
                  GitHub Link
                </a>
              </button>
            </div>

            <div className="h-min w-full break-inside-avoid-column rounded border p-4 shadow transition-shadow duration-100 ease-in-out hover:shadow-lg">
              <h2 className="text-xl">C to ARM Conversion</h2>
              <h3 className="text-md">C, ARM Assembly</h3>
              <p className="py-4">
                Convert C code to ARM Assembly code without use of compiler.
              </p>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <a
                  href="https://github.com/maggieguu/arm_binsearch"
                  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black rounded-md group-hover:bg-opacity-0"
                >
                  GitHub Link
                </a>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
