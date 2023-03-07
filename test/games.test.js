import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";

describe("store/games/games", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let NuxtStore;
  let store;
  beforeAll(async () => {
    const storePath = `${process.env.buildDir}/store.js`;
    NuxtStore = await import(storePath);
  });
  beforeEach(async () => {
    store = await NuxtStore.createStore();
  });

  describe("consoleType", () => {
    let playstationfour;
    beforeEach(() => {
      playstationfour = store.getters["games/games/playstationfour"];
    });
    test("Call of Duty: Black Ops 4 should be on only playStation 4", () => {
      expect(playstationfour).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            console: "PlayStation 4",
            title: "Call of Duty: Black Ops 4",
          }),
        ])
      );
    });
  });

  describe("cheapGames", () => {
    let cheapGames;
    beforeEach(() => {
      cheapGames = store.getters["games/games/cheapGames"];
    });
    test(`StarWars BattleFront must cost exactly ${15.3}`, () => {
      expect(cheapGames).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            price: 15.3,
          }),
        ])
      );
    });
  });

  describe("bestGames", () => {
    let bestGames;
    beforeEach(() => {
      bestGames = store.getters["games/games/bestGames"];
    });
    test("Display only the best titles we have", () => {
      expect(bestGames).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            rating: 9,
          }),
        ])
      );
    });
  });
});