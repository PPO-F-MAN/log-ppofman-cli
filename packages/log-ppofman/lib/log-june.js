#!/usr/bin/env node

import { program } from 'commander'
import { logJune } from 'log-ppofman-core'

// action
program.action(cmd => logJune())

program.parse(process.argv)
