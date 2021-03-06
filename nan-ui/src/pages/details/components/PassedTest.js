import React from "react";
import { PassIcon } from "../../../components/Icons";

function PassedTest(props) {
  return (
    <div className="test-child px-8 my-2 py-1 text-gray-700 flex flex-col items-start mx-auto">
      <div className="result">
        <PassIcon className="mr-3"></PassIcon>
        <span className="w-9/12 truncate">{props.result.name}</span>
      </div>

      <div className="duration-area mt-1 text-sm text-gray-500 flex items-center">
        ran for
        {"  " + props.result.duration}s
      </div>
    </div>
  );
}

export default PassedTest;
