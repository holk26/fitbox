"use client";

import { Dashboard } from "@/components/component/Dashboard";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>FitBox</title>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Dashboard />
    </>
  );
}
