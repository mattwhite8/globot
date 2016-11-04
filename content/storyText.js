const storyText = {
  page1: {
    pageText: 'In a galaxy not so far from ours, lives a curious robot named GloBot.  She sleeps peacefully, dreaming of exciting adventures.  Shall we wake her up?',
    imageUrl: '../content/images/globot-sleeping.svg',
    imageClassName: 'sleeping-globot',
    imageAlt: 'GloBot sleeping in a gray bed with blue and green covers.',
    choiceButton: {
                    visible: 'visible',
                    text: 'Yes!',
                    result: 'page2'
                  },
    secondChoiceButton: {
                    visible: 'hidden',
                  },
  },

  page2: {
    pageText: '"Oh no! What happened to my glow spot?! What should I do?! I can\'t be GloBot the robot without a glow spot! Should I turn my power off or ask my best friend Janky for help?"',
    imageUrl: '../content/images/oh-no.svg',
    imageClassName: 'surprised-globot',
    imageAlt: 'GloBot looks surprised that her glow is gone',
    choiceButton: {
                    visible: 'visible',
                    text: 'Ask Janky',
                    result: 'page3'
                  },
    secondChoiceButton: {
                    visible: 'visible',
                    text: 'Power Off',
                    result: 'page4'
                  }
  },

  page3: {
    pageText: 'OMG three pages!',
    imageUrl: '../content/images/janky-robot.svg',
    imageClassName: 'janky-robot',
    imageAlt: 'A picture of Janky, GloBot\'s hardscrabble best friend',
    choiceButton: {
                    visible: 'visible',
                    text: 'Yes!',
                    result: 'page5'
                  },
    secondChoiceButton: {
                    visible: 'visible',
                    text: 'No Way!',
                    result: 'page6'
                  }
  },

  page4: {
    pageText: '',
    imageUrl: '',
    imageClassName: '',
    imageAlt: '',
    choiceButton: {
                    visible: 'visible',
                    text: 'Yes!',
                    result: 'page6'
                  },
    secondChoiceButton: {
                    visible: 'visible',
                    text: 'No Way!',
                    result: 'page7'
                  }
  },

  page5: {
    pageText: '',
    imageUrl: '',
    imageClassName: '',
    imageAlt: '',
    choiceButton: {
                    visible: 'visible',
                    text: 'Yes!',
                    result: 'page6'
                  },
    secondChoiceButton: {
                    visible: 'visible',
                    text: 'No Way!',
                    result: 'page7'
                  }
  },

  page6: {
    pageText: '',
    imageUrl: '',
    imageClassName: '',
    imageAlt: '',
    choiceButton: {
                    visible: 'visible',
                    text: 'Yes!',
                    result: 'page6'
                  },
    secondChoiceButton: {
                    visible: 'visible',
                    text: 'No Way!',
                    result: 'page7'
                  }
  },

  page7: {
    pageText: '',
    imageUrl: '',
    imageClassName: '',
    imageAlt: '',
    choiceButton: {
                    visible: 'visible',
                    text: 'Yes!',
                    result: 'page6'
                  },
    secondChoiceButton: {
                    visible: 'visible',
                    text: 'No Way!',
                    result: 'page7'
                  }
  },

};

module.exports = storyText;
