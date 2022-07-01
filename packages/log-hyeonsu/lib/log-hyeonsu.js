#!/usr/bin/env node

import { program } from 'commander'
import LogHyeonsu from 'log-hyeonsu'

// action
program.action(cmd => LogHyeonsu())

program.parse(process.argv)
