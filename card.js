#!/usr/bin/env node

// Modules
import boxen from "boxen";
import chalk from "chalk";

const data = {
  name: chalk.red("                  Mayank Saini"),
  about: `${chalk.white("Software Engineer in making at ")} ${chalk.cyan(
    "LNMIIT"
  )}`,
  github: chalk.gray("https://github.com/") + chalk.blue("MaySi11"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyanBright("May_Si_"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.green("maysi"),
  web: chalk.cyan("https://anoroc.win/"),

  npx: chalk.red("npx maysi"),

  labelWork: "         ",
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.about}`,
    ``,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,

    `${chalk.italic("    My DMs is always open, Whether you have a")}`,
    `${chalk.italic(
      "    question or just want talk about Tech, Music or Anime! "
    )}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "bold",
    borderColor: "magenta",
  }
);

console.log(me);
