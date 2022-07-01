#!/usr/bin/env node

import { program } from 'commander'
import { logHyeonsu } from 'log-ppofman-core'

// action
program.action(cmd => logHyeonsu())

program.parse(process.argv)
