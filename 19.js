/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
 *
 */


var length = 5;
var a = [];
var sum = 0;
for(var i = 0; i < length; i++)
{
    a[i] = [];
    for(var j = 0; j < length; j++)
    {
        a[i][j] = sum;
        sum++;
    }
}
console.log(a);
var xEnd = length % 2 == 0 ? length / 2 - 1 : length / 2;
var x = 0,
  y = length;
while (x <= xEnd) {
  for (var i = x; i < y; i++) {
    console.log(a[x][i]);
  }
  for (var i = x + 1; i < y; i++)
  {
      console.log(a[i][y-1]);
  }
  for (var i = y - 2; i >= x; i--)
  {
      console.log(a[y-1][i]);
  }
  for(var i = y - 2; i >= x + 1; i--){
      console.log(a[i][x]);
  }
  x++;
  y--;
}
