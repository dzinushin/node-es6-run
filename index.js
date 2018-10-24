import { one, two } from './module';
import moment from 'moment';

const msg = `one: ${one} two: ${two}`;
console.log(msg);

console.log( moment().format('MMMM Do YYYY, h:mm:ss a') );