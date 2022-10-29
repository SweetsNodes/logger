import chalk from "chalk";

class SweetsNodesLogger {
  public info(message: string) {
    let date: any = new Date();
    let date_time: string = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " | " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    console.log(chalk.cyan(`[${date_time}] : INFO - ${message}`));
  }
  
  public debug(message: string) {
    let date: any = new Date();
    let date_time: string = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " | " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    console.log(chalk.yellow(`[${date_time}] : DEBUG - ${message}`));
  }
  
  public error(message: string) {
    let date: any = new Date();
    let date_time: string = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " | " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    console.log(chalk.red(`[${date_time}] : ERROR - ${message}`));
  }
}

let logger: SweetsNodesLogger = new SweetsNodesLogger();

export default logger;
