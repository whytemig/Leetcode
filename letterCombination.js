/**
 * @param {string} digits
 * @return {string[]}
 */
// This problem requires a Backtracking/ Recurssing method..... 

var letterCombinations = function(digits) {
    if(!digits.length) return [];
    
    let map = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
    };

    // Pushing results into an empty array 
    const results = [];

    // Backtracking Recurssing function. 
    const backTracking = (str, i)=>{
        if(i == digits.length){
            results.push(str)
        }else{
            // i = digits index;
            const letters = map[digits[i]];
            for(let chars of letters){
                backTracking(str + chars, i+1);
            }
        }
            
    }    
        
        backTracking('', 0);

   return results;
};

letterCombinations('23')
    