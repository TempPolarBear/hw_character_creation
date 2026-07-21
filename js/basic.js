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

const rarities = ["Common","Uncommon","Rare","Epic","Legendary","Mythical"];
const buffs = ["+10 Attack","+10 Defense","+15 Magic","+20 Health","+5 Speed","Critical Chance +10%"];


class Character {
    #name;
    #characterClass;
    #attack;
    #defense;
    #magic;
    #gold;
    #weapon;
    #armor;
    #pet;

    constructor(name, characterClass, attack, defense, magic, gold, weapon, armor, pet) {
        this.#name = name;
        this.#characterClass = characterClass;
        this.#attack = attack;
        this.#defense = defense;
        this.#magic = magic;
        this.#gold = gold;
        this.#weapon = weapon;
        this.#armor = armor;
        this.#pet = pet;
    }

    get name() {
        return this.#name;
    }

    get characterClass() {
        return this.#characterClass;
    }

    get attack() {
        return this.#attack;
    }

    get defense() {
        return this.#defense;
    }

    get magic() {
        return this.#magic;
    }

    get gold() {
        return this.#gold;
    }

    get weapon() {
        return this.#weapon;
    }

    get armor() {
        return this.#armor;
    }

    get pet() {
        return this.#pet;
    }

}

class Weapon {
    #type;
    #damage;
    #durability;
    #enchantment;
    #rarity;

    constructor(type, damage, durability, enchantment, rarity) {
        this.#type = type;
        this.#damage = damage;
        this.#durability = durability;
        this.#enchantment = enchantment;
        this.#rarity = rarity;
    }

    get type() {
        return this.#type;
    }

    get damage() {
        return this.#damage;
    }

    get durability() {
        return this.#durability;
    }

    get enchantment() {
        return this.#enchantment;
    }

    get rarity() {
        return this.#rarity;
    }
}

class Armor {
    #type;
    #material;
    #defense;
    #durability;
    #enchantment;
    #rarity;

    constructor(type, material, defense, durability, enchantment, rarity) {
        this.#type = type;
        this.#material = material;
        this.#defense = defense;
        this.#durability = durability;
        this.#enchantment = enchantment;
        this.#rarity = rarity;
    }

    get type() {
        return this.#type;
    }

    get material() {
        return this.#material;
    }

    get defense() {
        return this.#defense;
    }

    get durability() {
        return this.#durability;
    }

    get enchantment() {
        return this.#enchantment;
    }

    get rarity() {
        return this.#rarity;
    }
}

class Pet {
    #name;
    #species;
    #buff;
    #rarity;
    #attack;

    constructor(name, species, buff, rarity, attack) {
        this.#name = name;
        this.#species = species;
        this.#buff = buff;
        this.#rarity = rarity;
        this.#attack = attack;
    }

    get name() {
        return this.#name;
    }

    get species() {
        return this.#species;
    }

    get buff() {
        return this.#buff;
    }

    get rarity() {
        return this.#rarity;
    }

    get attack() {
        return this.#attack;
    }
}

class CharacterHelper {
    static isLegendary(character) {
        return character.weapon.rarity === "Legendary" ||
               character.weapon.rarity === "Mythical";
    }
}

function getRarityBadge(rarity) {
    switch (rarity) {
        case "Common":
            return `<span class="badge bg-secondary">⚪ Common</span>`;

        case "Uncommon":
            return `<span class="badge bg-success">🟢 Uncommon</span>`;

        case "Rare":
            return `<span class="badge bg-primary">🔵 Rare</span>`;

        case "Epic":
            return `<span class="badge bg-dark">🟣 Epic</span>`;

        case "Legendary":
            return `<span class="badge bg-warning text-dark">⭐ Legendary</span>`;

        case "Mythical":
            return `<span class="badge bg-danger">🔥 Mythical</span>`;

        default:
            return rarity;
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
    const rarity = rarities[Math.floor(Math.random() * rarities.length)]; 
    return { damage, durability, rarity };  
}

function generateArmorStats() {
    const defense = Math.floor(Math.random() * 21) + 10; // 10-30
    const durability = Math.floor(Math.random() * 31) + 70; // 70-100   
    const rarity = rarities[Math.floor(Math.random() * rarities.length)]; 
    return { defense, durability, rarity };  
}   

function generatePetStats() {
    const attack = Math.floor(Math.random() * 16) + 5;
    const rarity = rarities[Math.floor(Math.random() * rarities.length)];
    const buff = buffs[Math.floor(Math.random() * buffs.length)];

    return { attack, rarity, buff };
}
    const createCharacterBtn = document.querySelector("#createCharacter");

    const characters = [];

    const characterList = document.querySelector("#characterList");
    const characterClassSelect = document.querySelector("#characterClass");

    characterClassSelect.addEventListener("change", function () {
        const characterStats = generateCharacterStats(characterClassSelect.value);
        document.querySelector("#characterAttack").value = characterStats.attack;
        document.querySelector("#characterDefense").value = characterStats.defense;
        document.querySelector("#characterMagic").value = characterStats.magic;
        document.querySelector("#characterGold").value = characterStats.gold;
    });

createCharacterBtn.addEventListener("click", function () {

    // Character
    const name = document.querySelector("#characterName").value;
    const characterClass = document.querySelector("#characterClass").value;

    // Weapon
    const weaponType = document.querySelector("#weaponType").value;
    const weaponEnchantment = document.querySelector("#weaponEnchantment").value;

    // Armor
    const armorType = document.querySelector("#armorType").value;
    const armorMaterial = document.querySelector("#armorMaterial").value;
    const armorEnchantment = document.querySelector("#armorEnchantment").value;

    // Pet
    const petName = document.querySelector("#petName").value;
    const petSpecies = document.querySelector("#petSpecies").value;

    // Random stats
    const characterStats = {
        attack: Number(document.querySelector("#characterAttack").value),
        defense: Number(document.querySelector("#characterDefense").value),
        magic: Number(document.querySelector("#characterMagic").value),
        gold: Number(document.querySelector("#characterGold").value)
    };
    const weaponStats = generateWeaponStats();
    document.querySelector("#weaponDamage").value = weaponStats.damage;
    document.querySelector("#weaponDurability").value = weaponStats.durability;
    document.querySelector("#weaponRarity").value = weaponStats.rarity;

    const armorStats = generateArmorStats();
    document.querySelector("#armorDefense").value = armorStats.defense;
    document.querySelector("#armorDurability").value = armorStats.durability;
    document.querySelector("#armorRarity").value = armorStats.rarity;

    const petStats = generatePetStats();
    document.querySelector("#petAttack").value = petStats.attack;
    document.querySelector("#petBuff").value = petStats.buff;
    document.querySelector("#petRarity").value = petStats.rarity;

    // Create objects
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

    characters.push(character);
    document.querySelector("#characterModalBody").innerHTML = `
            <h1 class="text-center mb-3">
                ⚔️ ${character.name} ${CharacterHelper.isLegendary(character) ? "⭐" : ""} ⚔️
            </h1>

            <h5 class="text-center text-muted mb-4">
                ${character.characterClass}
            </h5>

            <h4 class="text-center mb-3">
                📊 Character Statistics
            </h4>

        <div class="card border-dark mb-3">
            <div class="card-header fw-bold">
                📊 Statistics
            </div>

            <div class="card-body">
                <p>⚔️ Attack: ${character.attack}</p>
                <p>🛡️ Defense: ${character.defense}</p>
                <p>✨ Magic: ${character.magic}</p>
                <p>💰 Gold: ${character.gold}</p>
            </div>
        </div>

        <div class="card border-danger mb-3">
            <div class="card-header fw-bold">⚔️ Weapon</div>

            <div class="card-body">
                <p>Type: ${weapon.type}</p>
                <p><b>Damage:</b> ${weapon.damage}</p>
                <p>Durability: ${weapon.durability}</p>
                <p>Enchantment: ${weapon.enchantment}</p>
                <p>Rarity: ${getRarityBadge(weapon.rarity)}</p>
            </div>
        </div>

        <div class="card border-primary mb-3">
            <div class="card-header fw-bold"> 🛡️ Armor </div>

            <div class="card-body">
                <p>Type: ${armor.type}</p>
                <p>Material: ${armor.material}</p>
                <p>Defense: ${armor.defense}</p>
                <p>Durability: ${armor.durability}</p>
                <p>Enchantment: ${armor.enchantment}</p>
                <p>Rarity: ${getRarityBadge(armor.rarity)}</p>
            </div>
        </div>

        <div class="card border-success mb-3">
            <div class="card-header fw-bold"> 🐾 Pet </div>
        
            <div class="card-body">
                <p>Name: ${pet.name}</p>
                <p>Species: ${pet.species}</p>
                <p>Buff: ${pet.buff}</p>
                <p>Attack: ${pet.attack}</p>
                <p>Rarity: ${getRarityBadge(pet.rarity)}</p>
            </div>
        </div>
        `;
        
    const modal = new bootstrap.Modal(document.querySelector("#characterModal"));
    const modalTitle = document.querySelector("#modalTitle");
    const modalHeader = document.querySelector(".modal-header");

    modalTitle.className = "modal-title";
    modalHeader.className = "modal-header";

    if (character.weapon.rarity === "Common") {
        modalTitle.classList.add("text-secondary");
        modalHeader.classList.add("bg-secondary", "text-white");
        modalTitle.innerHTML = "⚪ Common Character";
    }

    if (character.weapon.rarity === "Uncommon") {
        modalTitle.classList.add("text-success");
        modalHeader.classList.add("bg-success", "text-white");
        modalTitle.innerHTML = "🟢 Uncommon Character";
    }

    if (character.weapon.rarity === "Rare") {
        modalTitle.classList.add("text-primary");
        modalHeader.classList.add("bg-primary", "text-white");
        modalTitle.innerHTML = "🔵 Rare Character";
    }

    if (character.weapon.rarity === "Epic") {
        modalTitle.classList.add("text-dark");
        modalHeader.classList.add("bg-dark", "text-white");
        modalTitle.innerHTML = "🟣 Epic Character";
    }

    if (character.weapon.rarity === "Legendary") {
        modalTitle.classList.add("text-warning");
        modalHeader.classList.add("bg-warning");
        modalTitle.innerHTML = "⭐ Legendary Character";
    }

    if (character.weapon.rarity === "Mythical") {
        modalTitle.classList.add("text-danger");
        modalHeader.classList.add("bg-danger", "text-white");
        modalTitle.innerHTML = "🔥 Mythical Character";
    }

modal.show();

console.log(characters);

});