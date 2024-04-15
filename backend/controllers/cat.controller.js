const cats = [];

exports.create = (req,res) => {
    cats.push("Meow");
    res.send("added");
};

exports.read = (req, res) => {
    res.send(cats);
};