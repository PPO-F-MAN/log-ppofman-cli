#!/usr/bin/env node

import { program } from 'commander'
import { logDante } from 'log-ppofman-core'

// action
program.action(cmd => logDante())

program.parse(process.argv)
