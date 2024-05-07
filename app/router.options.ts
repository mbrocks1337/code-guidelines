import type {
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
} from "vue-router";

export default {
  scrollBehavior(
    to: RouteLocationNormalized,
    from: RouteLocationNormalizedLoaded,
  ) {
    if (to.hash === "") return { top: 0 };

    const behavior = {
      el: to.hash,
      top: 85,
      behavior: "smooth",
    };

    if (from.path !== "/") {
      return behavior;
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(behavior);
      }, 500);
    });
  },
};
