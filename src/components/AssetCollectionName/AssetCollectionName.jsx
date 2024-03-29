import { defineComponent } from '@casimir.one/platform-util';

export default defineComponent({
  name: 'AssetCollectionName',

  props: {
    schemaData: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    nftCollectionName() {
      const nftCollectionData = this.$store.getters['nftCollections/one'](
        this.schemaData.data.nftCollectionId
      );

      if (!nftCollectionData?.attributes) return null;

      return this.$attributes
        .getMappedData('nftCollection.name', nftCollectionData.attributes)?.value;
    }
  },

  render() {
    return <span>{ this.nftCollectionName }</span>;
  }
});
