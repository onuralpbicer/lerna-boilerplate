/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const readline = require('readline')
const fkill = require('fkill')

// import readline from 'readline'

const interface = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

interface.question(
	'This will kill all running NodeJS instances. Yes/no? ',
	(res) => {
		const lowerRes = res.toLowerCase()
		if (lowerRes === 'yes' || lowerRes === 'y') {
			fkill('node.exe', {
				force: true,
			})
		}
		interface.close()
	},
)
