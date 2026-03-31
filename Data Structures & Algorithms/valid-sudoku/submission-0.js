class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i=0; i<9 ; i++){
            let seen = new Set();
            for(let k=0; k<9 ; k++){
                if(board[i][k] == '.') continue;
                if(seen.has(board[i][k])) return false;

                seen.add(board[i][k])
            }
        }
        for(let i=0; i<9 ; i++){
            let seen = new Set();
            for(let k=0; k<9 ; k++){
                if(board[k][i] == '.') continue;
                if(seen.has(board[k][i])) return false;

                seen.add(board[k][i])
            }
        }

        let sqMap = new Map();
        for(let row =0; row < 9; row++){
            for(let col=0; col < 9; col++){
                if(board[row][col] === '.') continue;
                let row_col_key = `${Math.floor( row/3)},${Math.floor(col/3)}`;
                if(sqMap.get(row_col_key) && sqMap.get(row_col_key).has(board[row][col]))
                    return false;
                if(!sqMap.has(row_col_key))
                    sqMap.set(row_col_key,new Set());
                sqMap.get(row_col_key,board[row][col]).add(board[row][col]);
            }
        }

        return true;
    }
}
