function defineCorsOptions() {
  const whitelist = [
    "https://example.com",
    "http://example.com"
  ];

  const corsOptions = {
    origin: function (origin, callback) {
      if (process.env.NODE_ENV === "production") {
        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          console.log("Origin denied: ", origin);
          callback(new Error("Not allowed by CORS"));
        }
      } else {
        callback(null, true);
      }
    },
  };

  return corsOptions
}

module.exports = defineCorsOptions;
