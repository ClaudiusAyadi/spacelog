import { getInhabitants } from './api-call.js';
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
clear();
console.log(
	chalk.yellowBright(figlet.textSync('SpaceLog', { horizontalLayout: 'full' }))
);
const inhabitants = await getInhabitants();
const verb = inhabitants.number > 1 ? 'are' : 'is';
console.log(
	chalk.green(`There ${verb} currently ${inhabitants.number} people in space`)
);
inhabitants.people.forEach(person =>
	console.log(`${person.name} - ${chalk.yellow(person.craft)}`)
);
