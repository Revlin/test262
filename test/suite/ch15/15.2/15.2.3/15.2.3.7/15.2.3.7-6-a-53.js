// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-53
description: >
    Object.defineProperties - both desc.value and P.value are Ojbects
    which refer to the same Object (8.12.9 step 6)
includes:
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {

        var obj = {};

        var obj1 = { length: 10 };
        var desc = { value: obj1 };
        Object.defineProperty(obj, "foo", desc);

        Object.defineProperties(obj, {
            foo: {
                value: obj1
            }
        });
        return dataPropertyAttributesAreCorrect(obj, "foo", obj1, false, false, false);
    }
runTestCase(testcase);
