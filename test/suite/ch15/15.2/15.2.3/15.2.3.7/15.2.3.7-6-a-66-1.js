// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-66-1
description: >
    Object.defineProperties throws TypeError when P.configurable is
    false, P.enumerable and desc.enumerable has different values
    (8.12.9 step 7.b)
includes:
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {

        var obj = {};

        Object.defineProperty(obj, "foo", {
            value: 10, 
            enumerable: false, 
            configurable: false 
        });

        try {
            Object.defineProperties(obj, {
                foo: {
                    enumerable: true
                }
            });
            return false;
        } catch (e) {
            return (e instanceof TypeError) && dataPropertyAttributesAreCorrect(obj, "foo", 10, false, false, false);
        }
    }
runTestCase(testcase);
