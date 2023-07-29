let x = {
  id: 1,
  name: "sawde",
};

let v = { name: "adwad" };

x = {
  id: v.id ? v.id : x.id,
  name: v.name ? v.name : x.name,
};

console.log(x);
