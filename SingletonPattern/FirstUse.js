const file = require("./fancyLogger");
const Logger = file.exportedClass;

function logFirstImplementation() {
  Logger.printLogCount();
  Logger.log("First file");
  Logger.printLogCount();
}
exports.exportedFunction = logFirstImplementation;
