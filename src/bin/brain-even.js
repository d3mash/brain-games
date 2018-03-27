#!/usr/bin/env node
import { getName, greet, getQuestion } from '..';

console.log('Welcome to the Brain Games\nAnswer "yes" if number even otherwise answer "no".\n\n');
const name = getName();
console.log(greet(name));
console.log(getQuestion(name));
