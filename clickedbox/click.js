function count_increaser()
{
    /* we can use strict and non strict mode simultaneously, by using the strict mode inside a function */
    /* "use strict"; */
    click_count++;
    var prefix="Box Clicked ";
    var suffix=" times";
    document.getElementsByClassName('output')[0].innerText=prefix+click_count+suffix;
}
var box=document.getElementsByClassName('innerbox');
var click_count=0;
box[0].addEventListener('click', count_increaser); 