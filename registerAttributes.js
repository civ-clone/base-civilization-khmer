"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Khmer_1 = require("./Khmer");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Khmer',
    nation: 'the Khmer Empire',
    colors: ['#7CB342', '#3E2723'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Khmer_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map