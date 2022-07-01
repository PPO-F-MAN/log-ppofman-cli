#!/usr/bin/env node

import { program } from 'commander'
import { logPpofman } from 'log-ppofman-core'

// action
program.action(cmd => logPpofman())

program.parse(process.argv)
