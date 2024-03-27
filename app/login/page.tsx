import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <div
      style={{
        height: "calc(100vh - 40px)",
      }}
      className="grid place-items-center w-full"
    >
      <SignIn />
    </div>
  );
}
