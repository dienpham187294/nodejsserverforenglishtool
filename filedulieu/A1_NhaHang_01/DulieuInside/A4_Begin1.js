const FnObjHanldingNext = require("../../dataHelperFunction/FnObjHanldingNext")

module.exports = function A4_begin1(e) {
    return [
        {
            "index": "0",
            "handle": FnObjHanldingNext(
                ["Hi, how are you?"],
                [
                    "Good.",
                    "I'm good."
                ]
            )
        },
        {
            "index": "0-0",
            "handle": FnObjHanldingNext(
                ["Do you want to eat here or to go?"],
                [
                    "Actually, I placed a pickup order. The name is " + e.Name + ".",
                    "Actually, I placed a pickup order. My name is " + e.Name + ".",
                    "Actually, I'm here to get my order. It is under the name " + e.Name + ".",
                    "Actually, I placed a pickup order.",
                    "Actually, I'm here to get my order."
                ]
            )
        },
        {
            "index": "0-1",
            "handle": FnObjHanldingNext(
                ["How can I help you?", "May I help you?"],
                [
                    "Can I get the order for " + e.Name + "?",
                    "Is the order for " + e.Name + " ready?",
                    "I'm here to get my order."
                ]
            )
        },
        {
            "index": "0-2",
            "handle": FnObjHanldingNext(
                ["What do you want?"],
                ["I'm here to pick up an order."]
            )
        },
    ]
}


