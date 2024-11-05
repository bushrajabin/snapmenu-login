import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="bg-green-900 flex flex-row items-center w-44 m-auto text-center justify-center mt-10">
      <Link href="/login">Login page</Link>
    </div>
  );
}

export default page;
