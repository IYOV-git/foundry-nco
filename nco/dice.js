export function theCheck() {
  let i, j;

  const aDice = 4;
  const dDice = 4;

  const actionDice = aDice + "d6";
  const damageDice = dDice + "d6";

  const actionRoll = new Roll(actionDice);
  const dangerRoll = new Roll(damageDice);

  let pool = new DicePool({
    rolls: [actionRoll, dangerRoll],
  });

  console.log(pool.dice);

  pool.evaluate();

  let actionResult = [];
  let dangerResult = [];

  for (i = 0; i < 4; i++) {
    actionResult.push(pool.dice[0].results[i].result);
  }

  for (j = 0; j < 4; j++) {
    dangerResult.push(pool.dice[1].results[j].result);
  }

  actionResult.sort();
  dangerResult.sort();

  console.log(actionResult, dangerResult);

  for (i = 0; i < actionResult.length; i++) {
    for (j = 0; j < dangerResult.length; j++)
      if (actionResult[i] == dangerResult[j]) {
        actionResult.splice(i, 1);
        dangerResult.splice(j, 1);
      }
  }

  console.log(actionResult, dangerResult);

  const messageData = {
    speaker: ChatMessage.getSpeaker(),
  };
}
