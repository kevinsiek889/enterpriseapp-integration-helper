"use client";

import { Heading } from "@/components/ui/heading";
import { LoginForm } from "@/components/auth/LoginForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="z-10 max-w-5xl w-full">
        <CardHeader className="items-center">
          <Heading className="text-center">Welcome to Enterprise App Integration Helper</Heading>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  );
}
