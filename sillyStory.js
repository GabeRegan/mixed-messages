const names = ['Danial', 'Gabe', 'Gavin', 'Stephen', 'Dr.Doofinsmirtz', 'Your Mom', 'Donald Trump', 'Kamala Harris', 'Joe Biden', 'Alison', 'Kimberly', 'Sarah', 'Dummy', 'Golum', 'Link', 'Zelda', 'Taylor Swift', 'Lord Voldimort', 'Moon Lord', 'Steve', 'Minecraft Steve', 'Jim Carry', 'Tammy', 'Pam', 'Cleatus Curtis', 'Winston', 'Harold', 'Brianna', 'Grechen Whitmer', 'Ron Desantez', 'Child', 'Idiot', 'A random weed dealer'];
const pastActions = ['killed', 'attacked', 'kissed', 'sniffed', 'caressed', 'exploded', 'smiled at', 'tazed', 'summoned a beetle upon', 'cursed', 'hugged', 'stank around'];
const presentActions = ['kill', 'kiss', 'crap on', 'hug', 'gundown', 'sniff', 'smile at', 'incinerate', 'tell on', 'decapitate', 'sing to', 'dance with', 'sneeze on', 'run away from'];
const pastFeelings = ['thrilled', 'happy', 'sad', 'angry', 'elated', 'romantic', 'offended', 'voilent', 'chill', 'beautiful', 'powerful', 'stupid', 'sentient', 'high', 'murderious', 'constipated'];

const randomName = `${names[Math.floor(Math.random() * names.length)]}`;
const randomName2 = `${names[Math.floor(Math.random() * names.length)]}`;
const randomPastAction = `${pastActions[Math.floor(Math.random() * pastActions.length)]}`;
const randomPresentAction = `${presentActions[Math.floor(Math.random() * presentActions.length)]}`;
const randomPastFeeling = `${pastFeelings[Math.floor(Math.random() * pastFeelings.length)]}`;

console.log(' ');
console.log(`${randomName} ${randomPastAction} ${randomName2}.`);
console.log(`This made ${randomName2} feel ${randomPastFeeling}...`);
console.log(`So ${randomName2} decided to ${randomPresentAction} ${randomName}.`);
console.log(' ');