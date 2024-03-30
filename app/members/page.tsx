import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default async function Page() {
  return (
    <>
      <div className="flex">
        <h1 className="text-2xl font-semibold leading-none tracking-tight">
          Members
        </h1>
        <Button size="sm" variant="secondary" className="ml-auto">
          Add Member
        </Button>
      </div>
      <Separator className="my-4" />
    </>
  );
}
