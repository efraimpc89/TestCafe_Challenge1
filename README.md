# Test Cafe - Challenge 1

The purpose of this repository is to test the scenarios described on the following challenge:
https://docs.google.com/document/d/1k2s0FRrw1NdJCD5BlnuD4pkrf9EUHFfnKZj9fzFM9r4/edit#

## Project Structure

The project it's following the Page Object Model design pattern to make the code as reusable as possible.

Inside data folder you can set all the constants or set any information that won't be changing through the tests.

Inside the pages folder, each page of saucedemo site has been separated by class, so you will find any element or functionality related to its corresponding page on this section.

In tests folder, we have a file for each feature of saucedemo site related to the challenge.
```
challenge_pom
  ├ data
  |  └ Constants.js
  | 
  ├ pages
  |  ├ CartPage.js
  |  ├ COCompletePage.js
  |  ├ COOverviewPage.js
  |  ├ COYourInformationPage.js
  |  ├ LoginPage.js
  |  └ ProductsPage.js
  |
  └ tests
     ├ CartTests.js
     ├ CheckoutTests.js
     └ LoginTests.js
```

## Pre-requisites (Windows only)

1. Install Node.js + npm [https://nodejs.org/en/](https://nodejs.org/en/)  
[You can follow this guide: [https://wsvincent.com/install-node-js-npm-windows/](https://wsvincent.com/install-node-js-npm-windows/)]  
  
2. [Install TestCafe](https://devexpress.github.io/testcafe/documentation/getting-started/) through the terminal using:
	>npm install -g testcafe Installing TestCafe 

	[Video Guide](https://drive.google.com/file/d/1pHzcL2CQF4lP4yH0dZUb_2gLozUq8q4f/view?usp=sharing)  
  
3. Javascript IDE can be:  
	- Visual Studio Code: [https://code.visualstudio.com/](https://code.visualstudio.com/)  
	- Atom: [https://ide.atom.io/](https://ide.atom.io/)  
  
4. [Installing Artillery](https://artillery.io/docs/guides/getting-started/installing-artillery.html)
5. [Install Git](https://git-scm.com/downloads)

## How to run 

1. Open windows command line
2. Clone github repository: 

		 git clone https://github.com/efraimpc89/TestCafe_Challenge1.git
3. Navigate to *TestCafe_Challenge1* folder and execute one of following commands:
	
	To run all tests on Chrome only:

		 npm run test-all-chrome

	To run all tests on Firefox only:

		 npm run test-all-firefox

	To run all tests on Safari only:

		 npm run test-all-safari

	To run all tests on all installed browsers:

		 npm run test-all-EveryBrowser
## Contact

If you have any questions, feel free to send me an email:
efraimpc89@gmail.com

```