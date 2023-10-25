function checkPalindrome(N, str){
    let palindrome = false;
    for(i=0;i<N;i++){
        if(str[0]==srt[N-1] && str[1]==str[4] && str[2]==str[3]){
            palindrome = true;
        }
    }
    if(palindrome){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}
checkPalindrome(6,"nrupul");