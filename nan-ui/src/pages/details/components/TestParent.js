import React, { useState } from "react";
import {
  TotalTestsIcon,
  PassIcon,
  FailIcon,
  DurationIcon,
  SkippedIcon,
  Collapsed,
  Expanded
} from "../../../components/Icons";

function TestParent(props) {
  const [isShown, makeVisible] = useState(false);

  const result = props.result;

  function setVisible(e) {
    e.preventDefault();
    makeVisible(!isShown);
    console.log(props);
  }

  return (
    <div className="test-parent-row px-2  hover:border-indigo-500  border">
      <div
        className="individual-section cursor-pointer my-2 py-2  "
        onClick={setVisible}
      >
        <div className="data-test flex  flex items-center">
          {isShown ? (
            <Expanded className="text-gray-600 text-sm" />
          ) : (
            <Collapsed className="text-gray-600 text-sm"></Collapsed>
          )}

          <span className="text-lg text-indigo-600 px-2 w-6/12 overflow-hidden">
            {result.name}
          </span>
          <div className="test-count-section flex w-6/12 text-gray-600">
            <div className="total-test w-2/12 flex items-center">
              <TotalTestsIcon className="mr-2"></TotalTestsIcon>
              {result.passed + result.failed + result.skipped}
            </div>
            <div className="total-passed w-2/12 flex items-center">
              <PassIcon className="mr-2" />
              {result.passed}
            </div>
            <div className="total-failed w-2/12 flex items-center">
              <FailIcon className="mr-2"></FailIcon>
              {result.failed}
            </div>
            <div className="total-skipped w-2/12 flex items-center">
              <SkippedIcon className="mr-2"></SkippedIcon>
              {result.skipped}
            </div>
            <div className="duration w-2/12 flex items-center">
              <DurationIcon className="mr-2"></DurationIcon>
              5.8s
            </div>
          </div>
        </div>
      </div>
      {isShown ? props.children : null}
    </div>
  );
}

export default TestParent;
