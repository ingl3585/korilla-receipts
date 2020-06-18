[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Korilla React Receipts

Korilla is a Korean barbecue taco truck that makes thousands of hungry customers
happy every year.

Their CEO is thinking of updating their short order tracking system using React.

Build a prototype of this short order receipts tracker.

## Prerequisites

- React

## Instructions

1. Fork and clone this repository.
1. Fulfill the listed requirements.
1. Make a pull request when you have completed the assignment.

## Requirements

Follow the walkthrough and finish all parts. If you have extra time, finish the
bonus as well.

Here is a [working example](https://98mru.csb.app/) of the app, excluding the bonuses. 

## Component Tree

```
- App
  |
  |__ Form
  |
  |__ Receipts
      |
      |__ Receipt
  
```

## Part 1: Render Receipts

You'll be rendering some receipts. This data should be copied/pasted into a file called receiptData.js and imported into App.js. Then use `useState `create [receipt, setReceipt] and assign receipt to the receiptData array.


```js
const App = () => {
  const [receipt, setReceipt] = useState(receiptsArr)
  //...
}
```

<details>
    <summary><strong>Receipt Data</strong></summary>

```js
const receipts = [
   {
    id:1,
    person: "Karolin",
    order: {
      main: "Burrito",
      protein: "Organic Tofu",
      rice: "Purple Rice",
      sauce: "Green Crack",
      drink: "Korchata",
      cost: 22
    },
    paid: false
  },
   {
    id:2,
    person: "Jerrica",
    order: {
      main: "Rice Bowl",
      protein: "Ginger Soy Chix",
      rice: "Sticky Rice",
      sauce: "Korilla",
      drink: "Korchata",
      cost: 19
    },
    paid: false
  },
   {
    id:3,
    person: "Matt",
    order: {
      main: "Salad Bowl",
      protein: "Organic Tofu",
      rice: "none",
      sauce: "K'lla",
      drink: "Sparkling Blood Orange Soda",
      cost: 20
    },
    paid: false
  }
]
```
</details>


The receipts should display the following information:

- person
- order
  - main
  - protein
  - rice
  - sauce
  - drink
  - cost
- paid

![korilla receipts rendered Mark](https://i.imgur.com/pTgXZGO.png)

## Part 2: Searching for receipts

Implement a form that allows you to search by person. Once submitted the app should
return only those matching names. 

## Part 3: Update the receipts

Right now, all the receipts are not paid. Add a click event to the paid field that will toggle the values true or false. 

## Bonus: Add a New Receipt Form

Add a new form that will allow a user to add a new receipt that captures all the info needed to display the receipt and sets the paid property to false by default. 

## Bonus: Add `Paid` and `Not Paid` buttons

Add two buttons that will allow you to easily toggle between receipts that are paid and not paid.  Only display those receipts based on the users selection of those buttons

## Bonus: Add a button that will sort the receipts

Add a button that will sort the receipts by name.  

# Additional Bonus Labs

## Bonus 1 - Traffic Light

Convert the following [CodePen](https://codepen.io/jkeohan/pen/MWYEyMV?editors=1010) into a React app.  Create the following Components and follow the below hierarchy:

- App
  - Bulbs
  - Buttons
  
Add a click event to Buttons that lifts state to App and updates the Bulbs so that only the chosen Bulb is on and all other Bulbs are set to black. 

## Bonus 2 - Memory Game

Convert the following [CodePen](https://codepen.io/jkeohan/pen/opvVGN?editors=0010) into a React App. Create the following Components and follow the below hierarchy:

- App
  - Cards

Add a click event to the Cards assigns the card its card image and lifts state to the App Component that is used to determine the winning/loosing logic. 

## Bonus 3 - React Cities

Convert the following [CodePen](https://codepen.io/jkeohan/pen/850f8454693590e9772f8d0f6c2f44c8) into a React app.  Create the following Components and follow the below hierarchy:

- App
  - SmallImage
  - LargeImage
 
 Add a click event to each SmallImage that lifts state to App and updates state and reassigns the image src url to the LargeImage. 

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
