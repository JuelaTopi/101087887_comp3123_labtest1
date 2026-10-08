const fs = require("fs");
const path = require("path");

try {
    const logsDirectory = path.join(process.cwd(), "Logs");

    if (fs.existsSync(logsDirectory)) {
        const files = fs.readdirSync(logsDirectory);

        files.forEach((fileName) => {
            const filePath = path.join(logsDirectory, fileName);

            console.log(`delete files...${fileName}`);
            fs.unlinkSync(filePath);
        });

        fs.rmdirSync(logsDirectory);
    } else {
        console.log("Logs directory does not exist.");
    }
} catch (error) {
    console.error("Could not remove log files:", error.message);
    process.exitCode = 1;
}