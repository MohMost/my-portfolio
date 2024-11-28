"use client";
import React from "react";
import Index from "@/app/_components/projects/ProjectGrid";
import Header from "@/app/_components/Header";
import Sidebar from "@/app/_components/Sidebar";
import Footer from "@/app/_components/Footer";

export function page() {
  return (
    <>
      <Header />
      <Sidebar />
      <Index />
    </>
  );
}

export default page;
