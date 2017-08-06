// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

function chessBoardGen(num) {
	return Array(num)
		.fill('placeholder')
        .map(element => Array(num).fill('#'))
		.map((arr, arrIdx) => 
            !((arrIdx + 1) % 2) ? 
                arr.map((element, idx) => !((idx + 1) % 2) ? ' ' : element)
                    .join('')
            : 
                arr.map((element, idx) => !((idx + 1) % 2) ? element : ' ')
                    .join('')
        )
        .join('\n');
}
console.log(chessBoardGen(8));