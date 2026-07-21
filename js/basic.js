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

function generateCharacterStats(characterClass) {
    let attack, defense, magic;
    switch (characterClass) {
        case 'Warrior':
            attack = Math.floor(Math.random() * 11) + 25; // 25-35
            defense = Math.floor(Math.random() * 11) + 30; // 30-40
            magic = Math.floor(Math.random() * 6) + 5; // 5-10
            break;
        case 'Archer':
            attack = Math.floor(Math.random() * 11) + 30; // 30-40
            defense = Math.floor(Math.random() * 11) + 15; // 15-25
            magic = Math.floor(Math.random() * 11) + 10; // 10-20
            break;
        case 'Assassin':
            attack = Math.floor(Math.random() * 11) + 35; // 35-45
            defense = Math.floor(Math.random() * 11) + 10; // 10-20
            magic = Math.floor(Math.random() * 11) + 5; // 5-15
            break;
        case 'Mage':
            attack = Math.floor(Math.random() * 11) + 10; // 10-20
            defense = Math.floor(Math.random() * 11) + 10; // 10-20
            magic = Math.floor(Math.random() * 16) + 35; // 35-50
            break;
            default:
        case 'Default':
            attack = 0;
            defense = 0;
            magic = 0;
            break;
    }
    return { attack, defense, magic, gold: 100 };
}

function generateWeaponStats() {
    const damage = Math.floor(Math.random() * 21) + 15; // 15-35
    const durability = Math.floor(Math.random() * 31) + 70; // 70-100
    const rarities = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythical'];
    const rarity = rarities[Math.floor(Math.random() * rarities.length)]; 
    return { damage, durability, rarity };  
}

function generateArmorStats() {
    const defense = Math.floor(Math.random() * 21) + 10; // 10-30
    const durability = Math.floor(Math.random() * 31) + 70; // 70-100   
    const rarities = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythical'];
    const rarity = rarities[Math.floor(Math.random() * rarities.length)]; 
    return { defense, durability, rarity };  
}   

function generatePetStats() {
    const attack = Math.floor(Math.random() * 16) + 5; // 5-20 
    const rarities = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythical'];
    const rarity = rarities[Math.floor(Math.random() * rarities.length)]; 
    const buffs = ['+10 Attack', '+10 Defense', '+15 Magic', '+20 Health', '+5 Speed', 'Critical Chance +10%'];
    const buff = buffs[Math.floor(Math.random() * buffs.length)];
    return { attack, rarity, buff };      
}

const characterStats = generateCharacterStats(characterClass);
const weaponStats = generateWeaponStats();
const armorStats = generateArmorStats();
const petStats = generatePetStats();

const weapon = new Weapon(
    weaponType,
    weaponStats.damage,
    weaponStats.durability,
    weaponEnchantment,
    weaponStats.rarity
);

const armor = new Armor(
    armorType,
    armorMaterial,
    armorStats.defense,
    armorStats.durability,
    armorEnchantment,
    armorStats.rarity
);

const pet = new Pet(
    petName,
    petSpecies,
    petStats.buff,
    petStats.rarity,
    petStats.attack
);

const character = new Character(
    name,
    characterClass,
    characterStats.attack,
    characterStats.defense,
    characterStats.magic,
    characterStats.gold,
    weapon,
    armor,
    pet
);