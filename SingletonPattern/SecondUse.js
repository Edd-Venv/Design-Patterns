const file = require("./fancyLogger");
const logger = file.exportedClass;

function logSecondImplementation() {
  logger.printLogCount();
  logger.log("Second file");
  logger.printLogCount();
}
exports.exportedFunction = logSecondImplementation;
