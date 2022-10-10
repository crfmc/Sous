# Sous

### Kitchen Assistant App

Sous is an app made to help users cook in real time. It does what any recipe book can, and what any recipe book can't.

Journey

To begin, the first question was one of architecture. I'm doing things a little out of order, but the idea is a real time recipe app. An interactive set of rules for a user to flip through as they are cooking. And yes, sure, I was inclined to use some technologies I was simply interested in.

ESBuild The benchmark data for the library was too impressive to ignore. I'm not a big fan of config files, and although it was time consuming, I found guidance on how to use ESBuild on the frontend and backend.

Preact This was another performance driven decision. I was inclined to use the virtual DOM features of React as well as hooks, though I was hoping to avoid sending React to the browser. Preact came in to save me, here.

SSR I chose to go with server side rendering because it would only make sense to have the earliest TTI (Time to interactive), any lag could potentially make the difference (burning the potatoes).

I began, simply, by injecting the bundled scripts into an HTML file using the fs library. In order to get this to work I had to use the preact-render-to-string library, which renders Preact's JSX, which translates to HTML, then made into a string that we can inject.

Then I needed a way to use events, and several other features of the browser API.

## Design Journey
