// Problem: https://www.codewars.com/kata/5aa736a455f906981800360d
function feast(beast, dish) {

if ( beast.slice(-1) == dish.slice(-1) && beast.charAt(0) == dish.charAt(0) ) {
        return true
}       else {
        return false
}

}
