import 'roboto-fontface/css/roboto/roboto-fontface.css';
import './styles/app.scss';
import '@mdi/font/css/materialdesignicons.css';

import Vue from 'vue';

import { CreateApp } from '@casimir.one/platform-util';
import { ValidationPlugin } from '@casimir.one/validation-plugin';
import { VuetifyExtended } from '@casimir.one/vuetify-extended';
import { EnvModule } from '@casimir.one/env-module';
import { PortalsModule } from '@casimir.one/portals-module';
import { ScopesModule } from '@casimir.one/scopes-module';
import { AttributesModule } from '@casimir.one/attributes-module';
import { LayoutsModule } from '@casimir.one/layouts-module';
import { AuthModule } from '@casimir.one/auth-module';
import { UsersModule } from '@casimir.one/users-module';
import { TeamsModule } from '@casimir.one/teams-module';
import { NftCollectionsModule } from '@casimir.one/nft-collections-module';
import { NftItemsModule } from '@casimir.one/nft-items-module';
import { AssetsModule } from '@casimir.one/assets-module';

import { NftMarketplaceAuthModule } from '@/modules/auth';
import { NftMarketplaceMarketplaceModule } from '@/modules/marketplace';
import { NftMarketplaceAdminModule } from '@/modules/admin';
import { NftMarketplaceProfileModule } from '@/modules/profile';
import { NftMarketplaceWalletModule } from '@/modules/wallet';
import { NftMarketplaceModerationModule } from '@/modules/moderation';

import vuetify from '@/plugins/vuetify';
import i18n from '@/plugins/i18n';
import router from '@/router';
import store from '@/store';
import App from '@/App';
import { layoutBuilderElements } from '@/config/layoutBuilder';

Vue.config.productionTip = false;

const EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
  $eventBus: {
    get() {
      return EventBus;
    }
  }
});

const nftMarketplaceApp = new CreateApp(Vue, {
  vuetify,
  i18n,
  router,
  store
});

const usersModuleOptions = {
  attributesMappedKeys: [
    { key: 'name', label: 'Name', allowedTypes: ['text'] },
    { key: 'email', label: 'Email', allowedTypes: ['text'] }
  ]
};

const nftCollectionsModuleOptions = {
  attributesMappedKeys: [
    { key: 'name', label: 'Name', allowedTypes: ['text'] }
  ]
};

const nftItemsModuleOptions = {
  attributesMappedKeys: [
    { key: 'price', label: 'Nft item price', allowedTypes: ['asset'] },
    {
      key: 'image',
      label: 'Image',
      allowedTypes: ['image']
    },
    { key: 'name', label: 'Name', allowedTypes: ['text'] }
  ]
};

const layoutsModuleOptions = {
  blocks: layoutBuilderElements.blocks,
  components: {
    ...layoutBuilderElements.components
  }

};

nftMarketplaceApp
  .addModule(EnvModule)

  .addModule(ValidationPlugin)
  .addModule(VuetifyExtended, { vuetify })

  .addModule(PortalsModule)
  .addModule(ScopesModule)
  .addModule(AttributesModule)
  .addModule(LayoutsModule, layoutsModuleOptions)
  .addModule(AuthModule)
  .addModule(UsersModule, usersModuleOptions)
  .addModule(TeamsModule)
  .addModule(NftCollectionsModule, nftCollectionsModuleOptions)
  .addModule(NftItemsModule, nftItemsModuleOptions)
  .addModule(AssetsModule)
  .addModule(NftMarketplaceWalletModule)
  .addModule(NftMarketplaceAuthModule)
  .addModule(NftMarketplaceMarketplaceModule)
  .addModule(NftMarketplaceAdminModule)
  .addModule(NftMarketplaceProfileModule)
  .addModule(NftMarketplaceModerationModule)

  .bootstrap()

  .then(() => {
    const app = new Vue({
      vuetify,
      i18n,
      router,
      store,
      render: (h) => h(App)
    });

    app.$mount('#app');
  });
