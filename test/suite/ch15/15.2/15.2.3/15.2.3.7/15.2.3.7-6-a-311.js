// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-311
description: >
    Object.defineProperties - 'O' is an Arguments object, 'P' is
    generic own accessor property of 'O', test TypeError is thrown
    when updating the [[Set]] attribute value of 'P' which is not
    configurable (10.6 [[DefineOwnProperty]] step 4)
includes:
    - runTestCase.js
    - accessorPropertyAttributesAreCorrect.js
---*/

function testcase() {
        var arg = (function () {
            return arguments;
        }(1, 2, 3));

        function setFun(value) {
            arg.genericPropertyString = value;
        }
        Object.defineProperty(arg, "genericProperty", {
            set: setFun,
            configurable: false
        });

        try {
            Object.defineProperties(arg, {
                "genericProperty": {
                    set: function (value) {
                        arg.genericPropertyString1 = value;
                    }
                }
            });

            return false;
        } catch (ex) {
            return ex instanceof TypeError &&
                accessorPropertyAttributesAreCorrect(arg, "genericProperty", undefined, setFun, "genericPropertyString", false, false, false);
        }
    }
runTestCase(testcase);
