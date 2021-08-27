// "use strict";
// function consoleThis() {
//   console.log(this);
// }

// consoleThis();
// const consoleLogThis = consoleThis.bind(42);

// consoleThis.call("Joāo");
// consoleThis.apply("Víctor");

// consoleLogThis();

const arrowFunc = () => {
  console.log(this);
};

arrowFunc();
