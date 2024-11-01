function checkPalindrome() {
    let numberInput = document.getElementById('numberInput').value;
    let reversedInput = numberInput.split('').reverse().join('');
    
    if (numberInput === reversedInput) {
        document.getElementById('result').innerHTML = "Yes, it's a palindrome!";
    } else {
        document.getElementById('result').innerHTML = "No, it's not a palindrome.";
    }
}
