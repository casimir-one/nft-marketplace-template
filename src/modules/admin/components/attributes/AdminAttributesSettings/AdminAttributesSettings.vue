<template>
  <v-sheet>
    <v-btn
      class="mt-2 ml-2"
      icon
      style="pointer-events: all"
      @click="$router.back()"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <vex-section max-width="1200" class="mx-auto pa-0">
      <ve-stack :gap="32">
        <vex-section-title title="Attribute settings" />
        <attributes-setup :value="$store.getters['attributes/settings']" />
      </ve-stack>
    </vex-section>
  </v-sheet>
</template>

<script>
  import { AttributesSetup } from '@casimir.one/attributes-module';
  import { VexSection, VexSectionTitle } from '@casimir.one/vuetify-extended';
  import { VeStack } from '@casimir.one/vue-elements';

  export default {
    name: 'AdminAttributesSettings',
    components: {
      AttributesSetup,

      VeStack,
      VexSection,
      VexSectionTitle
    }
  };
</script>
