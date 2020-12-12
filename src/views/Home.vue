<template>
  <div class="">
    Buttons
    <hr />
    <color-button>Test Button Primary</color-button>
    <color-button color="secondary" large iconLeft="home">
      Big Button
    </color-button>
    <color-button @clicked="clickTest" small iconRight="star">
      Test Click
    </color-button>
    <color-button iconRight="google" to="/test-address">
      Router test
    </color-button>
    <color-button color="#fe235a" iconRight="cart">
      Custom Color
    </color-button>
    <color-button disabled>Test Disabled</color-button>
  </div>
  <div style="margin-top: 3rem">
    Cards
    <hr />
    <color-card maxHeight="20rem" title="Card Title" subtitle="Card Subtitle">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
      feugiat dolor. Nunc auctor varius justo, nec tincidunt libero vestibulum
      nec. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad
      litora torquent per conubia nostra, per inceptos himenaeos. Quisque et
      metus at dui fermentum faucibus laoreet quis turpis. Nunc ac pharetra
      metus, ac porttitor sem. Aliquam at odio velit. Donec porttitor porta urna
      sit amet interdum. Aenean leo nibh, aliquam ac velit sit amet, laoreet
      finibus justo. In tortor neque, blandit id malesuada sit amet, facilisis
      id turpis. Pellentesque feugiat, risus id vulputate placerat, lorem justo
      condimentum nisi, sit amet vehicula sapien metus vitae est. Suspendisse
      vel ex risus. Curabitur auctor felis et sapien ultrices, nec luctus neque
      interdum. Praesent pellentesque venenatis diam non volutpat. Mauris lectus
      ante, sollicitudin sit amet dui ac, hendrerit egestas ex. Pellentesque
      habitant morbi tristique senectus et netus et malesuada fames ac turpis
      egestas. Duis varius ipsum ut lorem consequat maximus. Vestibulum congue
      ac orci in imperdiet. Phasellus ac pellentesque lacus. Suspendisse ut
      justo id enim pharetra luctus. Nunc bibendum, enim et fermentum laoreet,
      metus sapien tempor sem, nec pharetra mauris nibh nec neque. Nullam
      ultricies, erat sed aliquet fermentum, nibh neque sodales neque, ut
      lacinia leo dui at nibh.
    </color-card>
    <color-card title="Aenean leo nibh" subtitle="Class aptent">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
      feugiat dolor. Nunc auctor varius justo, nec tincidunt libero vestibulum
      nec. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad
      litora torquent per conubia nostra, per inceptos himenaeos. Quisque et
      metus at dui fermentum faucibus laoreet quis turpis. Nunc ac pharetra
      metus, ac porttitor sem. Aliquam at odio velit. Donec porttitor porta urna
      sit amet interdum. Aenean leo nibh, aliquam ac velit sit amet, laoreet
      finibus justo. In tortor neque, blandit id malesuada sit amet, facilisis
      id turpis.
      <template v-slot:actions>
        <color-button color="#fe235a">
          Cancel
        </color-button>
        <color-button color="secondary">
          Save
        </color-button>
      </template>
    </color-card>
    <color-card
      title="Aenean leo nibh"
      subtitle="Class aptent"
      color="secondary"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
      feugiat dolor. Nunc auctor varius justo, nec tincidunt libero vestibulum
      nec.
      <template v-slot:actions>
        <color-button color="#fe235a">
          Cancel
        </color-button>
        <color-button color="secondary">
          Save
        </color-button>
      </template>
    </color-card>
    <color-card
      title="Custom Color card"
      subtitle="Class aptent"
      color="#fe235a"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
      feugiat dolor. Nunc auctor varius justo, nec tincidunt libero vestibulum
      nec.
    </color-card>
  </div>
  <div>
    <color-icon icon="home"></color-icon>
  </div>
  <div style="margin-top: 3rem">
    Progress Bar
    <hr />
    <color-progress-bar :percentage="50"></color-progress-bar>
    <color-progress-bar :percentage="50"></color-progress-bar>
    <color-progress-bar :percentage="50"></color-progress-bar>
    <color-progress-bar :percentage="50"></color-progress-bar>
    <color-progress-bar indeterminate></color-progress-bar>
    <color-progress-bar color="secondary" indeterminate></color-progress-bar>
    <color-progress-bar
      color="#fe235a"
      showPercent
      :percentage="70"
    ></color-progress-bar>
    <color-progress-bar color="#ae235a" slim indeterminate></color-progress-bar>
  </div>
  <div>
    Loading
    <hr />
    <color-loading></color-loading>
    <color-loading loadingText="With Loading Text"></color-loading>
    <color-loading color="#ae235a" loadingText="Custom Color"></color-loading>
    <color-loading
      color="#fe235a"
      :dotNumber="5"
      loadingText="More Dots!!"
    ></color-loading>
    <color-loading
      color="secondary"
      :dotNumber="8"
      loadingText="Even More Dots!!!!"
    ></color-loading>
  </div>
  <div style="height: 20rem"></div>
</template>

<script>
import ColorButton from "@/components/color-button/ColorButton.vue";
import ColorCard from "@/components/color-card/ColorCard.vue";
import ColorLoading from "@/components/color-loading/ColorLoading.vue";
import { useColorApp } from "@/hooks/color-app";
import ColorIcon from "@/components/color-icon/ColorIcon.vue";

export default {
  name: "Home",
  components: {
    ColorButton,
    ColorCard,
    ColorLoading,
    ColorIcon,
  },
  setup() {
    const colorApp = useColorApp();
    function clickTest() {
      console.log("button clicked");
      colorApp.darkMode = !colorApp.darkMode;
    }

    return {
      clickTest,
    };
  },
};
</script>
