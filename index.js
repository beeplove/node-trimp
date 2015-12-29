'use strict';

function TrimpException (message) {
    this.message = message;
}

function Trimp (config) {
    function calculate () {
    }

    return {
        calculate: calculate
    };
}

module.exports = Trimp;
