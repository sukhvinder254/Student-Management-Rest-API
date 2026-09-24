const express = require("express");
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());
app.use(logger);
app.use("/students", studentRoutes);

// 500 error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
