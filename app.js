const app = new Vue({
  el: "#app",

  data() {
    return {
      tasks: [],

      title: "",
      urgency: "",
    };
  },
  methods: {
    addCourse() {
      if (!this.title || !this.urgency) {
        return;
      }

      this.tasks.push({
        title: this.title,
        urgency: this.urgency,
      });

      this.title = "";
      this.urgency = 0;
    },
  },
  computed: {
    Urgent() {
      return this.tasks.sort((a, b) => {
        return b.urgency - a.urgency;
      });
    },
  },
});
