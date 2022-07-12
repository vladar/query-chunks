function loadQuery1() {
  return import("./query1");
}

function loadQuery2() {
  return import("./query2");
}

function loadQuery3() {
  return import("./query3");
}

function loadQuery4() {
  return import("./query4");
}

console.log("query1", loadQuery1());
console.log("query2", loadQuery2());
console.log("query3", loadQuery3());
console.log("query4", loadQuery4());
