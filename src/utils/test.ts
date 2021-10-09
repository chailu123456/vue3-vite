export default (param: string) => {
  let a = param || "default";
  console.log(a);
  return a;
};
