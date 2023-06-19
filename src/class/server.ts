import { Father } from './father';
import { Uncle } from './uncle';

console.info(" class server.ts is Running~~🚀")

const father = new Father("Josh", 35);
const uncle = new Uncle("Josh", 35);

father.showName();
uncle.uncleShowName();
uncle.uncleShowAge();



