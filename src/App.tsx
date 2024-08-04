import { Layout } from "adusei-ui";

// import { Button, DatePicker, DateTimePicker, Layout } from "adusei-ui";
import "adusei-ui/dist/style.css";
// import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const rootRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Layout userInfo={{ name: "test", menuItems: [] }} />}
      >
        <Route
          index
          lazy={async () => {
            const { default: Dashboard } = await import("./routes/dasboard");
            return { Component: Dashboard };
          }}
        />
      </Route>
    </>
  )
);
function App() {
  // const [value, onChange] = useState<string | undefined>("");
  // const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-full">
      <RouterProvider router={rootRoutes} />
      {/* <Layout userInfo={{ name: "test", menuItems: [] }}>
        <Button variant={"secondary"} className="rounded-md">
          button test
        </Button>
        <DatePicker
          open={open}
          onToggle={() => setOpen(!open)}
          mode="single"
          selected={value ? new Date(value) : undefined}
          onSelect={(day) => {
            onChange(day?.toISOString());
          }}
          defaultMonth={value ? new Date(value) : undefined}
          //  fromYear={fromYear}
          //  disabled={disabled}
        />

        <DateTimePicker />
      </Layout> */}
    </div>
  );
}

export default App;
