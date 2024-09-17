<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">

<img src="https://github.com/user-attachments/assets/7493b614-f037-4ec1-a0d1-52557823d5dc" width="100" height="100">


  <h3 align="center">TrackMyFitness</h3>

  <p align="center">
    TrackMyFitness is a tool designed to optimize workout progress tracking, offering personalized workout templates, detailed performance analytics, and seamless workout logging to help users stay on top of their fitness goals.
    .
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
![p1](https://github.com/user-attachments/assets/7d4537e1-1014-4462-a603-150382694874)

**TrackMyFitness** is a full-stack web application designed to enhance your workout tracking experience by providing tools for workout creation, analysis, and template-based planning. Built with Node.js, Express, PostgreSQL, and React, this application leverages Supabase for authentication and data retrieval.

### Key Features

- **Supabase Integration**: Securely sign in and manage your workout data with user-specific templates and workout history.
- **Workout Creation**: Easily create customized workouts, specifying exercises, sets, reps, and weights.
- **Template Management**: Use premade workout templates for quick setup, saving time and effort.
- **Data Visualization**: Analyze your workout progress with visualizations such as charts and tables, tracking metrics like weight lifted, reps, and overall strength development.
- **Workout Analysis**: Gain insights into your long-term progress with tools that break down your workout data for better decision-making and performance tracking.

### Purpose

TrackMyFitness was developed to be a convenient tool for tracking workout progress, analyzing long-term strength trends, and simplifying workout planning through reusable templates. By extending the basic functionality of fitness tracking, the application aims to provide users with meaningful insights into their fitness journey.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* <a href="https://nodejs.org/" target="_blank"><img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js" width="150" height="40"/></a>
* <a href="https://expressjs.com/" target="_blank"><img src="https://img.shields.io/badge/Express.js-%23404d59?style=flat&logo=express&logoColor=%2361DAFB" alt="Express" width="150" height="40"/></a>
* <a href="https://www.postgresql.org/" target="_blank"><img src="https://img.shields.io/badge/PostgreSQL-%23336791?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL" width="150" height="40"/></a>
* <a href="https://reactjs.org/" target="_blank"><img src="https://img.shields.io/badge/React-%23282c34?style=flat&logo=react&logoColor=%61DAFB" alt="React" width="150" height="40"/></a>
* <a href="https://supabase.com/" target="_blank"><img src="https://img.shields.io/badge/Supabase-%233FCF8E?style=flat&logo=supabase&logoColor=white" alt="Supabase" width="150" height="40"/></a>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

* Download npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Create an account then get a Client ID & Client Secret at https://developer.spotify.com/dashboard
2. Clone the repo
   ```sh
   git clone https://github.com/ReedGoldsworthy/lifting-tracker-backend.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### Demo Video:

### Create Workout
- The Create page allows users to build new workouts from scratch or use premade templates. It provides an intuitive interface for selecting exercises, specifying sets, reps, and weights, making it easy to organize and customize workouts based on individual goals and preferences.
<p></p>

![create](https://github.com/user-attachments/assets/6c56c590-ddb1-478b-901d-87ab3a471d1d)


### Templates
- The Templates page allows users to quickly create workouts using premade templates. These templates can include pre-configured exercises, sets, reps, and weights, streamlining the workout creation process. Users can customize these templates to match their personal goals, providing a quick and easy way to set up a workout without starting from scratch.
<p></p>

![template](https://github.com/user-attachments/assets/923fefa9-831d-4847-b469-9341c8dca514)


### Workout List
- The Workout List page allows users to view and manage their workouts in a sortable and filterable table format. Users can sort workouts by date, type, or duration, apply filters to find specific sessions, and stage workouts for future use, providing an organized and efficient way to interact with their workout history.
<p></p>

![table](https://github.com/user-attachments/assets/da48dfb6-05c0-4aa1-b4b0-a946d7975ad0)



### Data Visualization
- The Data Visualization page provides an interactive overview of workout data, featuring visualizations such as bar charts for tracking progress, graphs for weight lifted over time, and detailed breakdowns of workout attributes like sets, reps, and exercise type. It helps users analyze their performance by offering insights into trends and long-term strength development.
<p></p>


![progress](https://github.com/user-attachments/assets/650782c3-cc6e-4728-8417-d68673f8cb37)




<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] implement CreateWorkout
- [ ] Get CreateTemplate Working
- [ ] Chart User Data

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Reed Goldsworthy - Reedgoldsworthy2@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>







<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/ReedGoldsworthy/spotify_util/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/reed-goldsworthy-00893215a/

