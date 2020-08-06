/**
 * 输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba
 */
function showPermutation(str, array)
{
    
    if(array.length==1)
    {
        console.log(str+array[0]);
        return ;
    }
    array.forEach((v, i) => {
        let sonArray = cloneArray(array);
        sonArray.splice(i, 1)
        showPermutation( str + v, sonArray);
    })

}
function cloneArray(array)
{
    var result = [];
    array.forEach(v => result.push(v));
    return result;
}

showPermutation("",[1,2,3,4]);