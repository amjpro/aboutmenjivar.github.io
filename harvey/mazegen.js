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
            env[env.length] = ([' '] * width);
        }
    }

    out_of_bounds(env, curr_coor) {
        return (curr_coor[0]<0 || curr_coor[1]<0 || curr_coor[0]>env.length-1 || curr_coor[1]>env[0].length-1);
    }

    cartesian_to_env (env, xy_pair) {
        if (out_of_bounds([env.length-xy_pair[1],xy_pair[0]])) {
            print("ERROR: coordinate out of range of environment");
            return [];
        }
        return [env.length-xy_pair[1],xy_pair[0]];
    }
    
    eq (c_one, c_two) {
        return (c_one[0] == c_two[0] && c_one[1] == c_two[1]);
    }

    dist (c_one, c_two) {
        return (Math.abs(c_one[0] - c_two[0]) + Math.abs(c_one[1] - c_two[1]));
    }

    n (curr_coor) {
        return [curr_coor[0]-1, curr_coor[1]];
    }
    s (curr_coor) {
        return [curr_coor[0]+1, curr_coor[1]];
    }
    e (curr_coor) {
        return [curr_coor[0], curr_coor[1]+1];
    }
    w (curr_coor) {
        return [curr_coor[0], curr_coor[1]-1];
    }
    nsew (curr_coor) {
        return [[curr_coor[0]-1, curr_coor[1]],
                [curr_coor[0]+1, curr_coor[1]],
                [curr_coor[0], curr_coor[1]+1],
                [curr_coor[0], curr_coor[1]-1]];
    }

    list_blank_directions(env, curr_coor) {
        let ret = [];
        let nsew_coors = nsew(curr_coor);
        for (let i = 0; i < 4; i++) {
            if (!out_of_bounds(env, nsew_coors[i])) {
                if (env[nsew_coors[i][0]][nsew_coors[i][1]] == " ") {
                    ret[ret.length] = nsew_coors[i];
                }
            }
        }
        return ret;
    }

    list_accessible_coordinates(env, curr_coor) {
        // A flood fill function like iterscan that returns all coordinates in flood of area
        let active_coors = [curr_coor];
        let inactive_coors = [];
        let curr = [0,0]
        
        while (len(active_coors) > 0) {
            curr = active_coors.shift();
            
            if (curr[0]-1 >= 0) {
                if (!inactive_coors.includes([curr[0]-1,curr[1]]) && env[curr[0]-1][curr[1]] == " ") {
                    inactive_coors[inactive_coors.length] = [curr[0]-1,curr[1]];
                    active_coors[active_coors.length] = [curr[0]-1,curr[1]];
                }
            }
            // FIX THESE ONES LATER

            // if (curr[0]+1 < len(env)) {
            //     if ([curr[0]+1,curr[1]] not in inactive_coors and env[curr[0]+1][curr[1]] == " "):
            //         inactive_coors.append([curr[0]+1,curr[1]])
            //         active_coors.append([curr[0]+1,curr[1]])
            // }
            // if (curr[1]-1 >= 0) {
            //     if ([curr[0],curr[1]-1] not in inactive_coors and env[curr[0]][curr[1]-1] == " "):
            //         inactive_coors.append([curr[0],curr[1]-1])
            //         active_coors.append([curr[0],curr[1]-1])
            // }
            // if (curr[1]+1 < len(env[0])) {
            //     if ([curr[0],curr[1]+1] not in inactive_coors and env[curr[0]][curr[1]+1] == " "):
            //         inactive_coors.append([curr[0],curr[1]+1])
            //         active_coors.append([curr[0],curr[1]+1])
            // }
        }
                    
        return inactive_coors
    }
}

