mycat command:
It is used to display or make a copy content of one or more files in the terminal

Commands:
1- mycat filepath => displays content of the file in the terminal
2- mycat filepath1 filepath2 filepath3... => displays content of all files in the terminal(contactinated form) in the given order. 3- mycatcat -s filepath => convert big line breaks into a singular line break 
4- mycat -n filepath => give numbering to all the lines
5- mycat -b filepath => give numbering to non-empty lines  
6- mycat filepath > filename2path => put all the content of filename into filename2 by overriding and also creates filename2 if it doesn't exist. 
7- mycat filename2path >> filename2path => append all the content of filename into filename2 
8- node mycat -s filename > filename2 =>get the file content of filename remove large spaces and save the output in filename2 We can mix and match the options.

Edge cases:
1- If file entered is not found then it gives file does not exist error. 
2- -n and -b are 2 options available together then command should give you an error