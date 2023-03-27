const activities = [
  { title: 'Hiking' },
  { title: 'Cycling' },
  { title: 'Running' },
  { title: 'Cooking' },
  { title: 'Reading' },
  { title: 'Writing' },
  { title: 'Painting' },
  { title: 'Photography' },
  { title: 'Traveling' },
  { title: 'Gardening' },
  { title: 'Snowboarding' },
  { title: 'Horseback riding' },
  { title: 'Playing music' },
  { title: 'Singing' },
  { title: 'Dancing' },
  { title: 'Acting' },
  { title: 'Watching movies' },
  { title: 'Playing video games' },
  { title: 'Going to the gym' },
  { title: 'Yoga' },
  { title: 'Meditation' },
  { title: 'Swimming' },
  { title: 'Surfing' },
  { title: 'Scuba diving' },
  { title: 'Skydiving' },
  { title: 'Rock climbing' },
  { title: 'Dance classes' },
  { title: 'Language learning' },
  { title: 'Book clubs' },
  { title: 'Wine tasting' },
  { title: 'Bourbon tasting' },
  { title: 'Whiskey tasting' },
  { title: 'Cocktail making' },
  { title: 'Jewelry making' },
  { title: 'Woodworking' },
];

const professions = [
  'Information Technology (IT)',
  'Healthcare',
  'Finance and Accounting',
  'Education',
  'Engineering',
  'Sales and Marketing',
  'Law and Legal Services',
  'Management and Administration',
  'Creative Arts and Design',
  'Hospitality and Tourism',
  'Human Resources',
  'Public Relations and Communications',
  'Science and Research',
  'Consulting',
  'Non-profit and Social Services',
];

const dietaryRestrictions = [
  'lactose intolerance',
  'gluten-free',
  'vegetarian',
  'vegan',
  'pescatarian',
  'kosher',
  'keto',
  'diabetic',
  'wheat',
  'nuts',
  'fish',
  'shellfish',
  'eggs',
  'soy',
];

const cuisines = [
  'african',
  'latin american',
  'mexican',
  'american',
  'spicy',
  'barbecue',
  'indian',
  'thai',
  'chinese',
  'japanese',
  'sushi',
  'greek',
  'mediterranean',
  'french',
  'italian',
  'asian',
  'southern',
  'portugese',
  'spanish',
  'cuban',
  'german',
  'english',
  'seafood',
  'halal',
];
const cuisineObjects = [
  { yelpAlias: 'african', tagName: 'African' },
  { yelpAlias: 'latin', tagName: 'Latin American' },
  { yelpAlias: 'mexican', tagName: 'Mexican' },
  { yelpAlias: 'bbq', tagName: 'Barbeque' },
  { yelpAlias: 'indian', tagName: 'Indian' },
  { yelpAlias: 'thai', tagName: 'Thai' },
  { yelpAlias: 'chinese', tagName: 'Chinese' },
  { yelpAlias: 'japanese', tagName: 'Japanese' },
  { yelpAlias: 'sushi', tagName: 'Sushi' },
  { yelpAlias: 'greek', tagName: 'Greek' },
  { yelpAlias: 'mediterranean', tagName: 'Mediterranean' },
  { yelpAlias: 'french', tagName: 'French' },
  { yelpAlias: 'italian', tagName: 'Italian' },
  { yelpAlias: 'panasian', tagName: 'Asian' },
  { yelpAlias: 'southern', tagName: 'Southern' },
  { yelpAlias: 'portuguese', tagName: 'Portuguese' },
  { yelpAlias: 'spanish', tagName: 'Spanish' },
  { yelpAlias: 'cuban', tagName: 'Cuban' },
  { yelpAlias: 'german', tagName: 'German' },
  { yelpAlias: 'british', tagName: 'British' },
  { yelpAlias: 'seafood', tagName: 'Seafood' },
  { yelpAlias: 'halal', tagName: 'Halal' },
];

module.exports = {
  activities,
  professions,
  dietaryRestrictions,
  cuisines,
  cuisineObjects,
};
