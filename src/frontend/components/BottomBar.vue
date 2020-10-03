<script>
import Applicationable from "vuetify/lib/mixins/applicationable";
import ButtonGroup from "vuetify/lib/mixins/button-group";
import Colorable from "vuetify/lib/mixins/colorable";
import Measurable from "vuetify/lib/mixins/measurable";
import Proxyable from "vuetify/lib/mixins/proxyable";
import Scrollable from "vuetify/lib/mixins/scrollable";
import Themeable from "vuetify/lib/mixins/themeable";
import { factory as ToggleableFactory } from "vuetify/lib/mixins/toggleable"; // Utilities

import mixins from "vuetify/lib/util/mixins";
import { breaking } from "vuetify/lib/util/console";

export default mixins(
  Applicationable("bottom", ["height", "inputValue"]),
  Colorable,
  Measurable,
  ToggleableFactory("inputValue"),
  Proxyable,
  Scrollable,
  Themeable
  /* @vue/component */
).extend({
  name: "bottom-bar",
  props: {
    backgroundColor: String,
    grow: Boolean,
    height: {
      type: [Number, String],
      default: 56
    },
    hideOnScroll: Boolean,
    horizontal: Boolean,
    inputValue: {
      type: Boolean,
      default: true
    },
    shift: Boolean
  },

  data() {
    return {
      isActive: this.inputValue
    };
  },

  computed: {
    canScroll() {
      return (
        Scrollable.options.computed.canScroll.call(this) &&
        (this.hideOnScroll || !this.inputValue)
      );
    },

    classes() {
      return {
        "bottom-bar--absolute": this.absolute,
        "bottom-bar--grow": this.grow,
        "bottom-bar--fixed": !this.absolute && (this.app || this.fixed),
        "bottom-bar--horizontal": this.horizontal,
        "bottom-bar--shift": this.shift
      };
    },

    styles() {
      return {
        ...this.measurableStyles,
        transform: this.isActive ? "none" : "translateY(100%)"
      };
    }
  },

  created() {
    // eslint-disable-next-line no-prototype-builtins
    if (this.$attrs.hasOwnProperty("active")) {
      breaking("active.sync", "value or v-model", this);
    }
  },

  methods: {
    thresholdMet() {
      this.isActive = !this.isScrollingUp;
      this.$emit("update:input-value", this.isActive);
    },

    updateApplication() {
      return this.$el ? this.$el.clientHeight : 0;
    }
  },

  render(h) {
    const data = this.setBackgroundColor(this.backgroundColor, {
      staticClass: "bottom-bar",
      class: this.classes,
      style: this.styles
    });

    if (this.canScroll) {
      data.directives = data.directives || [];
      data.directives.push({
        arg: this.scrollTarget,
        name: "scroll",
        value: this.onScroll
      });
    }

    return h(
      ButtonGroup,
      this.setTextColor(this.color, data),
      this.$slots.default
    );
  }
});
</script>

<style>
.theme--light.bottom-bar {
  background-color: #ffffff;
  color: rgba(0, 0, 0, 0.87);
}
.theme--dark.bottom-bar {
  background-color: #2e2e2e;
  color: #ffffff;
}

.v-item-group.bottom-bar {
  bottom: 0;
  display: flex;
  left: 0;
  justify-content: center;
  width: 100%;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
}
.v-item-group.bottom-bar
  .v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: transparent;
}
.v-item-group.bottom-bar .v-btn {
  border-radius: 0;
  box-shadow: none;
  flex: 0 1 auto;
  font-size: 0.75rem;
  height: inherit;
  max-width: 168px;
  min-width: 80px;
  position: relative;
  text-transform: none;
}
.v-item-group.bottom-bar .v-btn:after {
  content: none;
}
.v-item-group.bottom-bar .v-btn .v-btn__content {
  flex-direction: column-reverse;
  height: inherit;
}
.v-item-group.bottom-bar .v-btn .v-btn__content > *:not(.v-icon) {
  line-height: 1.2;
}
.v-item-group.bottom-bar .v-btn.v-btn--active {
  color: inherit;
}
.v-item-group.bottom-bar .v-btn.v-btn--active:not(:hover):before {
  opacity: 0;
}

.v-item-group.bottom-bar--absolute,
.v-item-group.bottom-bar--fixed {
  z-index: 4;
}

.v-item-group.bottom-bar--absolute {
  position: absolute;
}

.v-item-group.bottom-bar--active {
  transform: translate(0, 0);
}

.v-item-group.bottom-bar--fixed {
  position: fixed;
}

.v-item-group.bottom-bar--grow .v-btn {
  width: 100%;
}

.v-item-group.bottom-bar--horizontal .v-btn > .v-btn__content {
  flex-direction: row-reverse;
}
.v-item-group.bottom-bar--horizontal .v-btn > .v-btn__content > .v-icon {
  margin-bottom: 0;
  margin-right: 16px;
}

.v-item-group.bottom-bar--shift .v-btn .v-btn__content > *:not(.v-icon) {
  opacity: 0;
  position: absolute;
  top: calc(100% - 12px);
  transform: scale(0.9);
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.v-item-group.bottom-bar--shift .v-btn--active .v-btn__content > .v-icon {
  transform: translateY(-8px);
}
.v-item-group.bottom-bar--shift
  .v-btn--active
  .v-btn__content
  > *:not(.v-icon) {
  opacity: 1;
  top: calc(100% - 22px);
  transform: scale(1);
}
</style>
