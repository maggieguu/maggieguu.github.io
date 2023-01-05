import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";

import fishnchips from "../assets/food/fishnchips.jpg";
import jam from "../assets/food/jam.jpg";
import mango from "../assets/food/mangoberkeley.jpg";
import ramensf from "../assets/food/ramensf.jpg";
import ramen from "../assets/food/ramen.jpg";
import trattoria from "../assets/food/trattoria.jpg";
import berkeleybrunch from "../assets/food/berkeleybrunch.jpg";
import clamchowder from "../assets/food/clamchowder.jpg";
import homemadekale from "../assets/food/homemade kalepasta.jpg";
import mazesoba from "../assets/food/mazesoba.jpg";
import ricerolls from "../assets/food/ricerolls.jpg";
import salad from "../assets/food/salad.jpg";
import thanksgiving2022 from "../assets/food/thanksgiving.jpg";
import machimachi from "../assets/food/machimachi.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Food() {
  return (
    <>
      <main>
        <Navbar />

        <div className="columns-1 gap-4 space-y-4 p-8 md:columns-4 lg:columns-4">
          <div className="flex h-min w-full items-center justify-center text-center py-4">
            <figure className="group relative max-w-xs cursor-pointer bg-red-500 object-cover opacity-100 transition-all duration-1000 hover:opacity-50">
              <Image
                className="rounded-lg shadow-xl hover:shadow-2xl"
                src={fishnchips}
                alt="Fish n Chips"
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center text-xl font-semibold text-white opacity-0 duration-300 hover:opacity-100">
                Best Fish n Chips in Vancouver, BC
              </div>
            </figure>
          </div>

          <div className="flex h-min w-full items-center justify-center text-center py-4">
            <figure className="group relative max-w-xs cursor-pointer bg-red-500 object-cover opacity-100 transition-all duration-1000 hover:opacity-50">
              <Image
                className="rounded-lg shadow-xl hover:shadow-2xl"
                src={ramensf}
                alt="ramensf"
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center text-xl font-semibold text-white opacity-0 duration-300 hover:opacity-100">
                Michelin Starred Ramen in downtown San Francisco, CA
              </div>
            </figure>
          </div>

          <div className="flex h-min w-full items-center justify-center text-center py-4">
            <figure className="group relative max-w-xs cursor-pointer bg-red-500 object-cover opacity-100 transition-all duration-1000 hover:opacity-50">
              <Image
                className="rounded-lg shadow-xl hover:shadow-2xl"
                src={mango}
                alt="mango bingsoo near berkley"
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center text-xl font-semibold text-white opacity-0 duration-300 hover:opacity-100">
                Mango Bingsoo near Berekley University, CA
              </div>
            </figure>
          </div>

          <div className="flex h-min w-full items-center justify-center text-center py-4">
            <figure className="group relative max-w-xs cursor-pointer bg-red-500 object-cover opacity-100 transition-all duration-1000 hover:opacity-50">
              <Image
                className="rounded-lg shadow-xl hover:shadow-2xl"
                src={trattoria}
                alt="Trattoria pasta"
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center text-xl font-semibold text-white opacity-0 duration-300 hover:opacity-100">
                Carbonara at Trattoria in Vancouver, BC
              </div>
            </figure>
          </div>

          <div className="flex h-min w-full items-center justify-center text-center py-4">
            <figure className="group relative max-w-xs cursor-pointer bg-red-500 object-cover opacity-100 transition-all duration-1000 hover:opacity-50">
              <Image
                className="rounded-lg shadow-xl hover:shadow-2xl"
                src={thanksgiving2022}
                alt="Thanksgiving"
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center text-xl font-semibold text-white opacity-0 duration-300 hover:opacity-100">
                Thanksgiving Feast 2022 (Homemade)
              </div>
            </figure>
          </div>

          <div className="flex h-min w-full items-center justify-center text-center py-4">
            <figure className="group relative max-w-xs cursor-pointer bg-red-500 object-cover opacity-100 transition-all duration-1000 hover:opacity-50">
              <Image
                className="rounded-lg shadow-xl hover:shadow-2xl"
                src={mazesoba}
                alt="Kokoru"
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center text-xl font-semibold text-white opacity-0 duration-300 hover:opacity-100">
                Mazesoba at Kokoru in Vancouver, BC
              </div>
            </figure>
          </div>

          <div className="flex h-min w-full items-center justify-center text-center py-4">
            <figure className="group relative max-w-xs cursor-pointer bg-red-500 object-cover opacity-100 transition-all duration-1000 hover:opacity-50">
              <Image
                className="rounded-lg shadow-xl hover:shadow-2xl"
                src={clamchowder}
                alt="clam chowder"
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center text-xl font-semibold text-white opacity-0 duration-300 hover:opacity-100">
                Clam Chowder in Santa Cruz, CA
              </div>
            </figure>
          </div>

          <div className="flex h-min w-full items-center justify-center text-center py-4">
            <figure className="group relative max-w-xs cursor-pointer bg-red-500 object-cover opacity-100 transition-all duration-1000 hover:opacity-50">
              <Image
                className="rounded-lg shadow-xl hover:shadow-2xl"
                src={jam}
                alt="jam"
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center text-xl font-semibold text-white opacity-0 duration-300 hover:opacity-100">
                Brunch at Jam in Vancouver, BC
              </div>
            </figure>
          </div>

          <div className="flex h-min w-full items-center justify-center text-center py-4">
            <figure className="group relative max-w-xs cursor-pointer bg-red-500 object-cover opacity-100 transition-all duration-1000 hover:opacity-50">
              <Image
                className="rounded-lg shadow-xl hover:shadow-2xl"
                src={machimachi}
                alt="machi machi"
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center text-xl font-semibold text-white opacity-0 duration-300 hover:opacity-100">
                Strawberry Milk Latte with Panna Cotta at machi machi in
                Vancouver, BC
              </div>
            </figure>
          </div>

          <div className="flex h-min w-full items-center justify-center text-center py-4">
            <figure className="group relative max-w-xs cursor-pointer bg-red-500 object-cover opacity-100 transition-all duration-1000 hover:opacity-50">
              <Image
                className="rounded-lg shadow-xl hover:shadow-2xl"
                src={ricerolls}
                alt="Rice Rolls"
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center text-xl font-semibold text-white opacity-0 duration-300 hover:opacity-100">
                Shrimp & Pork Rice Rolls near University of California in
                Berkeley, CA
              </div>
            </figure>
          </div>

          <div className="flex h-min w-full items-center justify-center text-center py-4">
            <figure className="group relative max-w-xs cursor-pointer bg-red-500 object-cover opacity-100 transition-all duration-1000 hover:opacity-50">
              <Image
                className="rounded-lg shadow-xl hover:shadow-2xl"
                src={homemadekale}
                alt="Pasta with Kale"
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center text-xl font-semibold text-white opacity-0 duration-300 hover:opacity-100">
                Creamy Tomato Chickpea Pasta with Lightly Sauteed Kale, Zucchini
                & Shrimp (Homemade)
              </div>
            </figure>
          </div>
        </div>
      </main>
    </>
  );
}
