function lcs(s1, s2) {

    let dp = Array(s1.length+1).fill(0).map(()=>Array(s2.length+1).fill(0));
    for(let i=s1.length-1; i>=0; i--) {
        for(let j=s2.length-1; j>=0; j--) {
            if(s1[i]===s2[j]) {
                dp[i][j] = 1 + dp[i+1][j+1];
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j+1]);
            }
        }
    } 
    return dp[0][0];
}

let op = lcs("abcd", "dbcdefgh");
console.log(op);
