import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="bg-stone-950 text-stone-50 h-screen w-screen flex items-center justify-center text-5xl flex-col">
      <div>
        <span>Plan your runs</span>{" "}
        <span className=" bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-extrabold">
          swiftly
        </span>
      </div>
      <div className="flex gap-4 p-4">
        <Button>Log in</Button>
        <Button>Sign up</Button>
      </div>
    </div>
  );
}
