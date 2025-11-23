const json = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "dropdown",
          "name": "question1",
          "title": "Für welches Land stimmen Sie ab?",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "Deutschland"
            },
            {
              "value": "Item 2",
              "text": "Finnland"
            }
          ],
          "choicesOrder": "asc"
        },
        {
          "type": "ranking",
          "name": "question2",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "Deutschland"
            },
            {
              "value": "Item 2",
              "text": "Finnland"
            }
          ]
        }
      ]
    }
  ],
  "headerView": "advanced"
}
