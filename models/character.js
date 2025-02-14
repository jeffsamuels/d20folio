const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CharacterSchema = new Schema({
name: String,
imageURL: String,
race:{
    type: String,
    enum: ['Elf', 'Dwarf', 'Human']
},
class: {
    type: String,
    enum: ['Warrior', 'Mystic', 'Rogue']
},
level: {
    type: String,
    default: 1
},

STR: Number,
DEX: Number,
CON: Number,
INT: Number,
WIS: Number,
CHA: Number,
  
equipment: [
    {
        type: Schema.Types.ObjectId,
        ref: "Equipment"
    }
]

});


var Character = mongoose.model("Character", CharacterSchema);

// Export the User model
module.exports = Character;