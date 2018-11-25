import React from "react";
import styled from "styled-components";
import { Dropdown, PrimaryButton } from "../../Components";
import calendar from "./icons/calendar.png";
import alarm from "./icons/alarm.png";

const CreateGameBar = styled.div`
  background-color: #fafafa;
  padding: 40px 50px 0;
`;

const dateOptions = [
  { value: "today", label: "Today" },
  { value: "tomorrow", label: "Tomorrow" }
];

function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

const timeOptions = [];

for (let i = 0; i < 48; i++) {
  const totalMinutes = i * 30;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  timeOptions.push({
    value: totalMinutes,
    label: `${hours}:${pad(minutes, 2)}`
  });
}

const DateTimeDropdowns = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const DateDropdown = styled(Dropdown)`
  margin-right: 30px;
`;

const CreateGameButton = styled(PrimaryButton)`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 24px;
`;

export default () => (
  <CreateGameBar>
    <DateTimeDropdowns>
      <DateDropdown
        icon={calendar}
        options={dateOptions}
        defaultValue={dateOptions[0]}
      />
      <Dropdown
        icon={alarm}
        options={timeOptions}
        defaultValue={timeOptions[10]}
      />
    </DateTimeDropdowns>
    <Dropdown icon={"/icons/basketball.png"} options={dateOptions} />
    <CreateGameButton>Submit</CreateGameButton>
  </CreateGameBar>
);
