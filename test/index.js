class idr
{
helloworld(str) {
str=str.split(' ')
console.log(str[0])
if (str[0] == "Hello")
{
console.log('Test Passed')
}
else
{
    throw new Error('Test failed.');
}
}
}
const idr1 = new idr()
export default idr1 
