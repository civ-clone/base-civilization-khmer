import Khmer from './Khmer';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

Object.entries({
  people: 'Khmer',
  nation: 'the Khmer Empire',
  colors: ['#7CB342', '#3E2723'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(Khmer, name, value))
);
