let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {

  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 10000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 10000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 10000);
});

test("The h1 header content 2", async () => {
  await page.goto("https://github.com/marketplace");

  await page.waitForSelector('h1');
  const title2 = await page.title();
  expect(title2).toEqual('GitHub Marketplace · to improve your workflow · GitHub');
}, 10000);

test("The h1 header content 3", async () => {
  await page.goto("https://github.com/explore");

  await page.waitForSelector('h1');
  const title2 = await page.title();
  expect(title2).toEqual('Explore GitHub · GitHub');
}, 10000);

test("The h1 header content 4", async () => {
  await page.goto("https://github.com/enterprise");

  await page.waitForSelector('h1');
  const title2 = await page.title();
  expect(title2).toEqual('The AI Powered Developer Platform. · GitHub');
}, 10000);