import { Inhabitants } from './types';
import axios from 'axios';

export async function getInhabitants() {
	const response = await axios.get<Inhabitants>(
		'http://api.open-notify.org/astros.json'
	);
	return response.data;
}
