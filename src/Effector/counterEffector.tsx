import React from "react";
import { createEvent, createStore, combine } from "effector";
import { useStore } from "effector-react";

const plus = createEvent();
const disable = createEvent();
const reset = createEvent();

type storeType = [number, boolean];

const $counterC = createStore<storeType>([1, true], {
  name: "counterС",
  updateFilter: (update, current) => {
    return !(current[1] === false && update[1] === false);
  },
});

$counterC.on(plus, (state) => [state[0] + 1, state[1]]);
$counterC.on(disable, (state) => [state[0], !state[1]]);
$counterC.reset(reset);

const $counterMap = $counterC.map((item) => `current value = ${item[0]}`);
const $counterCombined = combine({ counter: $counterC, text: $counterMap });

export const CounterEffector: React.FC = () => {
  const counter = useStore($counterC);
  const counterMap = useStore($counterMap);
  const counterCombined = useStore($counterCombined);

  return (
    <div>
      <h1>Counter Effector</h1>
      <button onClick={() => plus()}>Plus</button>
      <button onClick={() => disable()}>disable</button>
      <button onClick={() => reset()}>reset</button>
      <div>counter: {counter[0]}</div>
      <div>enabled: {String(counter[1])}</div>
      <div>counterMap: {counterMap}</div>
      <div>
        counterCombined: {String(counterCombined.counter[1])},{" "}
        {counterCombined.text}
      </div>
    </div>
  );
};
