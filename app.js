let lotion = require("lotion");
let app = lotion({
  initialState: {
    count: 0
  },
  logTendermint: false,
  rpcPort: 26657
});

app.use(function(state, tx) {
  let main = tx.field1 * tx.field2;
  if (main % 6 === 0) {
    state.count++;
  }
});
app.start().then(function(appInfo) {
  console.log(`app started gci: ${appInfo.GCI}`);
});
