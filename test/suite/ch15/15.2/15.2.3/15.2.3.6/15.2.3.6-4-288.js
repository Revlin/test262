// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-288
description: >
    Object.defineProperty - 'O' is an Array, 'name' is generic own
    accessor property of 'O', test TypeError is thrown when updating
    the [[Configurable]] attribute value of 'name' which is defined as
    non-configurable (15.4.5.1 step 5)
includes:
    - runTestCase.js
    - accessorPropertyAttributesAreCorrect.js
---*/

function testcase() {

        var arrObj = [];

        function setFunc(value) {
            arrObj.setVerifyHelpProp = value;
        }
        Object.defineProperty(arrObj, "property", {
            set: setFunc,
            configurable: false
        });
        try {
            Object.defineProperty(arrObj, "property", {
                configurable: true
            });
            return false;
        } catch (e) {
            return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arrObj, "property", undefined, setFunc, "setVerifyHelpProp", false, false);
        }
    }
runTestCase(testcase);
