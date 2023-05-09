1.What is TypeScript, and how is it different from JavaScript?
Ans:It's a programming language that's like JavaScript, but with some cool added features to make your coding life easier. TypeScript is what we call "strongly typed", which just means that it helps you avoid errors and catch bugs before they happen.

javascript is a scripting language which helps to create interactive web pages.Type script is supoerset of javascript.


2.Can you explain the difference between "interface" and "type" in TypeScript?
Ans: One major difference between type aliases vs interfaces are that interfaces are open and type aliases are closed. This means you can extend an interface by declaring it a second time.In the other case a type cannot be changed outside of its declaration.


3.Can you give an example of how to use generics in TypeScript?
Ans:To use generics, Use angular brackets and specify a type variable inside them. Developers usually use T, X, and Y, but anything can be use. After that, can assign the same variable name as the type to the parameter of the function.
Example:function printData<T>(data: T) {
    console.log("data: ", data);
}

printData(2);
printData("hello");
printData(true);



4.What is the difference between an "unknown" and "any" type in TypeScript?
Ans:The key difference of "unknown" and "any" is typeScript compiler will not check or enforce any type constraints on the variable or its use & on ther hand When a variable is assigned the unknown type, the TypeScript compiler will not allow the variable to be used or assigned until its type has been narrowed or checked by the developer. This provides additional safety and security to the code, as the developer must ensure that the type of the unknown value is compatible with the intended use before using it.


5.What is the "as" keyword used for in TypeScript?
Ans:Basically, it's a way to set the data type for a variable ourselves instead of letting the compiler do it for us. With type assertion, we can tell the compiler that we want to treat any as a number, string, or whatever we want.