
export const GetExactByID = (id, type) => {
    return templates.find((tok) => tok.id === id && tok.type === type);
};

export const GetExactByValue = (description, type) => {
    return templates.find((tok) => tok.description === description && tok.type === type);
};

// returns the first match that starts with _partial
export const GetBestMatch = (_partial) => {
    return templates.find((tok) => tok.description.startsWith(_partial));
};

export const GetPotentialMatches = (_partial) => {
    return templates.filter((tok) => tok.description.startsWith(_partial));
}

export const ActivityTypes = {
    EXERCISE: 'exercise',
    FOOD: 'food'
};

// these are our 'database' of activities.
// TODO: may be better to replace this with a real database for scalability
const templates = [
    {id: 1, type: ActivityTypes.EXERCISE, description: "Crunches", index: 20},
    {id: 2, type: ActivityTypes.EXERCISE, description: "Walking", index: 15},
    {id: 3, type: ActivityTypes.EXERCISE, description: "Running", index: 40},
    {id: 4, type: ActivityTypes.EXERCISE, description: "Sprinting", index: 60},
    {id: 5, type: ActivityTypes.EXERCISE, description: "Squats", index: 60},
    {id: 6, type: ActivityTypes.EXERCISE, description: "Bench Press", index: 45},
    {id: 1, type: ActivityTypes.FOOD, description: "Banana cake, made with sugar", index: 47},
    {id: 2, type: ActivityTypes.FOOD, description: "Banana cake, made without sugar", index: 55},
    {id: 3, type: ActivityTypes.FOOD, description: "Sponge cake, plain", index: 46},
    {id: 4, type: ActivityTypes.FOOD, description: "Vanilla cake made from packet mix with vanilla frosting (Betty Crocker)", index: 42},
    {id: 5, type: ActivityTypes.FOOD, description: "Apple, made with sugar", index: 44},
    {id: 6, type: ActivityTypes.FOOD, description: "Apple, made without sugar", index: 48},
    {id: 7, type: ActivityTypes.FOOD, description: "Waffles, Aunt Jemima (Quaker Oats)", index: 76},
    {id: 8, type: ActivityTypes.FOOD, description: "Bagel, white, frozen", index: 72},
    {id: 9, type: ActivityTypes.FOOD, description: "Baguette, white, plain", index: 95},
    {id: 10, type: ActivityTypes.FOOD, description: "Coarse barley bread, 75-80% kernels, average", index: 34},
    {id: 11, type: ActivityTypes.FOOD, description: "Hamburger bun", index: 61},
    {id: 12, type: ActivityTypes.FOOD, description: "Kaiser roll", index: 73},
    {id: 13, type: ActivityTypes.FOOD, description: "Pumpernickel bread", index: 56},
    {id: 14, type: ActivityTypes.FOOD, description: "50% cracked wheat kernel bread", index: 58},
    {id: 15, type: ActivityTypes.FOOD, description: "White wheat flour bread", index: 71},
    {id: 16, type: ActivityTypes.FOOD, description: "Wonder™ bread, average", index: 73},
    {id: 17, type: ActivityTypes.FOOD, description: "Whole wheat bread, average", index: 71},
    {id: 18, type: ActivityTypes.FOOD, description: "100% Whole Grain™ bread (Natural Ovens)", index: 51},
    {id: 19, type: ActivityTypes.FOOD, description: "Pita bread, white", index: 68},
    {id: 20, type: ActivityTypes.FOOD, description: "Corn tortilla", index: 52},
    {id: 21, type: ActivityTypes.FOOD, description: "Wheat tortilla", index: 30},
    {id: 23, type: ActivityTypes.FOOD, description: "Coca Cola®, average", index: 63},
    {id: 24, type: ActivityTypes.FOOD, description: "Fanta®, orange soft drink", index: 68},
    {id: 25, type: ActivityTypes.FOOD, description: "Lucozade®, original (sparkling glucose drink)", index: 95},
    {id: 26, type: ActivityTypes.FOOD, description: "Apple juice, unsweetened, average", index: 44},
    {id: 27, type: ActivityTypes.FOOD, description: "Cranberry juice cocktail (Ocean Spray®)", index: 68},
    {id: 28, type: ActivityTypes.FOOD, description: "Gatorade", index: 78},
    {id: 29, type: ActivityTypes.FOOD, description: "Orange juice, unsweetened", index: 50},
    {id: 30, type: ActivityTypes.FOOD, description: "Tomato juice, canned", index: 38},
    {id: 32, type: ActivityTypes.FOOD, description: "All-Bran™, average", index: 55},
    {id: 33, type: ActivityTypes.FOOD, description: "Coco Pops™, average", index: 77},
    {id: 34, type: ActivityTypes.FOOD, description: "Cornflakes™, average", index: 93},
    {id: 35, type: ActivityTypes.FOOD, description: "Cream of Wheat™ (Nabisco)", index: 66},
    {id: 36, type: ActivityTypes.FOOD, description: "Cream of Wheat™, Instant (Nabisco)", index: 74},
    {id: 37, type: ActivityTypes.FOOD, description: "Grapenuts™, average", index: 75},
    {id: 38, type: ActivityTypes.FOOD, description: "Muesli, average", index: 66},
    {id: 39, type: ActivityTypes.FOOD, description: "Oatmeal, average", index: 55},
    {id: 40, type: ActivityTypes.FOOD, description: "Instant oatmeal, average", index: 83},
    {id: 41, type: ActivityTypes.FOOD, description: "Puffed wheat, average", index: 80},
    {id: 42, type: ActivityTypes.FOOD, description: "Raisin Bran™ (Kellogg's)", index: 61},
    {id: 43, type: ActivityTypes.FOOD, description: "Special K™ (Kellogg's)", index: 69},
    {id: 45, type: ActivityTypes.FOOD, description: "Pearled barley, average", index: 28},
    {id: 46, type: ActivityTypes.FOOD, description: "Sweet corn on the cob, average", index: 60},
    {id: 47, type: ActivityTypes.FOOD, description: "Couscous, average", index: 65},
    {id: 48, type: ActivityTypes.FOOD, description: "Quinoa", index: 53},
    {id: 49, type: ActivityTypes.FOOD, description: "White rice, average", index: 89},
    {id: 50, type: ActivityTypes.FOOD, description: "Quick cooking white basmati", index: 67},
    {id: 51, type: ActivityTypes.FOOD, description: "Brown rice, average", index: 50},
    {id: 52, type: ActivityTypes.FOOD, description: "Converted, white rice (Uncle Ben's®)", index: 38},
    {id: 53, type: ActivityTypes.FOOD, description: "Whole wheat kernels, average", index: 30},
    {id: 54, type: ActivityTypes.FOOD, description: "Bulgur, average", index: 48},
    {id: 56, type: ActivityTypes.FOOD, description: "Graham crackers", index: 74},
    {id: 57, type: ActivityTypes.FOOD, description: "Vanilla wafers", index: 77},
    {id: 58, type: ActivityTypes.FOOD, description: "Shortbread", index: 64},
    {id: 59, type: ActivityTypes.FOOD, description: "Rice cakes, average", index: 82},
    {id: 60, type: ActivityTypes.FOOD, description: "Rye crisps, average", index: 64},
    {id: 61, type: ActivityTypes.FOOD, description: "Soda crackers", index: 	74},
    {id: 63, type: ActivityTypes.FOOD, description: "Ice cream, regular", index: 57},
    {id: 64, type: ActivityTypes.FOOD, description: "Ice cream, premium", index: 38},
    {id: 65, type: ActivityTypes.FOOD, description: "Milk, full fat", index: 41},
    {id: 66, type: ActivityTypes.FOOD, description: "Milk, skim", index: 32},
    {id: 67, type: ActivityTypes.FOOD, description: "Reduced-fat yogurt with fruit, average", index: 33},
    {id: 69, type: ActivityTypes.FOOD, description: "Apple, average", index: 39},
    {id: 70, type: ActivityTypes.FOOD, description: "Banana, ripe", index: 62},
    {id: 71, type: ActivityTypes.FOOD, description: "Dates, dried", index: 42},
    {id: 72, type: ActivityTypes.FOOD, description: "Grapefruit", index: 25},
    {id: 73, type: ActivityTypes.FOOD, description: "Grapes, average", index: 59},
    {id: 74, type: ActivityTypes.FOOD, description: "Orange, average", index: 40},
    {id: 75, type: ActivityTypes.FOOD, description: "Peach, average", index: 42},
    {id: 76, type: ActivityTypes.FOOD, description: "Peach, canned in light syrup", index: 40},
    {id: 77, type: ActivityTypes.FOOD, description: "Pear, average", index: 38},
    {id: 78, type: ActivityTypes.FOOD, description: "Pear, canned in pear juice", index: 43},
    {id: 79, type: ActivityTypes.FOOD, description: "Prunes, pitted", index: 29},
    {id: 80, type: ActivityTypes.FOOD, description: "Raisins", index: 64},
    {id: 81, type: ActivityTypes.FOOD, description: "Watermelon", index: 72},
    {id: 83, type: ActivityTypes.FOOD, description: "Baked beans, average", index: 40},
    {id: 84, type: ActivityTypes.FOOD, description: "Blackeye peas, average", index: 33},
    {id: 85, type: ActivityTypes.FOOD, description: "Black beans", index: 30},
    {id: 86, type: ActivityTypes.FOOD, description: "Chickpeas, average", index: 10},
    {id: 87, type: ActivityTypes.FOOD, description: "Chickpeas, canned in brine", index: 38},
    {id: 88, type: ActivityTypes.FOOD, description: "Navy beans, average", index: 	31},
    {id: 89, type: ActivityTypes.FOOD, description: "Kidney beans, average", index: 29},
    {id: 90, type: ActivityTypes.FOOD, description: "Lentils, average", index: 29},
    {id: 91, type: ActivityTypes.FOOD, description: "Soy beans, average", index: 15},
    {id: 92, type: ActivityTypes.FOOD, description: "Cashews, salted", index: 27},
    {id: 93, type: ActivityTypes.FOOD, description: "Peanuts, average", index: 7},
    {id: 95, type: ActivityTypes.FOOD, description: "Fettucini, average", index: 32},
    {id: 96, type: ActivityTypes.FOOD, description: "Macaroni, average", index: 47},
    {id: 97, type: ActivityTypes.FOOD, description: "Macaroni and Cheese (Kraft)", index: 64},
    {id: 98, type: ActivityTypes.FOOD, description: "Spaghetti, white, boiled, average", index: 46},
    {id: 99, type: ActivityTypes.FOOD, description: "Spaghetti, white, boiled 20 min, average", index: 58},
    {id: 100, type: ActivityTypes.FOOD, description: "Spaghetti, wholemeal, boiled, average", index: 42},
    {id: 102, type: ActivityTypes.FOOD, description: "Corn chips, plain, salted, average", index: 42},
    {id: 103, type: ActivityTypes.FOOD, description: "Fruit Roll-Ups®", index: 99},
    {id: 104, type: ActivityTypes.FOOD, description: "M & M's®, peanut", index: 33},
    {id: 105, type: ActivityTypes.FOOD, description: "Microwave popcorn, plain, average", index: 55},
    {id: 106, type: ActivityTypes.FOOD, description: "Potato chips, average", index: 51},
    {id: 107, type: ActivityTypes.FOOD, description: "Pretzels, oven-baked", index: 83},
    {id: 108, type: ActivityTypes.FOOD, description: "Snickers Bar®", index: 51},
    {id: 111, type: ActivityTypes.FOOD, description: "Carrots, average", index: 35},
    {id: 112, type: ActivityTypes.FOOD, description: "Parsnips", index: 52},
    {id: 113, type: ActivityTypes.FOOD, description: "Baked russet potato, average", index: 111},
    {id: 114, type: ActivityTypes.FOOD, description: "Boiled white potato, average", index: 82},
    {id: 115, type: ActivityTypes.FOOD, description: "Instant mashed potato, average", index: 87},
    {id: 116, type: ActivityTypes.FOOD, description: "Sweet potato, average", index: 70},
    {id: 117, type: ActivityTypes.FOOD, description: "Yam, average", index: 54},
    {id: 110, type: ActivityTypes.FOOD, description: "Green peas, average", index: 51},
    {id: 119, type: ActivityTypes.FOOD, description: "Hummus (chickpea salad dip)", index: 6},
    {id: 120, type: ActivityTypes.FOOD, description: "Chicken nuggets, frozen, reheated in microwave oven 5 min", index: 46},
    {id: 121, type: ActivityTypes.FOOD, description: "Pizza, plain baked dough, served with parmesan cheese and tomato sauce", index: 80},
    {id: 122, type: ActivityTypes.FOOD, description: "Pizza, Super Supreme (Pizza Hut)", index: 36},
    {id: 123, type: ActivityTypes.FOOD, description: "Honey, average", index: 61}
];

