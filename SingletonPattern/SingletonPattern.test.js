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

const firstFile = require("./FirstUse");
const secondFile = require("./SecondUse");
const logFirstImplementation = firstFile.exportedFunction;
const logSecondImplementation = secondFile.exportedFunction;

const test = new logFirstImplementation();
const test2 = new logSecondImplementation();
console.log(test, test2);
/*describe("REQUIRE", () => {
  it("Should Import The FancyLogger Class", () => {
    const test = new FancyLogger();
    expect(test).toEqual({ logs: [] });
  });
});
*/
