import { CounterHydration, CounterStore } from "./CounterStore";
import { sizeSwitcherStoreFactory } from "./SizeSwitcherStore";
import { UserStore } from "./UserStore";

export type RootStoreHydration = {
    stopwatchStore?: CounterHydration;
};
export class RootStore {
    counterStore: CounterStore;
    userStore: UserStore;
    sizeSwitcherStore: ReturnType<typeof sizeSwitcherStoreFactory>;

    constructor() {
        this.counterStore = new CounterStore(this);
        this.userStore = new UserStore(this);
        this.sizeSwitcherStore = sizeSwitcherStoreFactory(this);
    }

    hydrate(data: RootStoreHydration) {
        if (data.stopwatchStore) {
            this.counterStore.hydrate(data.stopwatchStore);
        }
    }
}