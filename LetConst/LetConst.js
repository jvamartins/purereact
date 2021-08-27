function letConst() {
  var x = 10;
  if (true) {
    let y = 10;
    const z = 10;
    x += 10;
  }
  console.log(x, y, z);
}

const obj = {
  nome: "John",
};

obj = 10;

letConst();
