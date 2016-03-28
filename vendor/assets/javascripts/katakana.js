window.$ = jQuery;

var alphabet = [
  {
    japanese:'ア',
    english:'a'
  },{
    japanese:'イ',
    english:'i'
  },{
    japanese:'ウ',
    english:'u'
  },{
    japanese:'エ',
    english:'e'
  },{
    japanese:'オ',
    english:'o'
  },{
    japanese:'カ',
    english:'ka'
  },{
    japanese:'キ',
    english:'ki'
  },{
    japanese:'ク',
    english:'ku'
  },{
    japanese:'ケ',
    english:'ke'
  },{
    japanese:'コ',
    english:'ko'
  },{
    japanese:'サ',
    english:'sa'
  },{
    japanese:'シ',
    english:'shi'
  },{
    japanese:'ス',
    english:'su'
  },{
    japanese:'セ',
    english:'se'
  },{
    japanese:'ソ',
    english:'so'
  },{
    japanese:'タ',
    english:'ta'
  },{
    japanese:'チ',
    english:'chi'
  },{
    japanese:'ツ',
    english:'tsu'
  },{
    japanese:'テ',
    english:'te'
  },{
    japanese:'ト',
    english:'to'
  },{
    japanese:'ナ',
    english:'na'
  },{
    japanese:'ニ',
    english:'ni'
  },{
    japanese:'ヌ',
    english:'nu'
  },{
    japanese:'ネ',
    english:'ne'
  },{
    japanese:'ノ',
    english:'no'
  },{
    japanese:'ハ',
    english:'ha'
  },{
    japanese:'ヒ',
    english:'hi'
  },{
    japanese:'フ',
    english:'fu'
  },{
    japanese:'ヘ',
    english:'he'
  },{
    japanese:'ホ',
    english:'ho'
  },{
    japanese:'マ',
    english:'ma'
  },{
    japanese:'ミ',
    english:'mi'
  },{
    japanese:'ム',
    english:'mu'
  },{
    japanese:'メ',
    english:'me'
  },{
    japanese:'モ',
    english:'mo'
  },{
    japanese:'ヤ',
    english:'ya'
  },{
    japanese:'ユ',
    english:'yu'
  },{
    japanese:'ヨ',
    english:'yo'
  },{
    japanese:'ラ',
    english:'ra'
  },{
    japanese:'リ',
    english:'ri'
  },{
    japanese:'ル',
    english:'ru'
  },{
    japanese:'レ',
    english:'re'
  },{
    japanese:'ロ',
    english:'ro'
  },{
    japanese:'ワ',
    english:'wa'
  },{
    japanese:'ヲ',
    english:'wo'
  },{
    japanese:'ン',
    english:'n'
  }
];

var missteps_count = 0;
var correct_count = 0;

function randomLetter () {
  var randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

var letter_container;
var current_letter;
var english_letter;

var audio_button;
var english_button;
var next_button;
var remove_button;

var animation;

function newLetter () {
  current_letter = randomLetter();
  letter_container.text(current_letter.japanese);
  english_letter.text(current_letter.english);

  letter_container.attr('data-audio', '/audio/' + current_letter.english + '.mp3');

  $('audio').attr('src', letter_container.attr('data-audio'));
}

$(document).ready(function () {
  $('body').sakura('start', {
    blowAnimations: [
      'blow-soft-left'
    ],
    className: 'sakura',
    fallSpeed: 2,
    maxSize: 16,
    minSize: 9,
    newOn: 1000,
    swayAnimations: [
      'sway-1'
    ]
  });

  animation = true;

  letter_container = $('[data-container=letter]');
  english_letter = $('[data-container=english]');

  audio_button = $('[name=audio]');
  english_button = $('[name=english-letter]');
  next_button = $('[name=next]');
  remove_button = $('[name=stop-petals]');


  newLetter();

  audio_button.on('click', function (e){
    $('audio')[0].play();
  });

  english_button.on('click', function (e){
    english_letter.toggle(150);
  });

  next_button.on('click', function (e){
    newLetter();
  });

  remove_button.on('click', function (e) {

    if (animation) {
      $('body').sakura('stop');
      animation = false;

      $(this.children[0]).removeClass("fa fa-remove fa-2x").addClass("fa fa-tree fa-2x");

    } else {
      $('body').sakura('start', {
        blowAnimations: [
          'blow-soft-left'
        ],
        className: 'sakura',
        fallSpeed: 2,
        maxSize: 16,
        minSize: 9,
        newOn: 1000,
        swayAnimations: [
          'sway-1'
        ]
      });

      animation = true;
      $(this.children[0]).removeClass("fa fa-tree fa-2x").addClass("fa fa-remove fa-2x");
    }
  });

});
