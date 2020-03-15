const file = require("./fancyLogger");
const Logger = file.exportedClass;

function logSecondImplementation() {
  Logger.printLogCount();
  Logger.log("Second file");
  Logger.printLogCount();
}
exports.exportedFunction = logSecondImplementation;
