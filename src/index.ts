import * as fs from "fs";
import * as path from "path";

export default class Util {
	private readonly cwd: string;


	public constructor(cwd: string) {
		this.cwd = cwd;
	}

	/**
	 *
	 * @param dirName
	 * @return true if success
	 */
	public mkdir(dirName: string): boolean {
		const pathAbsolute = path.resolve(this.cwd, dirName);

		if (fs.existsSync(pathAbsolute)) {
			return false;
		}
		fs.mkdirSync(pathAbsolute);

		return true;
	}
}