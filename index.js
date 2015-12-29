'use strict';

function TrimpException (message) {
    console.error("Exception: " + message);
    this.message = message;
}

function Trimp (config) {
    if (!(config.sex && config.rest && config.max)) {
        throw new TrimpException("Initialize Trimp with config. Example: require('trimp')({sex: 'male', rest: 50, max: 190})");
    }

    var sex = config.sex.toLowerCase()
    if (!(sex === 'male' || sex === 'm' || sex === 'female' || sex === 'f')) {
        throw new TrimpException('sex can be only male, female, m or f');
    }

    if (config.rest != parseInt(config.rest, 10) || (parseInt(config.rest, 10) < 1)) {
        throw new TrimpException('resting heartbeat (rest) must be a positive integer.');
    }

    if (config.max != parseInt(config.max, 10) || (parseInt(config.max, 10) < 1)) {
        throw new TrimpException('maximum heartbeat (max) must be a positive integer.');
    }

    config.rest = parseInt(config.rest, 10);
    config.max  = parseInt(config.max, 10);

    if (config.rest > config.max) {
        throw new TrimpException('resting heart rate can not be more than maximum heart rate.');
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
