#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './ui';

//@ts-ignore
const cli = meow(`
	Usage
	  $ cd <target_dir>
	  $ idk

	Options
		--mode (explore, find, clean)

	Examples
	  $ ink_zustand --name=Jane
	  Hello, Jane
`, {
});

render(<App/>);
