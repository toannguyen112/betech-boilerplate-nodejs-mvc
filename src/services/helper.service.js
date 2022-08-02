var rfs = require("rotating-file-stream");
var path = require("path");

const helperService = {
  init: async () => {
    try {
      const d = new Date();
      var accessLogStream = rfs.createStream(`${d.getDate()}-${d.getMonth()}-${d.getFullYear()}.log`, {
        interval: "1d",
        path: path.join("./src", "logs"),
      });

      return accessLogStream;
    } catch (error) {
      throw error;
    }
  },
};

export default helperService;
