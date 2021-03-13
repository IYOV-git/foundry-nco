export function theCheck(actionDice, dangerDice) {
  const pool = new DicePool({
    rolls: [new Roll(`${actionDice}d6`), new Roll(`${dangerDice}d6`)],
  });

  pool.evaluate();

  console.log(pool.dice);

  const actionResults = pool.dice[0].results
    .map((aR) => aR.result)
    .sort()
    .reverse()
    .map((aR) => ({
      value: aR,
      disc: false,
    }));

  const dangerResults = pool.dice[1].results
    .map((dR) => dR.result)
    .sort()
    .reverse()
    .map((dR) => ({
      value: dR,
      disc: false,
    }));

  actionResults.forEach((aR) => {
    const dRI = dangerResults.findIndex(
      (dR) => !dR.disc && dR.value === aR.value
    );
    if (dRI != -1) {
      aR.disc = true;
      dangerResults[dRI].disc = true;
    }
  });

  console.log(actionResults, dangerResults);

  console.log(
    actionResults.find((aR) => !aR.disc),
    dangerResults.find((dR) => !dR.disc)
  );

  const messageData = {
    speaker: ChatMessage.getSpeaker(),
  };
}
