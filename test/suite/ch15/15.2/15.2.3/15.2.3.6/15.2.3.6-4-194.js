// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-194
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, 'name' is own accessor property, test TypeError is
    thrown on updating the configurable attribute from false to true
    (15.4.5.1 step 4.c)
includes:
    - runTestCase.js
    - accessorPropertyAttributesAreCorrect.js
---*/

function testcase() {
        var arrObj = [];
        var getFunc = function () {
            return 11;
        };

        Object.defineProperty(arrObj, "0", {
            get: getFunc,
            configurable: false
        });

        try {
            Object.defineProperty(arrObj, "0", {
                configurable: true
            });
            return false;
        } catch (e) {
            return e instanceof TypeError &&
                accessorPropertyAttributesAreCorrect(arrObj, "0", getFunc, undefined, undefined, false, false);
        }
    }
runTestCase(testcase);
