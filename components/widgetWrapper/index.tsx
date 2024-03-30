import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { GripIcon, Scaling } from "lucide-react";

export function WidgetWrapper() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <div>WidgetWrapper</div>
          <button className="drag-handle absolute top-2 right-2">
            <GripIcon size={16} />
          </button>
        </CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div>WidgetWrapper</div>
      </CardContent>
      <Scaling className="absolute  bottom-2 right-2" size={16} />
    </Card>
  );
}
