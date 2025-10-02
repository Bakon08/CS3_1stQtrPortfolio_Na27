// input tuff
rl = require('readline')
rli = rl.createInterface({input: process.stdin})

rli.on('line', get_plane_and_passenger)

function get_plane_and_passenger(line){
console.log(line);
[plane, passenger] = line.trim().split(' ')
console.log(plane, passenger)
solve(plane, passenger)
}

function solve(plane, passenger){
ans = Math.ceil(passenger / 100) - plane
console.log(ans)
}
//variables stuff

// math tuff

// output stuff