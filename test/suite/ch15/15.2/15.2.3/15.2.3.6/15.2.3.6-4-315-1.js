// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-315-1
description: >
    Object.defineProperty - 'O' is an Arguments object of a function
    that has formal parameters, 'P' is own accessor property of 'O',
    and 'desc' is accessor descriptor, test updating multiple
    attribute values of 'P' (10.6 [[DefineOwnProperty]] step 3)
includes:
    - runTestCase.js
    - accessorPropertyAttributesAreCorrect.js
---*/

function testcase() {
        return (function (a, b, c) {
            Object.defineProperty(arguments, "genericProperty", {
                get: function () {
                    return 1001;
                },
                set: function (value) {
                    this.testgetFunction1 = value;
                },
                enumerable: true,
                configurable: true
            });
            function getFunc() {
                return "getFunctionString";
            }
            function setFunc(value) {
                this.testgetFunction = value;
            }
            Object.defineProperty(arguments, "genericProperty", {
                get: getFunc,
                set: setFunc,
                enumerable: false,
                configurable: false
            });
            var verifyFormal = c === 3;
            return accessorPropertyAttributesAreCorrect(arguments, "genericProperty", getFunc, setFunc, "testgetFunction", false, false) && verifyFormal;
        }(1, 2, 3));
    }
runTestCase(testcase);
