const Redis = require('ioredis');
const redis = new Redis();

const PLATES_KEY = 'plates';

const sawPlate = async plate => redis.sadd(PLATES_KEY, plate);

const howManySeen = async () => redis.scard(PLATES_KEY);

const setDemo = async () => {
  await sawPlate('8PLT564');
  await sawPlate('7MRN715');

  // Add 500,000 other unique plates...
  console.log(await howManySeen()); // 500,002
};

setDemo();