#!/usr/bin/env node

import { program } from 'commander'
import { logChoonti } from 'log-ppofman-core'

// action
program.action(cmd => logChoonti())

program.parse(process.argv)
