export const logoutMixin = {
  methods: {
    efetuarLogout() {
      this.$store.commit("LOGOUT_USER");
      this.$router.push({ name: "login" });
    },
  },
};
