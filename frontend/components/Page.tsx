import React from "react";
import { Links } from "./Links";
import { SizeControls } from "./SizeControls";
import { Counter } from "./Counter";
import { CounterControls } from "./CounterControls";
import { useUserStore } from "@/providers/RootStoreProvider";

export function Page({ title }: { title: string }) {
  const { username, email, jwt, error, requestState } = useUserStore();
  console.log(requestState, "data-----------------page", jwt);
  return (
    <div className="App">
      <div className="App-header">
        <h4>{title}</h4>
        <SizeControls />
        <Counter />
        <CounterControls />
        <Links />
      </div>
    </div>
  );
}
