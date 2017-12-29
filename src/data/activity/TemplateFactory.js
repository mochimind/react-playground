
export const GetExactByID = (id, type) => {
    return templates.find((tok) => tok.id === id && tok.type === type);
};

export const GetExactByValue = (description, type) => {
    return templates.find((tok) => tok.description.toLowerCase() === description.toLowerCase() && tok.type === type);
};

// returns the first match that starts with _partial
export const GetBestMatch = (_partial) => {
    return templates.find((tok) => tok.description.toLowerCase().startsWith(_partial.toLowerCase()));
};

export const GetPotentialMatches = (_partial) => {
    return templates.filter((tok) => tok.description.toLowerCase().startsWith(_partial.toLowerCase()));
}

// creates a list of all descriptions
export const GetDescriptions = () => {
    return templates;
}

export const ActivityTypes = {
    EXERCISE: 'exercise',
    FOOD: 'food',
    GENERATED: 'generated'
};

class TemplateFactory {
    constructor(id, type, description, index) {
        this.id = id;
        this.type = type;
        this.description = description;
        this.index = index;
    }

    // returns duration in minutes
    getDuration = () => {
        if (this.type === ActivityTypes.EXERCISE) {
            return 60;
        } else if (this.type === ActivityTypes.FOOD) {
            return 120;
        } else {
            console.log('error: unsupported activity type');
            return 0;
        }
    }

    getChangePerMinute = () => {
        if (this.type === ActivityTypes.EXERCISE) {
            return -this.index / this.getDuration(); 
        } else if (this.type === ActivityTypes.FOOD) {
            return this.index / this.getDuration();
        } else {
            console.log("error: unsupported activity type");
            return 0
        }
    }
}

// these are our 'database' of activities.
// TODO: may be better to replace this with a real database for scalability
const templates = [
    new TemplateFactory(1, ActivityTypes.EXERCISE, "Crunches", 20),
    new TemplateFactory(2, ActivityTypes.EXERCISE, "Walking", 15),
    new TemplateFactory(3, ActivityTypes.EXERCISE, "Running", 40),
    new TemplateFactory(4, ActivityTypes.EXERCISE, "Sprinting", 60),
    new TemplateFactory(5, ActivityTypes.EXERCISE, "Squats", 60),
    new TemplateFactory(6, ActivityTypes.EXERCISE, "Bench Press", 45),
    new TemplateFactory(1, ActivityTypes.FOOD, "Banana cake, made with sugar", 47),
    new TemplateFactory(2, ActivityTypes.FOOD, "Banana cake, made without sugar", 55),
    new TemplateFactory(3, ActivityTypes.FOOD, "Sponge cake, plain", 46),
    new TemplateFactory(4, ActivityTypes.FOOD, "Vanilla cake made from packet mix with vanilla frosting (Betty Crocker)", 42),
    new TemplateFactory(5, ActivityTypes.FOOD, "Apple, made with sugar", 44),
    new TemplateFactory(6, ActivityTypes.FOOD, "Apple, made without sugar", 48),
    new TemplateFactory(7, ActivityTypes.FOOD, "Waffles, Aunt Jemima (Quaker Oats)", 76),
    new TemplateFactory(8, ActivityTypes.FOOD, "Bagel, white, frozen", 72),
    new TemplateFactory(9, ActivityTypes.FOOD, "Baguette, white, plain", 95),
    new TemplateFactory(10, ActivityTypes.FOOD, "Coarse barley bread, 75-80% kernels, average", 34),
    new TemplateFactory(11, ActivityTypes.FOOD, "Hamburger bun", 61),
    new TemplateFactory(12, ActivityTypes.FOOD, "Kaiser roll", 73),
    new TemplateFactory(13, ActivityTypes.FOOD, "Pumpernickel bread", 56),
    new TemplateFactory(14, ActivityTypes.FOOD, "50% cracked wheat kernel bread", 58),
    new TemplateFactory(15, ActivityTypes.FOOD, "White wheat flour bread", 71),
    new TemplateFactory(16, ActivityTypes.FOOD, "Wonder™ bread, average", 73),
    new TemplateFactory(17, ActivityTypes.FOOD, "Whole wheat bread, average", 71),
    new TemplateFactory(18, ActivityTypes.FOOD, "100% Whole Grain™ bread (Natural Ovens)", 51),
    new TemplateFactory(19, ActivityTypes.FOOD, "Pita bread, white", 68),
    new TemplateFactory(20, ActivityTypes.FOOD, "Corn tortilla", 52),
    new TemplateFactory(21, ActivityTypes.FOOD, "Wheat tortilla", 30),
    new TemplateFactory(23, ActivityTypes.FOOD, "Coca Cola®, average", 63),
    new TemplateFactory(24, ActivityTypes.FOOD, "Fanta®, orange soft drink", 68),
    new TemplateFactory(25, ActivityTypes.FOOD, "Lucozade®, original (sparkling glucose drink)", 95),
    new TemplateFactory(26, ActivityTypes.FOOD, "Apple juice, unsweetened, average", 44),
    new TemplateFactory(27, ActivityTypes.FOOD, "Cranberry juice cocktail (Ocean Spray®)", 68),
    new TemplateFactory(28, ActivityTypes.FOOD, "Gatorade", 78),
    new TemplateFactory(29, ActivityTypes.FOOD, "Orange juice, unsweetened", 50),
    new TemplateFactory(30, ActivityTypes.FOOD, "Tomato juice, canned", 38),
    new TemplateFactory(32, ActivityTypes.FOOD, "All-Bran™, average", 55),
    new TemplateFactory(33, ActivityTypes.FOOD, "Coco Pops™, average", 77),
    new TemplateFactory(34, ActivityTypes.FOOD, "Cornflakes™, average", 93),
    new TemplateFactory(35, ActivityTypes.FOOD, "Cream of Wheat™ (Nabisco)", 66),
    new TemplateFactory(36, ActivityTypes.FOOD, "Cream of Wheat™, Instant (Nabisco)", 74),
    new TemplateFactory(37, ActivityTypes.FOOD, "Grapenuts™, average", 75),
    new TemplateFactory(38, ActivityTypes.FOOD, "Muesli, average", 66),
    new TemplateFactory(39, ActivityTypes.FOOD, "Oatmeal, average", 55),
    new TemplateFactory(40, ActivityTypes.FOOD, "Instant oatmeal, average", 83),
    new TemplateFactory(41, ActivityTypes.FOOD, "Puffed wheat, average", 80),
    new TemplateFactory(42, ActivityTypes.FOOD, "Raisin Bran™ (Kellogg's)", 61),
    new TemplateFactory(43, ActivityTypes.FOOD, "Special K™ (Kellogg's)", 69),
    new TemplateFactory(45, ActivityTypes.FOOD, "Pearled barley, average", 28),
    new TemplateFactory(46, ActivityTypes.FOOD, "Sweet corn on the cob, average", 60),
    new TemplateFactory(47, ActivityTypes.FOOD, "Couscous, average", 65),
    new TemplateFactory(48, ActivityTypes.FOOD, "Quinoa", 53),
    new TemplateFactory(49, ActivityTypes.FOOD, "White rice, average", 89),
    new TemplateFactory(50, ActivityTypes.FOOD, "Quick cooking white basmati", 67),
    new TemplateFactory(51, ActivityTypes.FOOD, "Brown rice, average", 50),
    new TemplateFactory(52, ActivityTypes.FOOD, "Converted, white rice (Uncle Ben's®)", 38),
    new TemplateFactory(53, ActivityTypes.FOOD, "Whole wheat kernels, average", 30),
    new TemplateFactory(54, ActivityTypes.FOOD, "Bulgur, average", 48),
    new TemplateFactory(56, ActivityTypes.FOOD, "Graham crackers", 74),
    new TemplateFactory(57, ActivityTypes.FOOD, "Vanilla wafers", 77),
    new TemplateFactory(58, ActivityTypes.FOOD, "Shortbread", 64),
    new TemplateFactory(59, ActivityTypes.FOOD, "Rice cakes, average", 82),
    new TemplateFactory(60, ActivityTypes.FOOD, "Rye crisps, average", 64),
    new TemplateFactory(61, ActivityTypes.FOOD, "Soda crackers", 	74),
    new TemplateFactory(63, ActivityTypes.FOOD, "Ice cream, regular", 57),
    new TemplateFactory(64, ActivityTypes.FOOD, "Ice cream, premium", 38),
    new TemplateFactory(65, ActivityTypes.FOOD, "Milk, full fat", 41),
    new TemplateFactory(66, ActivityTypes.FOOD, "Milk, skim", 32),
    new TemplateFactory(67, ActivityTypes.FOOD, "Reduced-fat yogurt with fruit, average", 33),
    new TemplateFactory(69, ActivityTypes.FOOD, "Apple, average", 39),
    new TemplateFactory(70, ActivityTypes.FOOD, "Banana, ripe", 62),
    new TemplateFactory(71, ActivityTypes.FOOD, "Dates, dried", 42),
    new TemplateFactory(72, ActivityTypes.FOOD, "Grapefruit", 25),
    new TemplateFactory(73, ActivityTypes.FOOD, "Grapes, average", 59),
    new TemplateFactory(74, ActivityTypes.FOOD, "Orange, average", 40),
    new TemplateFactory(75, ActivityTypes.FOOD, "Peach, average", 42),
    new TemplateFactory(76, ActivityTypes.FOOD, "Peach, canned in light syrup", 40),
    new TemplateFactory(77, ActivityTypes.FOOD, "Pear, average", 38),
    new TemplateFactory(78, ActivityTypes.FOOD, "Pear, canned in pear juice", 43),
    new TemplateFactory(79, ActivityTypes.FOOD, "Prunes, pitted", 29),
    new TemplateFactory(80, ActivityTypes.FOOD, "Raisins", 64),
    new TemplateFactory(81, ActivityTypes.FOOD, "Watermelon", 72),
    new TemplateFactory(83, ActivityTypes.FOOD, "Baked beans, average", 40),
    new TemplateFactory(84, ActivityTypes.FOOD, "Blackeye peas, average", 33),
    new TemplateFactory(85, ActivityTypes.FOOD, "Black beans", 30),
    new TemplateFactory(86, ActivityTypes.FOOD, "Chickpeas, average", 10),
    new TemplateFactory(87, ActivityTypes.FOOD, "Chickpeas, canned in brine", 38),
    new TemplateFactory(88, ActivityTypes.FOOD, "Navy beans, average", 	31),
    new TemplateFactory(89, ActivityTypes.FOOD, "Kidney beans, average", 29),
    new TemplateFactory(90, ActivityTypes.FOOD, "Lentils, average", 29),
    new TemplateFactory(91, ActivityTypes.FOOD, "Soy beans, average", 15),
    new TemplateFactory(92, ActivityTypes.FOOD, "Cashews, salted", 27),
    new TemplateFactory(93, ActivityTypes.FOOD, "Peanuts, average", 7),
    new TemplateFactory(95, ActivityTypes.FOOD, "Fettucini, average", 32),
    new TemplateFactory(96, ActivityTypes.FOOD, "Macaroni, average", 47),
    new TemplateFactory(97, ActivityTypes.FOOD, "Macaroni and Cheese (Kraft)", 64),
    new TemplateFactory(98, ActivityTypes.FOOD, "Spaghetti, white, boiled, average", 46),
    new TemplateFactory(99, ActivityTypes.FOOD, "Spaghetti, white, boiled 20 min, average", 58),
    new TemplateFactory(100, ActivityTypes.FOOD, "Spaghetti, wholemeal, boiled, average", 42),
    new TemplateFactory(102, ActivityTypes.FOOD, "Corn chips, plain, salted, average", 42),
    new TemplateFactory(103, ActivityTypes.FOOD, "Fruit Roll-Ups®", 99),
    new TemplateFactory(104, ActivityTypes.FOOD, "M & M's®, peanut", 33),
    new TemplateFactory(105, ActivityTypes.FOOD, "Microwave popcorn, plain, average", 55),
    new TemplateFactory(106, ActivityTypes.FOOD, "Potato chips, average", 51),
    new TemplateFactory(107, ActivityTypes.FOOD, "Pretzels, oven-baked", 83),
    new TemplateFactory(108, ActivityTypes.FOOD, "Snickers Bar®", 51),
    new TemplateFactory(111, ActivityTypes.FOOD, "Carrots, average", 35),
    new TemplateFactory(112, ActivityTypes.FOOD, "Parsnips", 52),
    new TemplateFactory(113, ActivityTypes.FOOD, "Baked russet potato, average", 111),
    new TemplateFactory(114, ActivityTypes.FOOD, "Boiled white potato, average", 82),
    new TemplateFactory(115, ActivityTypes.FOOD, "Instant mashed potato, average", 87),
    new TemplateFactory(116, ActivityTypes.FOOD, "Sweet potato, average", 70),
    new TemplateFactory(117, ActivityTypes.FOOD, "Yam, average", 54),
    new TemplateFactory(110, ActivityTypes.FOOD, "Green peas, average", 51),
    new TemplateFactory(119, ActivityTypes.FOOD, "Hummus (chickpea salad dip)", 6),
    new TemplateFactory(120, ActivityTypes.FOOD, "Chicken nuggets, frozen, reheated in microwave oven 5 min", 46),
    new TemplateFactory(121, ActivityTypes.FOOD, "Pizza, plain baked dough, served with parmesan cheese and tomato sauce", 80),
    new TemplateFactory(122, ActivityTypes.FOOD, "Pizza, Super Supreme (Pizza Hut)", 36),
    new TemplateFactory(123, ActivityTypes.FOOD, "Honey, average", 61)
];

