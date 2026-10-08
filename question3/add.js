const fs = require("fs");
const path = require("path");

try {
    const logsDirectory = path.join(process.cwd(), "Logs");

    if (!fs.existsSync(logsDirectory)) {
        fs.mkdirSync(logsDirectory);
    }

    process.chdir(logsDirectory);

    for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`;
        const filePath = path.join(process.cwd(), fileName);

        fs.writeFileSync(filePath, `This is log file ${i}.\n`);
        console.log(fileName);
    }
} catch (error) {
    console.error("Could not create log files:", error.message);
    process.exitCode = 1;
}