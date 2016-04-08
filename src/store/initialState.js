export const initState =
{
  "meals": [
    {
      "id": "pizza",
      "value": "Pizza"
    },
    {
      "id": "lamb-shank",
      "value": "Lamb Shank"
    },
    {
      "id": "mac-and-cheese",
      "value": "Mac & Cheese"
    },
    {
      "id": "fish-and-chips",
      "value": "fish-and-chips"
    },
    {
      "id": "b-and-e-pie",
      "value": "Bacon & Egg pie"
    },
    {
      "id": "snapper",
      "value": "Snapper"
    },
    {
      "id": "dog-food",
      "value": "Dog food"
    },
    {
      "id": "cat-food",
      "value": "Cat food"
    },
    {
      "id": "shark-fin-soup",
      "value": "Shark fin soup"
    },
    {
      "id": "cheese-on-toast",
      "value": "cheese on toast"
    }
  ],
  "plans": [
    {
      "id": "1",
      "meals": [
        "pizza",
        "lamb-shank",
        "fish",
        "shark-fin-soup",
        "cat-food",
        "b-and-e-pie",
        "dog-food"
      ]
    },
    {
      "id": "2",
      "meals": [
        "cheese-on-toast",
        "lamb-shank",
        "fish",
        "shark-fin-soup",
        "cat-food",
        "b-and-e-pie",
        "b-and-e-pie"
      ]
    }
  ]
};

export const lhsMenuInitState = {
  "menu": [
    {
      "id": "meals",
      "value": "Meals"
    },
    {
      "id": "charts",
      "value": "Charts"
    },
    {
      "id": "plans",
      "value": "Plans"
    },
    {
      "id": "calendar",
      "value": "Calendar",
      "submenu": {
        "visible" : false,
        "menuitem": [
          {"value": "Today", "id": "today"},
          {"value": "Weekly", "id": "weekly"},
          {"value": "Monthly", "id": "monthly"}
        ]
      }
    }
  ]
};






