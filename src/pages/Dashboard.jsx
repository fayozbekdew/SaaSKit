import { Fragment } from "react";
import React from "react";
import Select from "../components/Select";
import TaskCard from "../components/TaskCard";
import DashboardRightBottomChart from "../sections/DashboardRightBottomChart";
import DashboardRightTop from "../sections/DashboardRightTop";
import { useState, useEffect } from "react";
import { Months, Week } from "../constants/dashboard";
import { DailyTasks, Tasks } from "../constants/common";

function Dashboard() {
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [days, setDays] = useState([]);
  const [tasks, setTasks] = useState(Tasks.thisYear);
  const [dailyTasks, setDailyTasks] = useState(
    DailyTasks.filter(
      (task) => task.due == new Date().toISOString().split("T")[0]
    )
  );
  const thisDay = `${new Date().getDate()} ${Months[new Date().getMonth()]}, ${
    Week[new Date().getDay()]
  }`;
  useEffect(() => {
    setDays(
      new Array(7).fill(null).map((_, i) => ({
        day: Week[(new Date().getDay() - 2 + i + 7) % 7],
        date: new Date().getDate() - 2 + i,
      }))
    );
  }, []);
  const taskFilterFn = (type) => {
    if (type == "This Year") {
      setTasks(Tasks.thisYear);
    } else if (type == "This Month") {
      setTasks(Tasks.thisMonth);
    } else if (type == "This Week") {
      setTasks(Tasks.thisWeek);
    } else if (type == "This Day") {
      setTasks(Tasks.thisDay);
    }
  };
  const selectDailyTasks = (date) => {
    setSelectedDay(date);
    if (new Date().getDate() - date == 1) {
      setDailyTasks(
        DailyTasks.filter(
          (task) =>
            task.due ==
            new Date(new Date().setDate(new Date().getDate() - 1))
              .toISOString()
              .slice(0, 10)
        )
      );
    } else if (new Date().getDate() - date == 2) {
      setDailyTasks(
        DailyTasks.filter(
          (task) =>
            task.due ==
            new Date(new Date().setDate(new Date().getDate() - 2))
              .toISOString()
              .slice(0, 10)
        )
      );
    } else if (new Date().getDate() - date == 0) {
      setDailyTasks(
        DailyTasks.filter(
          (task) => task.due == new Date().toISOString().split("T")[0]
        )
      );
    } else {
      setDailyTasks([]);
    }
  };
  return (
    <div className="flex flex-1 gap-x-4 p-4 h-[90vh]">
      <div className="flex flex-col w-full min-w-[635px] max-w-[823px] flex-grow bg-white shadow-lg p-4">
        <div className="px-4 pt-2 pb-4 bg-white ">
          <div className="flex justify-between items-center text-darkText text-sm mb-2">
            <p className="font-semibold text-base">
              {tasks.completed} task completed out of {tasks?.all}
            </p>
            <Select
              action={taskFilterFn}
              options={["This Year", "This Month", "This Week", "This Day"]}
            />
          </div>
          <div className="relative w-full h-2 bg-lightGray rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-2 bg-green rounded-full"
              style={{ width: `${(tasks.completed / tasks.all) * 100}%` }}
            ></div>
          </div>
          <div className="mt-4 text-lg font-semibold">{thisDay}</div>
          <div className="flex justify-between mt-3 text-gray">
            {days.map(({ day, date }) => (
              <div
                key={date}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => selectDailyTasks(date)}
              >
                <span
                  className={`text-sm ${
                    selectedDay === date || date == new Date().getDate()
                      ? "text-accentBlue font-bold"
                      : ""
                  }`}
                >
                  {day}
                </span>
                <span
                  className={`w-8 h-8 flex items-center justify-center rounded-full  ${
                    selectedDay === date ? "bg-accentBlue text-white" : ""
                  } ${date == new Date().getDate() ? "text-accentBlue" : ""}`}
                >
                  {date}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          {dailyTasks.map((task) => (
            <Fragment key={crypto.randomUUID()}>
              <TaskCard
                title={task.title}
                due={task.due}
                type={task.type}
                status={task.status}
                userImg={task.userImg}
                userName={task.userName}
              />
            </Fragment>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-[445px] h-full gap-y-4">
        <span className="bg-white p-4 h-[50%]">
          <small className="flex items-center justify-between">
            <p className="font-semibold">Deals</p>
            <small className="text-xs">
              Show:{" "}
              <Select options={["Yearly", "Monthly", "Weekly", "Daily"]} />
            </small>
          </small>
          <hr className="text-lightGray" />
          <DashboardRightTop />
        </span>
        <span className="bg-white p-4 h-[50%]">
          <small className="flex items-center justify-between">
            <p className="font-semibold">Tasks</p>
            <small className="text-xs">
              Show:{" "}
              <Select
                options={["This Year", "This Month", "This Week", "This Day"]}
              />
            </small>
          </small>
          <hr className="text-lightGray" />
          <DashboardRightBottomChart />
        </span>
      </div>
    </div>
  );
}

export default Dashboard;
