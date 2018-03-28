#!/usr/bin/env node
import flow from '../flow';
import { gameCondition, generateQuestion, getAnswer } from '../games/calc';


console.log(flow(gameCondition, generateQuestion, getAnswer));
