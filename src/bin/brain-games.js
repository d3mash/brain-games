#!/usr/bin/env node

import { getName, greet } from '..';

console.log('Welcome to the Brain Games');
const name = getName();
console.log(greet(name));
console.log('Type brain-even to try our first game');
