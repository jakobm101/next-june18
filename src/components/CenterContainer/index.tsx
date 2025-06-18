"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Button from "../Button";
export default function CenterContainer() {
  
  // State Logic
  const [count, setCount]: [number, Dispatch<SetStateAction<number>>] = useState(0);
  const handlePlus: () => void = () => setCount(count + 1);
  const handleMinus: () => void = () => setCount(count - 1);

  return (
    <>
      <section className="flex flex-col justify-center items-center content-center rounded-2xl shadow-2xl shadow-amber-500  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-50 w-50 h-50">
        <h2 className="text-black text-9xl">{count}</h2>
        <div>
          <Button onClick={handlePlus}>+</Button>
          <Button onClick={handleMinus}>-</Button>
        </div>
      </section>
    </>
  );
}
