#!/usr/bin/env node

import { getName, greet } from '..';

console.log('Welcome to the Brain Games');
const name = getName();
console.log(greet(name));
