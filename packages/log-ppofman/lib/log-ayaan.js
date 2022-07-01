#!/usr/bin/env node

import { program } from 'commander'
import { logAyaan } from 'log-ppofman-core'

// action
program.action(cmd => logAyaan())

program.parse(process.argv)
