const text =
  "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";

let result = "";

text.split("").reduce((acc, v) => {
  if (v === "#") {
    return acc + 1;
  } else if (v === "@") {
    return acc - 1;
  } else if (v === "*") {
    return acc * acc;
  } else {
    result += String(acc);
    return acc;
  }
}, 0);

console.log(result);
