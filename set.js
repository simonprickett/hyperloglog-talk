const platesSeen = new Set();

const sawPlate = plate => platesSeen.add(plate);

const howManySeen = () => platesSeen.size;

sawPlate('8PLT564');
sawPlate('7MRN715');
// Add 500,000 other plates...

console.log(howManySeen()); // 500,002