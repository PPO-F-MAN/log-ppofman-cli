#!/usr/bin/env node

import { program } from 'commander'
import { logPposong } from 'log-ppofman-core'

// action
program.action(cmd => logPposong())

program.parse(process.argv)
