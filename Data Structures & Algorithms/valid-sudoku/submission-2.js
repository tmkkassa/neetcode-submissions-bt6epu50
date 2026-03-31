class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let sqMap = new Map();

        for (let i = 0; i < 9; i++) {
            let seenRow = new Set();
            let seenCol = new Set();

            for (let k = 0; k < 9; k++) {
                // Check row
                if (board[i][k] !== '.') {
                    if (seenRow.has(board[i][k])) return false;
                    seenRow.add(board[i][k]);

                    let row_col_key = `${Math.floor(i / 3)},${Math.floor(k / 3)}`;
                    if (!sqMap.has(row_col_key)) {
                        sqMap.set(row_col_key, new Set());
                    }
                    if (sqMap.get(row_col_key).has(board[i][k])) return false;
                    sqMap.get(row_col_key).add(board[i][k]);
                }

                // Check column
                if (board[k][i] !== '.') {
                    if (seenCol.has(board[k][i])) return false;
                    seenCol.add(board[k][i]);
                }
            }
        }

        return true;
    }
}
