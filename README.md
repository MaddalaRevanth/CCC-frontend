# Advice-Generator App
This is a simple frontend project built using HTML, CSS, and JavaScript.
The app generates random advice using the **Advice Slip API** when the user clicks on the dice button.


## Screenshots
<img width="1919" height="910" alt="image" src="https://github.com/user-attachments/assets/5299aefc-e97b-44b4-b99f-e970908296ce" />

## What this project does
- Displays a random piece of advice
- Fetches advice from an external API
- Changes the advice when the dice icon is clicked
- Adjusts layout based on screen size
- Shows hover effects for interactive elements

## Files Used
- `index.html`: Containes the structure of the page
- `style.css`: Handles styling and responsiveness
- `script.js`: Handles API calls and logic

## How it works
- When the page loads, an advice message is fetched from the **Advice Slip API**
- Clicking the dice icon makes a new API request
- The advice text updates without refreshing the page

## API Used
- Advice Slip API: `https://api.adviceslip.com/advice`

## Tools & Technologies
- HTML
- CSS
- JavaScript (Vanilla)

## Approach
1. First, the required HTML elements (advice text, advice ID, and dice button) are selected using `document.getElementById`.
2. An asynchronous function `getAdvice()` is created to fetch random advice from the **Advice Slip API**.
3. The `fetch()` method sends a GET request to the API.
    - `cache: "no-store"` is used to ensure fresh advice is fetched every time.
4. The API response is converted into JSON format.
5. If the API returns a message (rate-limit or error message), it is displayed safely.
6. If valid advice is received, the advice text and advice ID are updated dynamically in the UI.
7. An event listener is attached to the dice button so that clicking it generates new advice.
8. The `getAdvice()` function is also called once when the page loads to show initial advice.

## Time Complexity

- Fetching Advice:
  Each API call takes O(1) time from the program’s perspective because:
  - Only one request is made
  - A fixed amount of data is processed

- DOM Updates:
  Updating text content in the DOM is also O(1).

✅ Overall Time Complexity per click: O(1)


## Space Complexity
- The app stores only:
  - API response data
  - A few DOM references

✅ Space Complexity: O(1)


## Author
[Maddala Revanth](https://www.linkedin.com/in/revanth-maddala/)
