import FancyLogger from "./fancyLogger";
console.log("connected");
console.log(FancyLogger);
/* 
UseFul When You Want To Create A Single Object That Is Shared Amongest Different Resouces.
CONS 
1) Gobal Variables
2) Hard To Test
3) Hard To ReFactor
4) Race Condition

When To Be Used
1) When You Have Small Sets Of Info That Needs To Shared Through Out The Whole Application.
*/
describe("REQUIRE", () => {
  it("Should Import The FancyLogger Class", () => {
    const test = new fancyLogger();
    expect(test).toEqual({ logs: [] });
  });
});
