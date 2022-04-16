// This is the JavaScript version of the original mazegen.py
// I'm attempting this translation purely because of how incompatible Python is with web applications
// Wish me luck

class Mazegen {
    constructor(length, width) {
        this.length = length
        this.width = width

        this.nsew_bintopiece =   {
            0b0000: ' ',
            0b0001: '╹',
            0b0010: '╻',
            0b0011: '║',
            0b0100: '╺',
            0b0101: '╚',
            0b0110: '╔',
            0b0111: '╠',
            0b1000: '╸',
            0b1001: '╝',
            0b1010: '╗',
            0b1011: '╣',
            0b1100: '═',
            0b1101: '╩',
            0b1110: '╦',
            0b1111: '╬'
            }

        this.nsew_piecetobin =   {
            ' ': 0b0000,
            '╹': 0b0001,
            '╻': 0b0010,
            '║': 0b0011,
            '╺': 0b0100,
            '╚': 0b0101,
            '╔': 0b0110,
            '╠': 0b0111,
            '╸': 0b1000,
            '╝': 0b1001,
            '╗': 0b1010,
            '╣': 0b1011,
            '═': 0b1100,
            '╩': 0b1101,
            '╦': 0b1110,
            '╬': 0b1111
            }
    }

    rand(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // duplicate(env) {
    //     let ret_env = [];
    //     for (let i=0; i<env.length; i++) {
    //         let ret_i = []
    //         for (let j=0; j<env[i].length; j++) {
    //             ret_i.append(env[i][j])
    //         }
    //         ret_env.append(ret_i)
    //     }
    //     return ret_env
    // }

    duplicate(env) {
        return env.map((x) => x);
    }

    blank_env(length, width) {
        let env = [];
        for (let i=0; i<length; i++) {
            env.append([' '] * width);
        }
    }
}

