<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>My Profile Page</title>
<link rel="stylesheet" href="style.css" />
</head>
<body onload="showGreeting()">

<h1>Welcome to My Profile</h1>
<p id="greeting"></p>
</header>

<main>
<section id="bio">
<img src="profile.jpg" alt="Profile Picture" class="profile-pic" />
<h2>About Me</h2>
<p>I’m Mercy Lonney, a tech-savvy student based in Nairobi. I love clean UI, creative code, and building smart solutions.</p>
<button onclick="toggleBio()">Read More</button>
<p id="moreBio" style="display:none;">I’m currently pursuing BBIT and I’m passionate about launching a tech consultancy. I also love interior decor and gardening!</p>
</section>

<section class="skills">
<h2>Skills</h2>
<ul>
<li>HTML, CSS & JavaScript</li>
<li>Python & SQL</li>
<li>Interior decor</li>
</ul>
</section>

<section class="projects">
<h2>Projects</h2>
<ul>
<li>Personal Portfolio Website</li>
<li>Interior decor Dashboard</li>
<li>Simple Budget Tracker</li>
</ul>
<button onclick="alert('You clicked a project!')">Click Me</button>
</section>
</main>

<footer>
<p>&copy; 2025 Mercy Lonney. All rights reserved.</p>
</footer>

<script src="script.js"></script>
</body>
</html>
