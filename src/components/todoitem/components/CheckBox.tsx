import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./CheckBox.css";

interface CheckBoxProps {
  checked: boolean;
  title: string;
  onCheckChanged: (checked: boolean) => void;
}

const CheckBox = (props: CheckBoxProps) => {
  const [checked, setChecked] = React.useState(props.checked);

  const textDecoration = checked ? "line-through" : "none";
  return (
    <div className="CheckBox">
      <div
        className="CheckBox-icon-container"
        onClick={(e) => {
          const toggleValue = !checked;
          setChecked(toggleValue);
          props.onCheckChanged(toggleValue);
        }}
      >
        {checked && (
          <FontAwesomeIcon
            style={{
              justifySelf: "center",
            }}
            icon={faCheck}
          />
        )}
      </div>
      <span
        style={{
          textDecoration,
        }}
      >
        {props.title}
      </span>
    </div>
  );
};

export default CheckBox;
