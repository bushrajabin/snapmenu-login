"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Ensure redirect happens only once
    if (typeof window !== "undefined") {
      router.replace("/login");
    }
  }, [router]);

  return null; 
}
