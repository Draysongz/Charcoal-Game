"use client";

import Landing from "./landingPage/page";
import { useSupabase } from "../hooks/useSupabase";
import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";

export default function Home() {
  const { loading, error, authenticateWithTelegram } = useSupabase();
  

  useEffect(()=>{
    if(typeof window !== "undefined"){
      const initData = WebApp.initData
      console.log("initData", initData)
      alert( initData)
    }
  }, [])

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
