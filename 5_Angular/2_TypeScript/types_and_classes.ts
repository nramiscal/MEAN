var myNum:number = 5;
var myString:string = "Hello Universe";
var myArr: Array<number> = [1,2,3,4];
const myObj = { name:'Bill'};
var anythingVariable:string = "Hey";
anythingVariable = "25";
var arrayOne:Array<boolean> = [true, false, true, true];
var arrayTwo: Array<any> = [1, 'abc', true, 2];
const myObj2 = { x: 5, y: 10 };
// object constructor
class MyNode {
    val: number;
    constructor(value: number) {
        this.val = value;

    }
    doSomething() {
        this.val = 10;
    };
}
let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction():void {
    console.log("Hello World");
    return;
}
function sendingErrors():never {
	throw new Error('Error message');
}
