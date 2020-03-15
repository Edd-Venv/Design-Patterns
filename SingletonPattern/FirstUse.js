const file = require("./fancyLogger");
const logger = file.exportedClass;

function logFirstImplementation() {
  logger.printLogCount();
  logger.log("First file");
  logger.printLogCount();
}
exports.exportedFunction = logFirstImplementation;
