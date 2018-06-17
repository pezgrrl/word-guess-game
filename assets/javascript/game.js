var wordLists = {
    "characters" : ["Harry", "Ron", "Hermione", "Neville", "Malfoy", "Voldemort", "Dumbledore", "Snape", "Hagrid", "Cedric", "Cho", "Hedwig", "Sirius", "Tonks", "Lupin"],
    "magical things" : ["Wand", "Quidditch", "Portkey", "Horcrux", "Gillyweed", "Polyjuice", "Dragon", "Butterbeer", "Pensieve", "Centaur", "Unicorn", "Potion", "Cauldron", "Galleon", "Mermaid"],
    "houses" : ["Gryffindor", "Hufflepuff", "Slytherin", "Ravenclaw", "Lion", "Badger", "Snake", "Eagle", "Brave", "Loyal", "Cunning", "Wise", "Tower", "Basement", "Dungeon",],

};

var hangman = {
    bodyParts = 0,
    addBodyPart: function() {
        this.bodyParts++
    },
    isComplete: function() {
        return this.bodyParts >=7;
    }
};

var WordGuess = {
    

    initialize: function()
}

 