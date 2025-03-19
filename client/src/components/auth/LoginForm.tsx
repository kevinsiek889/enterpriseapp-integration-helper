import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/search-input";
import { Login } from "@/components/auth/Login";

export function LoginForm() {
  const [username, setUsername] = useState("");

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <SearchInput 
        label="Enter your username (SamAccountName/Email)"
        placeholder="Enter your username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        containerClassName="items-center mb-6 w-full max-w-md"
      />
      <div className="flex justify-center">
        {username ? (
          <Login username={username} />
        ) : (
          <Button disabled>Login</Button>
        )}
      </div>
    </div>
  );
} 