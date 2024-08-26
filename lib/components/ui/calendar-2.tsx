import Calendar from "react-calendar";
import { Icon } from "./icon";
import { format } from "date-fns";

export type CalendarProps2 = React.ComponentProps<typeof Calendar>;

const Calendar2 = (props: CalendarProps2) => {
  return (
    <Calendar
      calendarType="gregory"
      {...props}
      className={
        "!w-72  leading-4  border-none !border-transparent text-primary-500 font-zain "
      }
      nextLabel={
        <Icon
          name="ChevronRight"
          className="text-base text-center"
          strokeWidth={1}
        />
      }
      next2Label={
        <Icon
          name="ChevronsRight"
          className="text-base text-center"
          strokeWidth={1}
        />
      }
      prevLabel={
        <Icon
          name="ChevronLeft"
          className="text-base text-center"
          strokeWidth={1}
        />
      }
      prev2Label={
        <Icon
          name="ChevronsLeft"
          className="text-base text-center"
          strokeWidth={1}
        />
      }
      formatMonth={(_, date) => format(new Date(date), "MMM")}
      formatMonthYear={(_, date) => format(new Date(date), "MMM yyyy")}
    />
  );
};

Calendar2.displayName = "Calendar2";

export { Calendar2 };
