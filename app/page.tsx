import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default async function Page() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 w-full border">
          <h1 className="text-2xl">Vessels</h1>

          <div className="my-4" />
          <div className="flex justify-between  w-full">
            <div className="flex flex-col gap-2 items-center">
              <Badge variant="default">Active</Badge>
              <h1 className="text-4xl font-bold">12</h1>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Badge variant="secondary">Idle</Badge>
              <h1 className="text-4xl font-bold">5</h1>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <Badge variant="destructive">Maintenance</Badge>
              <h1 className="text-4xl font-bold">2</h1>
            </div>
          </div>
        </div>
        <div className="p-4 w-full border">
          <h1 className="text-2xl">Crew</h1>

          <div className="my-4" />
          <div className="flex justify-between  w-full">
            <div className="flex flex-col gap-2 items-center">
              <Badge variant="default">Onboard</Badge>
              <h1 className="text-4xl font-bold">12</h1>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Badge variant="secondary">Available</Badge>
              <h1 className="text-4xl font-bold">5</h1>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <Badge variant="destructive">Unavailable</Badge>
              <h1 className="text-4xl font-bold">2</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
