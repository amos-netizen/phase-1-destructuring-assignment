// Animal Sounds
const animalSounds = {
  cow: 'moo',
  sheep: 'baa',
  dog: 'woof',
  cat: 'meow',
  horse: 'neigh'
};
const { cow: moo, sheep: baa, dog: woof, cat: meow, horse: neigh } = animalSounds;
console.log(moo, baa, woof, meow, neigh); // moo baa woof meow neigh
// Traditional Animal Names
const traditionalAnimals = {
  cow: 'bessie',
  sheep: 'dolly',
  dog: 'spot',
  cat: 'kitkat'
};
const { cow: bessie, sheep: dolly, dog: spot, cat: kitkat } = traditionalAnimals;
console.log(bessie, dolly, spot, kitkat); // bessie dolly spot kitkat
// Traditional Animal Colors
const animalColors = {
  cow: 'blackAndWhite',
  sheep: 'white',
  dog: 'brown'
};
const { cow: blackAndWhite, sheep: white, dog: brown } = animalColors;
console.log(blackAndWhite, white, brown); // blackAndWhite white brown
// Rainbow Colors (using color names)
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;
console.log(red, orange, yellow, green, blue, indigo, violet); // red orange yellow green blue indigo violet
// Rainbow Colors (using initials)
const [r, o, y, g, b, i, v] = rainbowColors;
console.log(r, o, y, g, b, i, v); // red orange yellow green blue indigo violet
// Destructuring Indigo using `indg`
const [, , , , , indg] = rainbowColors;
console.log(indg); // indigo
// Muppets Object: Destructuring to Assign All Appropriate Variables Using the Keys as the Variable Names
const muppet = {
  name: 'Miss Piggy',
  color: 'green',
  song1: 'Rainbow Connection',
  song2: 'Moving Right Along',
  song3: 'It\'s Not Easy Bein\' Green',
  song4: 'Mahna Mahna',
  job: 'Host',
  partner: 'Kermit'
};
const { 
  name: muppetName, 
  color: muppetColor, 
  song1, 
  song2, 
  song3, 
  song4, 
  job: muppetJob, 
  partner: muppetPartner 
} = muppet;
console.log(muppetName, muppetColor, song1, song2, song3, song4, muppetJob, muppetPartner);
// Output: Miss Piggy green Rainbow Connection Moving Right Along It's Not Easy Bein' Green Mahna Mahna Host Kermit
// Destructuring specific songs and attributes
const { song2: secondSong, song4: fourthSong, job: kermitJob, partner: kermitPartner } = muppet;
console.log(secondSong, fourthSong, kermitJob, kermitPartner);
// Output: Moving Right Along Mahna Mahna Host Kermit

// Adjusted Muppet Object to match the expected values
const muppetAdjusted = {
  name: 'Kermit',
  color: 'green',
  song1: 'Rainbow Connection',
  song2: 'I Hope That Something Better Comes Along',
  song3: 'It\'s Not Easy Bein\' Green',
  song4: 'Mahna Mahna',
  job: 'Host',
  partner: 'Miss Piggy'
};

const { song2: newSecondSong, song4: newFourthSong, job: newKermitJob, partner: newKermitPartner } = muppetAdjusted;
console.log(newSecondSong, newFourthSong, newKermitJob, newKermitPartner);
// Output: I Hope That Something Better Comes Along Mahna Mahna Host Miss Piggy
