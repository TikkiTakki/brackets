module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openBracets = [];
  let closeBracets = [];
  let indexClose;
  let indexOpen;
  for (let i = 0; i < bracketsConfig.length; i++) {
      openBracets.push(bracketsConfig[i][0]);
      closeBracets.push(bracketsConfig[i][1]);
  }
  for (let i = 0; i < str.length; i++) {
      indexOpen = openBracets.indexOf(str[i]);
      indexClose = closeBracets.indexOf(str[i]);
      if (stack.length === 0) {
          stack.push(str[i]);
          continue;
      }
      if (indexClose !== -1) {
          if (openBracets.indexOf(stack[stack.length - 1]) === indexClose) {
              stack.pop();
              continue;
          }
      }
      if (indexOpen !== -1) {
          stack.push(str[i]);
          continue;
      }
  }
  if (stack.length !== 0) {
      return false;
  }
  return true;
}
