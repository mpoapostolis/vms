"use client";

import { WidgetWrapper } from "../widgetWrapper";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import { Layout, Responsive, WidthProvider } from "react-grid-layout";

const conf = [
  { i: "a", x: 0, y: 0, w: 2, h: 1 },
  { i: "b", x: 2, y: 0, w: 2, h: 1 },
  { i: "c", x: 4, y: 0, w: 2, h: 1 },
  { i: "d", x: 6, y: 0, w: 2, h: 1 },
  { i: "e", x: 8, y: 0, w: 2, h: 1 },
  { i: "f", x: 10, y: 0, w: 2, h: 1 },
] as Layout[];
const ResponsiveGridLayout = WidthProvider(Responsive);
export function TileLayout() {
  return (
    <div className="w-full select-none h-full">
      <ResponsiveGridLayout
        margin={[16, 16]}
        draggableHandle=".drag-handle"
        containerPadding={[16, 16]}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        layouts={{
          lg: conf,
          md: conf,
          sm: conf,
          xs: conf,
          xxs: conf,
        }}
      >
        {conf.map((layout) => (
          <div
            className="w-full h-full border bg-black"
            data-grid={layout}
            key={layout.i}
          >
            <WidgetWrapper />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}
