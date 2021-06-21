//--------------------------------------------
// Sort Object's Array by key
//   ary   : Array [{},{},{}...]
//   key   : string
//   order : string "asc"(default) or "desc"
//--------------------------------------------
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ObjArraySort = (array: Array<any>, key: string, order: string) => {
  let reverse = 1;
  if (order && order.toLowerCase() == "desc") reverse = -1;
  array.sort(function (a, b) {
    if (a[key] < b[key]) return -1 * reverse;
    else if (a[key] == b[key]) return 0;
    else return 1 * reverse;
  });
};
