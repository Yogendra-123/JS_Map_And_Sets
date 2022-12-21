// Q.1

let arr = [2,1,5,1,2,3,5,12]
        let newset = new Set();
        for(let i=0; i<arr.length; i++){
        newset.add(arr[i])
        }
        console.log(newset)


// Q .2

let s = 'AABBADCCS'
let map = new Map();
for(let i=0; i<s.length; i++){
  if(map.has(s[i])){
    let value = map.get(s[i]);
    map.set(s[i], value+1)
  }
  else{
    map.set(s[i],1)
  }
}
for (let [k,v] of map){
  console.log(k+"="+v)
}