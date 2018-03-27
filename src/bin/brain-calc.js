#!/usr/bin/env node
import { getName, greet } from '..';
import getQuestion from '../games/calc';

console.log('Welcome to the Brain Games\nWhat is the result of the expression?\n');
const name = getName();
console.log(greet(name));
console.log(getQuestion(name, 0));
