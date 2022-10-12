# Contributing

## Local Setup
- After forking and cloning this repository to your local machine, open the project folder in your favourite code editor.
- Assuming you already have the "Live Server" extension installed (if not, then install it right now, it is very useful for any simple html css js project!), open `index.html` with Live Server.
- Any changes you make in the code will be reflected in the browser immediately

## PRs Welcome!

Would love PRs adding more decks of cards! Any fun SFW topic is welcome! Make sure to go through the detailed instructions below carefully before jumping into the codebase!

### Detailed Instructions for Adding a New Deck of Cards:
- ❗❗❗ **While proposing a new deck, make sure to discuss the topic by creating a new issue for the same, and getting yourself assigned, before investing time in a full PR. In that same issue, give a couple or so examples of the sort of cards you plan to have in your deck, so that we are on the same page and the chances of your PR being rejected are reduced to almost nonexistent.** ❗❗❗
-  Boilerplate for New Deck:
```javascript
    {
        name: "[Your Topic]",
        author: "[Your Github Username]",
        instructions: "[Deck Instructions]",
        cards: [
            {
                name: "[Card Name]",
                content: {
                    primary: "[Emoji 1]",
                    secondary: "[Emoji 2][Optional Emoji 3]",
                },
                hint: "[Helpful Hint]",
                matchValue: "[Associated Value]",
                seenHint: false,
            },
            {...},
        ]
```
- Don't forget to add an author field to your deck in deck.js so your name can be shown when playing your deck!
- Make sure the category is new and doesn't overlap with any other category. For example, a deck on Movies would clash with the already present Animated Movies category, so a better choice would be another genre of movies. In general, avoid very wide ranging categories, and have a deck based on a specific narrow topic.
- Try to keep the values for a certain field as consistent throughout the deck as possible. For example, in the Animated Movies deck, the `matchValues` are always characters / places from the movie (as specified in the Instructions as well). 
- The primary and secondary fields are admittedly not named intuitively but here's how to use them. Also keep in mind that primary emoji is displayed in a larger font than secondary. If your emoji hint has:
  - just 1 emoji: keep it as the value for primary
  - 2 emojis: keep them as the value for secondary
  - 3 emojis: make the most important one the primary, and the other 2 the secondary. 

### General Guidelines for PRs:
- Work in a new feature branch for each PR you make, not the master.
- Is the change you're making affecting the game visually? Pro tip: unless your change is only markdown, the answer is probably yes! Make sure to add screenshots of the change in your PR, making it easier and quicker to review.
- Your PR should be fixing an issue (if not, please do create an issue 1st!), so ensure you link back to that issue (Use the following syntax: `Fixes: #[issue-no]`) in your PR description so that it automatically closes when your PR is merged!
- Always try to include a short description of what changes your PR makes in the PR description to help the review process. Leaving it empty is never a good idea/

While this project is not actively seeking feature enhancements from the community right now, ideas still are welcome, so be sure to create an issue if you feel strongly about it. Just be aware that there are no guarantees on if and when that issue will be fixed, and there are chances it might be closed.

Anyway, you may want to keep an eye out for any issues created by me for specific tasks that I would appreciate help with!

## Specifically for Hacktoberfest:
- Since very small PRs (like adding a single new card to an older deck) may be considered spammy, make sure to discuss any change you're planning to make in the issues before (golden rule of open source!) and make sure it is not too minor; adding 1 card isn't the best idea, nor is updating a single CSS property, but adding a bunch of cards or CSS rules is fine!
