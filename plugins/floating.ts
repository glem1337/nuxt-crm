import 'floating-vue/dist/style.css';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    import('floating-vue').then((module) => {
      const FloatingVue = module.default;
      nuxtApp.vueApp.use(FloatingVue);
    });
  }
});
