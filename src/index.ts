import * as fs from "fs";
import * as path from "path";
import * as mustache from "mustache";

export default class Application {
	private readonly cwd: string;
	private readonly libRoot: string = path.resolve(__dirname);
	private readonly templateDirectory: string;

	public constructor(cwd: string) {
		this.cwd = cwd;
		this.templateDirectory = path.resolve(this.libRoot, "../templates");
	}

	/**
	 * make empty directory based on current working directory
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

	/**
	 * make empty file based on current working directory
	 *
	 * @param filePath
	 * @return true if success
	 */
	public touch(filePath: string): boolean {
		const pathAbsolute = path.resolve(this.cwd, filePath);

		if (fs.existsSync(pathAbsolute)) {
			return false;
		}
		fs.writeFileSync(pathAbsolute, "");

		return true;
	}

	/**
	 * make file from template based on current working directory
	 *
	 * @param templateName
	 * @param destPath
	 * @param variables
	 * @return true if success
	 */
	public template(templateName: string, destPath: string, variables: unknown): boolean {
		const destPathAbsolute = path.resolve(this.cwd, destPath);

		if (fs.existsSync(destPathAbsolute)) {
			return false;
		}
		//
		const templateFilePath = path.resolve(this.templateDirectory, templateName + ".mustache");
		const output = mustache.render(fs.readFileSync(templateFilePath).toString(), variables);
		fs.writeFileSync(destPathAbsolute, output);

		return true;
	}
}
