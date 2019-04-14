## Project
### How to set up the application and dependencies
#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Challenges
#### Too many results when typing in the search box.

When I started showing search results as the user typed there was a bit of stutter as the page would try to hit the API for every keystroke while the user was typing. I used lodash's debounce method to restrict the number of calls that would be made while the user typed.

#### Pagination

I've never had to implement pagination in a React app before so was unsure how to do this. I had to tweak what data I was pulling from the API in order to get the number of pages and pass that down to the PageList component in order to render the correct number of pages. I also had to make sure the current page wasn't a link. Unfortunately there's still a bug where the first page shows the page 1 as a link but only for the first set of results.

### Future improvements

- Pagination: Currently I'm showing a page number for every page returned by the initial API call. I would probaly like to show a limited number of pages representing the starting and ending page numbers separated by some `...` ex `1 2 3 .... 100 101 102`. Also need to fix the bug where the first page of results shows page 1 as a link.
- Routing: Add routing so that the url will reflect the current page search state. That way search results can be shared.
- Movie detail page: Clicking a movie would show more details about it.
- Additional filtering / sorting: Once the title search results have rendered allow a user to sort newest to oldest or highest reviews to lowest reviews, etc.
- Images: Some thumbnails aren't available so I would substitute a placeholder image when images can't be found.
- Responsive layout: Add appropriate classes and styles so layout looks appropriate in mobile.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
