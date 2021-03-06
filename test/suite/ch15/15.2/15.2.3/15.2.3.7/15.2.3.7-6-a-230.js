// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-230
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    property, TypeError is thrown if  'P' is data property, and'desc'
    is accessor descriptor, and the [[Configurable]] attribute value
    of 'P' is false  (15.4.5.1 step 4.c)
includes:
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {

        var arr = [];

        Object.defineProperty(arr, "1", {
            value: 3,
            configurable: false
        });

        try {
            Object.defineProperties(arr, {
                "1": {
                    set: function () { }
                }
            });
            return false;
        } catch (ex) {
            return (ex instanceof TypeError) && dataPropertyAttributesAreCorrect(arr, "1", 3, false, false, false);
        }
    }
runTestCase(testcase);
