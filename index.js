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
          "GitHub ─ http://github.com/Kqpa \n\n" +
          "Twitter ─ https://twitter.com/epicmanborax \n\n" +
          "Reddit ─ https://reddit.com/u/Kqpa \n\n" +
          "Steam ─ https://steamcommunity.com/id/kqpa_ \n"
      );
    },

    contact: function () {
      this.echo(
        "\n" +
          "PM me on Twitter ─ @epicmanborax \n\n" +
          "Mail ─ kqpa@pm.me \n\n" +
          "Discord ─ Kqpa#0001 (ID: 419181431512891413) \n\n"
      );
    },

    help: function () {
      this.echo(
        "\n" +
          "$ whoami ➙ About me. \n\n" +
          "$ socials ➙ Places that you can find me on. \n\n" +
          "$ contact ➙ Ways to reach me. \n\n" +
          "$ clear ➙ Clear outputs. \n"
      );
    },
  },
  {
    greetings:
      "Welcome to my personal website, run `help` for a list of commands.",
  }
);