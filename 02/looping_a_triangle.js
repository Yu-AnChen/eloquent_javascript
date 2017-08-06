// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

const output = Array(7)
	.fill('placeholder')
	.map((element, idx) => Array(idx+1).fill('#').join(''))
	.join('\n');

console.log(output);