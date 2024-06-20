"use client";
import { DashBoard } from "@/components/component/dash-board";
import { Main } from "@/components/component/main";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>FitBox</title>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Main />
    </>
  );
}
