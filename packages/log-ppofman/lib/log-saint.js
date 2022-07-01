#!/usr/bin/env node

import { program } from 'commander'
import { logSaint } from 'log-ppofman-core'

// action
program.action(cmd => logSaint())

program.parse(process.argv)
