import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Khmer from '../Khmer';

export class JayavarmanVII extends Leader {
  static civilization(): typeof Civilization {
    return Khmer;
  }

  name(): string {
    return 'Jayavarman VII';
  }
}

export default JayavarmanVII;
