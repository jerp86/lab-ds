import { FormEvent, useState } from "react";
import { Plus, Envelope, Lock } from "phosphor-react";

import {
  Logo,
  Heading,
  TextInput,
  Button,
  Text,
  Checkbox,
} from "../../components";

export const SignIn = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const handleSignIn = (event: FormEvent) => {
    event.preventDefault();
    setIsUserSignedIn(true);
  };

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

      <form
        onSubmit={handleSignIn}
        className="flex flex-col items-stretch w-full max-w-sm gap-4 mt-10"
      >
        {isUserSignedIn && (
          <Text size="lg" className="mt-[-2rem]">
            Login realizado!
          </Text>
        )}
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              type="password"
              id="password"
              placeholder="******"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
};
