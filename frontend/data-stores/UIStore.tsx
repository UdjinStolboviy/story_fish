import { observable, action } from "mobx";

class UIStore {
  @observable searchOverlayOpen = false;

  @action setSearchOverlayOpen(value: boolean) {
    this.searchOverlayOpen = value;
  }
}

export default UIStore;
