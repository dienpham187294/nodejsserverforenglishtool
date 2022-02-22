module.exports = {
    "tar01":
    {
        "M0Excuse": [
            "Excuse me."
        ],
        "MImg1": "https://i.postimg.cc/jSzMzhTN/callwaiter.jpg",
        "N1How ca": [
            "How can I help you?",
            "May I help you?",
            "What do you want?"
        ],
        "M2I want": [
            "Menu, please!",
            "Can you give me the menu?"
        ]
    },
    "tar02": {
        "M0Excuse": [
            "Excuse me."
        ],
        "N1Howcan": [
            "How can I help you?",
            "May I help you?",
            "What do you want?"
        ],
        "M2Iwantt": [
            "I want to order a drink.",
            "Can I order a drink?"
        ],
        "N3Whatwo": [
            "What would you like?",
            "What do you want to order?",
            "Which drink would you like?"
        ],
        "M4Iwantt": function (drink) {
            return [
                "I want to order " + drink
            ]
        },
        "Img1": "https://i.postimg.cc/jSzMzhTN/callwaiter.jpg",
    },
    "tar03": {
        "M0Excuse": [
            "Excuse me."
        ],
        "N1Howcan": [
            "How can I help you?",
            "May I help you?",
            "What do you want?"
        ],
        "M2Doyouh": [
            "Do you have a baby chair?"
        ],
        "N3Yesofc": [
            "Yes of course! I bring it to you right now."
        ]
    },
    "tar04": {
        "M0Iwanta": function (tool) {
            return ["I want a " + tool, "Can you give me a " + tool + "?"]
        }
    },
    "tar05": {
        "M0Whichw": [
            "Where's the toilet?"
        ],
        "N1Thetoi": [
            "The toilet is at the end of the hallway."
        ],
        "M2Thanky": [
            "Thank you."
        ]
    },
    "img": [
        {
            "name": "menu",
            "img": "https://i.postimg.cc/50DMZtQC/menu.jpg",
        },
        {
            "name": "spoon",
            "img": "https://i.postimg.cc/s26z4mVK/spoon.jpg",
        },
        {
            "name": "fork",
            "img": "https://i.postimg.cc/cHvS93CW/fork.jpg",
        }
    ]

}