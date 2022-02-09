# -*- coding: utf-8 -*-
"""
Created on Tue Nov  9 12:23:07 2021

@author: alex11
"""

import random

def generate_path_env(length, width, stops, extra_space):
    
    spaces = list(' ')
    for i in range(0, extra_space):
        spaces.append(' ')
    
    maze = []
    
    if (stops):
        right = {'═','╔','╚','╠','╦','╩','╬','╺'}
        left = {'═','╗','╝','╣','╦','╩','╬','╸'}
        up = {'║','╚','╝','╠','╣','╩','╬','╹'}
        down = {'║','╔','╗','╠','╣','╦','╬','╻'}
        full = {'╺','╸','╹','╻','═','║','╔','╗','╚','╝','╠','╣','╦','╩','╬'}
    else: 
        right = {'═','╔','╚','╠','╦','╩','╬'}
        left = {'═','╗','╝','╣','╦','╩','╬'}
        up = {'║','╚','╝','╠','╣','╩','╬'}
        down = {'║','╔','╗','╠','╣','╦','╬'}
        full = {'═','║','╔','╗','╚','╝','╠','╣','╦','╩','╬'}
    
#    right_left = right.intersection(left)
#    up_right = right.intersection(up)
#    down_right = right.intersection(down)
    up_left = left.intersection(up)
#    down_left = left.intersection(up)
#    up_down = up.intersection(down)
    
    prev = []
    curr = []
    out = ''
    
    #first line_______________________________________________________________________________________________
    prev.append(random.choice(list(full - left - up) + spaces)) #---------------------top-left cap
    for i in range(1, width - 1): #------------------------------------------main line
        if (prev[i - 1] in right):
            prev.append(random.choice(list(left - up)))
        else:
            prev.append(random.choice(list(full - left - up) + spaces))
    if (prev[width - 2] in right): #-----------------------------------------top-right cap
        prev.append(random.choice(list(left - up - right)))
    else:
        prev.append(random.choice(list(full - up - right - left) + spaces))
    for i in prev: #---------------------------------------------------------rendering line
        out += i
    maze.append(out)
    out = ''
    
    #midlines______________________________________________________________________________________________________
    for i in range(length - 2):
        if (prev[0] in down): #----------------------------------------------------------------------left cap
            curr.append(random.choice(list(up - left)))
        else:
            curr.append(random.choice(list(full - up - left) + spaces))
        for j in range(1, width - 1): #--------------------------------------------------------------main line
            if (curr[j - 1] in right):
                if (prev[j] in down):
                    curr.append(random.choice(list(up_left)))
                else:
                    curr.append(random.choice(list(left - up)))
            else:
                if (prev[j] in down):
                    curr.append(random.choice(list(up - left)))
                else:
                    curr.append(random.choice(list(full - up - left) + spaces))
        if (curr[width - 2] in right): #-------------------------------------------------------------right cap
            if (prev[width - 1] in down):
                curr.append(random.choice(list(up_left - right)))
            else:
                curr.append(random.choice(list(left - up - right)))
        else:
            if (prev[width - 1] in down):
                curr.append(random.choice(list(up - left - right)))
            else:
                curr.append(random.choice(list(full - left - up - right) + spaces))
        for j in curr: #-----------------------------------------------------------------------------rendering line
            out += j
        maze.append(out)
        out = ''
        prev = curr
        curr = []
    
    #final line_____________________________________________________________________________________________________
    if (prev[0] in down): #--------------------------------------------------------------------------bottom-left cap
        curr.append(random.choice(list(up - left - down)))
    else:
        curr.append(random.choice(list(full - up - left - down) + spaces))
    for i in range(1, width - 1): #------------------------------------------------------------------main line
        if (curr[i - 1] in right):
            if (prev[i] in down):
                curr.append(random.choice(list(up_left - down)))
            else:
                curr.append(random.choice(list(left - up - down)))
        else:
            if (prev[i] in down):
                curr.append(random.choice(list(up - left - down)))
            else:
                curr.append(random.choice(list(full - up - left - down) + spaces))
    if (curr[width - 2] in right): #------------------------------------------------------------------bottom-right cap
        if (prev[width - 1] in down):
            curr.append(random.choice(list(up_left - right - down)))
        else:
            curr.append(random.choice(list(full - up - right - down) + spaces))
    else:
        if (prev[width - 1] in down):
            curr.append(random.choice(list(full - left - right - down) + spaces))
        else:
            curr.append(random.choice(list(full - up - left - right - down) + spaces))
    for i in curr: #---------------------------------------------------------------------------------rendering line
        out += i
    maze.append(out)
    out = ''
    
    return maze


def render_env(env):
    maze = ''
    for line in env:
        maze += line + '\n'
    return maze

fifty_env = [[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
             [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']]

plus_env = [[' ', ' ', ' ', ' ', '|', '|', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', '|', '|', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', '|', '|', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', '|', '|', ' ', ' ', ' ', ' '],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            [' ', ' ', ' ', ' ', '|', '|', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', '|', '|', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', '|', '|', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', '|', '|', ' ', ' ', ' ', ' ']]

ten_env = [[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
           [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
           [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
           [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
           [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
           [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
           [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
           [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
           [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
           [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']]

isolatetester = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

nsew_bintopiece =   {
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

nsew_piecetobin =   {
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

def duplicate(env):
    ret_env = []
    for i in env:
        ret_i = []
        for j in i:
            ret_i.append(j)
        ret_env.append(ret_i)
    return ret_env

# Python code to convert string to list character-wise
def Convert(string):
    list1=[]
    list1[:0]=string
    return list1

def env_split(env):
    ret_env = []
    for line in env:
        ret_env.append(Convert(line))
    return ret_env

def blank_env(length, width):
    env = [] #-----------------------------------Generate a blank 2D array
    for i in range(0,length):
        env.append([' '] * width)
    return env

def out_of_bounds(env, curr_coor):
    return (curr_coor[0]<0 or curr_coor[1]<0 or curr_coor[0]>len(env)-1 or curr_coor[1]>len(env[0])-1)

def cartesian_to_env (env, xy_pair):
    if (out_of_bounds([len(env)-xy_pair[1],xy_pair[0]])):
        print("ERROR: coordinate out of range of environment")
        return []
    return [len(env)-xy_pair[1],xy_pair[0]]

def eq (c_one, c_two):
    return (c_one[0] == c_two[0] and c_one[1] == c_two[1])

def dist (c_one, c_two):
    return (abs(c_one[0] - c_two[0]) + abs(c_one[1] - c_two[1]))

def n (curr_coor):
    return [curr_coor[0]-1, curr_coor[1]]
def s (curr_coor):
    return [curr_coor[0]+1, curr_coor[1]]
def e (curr_coor):
    return [curr_coor[0], curr_coor[1]+1]
def w (curr_coor):
    return [curr_coor[0], curr_coor[1]-1]
def nsew (curr_coor):
    return [[curr_coor[0]-1, curr_coor[1]],
            [curr_coor[0]+1, curr_coor[1]],
            [curr_coor[0], curr_coor[1]+1],
            [curr_coor[0], curr_coor[1]-1]]

def list_blank_directions(env, curr_coor):
    ret = []
    for coor in nsew(curr_coor):
        if (not out_of_bounds(env, coor)):
            if (env[coor[0]][coor[1]] == " "):
                ret.append(coor)
    return ret

def list_accessible_coordinates(env, curr_coor):
    # A flood fill function like iterscan that returns all coordinates in flood of area
    active_coors = [curr_coor]
    inactive_coors = []
    
    while (len(active_coors) > 0):
        curr = active_coors.pop(0)
        
        if (curr[0]-1 >= 0):
            if ([curr[0]-1,curr[1]] not in inactive_coors and env[curr[0]-1][curr[1]] == " "):
                inactive_coors.append([curr[0]-1,curr[1]])
                active_coors.append([curr[0]-1,curr[1]])
        if (curr[0]+1 < len(env)):
            if ([curr[0]+1,curr[1]] not in inactive_coors and env[curr[0]+1][curr[1]] == " "):
                inactive_coors.append([curr[0]+1,curr[1]])
                active_coors.append([curr[0]+1,curr[1]])
        if (curr[1]-1 >= 0):
            if ([curr[0],curr[1]-1] not in inactive_coors and env[curr[0]][curr[1]-1] == " "):
                inactive_coors.append([curr[0],curr[1]-1])
                active_coors.append([curr[0],curr[1]-1])
        if (curr[1]+1 < len(env[0])):
            if ([curr[0],curr[1]+1] not in inactive_coors and env[curr[0]][curr[1]+1] == " "):
                inactive_coors.append([curr[0],curr[1]+1])
                active_coors.append([curr[0],curr[1]+1])
                
    return inactive_coors

def iterscan(env, curr_coor, target_coor):
    # New strategy, try to implement an "inactive_coors" list so that you don't have to recreate the entire environment
    # But otherwise change nothing
    
    if (eq(curr_coor, target_coor)):
        return 0
    
    filled = 0
    active_coors = [curr_coor]
    inactive_coors = []
    
    while (len(active_coors) > 0):      
        curr = active_coors.pop(0)
        
        if (curr[0]-1 >= 0):
            if (curr[0]-1 == target_coor[0] and curr[1] == target_coor[1]):
                return filled
            else:
                if ([curr[0]-1,curr[1]] not in inactive_coors and env[curr[0]-1][curr[1]] == " "):
                    inactive_coors.append([curr[0]-1,curr[1]])
                    filled += 1
                    active_coors.append([curr[0]-1,curr[1]])
        if (curr[0]+1 < len(env)):
            if (curr[0]+1 == target_coor[0] and curr[1] == target_coor[1]):
                return filled
            else:
                if ([curr[0]+1,curr[1]] not in inactive_coors and env[curr[0]+1][curr[1]] == " "):
                    inactive_coors.append([curr[0]+1,curr[1]])
                    filled += 1
                    active_coors.append([curr[0]+1,curr[1]])
        if (curr[1]-1 >= 0):
            if (curr[0] == target_coor[0] and curr[1]-1 == target_coor[1]):
                return filled
            else:
                if ([curr[0],curr[1]-1] not in inactive_coors and env[curr[0]][curr[1]-1] == " "):
                    inactive_coors.append([curr[0],curr[1]-1])
                    filled += 1
                    active_coors.append([curr[0],curr[1]-1])
        if (curr[1]+1 < len(env[0])):
            if (curr[0] == target_coor[0] and curr[1]+1 == target_coor[1]):
                return filled
            else:
                if ([curr[0],curr[1]+1] not in inactive_coors and env[curr[0]][curr[1]+1] == " "):
                    inactive_coors.append([curr[0],curr[1]+1])
                    filled += 1
                    active_coors.append([curr[0],curr[1]+1])
    
    return -1

def relation_to(curr_coor, target):
    direction_needed = 0b0000
    
    if (curr_coor[0] > target[0]):
        direction_needed = direction_needed | 0b0001
    if (curr_coor[0] < target[0]):
        direction_needed = direction_needed | 0b0010
    if (curr_coor[1] < target[1]):
        direction_needed = direction_needed | 0b0100
    if (curr_coor[1] > target[1]):
        direction_needed = direction_needed | 0b1000
    
    return direction_needed

def detect_connections(env, curr_coor, extra_direction_bin):
    right = {'═','╔','╚','╠','╦','╩','╬','╺','█'}
    left = {'═','╗','╝','╣','╦','╩','╬','╸','█'}
    up = {'║','╚','╝','╠','╣','╩','╬','╹','█'}
    down = {'║','╔','╗','╠','╣','╦','╬','╻','█'}
    
    connections_bin = extra_direction_bin
    
    if (not out_of_bounds(env,n(curr_coor))):
        if (env[n(curr_coor)[0]][n(curr_coor)[1]] in down):
            connections_bin = connections_bin | 0b0001
    if (not out_of_bounds(env,s(curr_coor))):
        if (env[s(curr_coor)[0]][s(curr_coor)[1]] in up):
            connections_bin = connections_bin | 0b0010
    if (not out_of_bounds(env,e(curr_coor))):
        if (env[e(curr_coor)[0]][e(curr_coor)[1]] in left):
            connections_bin = connections_bin | 0b0100
    if (not out_of_bounds(env,w(curr_coor))):
        if (env[w(curr_coor)[0]][w(curr_coor)[1]] in right):
            connections_bin = connections_bin | 0b1000
            
    return connections_bin

def path_progress(env, curr_coor, target):
    #print("path_progress called on curr_coor " + str(curr_coor) + " and target " + str(target))
    env[curr_coor[0]][curr_coor[1]] = nsew_bintopiece[detect_connections(env, curr_coor, relation_to(curr_coor, target))]
    return target

def path_branch(env, curr_coor, targets):
    #function similar to path_progress but can progress the path towards multiple targets at once
    branchbin = 0b0000
    for target in targets:
        branchbin = branchbin | relation_to(curr_coor, target)
    env[curr_coor[0]][curr_coor[1]] = nsew_bintopiece[detect_connections(env, curr_coor, branchbin)]
    return targets

def potential_isolates(env, curr_coor):
    # should return isolate groups of directional coordinates
    isolates = []
    neighbor_arr = [[]]*8
    if (not out_of_bounds(env, [curr_coor[0],curr_coor[1]+1])): #e
        if (env[curr_coor[0]][curr_coor[1]+1] == " "):
            neighbor_arr[0] = [curr_coor[0],curr_coor[1]+1] 
    if (not out_of_bounds(env, [curr_coor[0]-1,curr_coor[1]+1])): #ne
        if (env[curr_coor[0]-1][curr_coor[1]+1] == " "):
            neighbor_arr[1] = [curr_coor[0]-1,curr_coor[1]+1]
    if (not out_of_bounds(env, [curr_coor[0]-1,curr_coor[1]])): #n
        if (env[curr_coor[0]-1][curr_coor[1]] == " "):
            neighbor_arr[2] = [curr_coor[0]-1,curr_coor[1]] 
    if (not out_of_bounds(env, [curr_coor[0]-1,curr_coor[1]-1])): #nw
        if (env[curr_coor[0]-1][curr_coor[1]-1] == " "):
            neighbor_arr[3] = [curr_coor[0]-1,curr_coor[1]-1]
    if (not out_of_bounds(env, [curr_coor[0],curr_coor[1]-1])): #w
        if (env[curr_coor[0]][curr_coor[1]-1] == " "):
            neighbor_arr[4] = [curr_coor[0],curr_coor[1]-1]
    if (not out_of_bounds(env, [curr_coor[0]+1,curr_coor[1]-1])): #sw
        if (env[curr_coor[0]+1][curr_coor[1]-1] == " "):
            neighbor_arr[5] = [curr_coor[0]+1,curr_coor[1]-1]
    if (not out_of_bounds(env, [curr_coor[0]+1,curr_coor[1]])): #s
        if (env[curr_coor[0]+1][curr_coor[1]] == " "):
            neighbor_arr[6] = [curr_coor[0]+1,curr_coor[1]]
    if (not out_of_bounds(env, [curr_coor[0]+1,curr_coor[1]+1])): #se
        if (env[curr_coor[0]+1][curr_coor[1]+1] == " "):
            neighbor_arr[7] = [curr_coor[0]+1,curr_coor[1]+1]

    if ([] in neighbor_arr):
        offset = 0
        while (neighbor_arr[offset] != []):
            offset+=1
        
        i = offset
        while (i<(8+offset)):
            if (neighbor_arr[i] == []):
                i+=1
                curr_isolate = []
                while (neighbor_arr[i%8] != []):
                    if (i%2 == 0):
                        curr_isolate.append(neighbor_arr[i%8])
                    i+=1
                i-=1
                if (curr_isolate != []):
                    isolates.append(curr_isolate)
            i+=1
        
        return isolates
    else:
        return [[neighbor_arr[0], neighbor_arr[2], neighbor_arr[4], neighbor_arr[6]]]

def scan_edges(env, curr_coor):
    #this function operates similar to iterscan, except instead of returning the fill-distance from a target coordinate, it returns an array of path coordinates in the open area.
    
    return "list of coordinates"
    
def path_weaver(env, start, end):
    #REMEMBER: all coordinates are stated as row THEN column
    # When using path_progress on this program, you can cap it when you reach the end coordinate path progressing to the previous coordinate
    
    if (out_of_bounds(env, start)):
        print("ERROR: start coordinate out of range of environment")
        return []
    if (out_of_bounds(env, end)):
        print("ERROR: end coordinate out of range of environment")
        return []
    if (iterscan(env, start, end) == -1):
        print("ERROR: impossible to connect coordinates")
        return []
    
    path = []
    curr_coor = start
    while (not eq(curr_coor, end)):
        path.append(curr_coor)
        env[curr_coor[0]][curr_coor[1]] = '.'
        possible_directions = []
        curr_scan = potential_isolates(env, curr_coor)
        if (len(curr_scan) == 1):
            possible_directions.extend(curr_scan[0])
        else:
            for isolate in curr_scan:
                if (iterscan(env, isolate[0], end) >= 0):
                    possible_directions.extend(isolate)
        curr_coor = path_progress(env, curr_coor, random.choice(possible_directions))
    
    path.append(curr_coor)
    env[curr_coor[0]][curr_coor[1]] = nsew_bintopiece[detect_connections(env, curr_coor, 0b0000)]
    return path

def path_stumbler(env, start):
    #an undirected version of path_weaver with no target, it only ends when it finds a dead end
    
    if (out_of_bounds(env, start)):
        print("ERROR: start coordinate out of range of environment")
        return []
    
    path = []
    curr_coor = start
    while (len(list_blank_directions(env, curr_coor)) > 0):
        path.append(curr_coor)
        curr_coor = path_progress(env, curr_coor, random.choice(list_blank_directions(env, curr_coor)))
    env[curr_coor[0]][curr_coor[1]] = nsew_bintopiece[detect_connections(env, curr_coor, 0b0000)]
    return path

def maze_gen(env, start, end, branch_ratio, max_iteration):
    # maze_gen is getting a rewrite
    # I originally programmed path_weaver with the hope that it would could both solve and generate mazes
    # I think it's high time I bring that idea back and let iterate_env take the place of the old maze_gen function
    
    # This function will use a combination of path_weaver and path_stumbler to generate a maze
    if (out_of_bounds(env, start)):
        print("ERROR: start coordinate out of range of environment")
        return []
    if (out_of_bounds(env, end)):
        print("ERROR: end coordinate out of range of environment")
        return []
    if (iterscan(env, start, end) == -1):
        print("ERROR: impossible to connect coordinates")
        return []
    if (branch_ratio < 1):
        print("ERROR: branch ratio must be greater than or equal to 1")
        return []
    
    branch_arr = [0] * branch_ratio
    branch_arr[0] = 1
    
    area = list_accessible_coordinates(env, start)
    curr_path_coors = path_weaver(env, start, end)
    curr_branch_points = []
    
    failsafe = 0
    while (len(area) > 0 and failsafe < max_iteration):
        failsafe+=1
        for coor in curr_path_coors:
            if (coor in area):
                area.remove(coor)
            if (len(list_blank_directions(env, coor)) > 0):
                curr_branch_points.append(coor)
        curr_path_coors.clear()
        for point in curr_branch_points:
            if (len(list_blank_directions(env, point)) > 0):
                if (random.choice(branch_arr)):
                    curr_path_coors.extend(path_stumbler(env, point))
            else:
                curr_branch_points.remove(point)
    
    return env

def maze_gen_no_end(env, start, branch_ratio, max_iteration):
    # if maze_gen doesn't use path_weaver, it becomes much faster
    if (out_of_bounds(env, start)):
        print("ERROR: start coordinate out of range of environment")
        return []
    if (branch_ratio < 1):
        print("ERROR: branch ratio must be greater than or equal to 1")
        return []
    
    branch_arr = [0] * branch_ratio
    branch_arr[0] = 1
    
    area = list_accessible_coordinates(env, start)
    curr_path_coors = path_stumbler(env, start)
    curr_branch_points = []
    
    failsafe = 0
    while (len(area) > 0 and failsafe < max_iteration):
        failsafe+=1
        for coor in curr_path_coors:
            if (coor in area):
                area.remove(coor)
            if (len(list_blank_directions(env, coor)) > 0):
                curr_branch_points.append(coor)
        curr_path_coors.clear()
        for point in curr_branch_points:
            if (len(list_blank_directions(env, point)) > 0):
                if (random.choice(branch_arr)):
                    curr_path_coors.extend(path_stumbler(env, point))
            else:
                curr_branch_points.remove(point)
    
    return env
    
def iterate_env(env):
    # Progresses the path on each end with a chance of branching each time
    # Far more inefficient to use that maze gen (because it effects the whole environment) but still interesting
    # possibility of paths crossing
    
    # New Idea: it won't be random. If path can travel straight, it will travel straight. If it's forced to choose between two turns it will split
    # It will effect every active path at once, which will allow syncronized paths to merge from every angle. A path won't be placed until all possible active paths that can connect to it on that iteration are taken into account
    # It's possible path progress allows for this
    
    # Possible thing that could destroy paths are end pieces, which could "eat" path pieces they're connected to with each iteration
    
    # it could split based on potential isolates or only when it's forced to turn, we'll have to see
    
    # a dead end creates an end, which of course then proceeds to eat the path it came on
    # this means you could use it to solve a maze, as an end can only destroy until it reaches a branch
    # unless of course we do want ends to be able to split in two to destroy branches
    
    # there can be multiple modes even! that would be cool
    
    
    # need to think of a mode that could allow active pieces to destroy still-lifes
    
    
    
    print("iterate_env")
    
def env_clear(env):
    for i in range(0, len(env)):
        for j in range(0, len(env[0])):
            env[i][j] = " "
    return env

def env_to_string(env):
    ret = ""
    for row in env:
        curr = ""
        for col in row:
            curr+=col
        ret+=(curr+"\n")
    return ret

def env_to_blocked(env):
    # A 3x3 will be expanded into a 7#7 like this and then have paths cut out from the ' 's according to the paths in the original 3x3
    
    right = {'═','╔','╚','╠','╦','╩','╬','╺'}
    left = {'═','╗','╝','╣','╦','╩','╬','╸'}
    up = {'║','╚','╝','╠','╣','╩','╬','╹'}
    down = {'║','╔','╗','╠','╣','╦','╬','╻'}
    
    blocked_env = []
    for i in range(0, len(env)):
        blocked_env.append(['█']*(2* len(env[0]) + 1))
        swiss_cheese = []
        for j in range(0, len(env[0])):
            swiss_cheese.extend(['█',' '])
        swiss_cheese.append('█')
        blocked_env.append(swiss_cheese)
    blocked_env.append(['█']*(2 * len(env[0]) + 1))
    
    for i in range(0, len(env)):
        for j in range(0, len(env[0])):
            if (env[i][j] in down):
                blocked_env[(2*(i+1)-1) + 1][(2*(j+1)-1)] = ' '
            if (env[i][j] in up):
                blocked_env[(2*(i+1)-1) - 1][(2*(j+1)-1)] = ' '
            if (env[i][j] in left):
                blocked_env[(2*(i+1)-1)][(2*(j+1)-1) - 1] = ' '
            if (env[i][j] in right):
                blocked_env[(2*(i+1)-1)][(2*(j+1)-1) + 1] = ' '
    
    return blocked_env

def env_pathflood(env):
    # function used by env_expand to transform env_to_blocked blocks into connecting path pieces
    flooded_env = blank_env(len(env), len(env[0]))
    
    for i in range(0, len(env)):
        for j in range(0, len(env[0])):
            if (env[i][j] == '█'):
                flooded_env[i][j] = nsew_bintopiece[detect_connections(env, [i,j], 0b0000)]
    
    return flooded_env
    
def env_blockflood(env):
    #reverses env_pathflood (and destroys anything that isn't a space)
    flooded_env = blank_env(len(env), len(env[0]))
    
    for i in range(0, len(env)):
        for j in range(0, len(env[0])):
            if (not env[i][j] == ' '):
                flooded_env[i][j] = '█'
    
    return flooded_env

def env_expand(env):
    # A similar process to blocked, it may even use blocked, but the walls will be built from path pieces
    return env_pathflood(env_to_blocked(env))

def maze_render(length, width):
    # This won't be anything too powerful, just some automation that generates an environment and calls mazegen on it
    return maze_gen_no_end(blank_env(length, width), [0,0], 1, 1000)
    #TODO
    
def cut_paths(env, upper_left_corner, lower_right_corner):
    #cuts a section of coordinates from an environment, replacing them all with ' '
    return []

def copy_paths(env, upper_left_corner, lower_right_corner):
    #copies a section of coordinates as a sub-environment
    return []

def paste_paths(env, sub_env, upper_left_corner):
    #pastes a sub-environment into another environment, replacing all existing pieces
    return []
    
def maze_help():
    print("Welcome to MazeGen.py\n")