'use strict';

function TrimpException (message) {
    this.message = message;
}

function Trimp (config) {
    if (!(config.sex && config.rest && config.max)) {
        throw new TrimpException("Initialize Trimp with correct config");
    }

    var sex = config.sex.toLowerCase()
    if (!(sex === 'male' || sex === 'm' || sex === 'female' || sex === 'f')) {
        throw new TrimpException('sex can be only male, female, m or f');
    }

    if (config.rest != parseInt(config.rest, 10)) {
        throw new TrimpException('rest (resting heartbeat must be an integer');
    }

    if (config.max != parseInt(config.max, 10)) {
        throw new TrimpException('rest (maximum heartbeat must be an integer');
    }

    var atheleteFactor = sex === 'male' || sex === 'm' ? 1.92 : 1.67;
    var heartbeat = {
        rest: config.rest,
        max: config.max
    }

    function calculate () {
    }

    return {
        calculate: calculate
    };
}

module.exports = Trimp;
