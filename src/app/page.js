"use client";
import Image from "next/image";
import Landing from "./landingPage/page";
import { useSupabase } from "../hooks/useSupabase";

export default function Home() {
  const { loading, error, authenticateWithTelegram } = useSupabase();

  const handleTelegramAuth = async (initData) => {
    const user = await authenticateWithTelegram(initData);
    if (user) {
      // Handle successful authentication
      console.log("Authenticated user:", user);
    }
  };

  return (
    <div className="overflow-hidden overflow-x-hidden overflow-y-hidden">
      <Landing />
    </div>
  );
}
