#!/usr/bin/env node

import { program } from 'commander'
import { logDana } from 'log-ppofman-core'

// action
program.action(cmd => logDana())

program.parse(process.argv)
