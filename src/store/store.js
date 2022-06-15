import { proxydi } from '@deip/proxydi';

const GETTERS = {
  defaultFungibleToken: (state) => state.assets.data
    .find((asset) => asset.symbol === proxydi.get('env').CORE_ASSET.symbol),
  userNftCollection: (state) => {
    const currentUser = state.currentUser.data;
    if (!currentUser) return null;
    return state.projects.data.find((project) => project.issuer === currentUser._id);
  }
};

const ACTIONS = {
  getCurrentUserNftCollection({ rootGetters, dispatch }) {
    const currentUser = rootGetters['currentUser/data'];

    if (currentUser) {
      dispatch('projects/getListByIssuer', currentUser._id, { root: true });
    }
  }
};

export const store = {
  getters: GETTERS,
  actions: ACTIONS
};
