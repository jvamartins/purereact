function namedFunction(a, b) {
  console.log(a, b);
}

const functionA = function (a, b) {
  console.log(a, b);
};

const functionB = (a, b) => {
  console.log(a, b);
};

const functionC = (a, b) => a + b;

const functionD = (nome, email) => ({
  nome,
  email,
});

console.log(functionD(10, 10));
