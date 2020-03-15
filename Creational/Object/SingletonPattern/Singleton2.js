/* 
UseFul When You Want To Create A Single Object That Is Shared Amongest Different Resouces.
CONS 
1) Gobal Variables
2) Hard To Test
3) Hard To ReFactor
4) Race Condition

When To Be Used
1) When You Have Small Sets Of Info That Needs To Shared Through Out The Whole Application.
2) A database connection would probably be a better reference.
*/

const Singleton = (function() {
  let pManager;

  function ProcessManager() {
    /*...*/
  }

  function createProcessManager() {
    pManager = new ProcessManager();
    return pManager;
  }

  return {
    getProcessManager: () => {
      if (!pManager) pManager = createProcessManager();
      return pManager;
    }
  };
})();

const singleton = Singleton.getProcessManager();
const singleton2 = Singleton.getProcessManager();

console.log(singleton === singleton2); // true
