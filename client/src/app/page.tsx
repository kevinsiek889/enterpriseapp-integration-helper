"use client"  

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Login() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Login</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Login</DrawerTitle>
            <DrawerDescription>
              Please login again to continue using the application.
            </DrawerDescription>
          </DrawerHeader>
          <form className="grid gap-4 p-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                required
                id="email"
                type="email"
                autoComplete="username"
                placeholder="team@mynaui.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                required
                id="password"
                type="password"
                placeholder="••••••••••"
                autoComplete="current-password"
              />
            </div>
          </form>
          <DrawerFooter>
            <Button type="submit">Login</Button>
            <DrawerClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form className="grid gap-8 p-8">
      <div className="grid gap-4">
      <Input 
      required
      id="username"
      type="text"
      autoComplete="username"
      placeholder="Enter your Sam Account Name" />
      <Login />
      </div>
      </form>
      
    </main>
  );
}

export { Login }