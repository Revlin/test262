// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-231
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    property, the [[Get]] field of 'desc' and the [[Get]] attribute
    value of 'name' are two objects which refer to the different
    objects (15.4.5.1 step 4.c)
includes:
    - runTestCase.js
    - accessorPropertyAttributesAreCorrect.js
---*/

function testcase() {
        var arrObj = [];
        arrObj.helpVerifySet = 10;

        function getFunc1() {
            return 20;
        }
        function getFunc2() {
            return arrObj.helpVerifySet;
        }
        function setFunc(value) {
            arrObj.helpVerifySet = value;
        }

        Object.defineProperty(arrObj, "0", {
            get: getFunc1,
            set: setFunc,
            configurable: true
        });
        
        Object.defineProperty(arrObj, "0", {
            get: getFunc2
        });

        return accessorPropertyAttributesAreCorrect(arrObj, "0", getFunc2, setFunc, "helpVerifySet", false, true);
    }
runTestCase(testcase);
