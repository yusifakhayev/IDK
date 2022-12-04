#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './ui';

//@ts-ignore
const cli = meow(`
	Usage
	  $ ink_zustand

	Options
		--name  Your name

	Examples
	  $ ink_zustand --name=Jane
	  Hello, Jane
`, {
	flags: {
		name: {
			type: 'string'
		}
	}
});

render(<App/>);
