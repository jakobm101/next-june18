"use client";
import { useState } from "react";
import Button from "../Button";
export default function CenterContainer() {
  const [count, setCount] = useState(0);

  const handlePlus = () => setCount(count + 1);

  return (
    <>
      <section className="flex flex-col justify-center items-center content-center rounded-2xl shadow-2xl shadow-amber-500  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-50 w-50 h-50">
        <h2 className="text-black text-9xl">{count}</h2>
        <Button onClick={handlePlus}>+</Button>
      </section>
    </>
  );
}
