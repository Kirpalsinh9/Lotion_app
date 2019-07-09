let connect = require("lotion-connect");
async function main() {
  let client = await connect(
    "80a90b3e91209391de00c71a6bb1e46ae6368901c0ab6be39b8234b1cf2040a1",
    {
      nodes: ["ws://localhost:26657"]
    }
  );
  console.log("Connected");
  console.log("State:", await client.state);
  console.log("result", await client.send({ field1: 6, field2: 6 }));
  console.log("State", await client.state);
}
main();
