#!/usr/bin/env node

import { program } from 'commander'
import LogCore from 'log-core'

// action
program.action(cmd => LogCore())

program.parse(process.argv)
