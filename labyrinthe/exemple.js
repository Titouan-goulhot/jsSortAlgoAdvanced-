// 5x5
var exemple =
    [{ "posX": 0, "posY": 0, "walls": [true, true, false, true] },
    { "posX": 1, "posY": 0, "walls": [true, false, false, true] },
    { "posX": 2, "posY": 0, "walls": [true, false, true, false] },
    { "posX": 3, "posY": 0, "walls": [true, false, false, false] },
    { "posX": 4, "posY": 0, "walls": [true, false, true, false] },
    { "posX": 5, "posY": 0, "walls": [true, true, false, false] },
    { "posX": 6, "posY": 0, "walls": [true, false, true, true] },
    { "posX": 7, "posY": 0, "walls": [true, false, true, false] },
    { "posX": 8, "posY": 0, "walls": [true, false, false, false] },
    { "posX": 9, "posY": 0, "walls": [true, true, false, false] },
    { "posX": 0, "posY": 1, "walls": [false, true, false, true] },
    { "posX": 1, "posY": 1, "walls": [false, true, true, true] },
    { "posX": 2, "posY": 1, "walls": [true, false, false, true] },
    { "posX": 3, "posY": 1, "walls": [false, true, true, false] },
    { "posX": 4, "posY": 1, "walls": [true, true, false, true] },
    { "posX": 5, "posY": 1, "walls": [false, false, true, true] },
    { "posX": 6, "posY": 1, "walls": [true, false, true, false] },
    { "posX": 7, "posY": 1, "walls": [true, true, false, false] },
    { "posX": 8, "posY": 1, "walls": [false, true, false, true] },
    { "posX": 9, "posY": 1, "walls": [false, true, false, true] },
    { "posX": 0, "posY": 2, "walls": [false, true, false, true] },
    { "posX": 1, "posY": 2, "walls": [true, false, false, true] },
    { "posX": 2, "posY": 2, "walls": [false, true, true, false] },
    { "posX": 3, "posY": 2, "walls": [true, false, false, true] },
    { "posX": 4, "posY": 2, "walls": [false, false, true, false] },
    { "posX": 5, "posY": 2, "walls": [true, false, true, false] },
    { "posX": 6, "posY": 2, "walls": [true, true, false, false] },
    { "posX": 7, "posY": 2, "walls": [false, true, false, true] },
    { "posX": 8, "posY": 2, "walls": [false, true, false, true] },
    { "posX": 9, "posY": 2, "walls": [false, true, true, true] },
    { "posX": 0, "posY": 3, "walls": [false, true, false, true] },
    { "posX": 1, "posY": 3, "walls": [false, true, false, true] },
    { "posX": 2, "posY": 3, "walls": [true, false, true, true] },
    { "posX": 3, "posY": 3, "walls": [false, false, true, false] },
    { "posX": 4, "posY": 3, "walls": [true, true, false, false] },
    { "posX": 5, "posY": 3, "walls": [true, false, false, true] },
    { "posX": 6, "posY": 3, "walls": [false, true, true, false] },
    { "posX": 7, "posY": 3, "walls": [false, true, false, true] },
    { "posX": 8, "posY": 3, "walls": [false, false, true, true] },
    { "posX": 9, "posY": 3, "walls": [true, true, false, false] },
    { "posX": 0, "posY": 4, "walls": [false, false, true, true] },
    { "posX": 1, "posY": 4, "walls": [false, true, true, false] },
    { "posX": 2, "posY": 4, "walls": [true, false, false, true] },
    { "posX": 3, "posY": 4, "walls": [true, false, true, false] },
    { "posX": 4, "posY": 4, "walls": [false, true, true, false] },
    { "posX": 5, "posY": 4, "walls": [false, false, true, true] },
    { "posX": 6, "posY": 4, "walls": [true, true, false, false] },
    { "posX": 7, "posY": 4, "walls": [false, false, true, true] },
    { "posX": 8, "posY": 4, "walls": [true, true, false, false] },
    { "posX": 9, "posY": 4, "walls": [false, true, false, true] },
    { "posX": 0, "posY": 5, "walls": [true, false, false, true] },
    { "posX": 1, "posY": 5, "walls": [true, false, true, false] },
    { "posX": 2, "posY": 5, "walls": [false, false, true, false] },
    { "posX": 3, "posY": 5, "walls": [true, false, true, false] },
    { "posX": 4, "posY": 5, "walls": [true, true, false, false] },
    { "posX": 5, "posY": 5, "walls": [true, false, true, true] },
    { "posX": 6, "posY": 5, "walls": [false, true, true, false] },
    { "posX": 7, "posY": 5, "walls": [true, false, false, true] },
    { "posX": 8, "posY": 5, "walls": [false, true, true, false] },
    { "posX": 9, "posY": 5, "walls": [false, true, false, true] },
    { "posX": 0, "posY": 6, "walls": [false, true, false, true] },
    { "posX": 1, "posY": 6, "walls": [true, false, true, true] },
    { "posX": 2, "posY": 6, "walls": [true, false, false, false] },
    { "posX": 3, "posY": 6, "walls": [false, true, true, false] }, { "posX": 4, "posY": 6, "walls": [false, true, false, true] }, { "posX": 5, "posY": 6, "walls": [false, false, true, true] }, { "posX": 6, "posY": 6, "walls": [true, true, false, false] }, { "posX": 7, "posY": 6, "walls": [false, true, false, true] }, { "posX": 8, "posY": 6, "walls": [true, true, false, true] }, { "posX": 0, "posY": 7, "walls": [false, true, false, true] }, { "posX": 1, "posY": 7, "walls": [false, false, true, true] }, { "posX": 2, "posY": 7, "walls": [true, true, false, false] }, { "posX": 3, "posY": 7, "walls": [true, true, false, true] }, { "posX": 4, "posY": 7, "walls": [false, true, false, true] }, { "posX": 5, "posY": 7, "walls": [true, false, false, true] }, { "posX": 6, "posY": 7, "walls": [false, true, true, false] }, { "posX": 7, "posY": 7, "walls": [false, false, true, true] }, { "posX": 8, "posY": 7, "walls": [false, true, false, false] }, { "posX": 0, "posY": 8, "walls": [false, false, true, true] }, { "posX": 1, "posY": 8, "walls": [true, false, true, false] }, { "posX": 2, "posY": 8, "walls": [false, true, true, false] }, { "posX": 3, "posY": 8, "walls": [false, false, true, true] }, { "posX": 4, "posY": 8, "walls": [false, false, true, false] }, { "posX": 5, "posY": 8, "walls": [false, true, true, false] }, { "posX": 6, "posY": 8, "walls": [true, false, true, true] }, { "posX": 7, "posY": 8, "walls": [true, false, true, false] }, { "posX": 8, "posY": 8, "walls": [false, true, true, false] }], "ex-2": [{ "posX": 0, "posY": 0, "walls": [true, true, false, true] }, { "posX": 1, "posY": 0, "walls": [true, false, true, true] }, { "posX": 2, "posY": 0, "walls": [true, false, true, false] }, { "posX": 3, "posY": 0, "walls": [true, false, true, false] }, { "posX": 4, "posY": 0, "walls": [true, false, false, false] }, { "posX": 5, "posY": 0, "walls": [true, false, true, false] }, { "posX": 6, "posY": 0, "walls": [true, true, false, false] }, { "posX": 7, "posY": 0, "walls": [true, false, true, true] }, { "posX": 8, "posY": 0, "walls": [true, true, false, false] }, { "posX": 0, "posY": 1, "walls": [false, false, true, true] }, { "posX": 1, "posY": 1, "walls": [true, false, true, false] }, { "posX": 2, "posY": 1, "walls": [true, false, true, false] }, { "posX": 3, "posY": 1, "walls": [true, false, true, false] }, { "posX": 4, "posY": 1, "walls": [false, true, true, false] }, { "posX": 5, "posY": 1, "walls": [true, false, false, true] }, { "posX": 6, "posY": 1, "walls": [false, true, true, false] }, { "posX": 7, "posY": 1, "walls": [true, false, false, true] }, { "posX": 8, "posY": 1, "walls": [false, true, true, false] }, { "posX": 0, "posY": 2, "walls": [true, false, false, true] }, { "posX": 1, "posY": 2, "walls": [true, false, true, false] }, { "posX": 2, "posY": 2, "walls": [true, false, false, false] }, { "posX": 3, "posY": 2, "walls": [true, false, true, false] }, { "posX": 4, "posY": 2, "walls": [true, true, false, false] }, { "posX": 5, "posY": 2, "walls": [false, true, false, true] }, { "posX": 6, "posY": 2, "walls": [true, false, true, true] }, { "posX": 7, "posY": 2, "walls": [false, false, true, false] }, { "posX": 8, "posY": 2, "walls": [true, true, false, false] }, { "posX": 0, "posY": 3, "walls": [false, true, false, true] }, { "posX": 1, "posY": 3, "walls": [true, false, false, true] }, { "posX": 2, "posY": 3, "walls": [false, true, true, false] }, { "posX": 3, "posY": 3, "walls": [true, false, false, true] }, { "posX": 4, "posY": 3, "walls": [false, true, true, false] }, { "posX": 5, "posY": 3, "walls": [false, false, true, true] }, { "posX": 6, "posY": 3, "walls": [true, false, true, false] }, { "posX": 7, "posY": 3, "walls": [true, false, true, false] }, { "posX": 8, "posY": 3, "walls": [false, true, false, false] }, { "posX": 0, "posY": 4, "walls": [false, true, true, true] }, { "posX": 1, "posY": 4, "walls": [false, true, false, true] }, { "posX": 2, "posY": 4, "walls": [true, false, true, true] }, { "posX": 3, "posY": 4, "walls": [false, false, true, false] }, { "posX": 4, "posY": 4, "walls": [true, false, false, false] }, { "posX": 5, "posY": 4, "walls": [true, false, true, false] }, { "posX": 6, "posY": 4, "walls": [true, false, true, false] }, { "posX": 7, "posY": 4, "walls": [true, true, false, false] }, { "posX": 8, "posY": 4, "walls": [false, true, false, true] }, { "posX": 0, "posY": 5, "walls": [true, false, false, true] }, { "posX": 1, "posY": 5, "walls": [false, true, true, false] }, { "posX": 2, "posY": 5, "walls": [true, false, false, true] }, { "posX": 3, "posY": 5, "walls": [true, true, false, false] }, { "posX": 4, "posY": 5, "walls": [false, true, true, true] }, { "posX": 5, "posY": 5, "walls": [true, false, false, true] }, { "posX": 6, "posY": 5, "walls": [true, true, false, false] }, { "posX": 7, "posY": 5, "walls": [false, true, true, true] }, { "posX": 8, "posY": 5, "walls": [false, true, false, true] }, { "posX": 0, "posY": 6, "walls": [false, false, false, true] }, { "posX": 1, "posY": 6, "walls": [true, false, true, false] }, { "posX": 2, "posY": 6, "walls": [false, true, true, false] }, { "posX": 3, "posY": 6, "walls": [false, false, true, true] }, { "posX": 4, "posY": 6, "walls": [true, true, false, false] }, { "posX": 5, "posY": 6, "walls": [false, true, false, true] }, { "posX": 6, "posY": 6, "walls": [false, false, true, true] }, { "posX": 7, "posY": 6, "walls": [true, false, true, false] }, { "posX": 8, "posY": 6, "walls": [false, true, true, false] }, { "posX": 0, "posY": 7, "walls": [false, false, true, true] }, { "posX": 1, "posY": 7, "walls": [true, false, true, false] }, { "posX": 2, "posY": 7, "walls": [true, true, false, false] }, { "posX": 3, "posY": 7, "walls": [true, true, false, true] }, { "posX": 4, "posY": 7, "walls": [false, false, true, true] }, { "posX": 5, "posY": 7, "walls": [false, true, true, false] }, { "posX": 6, "posY": 7, "walls": [true, false, false, true] }, { "posX": 7, "posY": 7, "walls": [true, false, true, false] }, { "posX": 8, "posY": 7, "walls": [true, true, false, false] }, { "posX": 0, "posY": 8, "walls": [true, false, true, true] }, { "posX": 1, "posY": 8, "walls": [true, false, true, false] }, { "posX": 2, "posY": 8, "walls": [false, false, true, false] }, { "posX": 3, "posY": 8, "walls": [false, false, true, false] }, { "posX": 4, "posY": 8, "walls": [true, false, true, false] }, { "posX": 5, "posY": 8, "walls": [true, false, true, false] }, { "posX": 6, "posY": 8, "walls": [false, true, true, false] }, { "posX": 7, "posY": 8, "walls": [true, false, true, true] }, { "posX": 8, "posY": 8, "walls": [false, true, true, false] }]}, "10": {
        "ex-0": [{ "posX": 0, "posY": 0, "walls": [true, true, false, true] }, { "posX": 1, "posY": 0, "walls": [true, false, false, true] }, { "posX": 2, "posY": 0, "walls": [true, false, true, false] }, { "posX": 3, "posY": 0, "walls": [true, false, false, false] }, { "posX": 4, "posY": 0, "walls": [true, false, true, false] }, { "posX": 5, "posY": 0, "walls": [true, true, false, false] }, { "posX": 6, "posY": 0, "walls": [true, false, true, true] }, { "posX": 7, "posY": 0, "walls": [true, false, true, false] }, { "posX": 8, "posY": 0, "walls": [true, false, false, false] }, { "posX": 9, "posY": 0, "walls": [true, true, false, false] }, { "posX": 0, "posY": 1, "walls": [false, true, false, true] }, { "posX": 1, "posY": 1, "walls": [false, true, true, true] }, { "posX": 2, "posY": 1, "walls": [true, false, false, true] }, { "posX": 3, "posY": 1, "walls": [false, true, true, false] }, { "posX": 4, "posY": 1, "walls": [true, true, false, true] }, { "posX": 5, "posY": 1, "walls": [false, false, true, true] }, { "posX": 6, "posY": 1, "walls": [true, false, true, false] }, { "posX": 7, "posY": 1, "walls": [true, true, false, false] }, { "posX": 8, "posY": 1, "walls": [false, true, false, true] }, { "posX": 9, "posY": 1, "walls": [false, true, false, true] }, { "posX": 0, "posY": 2, "walls": [false, true, false, true] }, { "posX": 1, "posY": 2, "walls": [true, false, false, true] }, { "posX": 2, "posY": 2, "walls": [false, true, true, false] }, { "posX": 3, "posY": 2, "walls": [true, false, false, true] }, { "posX": 4, "posY": 2, "walls": [false, false, true, false] }, { "posX": 5, "posY": 2, "walls": [true, false, true, false] }, { "posX": 6, "posY": 2, "walls": [true, true, false, false] }, { "posX": 7, "posY": 2, "walls": [false, true, false, true] }, { "posX": 8, "posY": 2, "walls": [false, true, false, true] }, { "posX": 9, "posY": 2, "walls": [false, true, true, true] }, { "posX": 0, "posY": 3, "walls": [false, true, false, true] }, { "posX": 1, "posY": 3, "walls": [false, true, false, true] }, { "posX": 2, "posY": 3, "walls": [true, false, true, true] }, { "posX": 3, "posY": 3, "walls": [false, false, true, false] }, { "posX": 4, "posY": 3, "walls": [true, true, false, false] }, { "posX": 5, "posY": 3, "walls": [true, false, false, true] }, { "posX": 6, "posY": 3, "walls": [false, true, true, false] }, { "posX": 7, "posY": 3, "walls": [false, true, false, true] }, { "posX": 8, "posY": 3, "walls": [false, false, true, true] }, { "posX": 9, "posY": 3, "walls": [true, true, false, false] }, { "posX": 0, "posY": 4, "walls": [false, false, true, true] }, { "posX": 1, "posY": 4, "walls": [false, true, true, false] }, { "posX": 2, "posY": 4, "walls": [true, false, false, true] }, { "posX": 3, "posY": 4, "walls": [true, false, true, false] }, { "posX": 4, "posY": 4, "walls": [false, true, true, false] }, { "posX": 5, "posY": 4, "walls": [false, false, true, true] }, { "posX": 6, "posY": 4, "walls": [true, true, false, false] }, { "posX": 7, "posY": 4, "walls": [false, false, true, true] }, { "posX": 8, "posY": 4, "walls": [true, true, false, false] }, { "posX": 9, "posY": 4, "walls": [false, true, false, true] }, { "posX": 0, "posY": 5, "walls": [true, false, false, true] }, { "posX": 1, "posY": 5, "walls": [true, false, true, false] }, { "posX": 2, "posY": 5, "walls": [false, false, true, false] }, { "posX": 3, "posY": 5, "walls": [true, false, true, false] }, { "posX": 4, "posY": 5, "walls": [true, true, false, false] }, { "posX": 5, "posY": 5, "walls": [true, false, true, true] }, { "posX": 6, "posY": 5, "walls": [false, true, true, false] }, { "posX": 7, "posY": 5, "walls": [true, false, false, true] }, { "posX": 8, "posY": 5, "walls": [false, true, true, false] }, { "posX": 9, "posY": 5, "walls": [false, true, false, true] }, { "posX": 0, "posY": 6, "walls": [false, true, false, true] }, { "posX": 1, "posY": 6, "walls": [true, false, true, true] }, { "posX": 2, "posY": 6, "walls": [true, false, false, false] }, { "posX": 3, "posY": 6, "walls": [true, true, true, false] }, { "posX": 4, "posY": 6, "walls": [false, false, true, true] }, { "posX": 5, "posY": 6, "walls": [true, false, true, false] }, { "posX": 6, "posY": 6, "walls": [true, false, true, false] }, { "posX": 7, "posY": 6, "walls": [false, true, true, false] }, { "posX": 8, "posY": 6, "walls": [true, false, false, true] }, { "posX": 9, "posY": 6, "walls": [false, true, false, false] }, { "posX": 0, "posY": 7, "walls": [false, false, true, true] }, { "posX": 1, "posY": 7, "walls": [true, true, false, false] }, { "posX": 2, "posY": 7, "walls": [false, false, false, true] }, { "posX": 3, "posY": 7, "walls": [true, false, true, false] }, { "posX": 4, "posY": 7, "walls": [true, false, false, false] }, { "posX": 5, "posY": 7, "walls": [true, false, true, false] }, { "posX": 6, "posY": 7, "walls": [true, true, false, false] }, { "posX": 7, "posY": 7, "walls": [true, false, false, true] }, { "posX": 8, "posY": 7, "walls": [false, true, true, false] }, { "posX": 9, "posY": 7, "walls": [false, true, false, true] }, { "posX": 0, "posY": 8, "walls": [true, true, false, true] }, { "posX": 1, "posY": 8, "walls": [false, true, false, true] }, { "posX": 2, "posY": 8, "walls": [false, true, true, true] }, { "posX": 3, "posY": 8, "walls": [true, false, false, true] }, { "posX": 4, "posY": 8, "walls": [false, true, true, false] }, { "posX": 5, "posY": 8, "walls": [true, false, false, true] }, { "posX": 6, "posY": 8, "walls": [false, true, true, false] }, { "posX": 7, "posY": 8, "walls": [false, false, true, true] }, { "posX": 8, "posY": 8, "walls": [true, true, true, false] }, { "posX": 9, "posY": 8, "walls": [false, true, false, true] }, { "posX": 0, "posY": 9, "walls": [false, false, true, true] }, { "posX": 1, "posY": 9, "walls": [false, false, true, false] }, { "posX": 2, "posY": 9, "walls": [true, false, true, false] }, { "posX": 3, "posY": 9, "walls": [false, true, true, false] }, { "posX": 4, "posY": 9, "walls": [true, false, true, true] }, { "posX": 5, "posY": 9, "walls": [false, false, true, false] }, { "posX": 6, "posY": 9, "walls": [true, false, true, false] }, { "posX": 7, "posY": 9, "walls": [true, false, true, false] }, { "posX": 8, "posY": 9, "walls": [true, false, true, false] }, { "posX": 9, "posY": 9, "walls": [false, true, true, false] }], "
    ]
}