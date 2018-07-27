import * as config from "config";
import * as fs from "fs";
import * as path from "path";
import * as shell from "shelljs";
import * as winston from "winston";

const logger = winston.createLogger({
	levels: winston.config.syslog.levels,
	transports: [new winston.transports.Console()]
});

const src: string = config.get<string>("dotfiles_repo");
const dest: string = path.resolve("synced_folder", "dotfiles");

if (fs.existsSync(dest)) {
	logger.notice(`${dest} is already exists. skip checkout.`);
} else {
	shell.exec(`git clone ${src} ${dest}`);
}
