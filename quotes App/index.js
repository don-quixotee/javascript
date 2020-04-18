var data = {
    "notes": [

        {
            "title": "prime minister of india,world leader",
            "author": "Nrendre modi",
            "quote": "Hard work never brings fatigue. It brings satisfaction."
        },
        {
            "title": "Bapu,freedom fighter,father of the nation ,India",
            "author": "Mohan Das kramchand Gandi",
            "quote": "Nobody can hurt me without my permission."
        },

        {
            "title": "spritual leader,founder of buddhism",
            "authar": " Gautam Buddha",
            "quote": "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared."
        },
        {
            "title": "American write",
            "author": "Dale Carnegie",
            "quote": "It isn't what you have, or who you are, or where you are, or what you are doing that makes you happy or unhappy. It is what you think about"
        },
        {
            "title": "Queen of scots",
            "author": "Mary stuart",
            "quote": "To be kind to all, to like many and love a few, to be needed and wanted by those we love, is certainly the nearest we can come to happiness."
        },
        {
            "title": "American science fiction author",
            "author": "Robert A. Heinlein",
            "quote": "Love is that condition in which the happiness of another person is essential to your own."
        },
        {
            "title": "British-Swiss philosopher",
            "author": "Alain de Botton",
            "quote": "Our capacity to draw happiness from aesthetic objects or material goods in fact seems critically dependent on our first satisfying a more important range of emotional or psychological needs, among them the need for understanding, for love, expression and respect."
        },
        {
            "title": "Author,poet",
            "author": "C. JoyBell C",
            "quote": "There is some kind of a sweet innocence in being human—in not having to be just happy or just sad—in the nature of being able to be both broken and whole, at the same time."
        },
        {
            "title": "French fashion designer",
            "author": "Coco Chanel",
            "quote": "Don’t spend time beating on a wall, hoping to transform it into a door."
        },
        {
            "title": "American-Canadian public speake ",
            "author": "Brian tracy",
            "quote": "Optimism is the one quality more associated with success and happiness than any other"
        },
        {
            "title": "Welsh model",
            "author": "Grace Coddington ",
            "quote": "Always keep your eyes open. Keep watching. Because whatever you see can inspire you"
        },
        {
            "title": "Essayist",
            "author": "Henry David Thoreau",
            "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals"
        },
        {
            "title": "Indian ,writer",
            "author": "Robin sharma",
            "quote": "Don’t live the same year 75 times and call it a life."
        }


    ]

};

function randomize() {
    var range = data.notes.length
    var randomIndex = Math.floor(Math.random() * range);
    var item= data.notes[randomIndex];

    $('.Quotes-text').html(item.quote);
    $('.author-detail').html(item.title);
    $('.author').html(item.author);
}

function getQuote() {
    var $button = $('.next')
    $button.on('click', randomize);

}

$(document).ready(function () {
    randomize();
    getQuote();
})