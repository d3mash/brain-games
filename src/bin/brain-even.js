#!/usr/bin/env node
import { getName, greet } from '..';
import getQuestion from '../games/even';

console.log('Welcome to the Brain Games\nAnswer "yes" if number even otherwise answer "no".\n');
const name = getName();
console.log(greet(name));
console.log(getQuestion(name, 0));
