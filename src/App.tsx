import "./App.css";
import { Button, DatePicker, DateTimePicker, Layout } from "adusei-ui";
import "adusei-ui/dist/style.css";
import { useState } from "react";

function App() {
  const [value, onChange] = useState<string | undefined>("");
  const [open, setOpen] = useState(false);
  return (
    <>
      <Layout userInfo={{ name: "test", menuItems: [] }}>
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
      </Layout>
    </>
  );
}

export default App;
