function Journal() {
    this.entries = [];

    this.addEntry = function newEntry(title, content, author, tags) {
        this.entries.push(new Entry(title, content, author, tags));
    }

    this.searchTags = function searchTags(tag) {
        var arrTags = [];
        for (var i = 0; i < this.entries.length; i++) { //goes thru each entry
            for (var k = 0; k < this.entries[i].tags.length; k++) { //goes thru current entry's tags
                if (tag == this.entries[i].tags[k]) {
                    arr.push(this.entries[i]);
                }
            }
        }
        return arrTags;
    }

    this.searchString = function seachString(string) {
        var arrString = [];
        var isStringPresent = false;
        for (var i = 0; i < this.entries.length; i++) { //flips thru each i in the array
            isStringPresent = false
            if (this.entries[i].title == string) {
                isStringPresent = true;
            } else if (this.entries[i].content == string) {
                isStringPresent = true;
            } else if (this.entries[i].author == string) {
                isStringPresent = true;
            } else if (this.entries[i].tag == string) {
                isStringPresent = true;
            } //looks for spcified string

            if (isStringPresent) {
                arrString.push(this.entries[i]);
            }

        }
        return arrString;

    }
}

function Entry(title, content, author, tags) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.tags = tags;
}

var newJournal = new Journal();


newJournal.addEntry("cow", "cat", "moo", ["hi", "lo"]);
newJournal.addEntry("wow", "pig", "pork", ["hi", "lo"]);
newJournal.addEntry("cow", "asd", "three", ["hi", "l"]);

var y = newJournal.searchString("cow");
console.log(y);
