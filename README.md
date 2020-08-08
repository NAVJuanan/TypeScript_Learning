# TypeScript_Learning
Learning TypeScript language


Repository: https://github.com/NAVJuanan/TypeScript_Learning


Documentation:
	https://www.typescriptlang.org/docs
	https://www.tutorialsteacher.com/typescript
	https://devdocs.io/typescript/


Programs:


 - 01. Basics

	- Setup -> 
		- Install TypeScript: npm install -g typescript
		- Check TypeScript version: tsc --version
		https://www.tutorialsteacher.com/typescript/typescript-environment-setup

	- <script> tag in an html file for JavaScript code or file availability
		<script type="text/javascript" src="index.js"></script>
		https://www.tutorialsteacher.com/javascript/script-tag

	- tsc <ts file>.ts -> command to compile a .ts file into a .js file
		https://www.tutorialsteacher.com/typescript/typescript-overview

	- tsc <ts file>.ts --watch -> command to compile automatically after saving a .ts file

	- tsc -init -> command to create a tsconfig.json file in order to manage compiler

	- let -> declares a variable (recommended)
		https://devdocs.io/typescript/handbook/variable-declarations#let-declarations
		https://www.tutorialsteacher.com/typescript/typescript-variable

	- var -> declares a variable  
		https://devdocs.io/typescript/handbook/variable-declarations#var-declarations
		https://www.tutorialsteacher.com/typescript/typescript-variable

	- const -> declares a constant (recommended) 
		https://devdocs.io/typescript/handbook/variable-declarations#const-declarations
		https://www.tutorialsteacher.com/typescript/typescript-variable

	- boolean -> primitive data type for true/false
		https://devdocs.io/typescript/handbook/basic-types#boolean
		https://www.tutorialsteacher.com/typescript/typescript-boolean
		https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean

	- number -> primitive data type for numbers (integer, decimal, exponential, hexadecimal, octal, binary)
		https://devdocs.io/typescript/handbook/basic-types#number
		https://www.tutorialsteacher.com/typescript/typescript-number
		https://www.typescriptlang.org/docs/handbook/basic-types.html#number

	- string -> primitive data type for text
		https://devdocs.io/typescript/handbook/basic-types#string
		https://www.tutorialsteacher.com/typescript/typescript-string
		https://www.typescriptlang.org/docs/handbook/basic-types.html#string

	- string interpolation -> console.log(`The value of the variable "message" of type ${typeof message} is: ${message}`);

	- typeof() -> shows the data type of a value or variable (boolean, number, string, object, undefined, function) 
		https://devdocs.io/javascript/operators/typeof

	- Comments -> /* */ or //