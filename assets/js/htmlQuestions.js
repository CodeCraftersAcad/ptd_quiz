const htmlQuestions = [
    new Question("Fill in the blank", "body", `Which HTML element shows text on the page? <input type="text"/>`, "singleFill"),
    new Question(
        `What does HTML stand for?`,
        "Hyper Text Markup Language",
        ["Doesn't stand for anything",
            "Hyper Text Markup Language",
            "Hyper Text Maker Logic",
            "Hyper Technical Markup Language"],
        "radio"
    ),
    new Question(
        `Do all HTML tags come in a pair?`,
        "No",
        ["Yes", "No"],
        "radio"
    ),
    new Question(
        `What type of tag is an &lt;img&gt; tag?`,
        "Inline",
        ["Block", "None", "Flex", "Inline"],
        "radio"
    ),
    new Question("Fill in the blank", "title", `The <input type="text"/> element shows text in the tab of the web browser?`, "singleFill"),
    new Question(
        `Which is the biggest heading?`,
        "h1",
        ["h1", "h2", "h3", "h4"],
        "radio"
    ),
    new Question(
        `Fill in the blank`,
        `unordered`,
        `<img style="display:block; height: 200px; width: auto; margin: 10px auto;" src="../image/ul_list_img.png" alt="UL List type"/>The <code>ul</code> element shown in the image above is called an <input type="text"/> list.`,
        `singleFill`
    ),
    new Question(
        `Which is the correct way to open a link in a new tab?`,
        `<a href='url' target='_blank'>New Page</a>`,
        [`&lt;a href='url' blank='tab'&gt;New Page&lt;/a&gt;`, `&lt;a href='url' target='_blank'&gt;New Page&lt;/a&gt;`, `&lt;a href='url' new='target'&gt;New Page&lt;/a&gt;`],
        "radio"
    ),
    new Question(
        `What type of input only let's a user choose one choice?`,
        'radio',
        ['multi', 'checkbox', 'radio', 'choice'],
        "radio"
    ),
    new Question(
        `Which element creates a dropdown menu?`,
        '<select>',
        ['&lt;select&gt;', '&lt;ol&gt;', '&lt;ul&gt;', '&lt;dropdown&gt;'],
        "radio"
    ),
    new Question(
        `An HTML document won't display without a title tag.`,
        'False',
        ['True', 'False'],
        "radio"
    ),
    new Question(
        `Which tag shows text?`,
        `<p>`,
        [`&lt;img/&gt;`, `&lt;p&gt;`, `&lt;hr/&gt;`, `&lt;br/&gt;`],
        "radio"
    ),
    new Question(
        `Which tag sends information to a server?`,
        `<input/>`,
        [`&lt;form&gt;`, `&lt;section&gt;`, `&lt;h1&gt;`, `&lt;input/&gt;`],
        "radio"
    ),
    new Question(
        `What is a self closing tag?`,
        `An HTML tag that doesn't have a pair.`,
        [`An HTML tag that doesn't have a pair.`, `A pair of tags.`],
        "radio"
    ),
    new Question(
        `Which input attribute usually shows example of what to enter?`,
        `placeholder`,
        [`type`, `name`, `placeholder`, `None of the above.`],
        "radio"
    )
];