# TypeScript_Learning
Learning TypeScript language


Repository: https://github.com/NAVJuanan/TypeScript_Learning


Documentation:
	https://www.typescriptlang.org/docs
	https://www.tutorialsteacher.com/typescript
	https://devdocs.io/typescript/
	https://angular.io/docs


Programs:


 - 01. Basics

	- Setup -> 
		- Install TypeScript: npm install -g typescript
		- Check TypeScript version: tsc --version
		https://www.tutorialsteacher.com/typescript/typescript-environment-setup

		- Install Angular: npm install -g @angular/cli
		- Check Angular version: ng --version
		- Create new Angular app: ng new myapp
		- Build & serve Angular app: ng serve
		https://angular.io/cli

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

	- function -> declares a function
		https://devdocs.io/typescript/handbook/functions
		https://www.tutorialsteacher.com/typescript/typescript-function

	- typeof() -> shows the data type of a value or variable (boolean, number, string, object, function) 
		https://devdocs.io/javascript/operators/typeof

	- console.log() -> shows a message in the console
		https://devdocs.io/dom/console/log
		https://www.w3schools.com/jsref/met_console_log.asp

	- console.info() -> shows a message in the console (with an info icon)
		https://devdocs.io/dom/console/info
		https://www.w3schools.com/jsref/met_console_info.asp

	- console.warn() -> shows a warning in the console (with a warning icon)
		https://devdocs.io/dom/console/warn
		https://www.w3schools.com/jsref/met_console_warn.asp

	- console.error() -> shows an error in the console (with an error icon)
		https://devdocs.io/dom/console/error
		https://www.w3schools.com/jsref/met_console_error.asp

	- window.alert() -> shows a popup message  
		https://devdocs.io/dom/window/alert
		https://www.w3schools.com/jsref/met_win_alert.asp

	- window.prompt() -> shows a dialog window with a message and receives an input text  
		https://devdocs.io/dom/window/prompt
		https://www.w3schools.com/jsref/met_win_prompt.asp

	- window.confirm() -> shows a confirmation box and receives a boolean result
		https://devdocs.io/dom/window/confirm
		https://www.w3schools.com/jsref/met_win_confirm.asp

	- Comments -> /* */ or //



 - 02. Operators

	- Addition:       a + b
	- Subtraction:    a - b
	- Multiplication: a * b
	- Division:       a / b
	- Remainder:      a % b
	- Exponential:    a ** b

	- Increment: ++
	- Decrement: --

	- Relational: >, >=, <, <=

	- === -> strict equility operator (type + value)
	- == -> lose equility operator (value)
	- !== -> strict distinct operator (type + value)
	- != -> lose distinct operator (value)
	
	https://www.w3schools.com/js/js_operators.asp
	https://www.w3schools.com/jsref/jsref_operators.asp
	https://www.w3schools.com/js/js_comparisons.asp



 - 03. Loops

	- Ternary operator -> var voteable = (age < 18) ? "Too young":"Old enough";
		https://www.tutorialsteacher.com/typescript/typescript-if-else

	- if...else
		https://www.tutorialsteacher.com/typescript/typescript-if-else

	- while
		https://www.tutorialsteacher.com/typescript/while-loop

	- do...while
		https://www.tutorialsteacher.com/typescript/while-loop

	- switch
		https://www.tutorialsteacher.com/typescript/typescript-switch

	- for	
		https://www.tutorialsteacher.com/typescript/for-loop