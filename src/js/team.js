export default class Team {
  team;

  constructor(team) {
    this.team = team;
  }

  // [Symbol.iterator]() {
  //   let nextIdx = 0;
  //   const team = this.team;
  //   return {
  //     next() {
  //       if (nextIdx === team.length) {
  //         return { done: true };
  //       }

  //       const result = {
  //         value: team[nextIdx],
  //         done: false,
  //       };

  //       nextIdx++;

  //       return result;
  //     },
  //   };
  // }

  // * [Symbol.iterator]() {
  //   let nextIdx = 0;
  //   while (nextIdx < this.team.length) {
  //     yield this.team[nextIdx];
  //     nextIdx += 1;
  //   }
  // }

  // iterator() {
  //   this.team.length = Object.keys(this.team).length;
  //   this.team[Symbol.iterator] = [][Symbol.iterator];
  //   return console.log(...this.team);
  //   return [...this.team];
  // }
}

// const p = new Team([{
//   name: 'Лучник',
//   type: 'Bowman',
//   health: 50,
//   level: 1,
//   attack: 40,
//   defence: 10,
// },
// {
//   name: 'Лучник',
//   type: 'Bowman',
//   health: 50,
//   level: 1,
//   attack: 40,
//   defence: 10,
// },
// {
//   name: 'Лучник',
//   type: 'Bowman',
//   health: 50,
//   level: 1,
//   attack: 40,
//   defence: 10,
// }]);
// console.log(...p);
