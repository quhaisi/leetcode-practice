// int32 to IPv4

function int32ToIp(int32) {
  const str = int32.toString(2).padStart(32, 0);
  return (
    parseInt(str.substr(0, 8), 2) +
    "." +
    parseInt(str.substr(8, 8), 2) +
    "." +
    parseInt(str.substr(16, 8), 2) +
    "." +
    parseInt(str.substr(24, 8), 2)
  );
}

function int32ToIp(int32){
  console.log((int32 >> 24) & 0xFF)
  return (
           ((int32 >> 24) & 0xFF) + "." +
           ((int32 >> 16) & 0xFF) + "." +
           ((int32 >>  8) & 0xFF) + "." +
           ((int32) & 0xFF)
         );
 }

console.log(int32ToIp(2149583361));
console.log(int32ToIp(1));
