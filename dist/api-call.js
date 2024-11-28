import axios from 'axios';
export async function getInhabitants() {
    const response = await axios.get('http://api.open-notify.org/astros.json');
    return response.data;
}
