const file = require("./fancyLogger");
const FancyLogger = file.exportedClass;

class logSecondImplementation {}
exports.exportedClass = logSecondImplementation;
