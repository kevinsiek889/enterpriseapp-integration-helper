import { Login } from "@/components/auth/Login";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Enterprise App Integration Helper</h1>
        <div className="flex justify-center">
          <Login />
        </div>
      </div>
    </main>
  );
}
