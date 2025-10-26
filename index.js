$("body").terminal
(
  {
    whoami: function()
    {
      this.echo
      (
          " [[b;white;]\n" +
          " About Me\n" +
          " ————————\n" +
          " ]\n" +
          " Hi, I'm Kqpa. An avid maths and computer science enthusiast.\n" +
          " I'm currently knowledgeable in Python, Java, C/C++, *NIX Operating Systems, \n" +
          " and varios other technologies. If you'd like to talk or know \n" +
          " more about me, you're more than welcome to contact me.\n"
      );
    },

    socials: function()
    {
      this.echo
      (
          " [[b;white;]\n" +
          " Socials\n" +
          " ————————\n" +
          " ]\n" +
          " GitHub   |   http://github.com/Kqpa \n" +
          " Twitter  |   https://twitter.com/epicmanborax \n" +
          " Reddit   |   https://reddit.com/u/Kqpa \n" +
          " Steam    |   https://steamcommunity.com/id/kqpa_ \n"
      );
    },

    contact: function()
    {
      this.echo
      (
          " [[b;white;]\n" +
          " Contact\n" +
          " ————————\n" +
          " ]\n" +
          " Mail     |   kqpa@pm.me\n" +
          " Discord  |   Kqpa [ID: 419181431512891413]\n"
      );
    },

    help: function()
    {
      this.echo
      (
          " [[b;white;]\n" +
          " Help\n" +
          " ————————\n" +
          " ]\n" +
          " $ whoami   |  A brief summary about me. \n" +
          " $ socials  |  Platforms that you can find me on. \n" +
          " $ contact  |  Ways to contact me. \n" +
          " $ clear    |  Clears the terminal. \n"
      );
    },
  },
  
  {
    greetings:  "Welcome to my personal website, run 'help' for a list of commands.\n",
    prompt:     "[guest[[b;grey;]@]kqpa.me ~]$ ",
  }
);
