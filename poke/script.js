(function () {
    "use strict";
    function createFilter() {
        return {
//            pokemons: [Pokedex.PONYTA, Pokedex.RAPIDASH]
//            types: [Type.BUG]
            quality: 57.5
        };
    }
    function createList() {
        return [
            createPokemon(Pokedex.PONYTA, 51, 401, 373),
            createPokemon(Pokedex.PIDGEY, 50, 152, 151),
            createPokemon(Pokedex.GROWLITHE, 66, 389, 425),
            createPokemon(Pokedex.GRIMER, 31, 369, 316),
            createPokemon(Pokedex.DODUO, 43, 331, 333),
            createPokemon(Pokedex.PONYTA, 46, 374, 332),
            createPokemon(Pokedex.FARFETCH_D, 61, 567, 582),
            createPokemon(Pokedex.CATERPIE, 37, 396, 322),
            createPokemon(Pokedex.NIDORAN_M, 35, 300, 396),
            createPokemon(Pokedex.SPEAROW, 68, 369, 403),
            createPokemon(Pokedex.SANDSHREW, 67, 348, 351),
            createPokemon(Pokedex.RATTATA, 46, 319, 419),
            createPokemon(Pokedex.DROWZEE, 36, 164, 124),
            createPokemon(Pokedex.NIDORAN_F, 37, 358, 346),
            createPokemon(Pokedex.BELLSPROUT, 33, 303, 383),
            createPokemon(Pokedex.RATTATA, 33, 280, 324),
            createPokemon(Pokedex.NIDORAN_F, 70, 412, 316),
            createPokemon(Pokedex.WEEDLE, 65, 368, 347),
            createPokemon(Pokedex.CATERPIE, 52, 335, 331),
            createPokemon(Pokedex.ODDISH, 37, 356, 345),
            createPokemon(Pokedex.SPEAROW, 42, 346, 344),
            createPokemon(Pokedex.GEODUDE, 34, 387, 248),
            createPokemon(Pokedex.GEODUDE, 50, 375, 313),
            createPokemon(Pokedex.RHYHORN, 35, 328, 339),
            createPokemon(Pokedex.RHYHORN, 57, 402, 323),
            createPokemon(Pokedex.PARAS, 64, 360, 342),
            createPokemon(Pokedex.MEOWTH, 4, 89, 127),
            createPokemon(Pokedex.NIDORAN_M, 62, 277, 355),
            createPokemon(Pokedex.AERODACTYL, 55, 429, 894),
            createPokemon(Pokedex.VULPIX, 58, 341, 390),
            createPokemon(Pokedex.SLOWPOKE, 65, 360, 316),
            createPokemon(Pokedex.WEEDLE, 31, 141, 133),
            createPokemon(Pokedex.VULPIX, 66, 421, 369),
            createPokemon(Pokedex.ONIX, 62, 899, 361),
            createPokemon(Pokedex.KRABBY, 39, 309, 404),
            createPokemon(Pokedex.SQUIRTLE, 46, 346, 325),
            createPokemon(Pokedex.GOLEM, 60, 920, 342),
            createPokemon(Pokedex.MEOWTH, 34, 316, 340),
            createPokemon(Pokedex.PSYDUCK, 61, 371, 412),
            createPokemon(Pokedex.ODDISH, 68, 308, 380),
            createPokemon(Pokedex.BELLSPROUT, 35, 122, 164),
            createPokemon(Pokedex.MANKEY, 52, 329, 361),
            createPokemon(Pokedex.SLOWBRO, 58, 893, 457),
            createPokemon(Pokedex.KADABRA, 54, 372, 617),
            createPokemon(Pokedex.SNORLAX, 24, 766, 232),
            createPokemon(Pokedex.CHANSEY, 19, 759, 103),
            createPokemon(Pokedex.NIDORAN_M, 21, 168, 216),
            createPokemon(Pokedex.LICKITUNG, 25, 714, 189),
            createPokemon(Pokedex.VENONAT, 25, 145, 115),
            createPokemon(Pokedex.PARAS, 27, 114, 154),
            createPokemon(Pokedex.BELLSPROUT, 21, 107, 148),
            createPokemon(Pokedex.ODDISH, 18, 157, 206),
            createPokemon(Pokedex.STARYU, 18, 142, 213),
            createPokemon(Pokedex.ZUBAT, 20, 167, 198),
            createPokemon(Pokedex.HITMONCHAN, 29, 160, 725),
            createPokemon(Pokedex.GRIMER, 22, 215, 179),
            createPokemon(Pokedex.MACHOP, 19, 168, 225),
            createPokemon(Pokedex.PORYGON, 31, 462, 481),
            createPokemon(Pokedex.RAICHU, 43, 272, 580),
            createPokemon(Pokedex.CHARMANDER, 17, 147, 238),
            createPokemon(Pokedex.MACHOP, 30, 174, 239),
            createPokemon(Pokedex.DODRIO, 35, 318, 614),
            createPokemon(Pokedex.LAPRAS, 26, 731, 263),
            createPokemon(Pokedex.DUGTRIO, 34, 233, 687),
            createPokemon(Pokedex.WARTORTLE, 20, 348, 366),
            createPokemon(Pokedex.KOFFING, 18, 249, 135),
            createPokemon(Pokedex.JIGGLYPUFF, 22, 241, 171),
            createPokemon(Pokedex.STARYU, 30, 140, 269),
            createPokemon(Pokedex.CLEFAIRY, 13, 133, 99),
            createPokemon(Pokedex.NIDORAN_F, 20, 170, 88),
            createPokemon(Pokedex.CUBONE, 8, 143, 80),
            createPokemon(Pokedex.MAGNETON, 39, 349, 443),
            createPokemon(Pokedex.POLIWAG, 13, 103, 128),
            createPokemon(Pokedex.BULBASAUR, 9, 142, 84),
            createPokemon(Pokedex.MAGNETON, 41, 343, 448),
            createPokemon(Pokedex.POLIWAG, 7, 104, 117),
            createPokemon(Pokedex.CUBONE, 12, 148, 85),
            createPokemon(Pokedex.DIGLETT, 8, 74, 150),
            createPokemon(Pokedex.SHELLDER, 9, 130, 97),
            createPokemon(Pokedex.GROWLITHE, 24, 106, 145),
            createPokemon(Pokedex.PIDGEOTTO, 23, 273, 273),
            createPokemon(Pokedex.CHARMELEON, 21, 121, 421)
        ];
    }
    var Type = {
        BUG: "Bug", DRAGON: "Dragon", ELECTRIC: "Electric", FAIRY: "Fairy", FIGHTING: "Fighting", FIRE: "Fire", FLYING: "Flying", GHOST: "Ghost",
        GRASS: "Grass", GROUND: "Ground", ICE: "Ice", NORMAL: "Normal", POISON: "Poison", PSYCHIC: "Psychic", ROCK: "Rock", STEEL: "Steel", WATER: "Water"
    };
    var Pokedex = {
        BULBASAUR: createItemPokedex("Bulbasaur", 125, 75, [Type.GRASS, Type.POISON]),
        IVYSAUR: createItemPokedex("Ivysaur", 400, 100, [Type.GRASS, Type.POISON]),
        VENUSAUR: createItemPokedex("Venusaur", 550, 150, [Type.GRASS, Type.POISON]),
        CHARMANDER: createItemPokedex("Charmander", 75, 125, [Type.FIRE]),
        CHARMELEON: createItemPokedex("Charmeleon", 100, 400, [Type.FIRE]),
        CHARIZARD: createItemPokedex("Charizard", 200, 600, [Type.FIRE, Type.FLYING]),
        SQUIRTLE: createItemPokedex("Squirtle", 100, 100, [Type.WATER]),
        WARTORTLE: createItemPokedex("Wartortle", 250, 250, [Type.WATER]),
        BLASTOISE: createItemPokedex("Blastoise", 400, 400, [Type.WATER]),
        CATERPIE: createItemPokedex("Caterpie", 110, 90, [Type.BUG]),
        METAPOD: createItemPokedex("Metapod", 275, 25, [Type.BUG]),
        BUTTERFREE: createItemPokedex("Butterfree", 150, 250, [Type.BUG, Type.FLYING]),
        WEEDLE: createItemPokedex("Weedle", 100, 100, [Type.BUG, Type.POISON]),
        KAKUNA: createItemPokedex("Kakuna", 250, 50, [Type.BUG, Type.POISON]),
        BEEDRILL: createItemPokedex("Beedrill", 150, 250, [Type.BUG, Type.POISON]),
        PIDGEY: createItemPokedex("Pidgey", 100, 100, [Type.NORMAL, Type.FLYING]),
        PIDGEOTTO: createItemPokedex("Pidgeotto", 250, 250, [Type.NORMAL, Type.FLYING]),
        PIDGEOT: createItemPokedex("Pidgeot", 400, 400, [Type.NORMAL, Type.FLYING]),
        RATTATA: createItemPokedex("Rattata", 75, 125, [Type.NORMAL]),
        RATICATE: createItemPokedex("Raticate", 150, 450, [Type.NORMAL]),
        SPEAROW: createItemPokedex("Spearow", 75, 125, [Type.NORMAL, Type.FLYING]),
        FEAROW: createItemPokedex("Fearow", 100, 500, [Type.NORMAL, Type.FLYING]),
        EKANS: createItemPokedex("Ekans", 80, 120, [Type.POISON]),
        ARBOK: createItemPokedex("Arbok", 150, 450, [Type.POISON]),
        PIKACHU: createItemPokedex("Pikachu", 70, 130, [Type.ELECTRIC]),
        RAICHU: createItemPokedex("Raichu", 150, 450, [Type.ELECTRIC]),
        SANDSHREW: createItemPokedex("Sandshrew", 80, 120, [Type.GROUND]),
        SANDSLASH: createItemPokedex("Sandslash", 150, 350, [Type.GROUND]),
        NIDORAN_F: createItemPokedex("Nidoran♀", 140, 60, [Type.POISON]),
        NIDORINA: createItemPokedex("Nidorina", 325, 175, [Type.POISON]),
        NIDOQUEEN: createItemPokedex("Nidoqueen", 600, 200, [Type.POISON, Type.GROUND]),
        NIDORAN_M: createItemPokedex("Nidoran♂", 60, 140, [Type.POISON]),
        NIDORINO: createItemPokedex("Nidorino", 175, 325, [Type.POISON]),
        NIDOKING: createItemPokedex("Nidoking", 200, 600, [Type.POISON, Type.GROUND]),
        CLEFAIRY: createItemPokedex("Clefairy", 120, 80, [Type.FAIRY]),
        CLEFABLE: createItemPokedex("Clefable", 450, 250, [Type.FAIRY]),
        VULPIX: createItemPokedex("Vulpix", 110, 90, [Type.FIRE]),
        NINETALES: createItemPokedex("Ninetales", 550, 250, [Type.FIRE]),
        JIGGLYPUFF: createItemPokedex("Jigglypuff", 140, 60, [Type.NORMAL, Type.FAIRY]),
        WIGGLYTUFF: createItemPokedex("Wigglytuff", 450, 150, [Type.NORMAL, Type.FAIRY]),
        ZUBAT: createItemPokedex("Zubat", 80, 120, [Type.POISON, Type.FLYING]),
        GOLBAT: createItemPokedex("Golbat", 200, 400, [Type.POISON, Type.FLYING]),
        ODDISH: createItemPokedex("Oddish", 75, 125, [Type.GRASS, Type.POISON]),
        GLOOM: createItemPokedex("Gloom", 250, 350, [Type.GRASS, Type.POISON]),
        VILEPLUME: createItemPokedex("Vileplume", 300, 500, [Type.GRASS, Type.POISON]),
        PARAS: createItemPokedex("Paras", 80, 120, [Type.BUG, Type.GRASS]),
        PARASECT: createItemPokedex("Parasect", 200, 500, [Type.BUG, Type.GRASS]),
        VENONAT: createItemPokedex("Venonat", 120, 80, [Type.BUG, Type.POISON]),
        VENOMOTH: createItemPokedex("Venomoth", 350, 350, [Type.BUG, Type.POISON]),
        DIGLETT: createItemPokedex("Diglett", 60, 140, [Type.GROUND]),
        DUGTRIO: createItemPokedex("Dugtrio", 100, 600, [Type.GROUND]),
        MEOWTH: createItemPokedex("Meowth", 85, 115, [Type.NORMAL]),
        PERSIAN: createItemPokedex("Persian", 300, 400, [Type.NORMAL]),
        PSYDUCK: createItemPokedex("Psyduck", 80, 120, [Type.WATER]),
        GOLDUCK: createItemPokedex("Golduck", 200, 500, [Type.WATER]),
        MANKEY: createItemPokedex("Mankey", 60, 140, [Type.FIGHTING]),
        PRIMEAPE: createItemPokedex("Primeape", 150, 550, [Type.FIGHTING]),
        GROWLITHE: createItemPokedex("Growlithe", 80, 120, [Type.FIRE]),
        ARCANINE: createItemPokedex("Arcanine", 350, 450, [Type.FIRE]),
        POLIWAG: createItemPokedex("Poliwag", 90, 110, [Type.WATER]),
        POLIWHIRL: createItemPokedex("Poliwhirl", 350, 350, [Type.WATER]),
        POLIWRATH: createItemPokedex("Poliwrath", 350, 450, [Type.WATER, Type.FIGHTING]),
        ABRA: createItemPokedex("Abra", 45, 155, [Type.PSYCHIC]),
        KADABRA: createItemPokedex("Kadabra", 90, 410, [Type.PSYCHIC]),
        ALAKAZAM: createItemPokedex("Alakazam", 100, 700, [Type.PSYCHIC]),
        MACHOP: createItemPokedex("Machop", 80, 120, [Type.FIGHTING]),
        MACHOKE: createItemPokedex("Machoke", 200, 500, [Type.FIGHTING]),
        MACHAMP: createItemPokedex("Machamp", 250, 550, [Type.FIGHTING]),
        BELLSPROUT: createItemPokedex("Bellsprout", 80, 120, [Type.GRASS, Type.POISON]),
        WEEPINBELL: createItemPokedex("Weepinbell", 250, 350, [Type.GRASS, Type.POISON]),
        VICTREEBEL: createItemPokedex("Victreebel", 300, 500, [Type.GRASS, Type.POISON]),
        TENTACOOL: createItemPokedex("Tentacool", 90, 110, [Type.WATER, Type.POISON]),
        TENTACRUEL: createItemPokedex("Tentacruel", 550, 150, [Type.WATER, Type.POISON]),
        GEODUDE: createItemPokedex("Geodude", 140, 60, [Type.ROCK, Type.GROUND]),
        GRAVELER: createItemPokedex("Graveler", 610, 90, [Type.ROCK, Type.GROUND]),
        GOLEM: createItemPokedex("Golem", 700, 100, [Type.ROCK, Type.GROUND]),
        PONYTA: createItemPokedex("Ponyta", 100, 100, [Type.FIRE]),
        RAPIDASH: createItemPokedex("Rapidash", 400, 400, [Type.FIRE]),
        SLOWPOKE: createItemPokedex("Slowpoke", 130, 70, [Type.WATER, Type.PSYCHIC]),
        SLOWBRO: createItemPokedex("Slowbro", 650, 150, [Type.WATER, Type.PSYCHIC]),
        MAGNEMITE: createItemPokedex("Magnemite", 80, 120, [Type.ELECTRIC, Type.STEEL]),
        MAGNETON: createItemPokedex("Magneton", 300, 400, [Type.ELECTRIC, Type.STEEL]),
        FARFETCH_D: createItemPokedex("Farfetch'd", 350, 350, [Type.NORMAL, Type.FLYING]),
        DODUO: createItemPokedex("Doduo", 80, 120, [Type.NORMAL, Type.FLYING]),
        DODRIO: createItemPokedex("Dodrio", 200, 500, [Type.NORMAL, Type.FLYING]),
        SEEL: createItemPokedex("Seel", 110, 90, [Type.WATER]),
        DEWGONG: createItemPokedex("Dewgong", 500, 200, [Type.WATER, Type.ICE]),
        GRIMER: createItemPokedex("Grimer", 110, 90, [Type.POISON]),
        MUK: createItemPokedex("Muk", 650, 150, [Type.POISON]),
        SHELLDER: createItemPokedex("Shellder", 120, 80, [Type.WATER]),
        CLOYSTER: createItemPokedex("Cloyster", 575, 225, [Type.WATER, Type.ICE]),
        GASTLY: createItemPokedex("Gastly", 50, 150, [Type.GHOST, Type.POISON]),
        HAUNTER: createItemPokedex("Haunter", 125, 575, [Type.GHOST, Type.POISON]),
        GENGAR: createItemPokedex("Gengar", 150, 650, [Type.GHOST, Type.POISON]),
        ONIX: createItemPokedex("Onix", 600, 100, [Type.ROCK, Type.GROUND]),
        DROWZEE: createItemPokedex("Drowzee", 120, 80, [Type.PSYCHIC]),
        HYPNO: createItemPokedex("Hypno", 500, 200, [Type.PSYCHIC]),
        KRABBY: createItemPokedex("Krabby", 70, 130, [Type.WATER]),
        KINGLER: createItemPokedex("Kingler", 100, 600, [Type.WATER]),
        VOLTORB: createItemPokedex("Voltorb", 110, 90, [Type.ELECTRIC]),
        ELECTRODE: createItemPokedex("Electrode", 400, 300, [Type.ELECTRIC]),
        EXEGGCUTE: createItemPokedex("Exeggcute", 130, 70, [Type.GRASS, Type.PSYCHIC]),
        EXEGGUTOR: createItemPokedex("Exeggutor", 250, 550, [Type.GRASS, Type.PSYCHIC]),
        CUBONE: createItemPokedex("Cubone", 130, 70, [Type.GROUND]),
        MAROWAK: createItemPokedex("Marowak", 525, 175, [Type.GROUND]),
        HITMONLEE: createItemPokedex("Hitmonlee", 50, 650, [Type.FIGHTING]),
        HITMONCHAN: createItemPokedex("Hitmonchan", 75, 625, [Type.FIGHTING]),
        LICKITUNG: createItemPokedex("Lickitung", 600, 100, [Type.NORMAL]),
        KOFFING: createItemPokedex("Koffing", 140, 60, [Type.POISON]),
        WEEZING: createItemPokedex("Weezing", 450, 350, [Type.POISON]),
        RHYHORN: createItemPokedex("Rhyhorn", 120, 80, [Type.GROUND, Type.ROCK]),
        RHYDON: createItemPokedex("Rhydon", 300, 500, [Type.GROUND, Type.ROCK]),
        CHANSEY: createItemPokedex("Chansey", 675, 25, [Type.NORMAL]),
        TANGELA: createItemPokedex("Tangela", 400, 300, [Type.GRASS]),
        KANGASKHAN: createItemPokedex("Kangaskhan", 350, 350, [Type.NORMAL]),
        HORSEA: createItemPokedex("Horsea", 90, 110, [Type.WATER]),
        SEADRA: createItemPokedex("Seadra", 250, 450, [Type.WATER]),
        GOLDEEN: createItemPokedex("Goldeen", 70, 130, [Type.WATER]),
        SEAKING: createItemPokedex("Seaking", 350, 450, [Type.WATER]),
        STARYU: createItemPokedex("Staryu", 60, 140, [Type.WATER]),
        STARMIE: createItemPokedex("Starmie", 150, 650, [Type.WATER, Type.PSYCHIC]),
        MR_MIME: createItemPokedex("Mr.Mime", 575, 125, [Type.PSYCHIC, Type.FAIRY]),
        SCYTHER: createItemPokedex("Scyther", 100, 700, [Type.BUG, Type.FLYING]),
        JYNX: createItemPokedex("Jynx", 150, 550, [Type.ICE, Type.PSYCHIC]),
        ELECTABUZZ: createItemPokedex("Electabuzz", 300, 400, [Type.ELECTRIC]),
        MAGMAR: createItemPokedex("Magmar", 175, 525, [Type.FIRE]),
        PINSIR: createItemPokedex("Pinsir", 75, 725, [Type.BUG]),
        TAUROS: createItemPokedex("Tauros", 100, 600, [Type.NORMAL]),
        MAGIKARP: createItemPokedex("Magikarp", 25, 25, [Type.WATER]),
        GYARADOS: createItemPokedex("Gyarados", 200, 400, [Type.WATER, Type.FLYING]),
        LAPRAS: createItemPokedex("Lapras", 650, 150, [Type.WATER, Type.ICE]),
        DITTO: createItemPokedex("Ditto", 350, 350, [Type.NORMAL]),
        EEVEE: createItemPokedex("Eevee", 100, 100, [Type.NORMAL]),
        VAPOREON: createItemPokedex("Vaporeon", 600, 200, [Type.WATER]),
        JOLTEON: createItemPokedex("Jolteon", 250, 550, [Type.ELECTRIC]),
        FLAREON: createItemPokedex("Flareon", 200, 600, [Type.FIRE]),
        PORYGON: createItemPokedex("Porygon", 350, 350, [Type.NORMAL]),
        OMANYTE: createItemPokedex("Omanyte", 140, 60, [Type.ROCK, Type.WATER]),
        OMASTAR: createItemPokedex("Omastar", 575, 225, [Type.ROCK, Type.WATER]),
        KABUTO: createItemPokedex("Kabuto", 70, 130, [Type.ROCK, Type.WATER]),
        KABUTOPS: createItemPokedex("Kabutops", 150, 650, [Type.ROCK, Type.WATER]),
        AERODACTYL: createItemPokedex("Aerodactyl", 125, 675, [Type.ROCK, Type.FLYING]),
        SNORLAX: createItemPokedex("Snorlax", 650, 150, [Type.NORMAL]),
        ARTICUNO: createItemPokedex("Articuno", 600, 400, [Type.ICE, Type.FLYING]),
        ZAPDOS: createItemPokedex("Zapdos", 350, 650, [Type.ELECTRIC, Type.FLYING]),
        MOLTRES: createItemPokedex("Moltres", 500, 500, [Type.FIRE, Type.FLYING]),
        DRATINI: createItemPokedex("Dratini", 80, 120, [Type.DRAGON]),
        DRAGONAIR: createItemPokedex("Dragonair", 300, 400, [Type.DRAGON]),
        DRAGONITE: createItemPokedex("Dragonite", 400, 500, [Type.DRAGON, Type.FLYING]),
        MEWTWO: createItemPokedex("Mewtwo", 550, 750, [Type.PSYCHIC]),
        MEW: createItemPokedex("Mew", 650, 650, [Type.PSYCHIC])
    };
    function createItemPokedex(name, baseHP, baseATK, types) {
        return {name: name, types: types, hp: baseHP, atk: baseATK};
    }
    function createPokemon(basePokemon, level, hp, atk) {
        return {base: basePokemon, level: level, hp: hp, atk: atk};
    }
    function calcQuality(pokemon) {
        return (((pokemon.hp + pokemon.atk) - (2 * pokemon.level)) - (pokemon.base.hp + pokemon.base.atk)) * 0.125;
    }
    function calcHP(pokemon) {
        var value = ((pokemon.hp - pokemon.level) - pokemon.base.hp) * 0.25;
        return formatNumber(value, 2);
    }
    function calcATK(pokemon) {
        var value = ((pokemon.atk - pokemon.level) - pokemon.base.atk) * 0.25;
        return formatNumber(value, 2);
    }
    function formatNumber(value, precision) {
        if (value === 0) {
            return value.toPrecision(precision + 1) + "%";
        } else if (value < 1) {
            return value.toPrecision(precision) + "%";
        } else if (value < 10) {
            return value.toPrecision(precision + 1) + "%";
        } else if (value < 100) {
            return value.toPrecision(precision + 2) + "%";
        } else {
            return value.toPrecision(precision + 2) + "%";
        }
    }
    function validFilterByPokemon(filter, pokemon) {
        return (!filter || (filter.length === 0) || (filter.indexOf(pokemon) > -1));
    }
    function validFilterByType(filter, types) {
        if (!filter || (filter.length === 0)) {
            return true;
        } else {
            for (var i = 0; i < types.length; i++) {
                if (filter.indexOf(types[i]) > -1) {
                    return true;
                }
            }
        }
        return false;
    }
    function doProcess() {
        var filter = createFilter();
        var pokemons = createList();
        var tabela = "<table><tr class='rowHeader'><th>idx</th><th>Nome</th><th>Quality</th><th>ATK</th><th>HP</th><th>Types</th></tr>";
        var count = 0;
        for (var i = 0; i < pokemons.length; i++) {
            var pokemon = pokemons[i];
            if (validFilterByPokemon(filter.pokemons, pokemon.base) && validFilterByType(filter.types, pokemon.base.types)) {
                var quality = calcQuality(pokemon);
                if (!filter.quality || quality > filter.quality) {
                    tabela = tabela + "<tr class='row" + (count % 2) + "'><td class='colNum'>" + (i + 1);
                    tabela = tabela + "</td><td>" + pokemon.base.name;
                    tabela = tabela + "</td><td class='colNum'>" + formatNumber(quality, 3);
                    tabela = tabela + "</td><td class='colNum'>" + calcATK(pokemon);
                    tabela = tabela + "</td><td class='colNum'>" + calcHP(pokemon);
                    tabela = tabela + "</td><td>" + pokemon.base.types + "</td></tr>";
                    count++;
                }
            }
        }
        tabela = tabela + "</table>";
        document.write(tabela);
    }
    doProcess();
})();
