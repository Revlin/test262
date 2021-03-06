// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-82-22
description: >
    Object.defineProperty - Update [[Configurable]] attribute of
    'name' property to false successfully when [[Enumerable]] and
    [[Configurable]] attributes of 'name' property are true,  the
    'desc' is a generic descriptor which contains [[Enumerable]]
    attribute as true and [[Configurable]] attribute is false, 'name'
    property is an index accessor property (8.12.9 step 8)
includes:
    - runTestCase.js
    - accessorPropertyAttributesAreCorrect.js
---*/

function testcase() {

        var obj = {};
        obj.verifySetFunction = "data";
        var get_func = function () {
            return obj.verifySetFunction;
        };
        var set_func = function (value) {
            obj.verifySetFunction = value;
        };
        Object.defineProperty(obj, "0", {
            get: get_func,
            set: set_func,
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(obj, "0", {
            enumerable: true,
            configurable: false
        });

        return accessorPropertyAttributesAreCorrect(obj, "0", get_func, set_func, "verifySetFunction", true, false);
    }
runTestCase(testcase);
