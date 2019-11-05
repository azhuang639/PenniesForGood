# PenniesForGood
	
	PenniesForGood is a chrome extension that interacts with online purchasing retailers and encourages microdonations to nonprofits and charities.

	
# Who we are

	We are five Duke students (Annie Wang, Geshna Aggarwal, Raymond Lin, Alex Zhuang, Andrew Wu) - 4 freshmen and 1 sophomore, 4 novices and 1 amateur hacker, 4 CS majors and 1 engineer, who are participating in HackDuke for the joy of creating something that can possibly be implemented to make the world a better place. 

# Inspiration
	
	We were inspired by a combination of the tracks offered here at HackDuke. Although we were technically limited to just one track, we wanted to try our best and influence all five tracks - helping nonprofits that support education, socioeconomic inequality, health and wellness, and in the future, hopefully also benefit energy and environmental nonprofits. 
	Our idea was founded based on tip jars and “rounding up” at gas stations and restaurants, where even the smallest amount can go a long way. We truly believe that we can make a macro difference with microdonations.

# What it does

	PenniesForGood is a Chrome extension that is activated when a user clicks the “add to cart” button on an online purchasing platform. It will prompt a user to round up their final total to the nearest dollar, whether it be 1 cent or 99 cents, and if the response is yes, a list of charities that are related to their purchase will pop up, following the psychological “jam theory”, to encourage users to select a charity that matters to them to donate too. 
	Our data is also accumulated within a progress bar page that showcases a progress bar to our nearest goal that updates every time someone clicks yes!

# How we built it

Our Google Chrome extension is built using Javascript, CSS, and HTML as the overall framework. We first created our chrome extension template and the extension window that gave information on PenniesForGood and directed users to a graph of their charitable progress in the 3 tracks we created (education, health, hunger). Then we created a buy window that would be enabled when the “add to cart” button in Amazon is clicked. This button will link to another popup that will prompt the user to donate, telling them how much we round up the price too. If the user says says, they are directed to a list of 3 charities based off of the product they bought (e.g if a user buys instant ramen, they are directed to charities looking to address hunger). This price is then updated appropriately in the Amazon checkout. Our data is also accumulated within a progress bar page that showcases a progress bar to our nearest goal that updates every time someone clicks yes!

# Challenges we ran into

	The first challenges we ran into is that because most of us are novice hackers, we had to learn html, css, and js and the combination of the three to build a chrome extension website. We had to learn how to build progress bars, how to overlay chrome extension pages, how to use the chrome storage, and how to even modify the amazon website, and much more.
	We constantly ran into errors, debugging problems, buttons overlapping, text not formatting, connecting different files in our project and many more. We wanted to make something that worked, yet didn’t want to make it out of the scope of our abilities.

# Accomplishments that we're proud of
	We were very proud of being able to work so efficiently and cohesively even though most of us had never participated in a hackathon before. 

# What we learned

	Some of us had never coded in HTML/Javascript before, so it was a completely new experience for us. In addition, we learned the importance of communicating with each other about pushing and pulling to git. 

# What's next?
	
	We want to implement a user login system to keep track of each user’s donations. We want to increase a bigger database of charities and we want to be able to spread it to far more different online platforms. We also hope to improve the user interface to make it more user friendly and cleaner-looking.
