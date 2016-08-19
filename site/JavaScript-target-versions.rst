BuckleScript targets **ES5**.

Below is a list of polyfills from ES6 needed:

**Math.imul**

This polyfill is needed for ``int32`` multiplication. The polyfill is
actually implemented in the generated code.

    No action is required by the user.

**TypedArray**

The following functions require the TypedArray polyfill: \*
Int64.float\_of\_bits \* Int64.bits\_of\_float \* Int32.float\_of\_bits
\* Int32.bits\_of\_float

    The TypedArray polyfill is not provided by BuckleScript and it's the
    responsibility of the user to bundle the desired polyfill
    implementation with the BuckleScript generated code.

    For the current BuckleScript version, if the user does not bundle
    the TypedArray polyfill and the JavaScript engine does not support
    it, the code will fail at runtime.
