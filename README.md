# IDAssignment2
Project Name: Abyss Maker

Abyss Maker is a a real-time currency exchange rate checker that provides users with fast and accurate results. Abyss Maker allows users to check the latest currency rates of 168 currencies, with features like historical rates, filtering results, full currency code names. This website makes use of the free subscription API by fixer.io. 

## Design Process
This website is for anyone who are interested in checking out currency rates for any purposes. For example, they can be interested because they may be going on a holiday trip and want to convert some money to their destination's currency, or maybe it could just be their interests. 

I designed the website to make it look simple and organised, so that users would not have to go through complex processes just to use my website. I made this website with the idea to make everything as neat and straightforward as possible. The design for the icons in the socials section was done by fontawesome and I have referenced it down below in the credits section. The AbyssMaker icon was done by me in Adobe Illustrator. I thought of using yellow because I thought that it was a nice colour to use, and blue for the text as it goes well with yellow. 

For the home page hero image, I went to a website called pexel.com to search for website backgrounds that suit my likings. I chose a rather light coloured image as it is light on the eyes and it looks aesthetically pleasing together with the rest of my content for the website

For the button designs, I used bootstrap to help me customise the appearance of the buttons. For home page, I chose to use a more fancy button to attract users to click on them. For the following pages, I decided to go with a simpler appearance as I wanted to follow my initial concept, which is to make things simple and easy to use. Hence, I went with a simple dark theme button.

For the tables, I also used bootstrap to help me customise the appearance of the tables. For all the tables, I chose to use the primary colour offered by bootstrap to make the first row/headings of the table. For the table content, I chose to use table-striped that is offered by bootstrap to make the table have zebra-striping, which is aesthetically-pleasing.

For the fonts, I chose to use Poppins Semi-Bold 600 as I thought that it looks nice and displays the entire website very aesthetically. I have always liked this font and have always wanted to use it on my own website after finding out about it.

## Features
Latest Currency Rate

Historical Currency Rate <br>

Filtering results <br>

Full currency code names <br>

Social Media Icons in socials

### Existing Features
Historical Currency Rate <br>
Allows users to check past currency rates all the way back to the year in 1999.

Filtering results <br>
Allows users to select a currency code from the dropdown menu and get the results displayed in the form of a table.

Full currency code names <br>
Allows users to see the full names of the currency codes in the form of a table.

I also added a feature whereby users can see the results of the that was request sent.<br>('<strong>Results: </strong> <br> Success: ${success} <br> Timestamp: ${timestamp} <br> Base: ${base} <br> Date: ${date})

Social Media Icons that are working so that users can check out the website's social media accounts

### Features Left to Implement


## Technologies Used
Bootstrap <br>
Jquery
fontawesome(icons for socials)

## Testing
I looked through many tutorials on how to use the fetch method to retrieve data from the API I selected. The tutorials were all very complexed and so I asked Ms Dai for help. She referred me to the example for Random User API. I referred to it and I managed to get fetch data from the API I used. 

I also had some troubles with finding out how to bring data after fetching to a dropdown menu in a select tag in html. In the end, I managed to find out after some time and I was able to get the data as options for the dropdown menu. 

When I was trying to display the results, I realised that the buttons to display the results can be clicked multiple times, which resulted in many sets of results being displayed in one table. Hence, I went to the Internet to see how I can allow buttons to be clicked only once, so that only one set of results can be displayed. In the end, I managed to solve this issue by allowing some buttons to be clicked only once, such as "Display Rate" and "Display Table" for Latest Currency Code and Full Currency Code, which do not need to generate multiple results.

I also looked through the documentation given by fixer.io to see how I can make the most use out of their free subscription. In the end, I managed to use all of their free features, like historical rates, search by specific currency symbols, etc.

## Credits
https://fonts.google.com/specimen/Poppins?query=popp&sidebar.open=true&selection.family=Poppins:wght@300;600

https://stackoverflow.com/questions/20496203/insert-into-html-select-tag-options-from-a-json

https://stackoverflow.com/questions/10654992/how-can-i-get-a-collection-of-keys-in-a-javascript-dictionary

https://stackoverflow.com/questions/65065008/javascript-how-to-create-table-from-the-object

https://stackoverflow.com/questions/19053917/enable-the-button-to-be-clicked-only-to-once-exception

https://tutorialdeep.com/knowhow/get-text-of-selected-dropdown/

https://use.fontawesome.com/releases/v5.0.8/js/all.js

https://www.pexels.com/search/website%20background/
### Content
https://fixer.io/ --> results for currencies
https://use.fontawesome.com/releases/v5.0.8/js/all.js --> for social media icons

### Media
AbyssMaker image was done by Beak Wei Xiang in Adobe Illustrator.

Image for home page
https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500

### Acknowledgements
It was just a thought I had when I was trying to start.

## Website Link
https://weixiangbeak.github.io/IDAssignment2/

https://github.com/weixiangbeak/IDAssignment2
