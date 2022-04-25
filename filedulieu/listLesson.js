// const fs = require('file-system');

const data = require("../database/Data_Practice.json")

let ArrOutput = [
    {
        "id": "Nha-hang-sub1",
        "name": "1a_01: Hi, how arr you?",
        "fileName": "A1_NhaHang_01/bai1_1a"
    },
    {
        "id": "Nha-hang-sub2",
        "name": "1a_01: How can I help you?",
        "fileName": "A1_NhaHang_01/bai1_1b"
    },
    {
        "id": "Nha-hang-sub3",
        "name": "1a_01: How many people do you have?",
        "fileName": "A1_NhaHang_01/bai1_1c"
    },
    {
        "id": "Nha-hang-sub4",
        "name": "1a_01: What would you like, today?",
        "fileName": "A1_NhaHang_01/bai1_1d"
    },
    {
        "id": "Nha-hang-1",
        "name": "1a: Eat here or to go",
        "fileName": "A1_NhaHang_01/bai1_1"
    },
    {
        "id": "Nha-hang-2",
        "name": "1b: I want to order.",
        "fileName": "A1_NhaHang_01/bai1_2"
    },
    {
        "id": "Nha-hang-3",
        "name": "1c: Menu, please!",
        "fileName": "A1_NhaHang_01/bai1_3"
    },
    {
        "id": "Nha-hang-4",
        "name": "1d: I have a question.",
        "fileName": "A1_NhaHang_01/bai1_4"
    },
    {
        "id": "Nha-hang-5",
        "name": "Full - 1",
        "fileName": "A1_NhaHang_01/bai1"
    },
    {
        "id": "Nha-hang-6",
        "name": "2a: Ok get me this dish.",
        "fileName": "A1_NhaHang_01/bai2_1"
    },
    {
        "id": "Nha-hang-7",
        "name": "2b: I don't really like it.",
        "fileName": "A1_NhaHang_01/bai2_2"
    },
    {
        "id": "Nha-hang-8",
        "name": "2c: By the way, do you know where the restroom is?",
        "fileName": "A1_NhaHang_01/bai2_3"
    },
    {
        "id": "Nha-hang-9",
        "name": "2d: By the way, do you have any baby chairs?",
        "fileName": "A1_NhaHang_01/bai2_4"
    },
    {
        "id": "Nha-hang-10",
        "name": "2e: I want to order",
        "fileName": "A1_NhaHang_01/bai2_5"
    },
    {
        "id": "Nha-hang-11",
        "name": "Full - 2",
        "fileName": "A1_NhaHang_01/bai2"
    },
    {
        "id": "Nha-hang-12",
        "name": "Full -3",
        "fileName": "A1_NhaHang_01/bai3"
    },
    {
        "id": "Nha-hang-13",
        "name": "4a: Your order is ready!",
        "fileName": "A1_NhaHang_01/bai4_01"
    },
    {
        "id": "Nha-hang-14",
        "name": "4b: I get $120",
        "fileName": "A1_NhaHang_01/bai4_02"
    },
    {
        "id": "Nha-hang-15",
        "name": "4c: I get $200. Your change is $120",
        "fileName": "A1_NhaHang_01/bai4_03"
    },
    {
        "id": "Nha-hang-16",
        "name": "4d: Your order is not ready yet.",
        "fileName": "A1_NhaHang_01/bai4_04"
    },
    {
        "id": "Nha-hang-17",
        "name": "Full - 4",
        "fileName": "A1_NhaHang_01/bai4"
    },
    {
        "id": "Nha-hang-18",
        "name": "5a: Do you want to change to another day, sir? No thanks!",
        "fileName": "A1_NhaHang_01/bai5_01"
    },
    {
        "id": "Nha-hang-19",
        "name": "5b: We have space available that day.",
        "fileName": "A1_NhaHang_01/bai5_02"
    },
    {
        "id": "Nha-hang-20",
        "name": "5c: How about the 21 of January.",
        "fileName": "A1_NhaHang_01/bai5_03"
    },
    {
        "id": "Nha-hang-21",
        "name": "5d: I want an outdoor table",
        "fileName": "A1_NhaHang_01/bai5_04"
    },
    {
        "id": "Nha-hang-22",
        "name": "5e: So, you take an indoor table. Right?",
        "fileName": "A1_NhaHang_01/bai5_05"
    },
    {
        "id": "Nha-hang-23",
        "name": "Full - 5",
        "fileName": "A1_NhaHang_01/bai5"
    },
    {
        "id": "PronunCourses-1",
        "name": "1000QS - 00",
        "fileName": "PronunCourses/bai0"
    },
    {
        "id": "PronunCourses-2",
        "name": "1000QS - 01",
        "fileName": "PronunCourses/bai1"
    },
    {
        "id": "PronunCourses-3",
        "name": "1000QS - 02",
        "fileName": "PronunCourses/bai2"
    },
    {
        "id": "PronunCourses-3",
        "name": "1000QS - 03",
        "fileName": "PronunCourses/bai3"
    },
    {
        "id": "PronunCourses-3",
        "name": "1000QS - 04",
        "fileName": "PronunCourses/bai4"
    },
    {
        "id": "PronunCourses-3",
        "name": "1000QS - 05",
        "fileName": "PronunCourses/bai5"
    },
    {
        "id": "PronunCourses-3",
        "name": "1000QS - 06",
        "fileName": "PronunCourses/bai6"
    },
].concat(data)

ArrOutput.forEach((e, i) => {
    e.id += i
})
module.exports = ArrOutput