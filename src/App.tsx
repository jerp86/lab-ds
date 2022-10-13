import "./styles/global.css";

import { Plus } from "phosphor-react";

import { Heading, Logo, Text } from "./components";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <div className="flex items-center gap-2">
          <Logo.React width={53} height={47} />
          <Plus className="font-bold text-gray-200" />
          <Logo.Vite width={47} height={47} />
        </div>

        <Heading size="lg" className="mt-4" asChild>
          <h1>Ignite Lab</h1>
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>
    </div>
  );
}
