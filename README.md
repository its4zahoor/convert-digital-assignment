# Convert Digital Assignment

## Task 1

In React, create a search bar that interacts with [dummyjson](https://dummyjson.com/products/search?q=[x]) and shows the results as a drop down.

_This is not a design task. Feel free to use basic tailwind to construct the UI._

```
// Clone Repo
$  git clone https://github.com/its4zahoor/convert-digital-assignment.git

// install dependencies
$  npm install

// start dev server
$  npm run dev

// Run Tests
$  npm run test
```

## Task 2

Test cases to run during the build process of a NextJS carousel of products.

NextJs is popular for fast load time and SEO. So, I say the Performance Tests and SEO test are the most important. Also, unit tests can be run at build time to prevent breaking changes to components and build should not have any errors and errors be reported properly. At last, since most of the assets are served staticly we can verify the paths and correctness of those assests as well and cache headers are set optimal for a fast and great use experience.

### 1. **Performance Tests**

- Measure the overall build time to ensure it is within acceptable limits.
- Analyze the size of the generated HTML, CSS, and JavaScript files to ensure they are optimized.
- Ensure that images are properly optimized.

### 2. **SEO and Accessibility Tests**

- Verify each product detail page has the correct meta tags and structured data for SEO.
- Verify the static HTML files generated and check for accessibility issues in the generated HTML.

### 3. Unit and Integration Tests

- Unit and integration tests to ensure the correctness of components.

### 6. **Error Handling**

- Ensure that any errors during the build process are correctly reported and handled.
- Handle scenarios where data might be missing or incomplete without breaking the build.

### 7. **Static Asset Verification**

- Ensure that static assets like images and CSS are correctly referenced in the HTML.
- Verify that appropriate caching headers are set for static assets.

Linting and Formatting can also be done before build to make developer code consistent and error free.
