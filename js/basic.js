//| Класс        | Attack | Defense | Magic |
//| 🛡️ Warrior  | 25–35  | 30–40   | 5–10  |
//| 🏹 Archer    | 30–40  | 15–25   | 10–20 |
//| 🗡️ Assassin | 35–45  | 10–20   | 5–15  |
//| 🔮 Mage      | 10–20  | 10–20   | 35–50 |

// Остальное:

// 💰 Gold — всегда 100
// ⚔️ Weapon Damage — 15–35
// ⚒️ Weapon Durability — 70–100
// 🛡️ Armor Defense — 10–30
// 🛡️ Armor Durability — 70–100
// 🐾 Pet Attack — 5–20

// Редкость
// Common
// Uncommon
// Rare
// Epic
// Legendary
// Mythical
// Бафф питомца

// Тоже массив:
// +10 Attack
// +10 Defense
// +15 Magic
// +20 Health
// +5 Speed
// Critical Chance +10%


class Character {
    constructor(name, characterClass, attack, defense, magic, gold, weapon, armor, pet) {
        this.name = name;
        this.characterClass = characterClass;
        this.attack = attack;
        this.defense = defense;
        this.magic = magic;
        this.gold = gold;

        this.weapon = weapon;
        this.armor = armor;
        this.pet = pet;
    }
}

class Weapon {
    constructor(type, damage, durability, enchantment, rarity) {
        this.type = type;
        this.damage = damage;
        this.durability = durability;
        this.enchantment = enchantment;
        this.rarity = rarity;
    }
}

class Armor {
    constructor(type, material, defense, durability, enchantment, rarity) {
        this.type = type;
        this.material = material;
        this.defense = defense;
        this.durability = durability;
        this.enchantment = enchantment;
        this.rarity = rarity;
    }
}

class Pet {
    constructor(name, species, buff, rarity, attack) {
        this.name = name;
        this.species = species;
        this.buff = buff;
        this.rarity = rarity;
        this.attack = attack;
    }
}