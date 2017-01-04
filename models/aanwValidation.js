module.exports = {
    fieldsNotEmpty: function(object) {
        var errors = [];
        var x = 1;
        if (typeof object["id"] != "number") {
            errors.push(arguments[x]);
        };
        x++;
        if (typeof object["naam_drone"] != "string" || object["naam_drone"] == "") {
            errors.push(arguments[x])
        };
        x++;
        if (typeof object["aantal"] != "number" || object["aantal"] <= 0) {
            errors.push(arguments[x]);
        };
        x++;
        if (typeof object["naam_locatie"] != "string" || object["naam_locatie"] == "") {
            errors.push(arguments[x]);
        };
        x++;
        if (typeof object["uur"] != "string" || object["uur"] == "") {
            errors.push(arguments[x]);
        };
        return errors.length === 0 ? null : errors;
    }
};