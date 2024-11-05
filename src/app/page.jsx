// src/app/page.jsx

"use client"; // Client Component banane ke liye directive
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

  return null; // Redirect ke baad kuch render nahi karna
}
