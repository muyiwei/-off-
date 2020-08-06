/*
输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323

*/ 

function getMaxNum(array)
{
    return array.sort(function(a,b)
    {
        var tempA = a + "";
        var tempB = b + "";
        var lengthRang = tempA.length - tempB.length;
        if(lengthRang > 0 )
        {
            while(lengthRang--)
            {
                tempB += tempB[0] 
            }
        }
        else
        {
            lengthRang = -lengthRang;
            while(lengthRang--)
            {
                tempA += tempA[0] 
            }
        }
        console.log(tempA>tempB)
        if(tempA > tempB){
            return 1;
        }
        else
        {
            return -1;
        }
       
       

    }).join("");
}
console.log(getMaxNum([30, 32, 321,4]))