import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { java } from "../../utils/index";
export function InfiniteMovingCardsDemo() {
  return (
    <div className="rounded-md flex flex-col antialiased relative overflow-hidden bg-red-400">
      <InfiniteMovingCards items={sections} direction="right" speed="slow" />
    </div>
  );
}

const sectionOne = () => {
  return (
    <div>
      <img src={java} alt="java-image" />
      <div>
        <h1>1350+ Java developers</h1>
      </div>
    </div>
  );
};

const sectionTwo = () => {
  return (
    <div>
      <h1>Why Java?</h1>
      <p>
        Java is a general-purpose, class-based, object-oriented programming
        language designed to have as few implementation dependencies as
        possible. It is intended to let application developers write once, run
        anywhere (WORA), meaning that compiled Java code can run on all
        platforms that support Java without the need for recompilation.
      </p>
    </div>
  );
};

const sectionThree = () => {
  return (
    <div>
      <img src={java} alt="java-image" />
    </div>
  );
};

const sections = [sectionOne, sectionTwo, sectionThree];
