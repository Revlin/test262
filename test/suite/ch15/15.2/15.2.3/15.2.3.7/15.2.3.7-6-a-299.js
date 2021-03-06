// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-299
description: >
    Object.defineProperties - 'O' is an Arguments object, 'P' is an
    array index named accessor property of 'O' but not defined in
    [[ParameterMap]] of 'O', test TypeError is thrown when updating
    the [[Set]] attribute value of 'P' which is not configurable (10.6
    [[DefineOwnProperty]] step 4)
includes:
    - runTestCase.js
    - accessorPropertyAttributesAreCorrect.js
---*/

function testcase() {

        var arg;

        (function fun() {
            arg = arguments;
        }());

        function get_func() {
            return 0;
        }

        Object.defineProperty(arg, "0", {
            get: get_func,
            set: undefined,
            enumerable: false,
            configurable: false
        });

        function set_func(value) {
            arg.setVerifyHelpProp = value;
        }
        try {
            Object.defineProperties(arg, {
                "0": {
                    set: set_func
                }
            });
            return false;
        } catch (e) {
            return (e instanceof TypeError) && accessorPropertyAttributesAreCorrect(arg, "0", get_func, undefined, undefined, false, false);
        }
    }
runTestCase(testcase);
