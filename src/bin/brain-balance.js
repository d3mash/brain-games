#!/usr/bin/env node
import flow from '../flow';
import { gameCondition, generateQuestion, getAnswer } from '../games/balance';

console.log(flow(gameCondition, generateQuestion, getAnswer));
