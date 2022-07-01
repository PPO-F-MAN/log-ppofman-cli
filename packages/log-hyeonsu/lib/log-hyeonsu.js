#!/usr/bin/env node

import { program } from 'commander'
import LogHyeonsuCore from 'log-hyeonsu-core'

// action
program.action(cmd => LogHyeonsuCore())

program.parse(process.argv)
