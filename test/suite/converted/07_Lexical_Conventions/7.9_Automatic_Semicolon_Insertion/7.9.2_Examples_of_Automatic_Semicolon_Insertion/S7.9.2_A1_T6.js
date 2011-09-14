// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check examples for automatic semicolon insertion from the Standart
 *
 * @section 7.9.2
 * @path 07_Lexical_Conventions/7.9_Automatic_Semicolon_Insertion/7.9.2_Examples_of_Automatic_Semicolon_Insertion/S7.9.2_A1_T6.js
 * @description if(a>b) \n else c=d is not a valid sentence in the ECMAScript grammar
 * @negative
 */

//CHECK#1
var a=1,b=2,c=3,d;
if(a>b)
else c=d
