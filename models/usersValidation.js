module.exports = {
    fieldsNotEmpty: function(object) {
        var errors = [];
        var x = 1;
        if (typeof object["id"] != "number") {
            errors.push(arguments[x]);
        };
        x++;
        if (typeof object["persoon_naam"] != "string" || object["persoon_naam"] == "") {
            errors.push(arguments[x])
        };
        x++;
        if (typeof object["job_omschrijving"] != "string" || object["job_omschrijving"] =="") {
            errors.push(arguments[x]);
        };
        return errors.length === 0 ? null : errors;
    }
};