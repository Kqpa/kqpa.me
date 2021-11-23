$("body").terminal(
  {
    whoami: function () {
      this.echo(
        "\n" +
          "Hey there! I'm Kqpa, and I'm keen on technology, science, music, sports, LEGOs, games, and a variety of other things.\n" +
          "If you'd like to learn more about me, you're more than welcome to message me. \n"
      );
    },

    socials: function () {
      this.echo(
        "\n" +
          "GitHub ─ Kqpa \n\n" +
          "GitLab ─ Kqpa \n\n" +
          "YouTube ─ Kqpa \n\n" +
          "Twitter ─ @epicmanborax \n\n" +
          "Reddit ─ Kqpa \n\n" +
          "Twitch ─ kqpa \n\n" +
          "Steam ─ Kqpa \n"
      );
    },

    contact: function () {
      this.echo(
        "\n" +
          "PM me on Twitter ─ @epicmanborax \n\n" +
          "Mail ─ kqpa@pm.me \n\n" +
          "Discord ─ Kqpa#0001 \n\n"
      );
    },

    help: function () {
      this.echo(
        "\n" +
          "$ whoami ➙ About me. \n\n" +
          "$ socials ➙ Places that you can find me on. \n\n" +
          "$ contact ➙ Ways to reach me. \n\n" +
          "$ clear ➙ Clear the terminal outputs. \n"
      );
    },
  },
  {
    greetings:
      "Welcome to my personal website, run `help` for a list of commands.",
  }
);