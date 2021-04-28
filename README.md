<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/jadekeys/HINTS">
    <img src="images/hints.png" alt="hints" width="800" height="480">
  </a>

  <h3 align="center">HINTS</h3>

  <p align="center">
    Human Intelligence Narrowing Tool Set
    <br />
    <a href="https://github.com/jadekeys/HINTS"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jadekeys/HINTS/issues">Report Bug</a>
    ·
    <a href="https://github.com/jadekeys/HINTS/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
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
        <li><a href="#frontend">Frontend</a></li>
        <li><a href="#backend">Backend</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![HINTS][product-screenshot]](https://github.com/jadekeys/HINTS)

HINTS is a CRUD tool for housing information gathered from public OSINT resources on individuals (HUMINT) and organizations (ORGINT)

Now including:
* React interface for CRUD tasks relating to entries
* Strapi CMS using sqlite by default for persistence
* Knowledge base full of OSINT resources based on the work of Michael Bazzel
* HUMINT entries currently include 30+ topics
* ORGINT entries will include 50+ topics


A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With

* [Bootstrap](https://getbootstrap.com)
* [React](https://reactjs.org/)
* [Strapi](https://strapi.io/)
* [Python3](https://www.python.org/)



<!-- GETTING STARTED -->
## Getting Started

While running, this application houses an administrative interface at http://localhost:1337
The default credentials are "hintsadmin@hints.com" : "HINTSx007$" without quotes.

The HINTS web interface can be found at http://localhost:3000

These sections both need to be running in order for things to work smoothly. It is recommended to utilize two seperate terminal windows for this however is most comfortable. 

### Prerequisites

Clone the repo
   ```sh
   git clone https://github.com/jadekeys/hints.git
   ```

### Frontend

1. Move into frontend directory
   ```sh
   cd HINTS/frontend/
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run React frontend
   ```sh
   npm start develop
   ```


### Backend

1. Move into backend directory
   ```sh
   cd HINTS/backend/
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run Strapi backend
   ```sh
   npm run develop
   ```


Running the development mode makes troubleshooting far easier. This is still a work in progress.


<!-- ROADMAP -->
## Roadmap

* Facelift (I'm clearly a noob, help!)
* Better logo
* Image upload for entries
* Stabilize Ouroboros placement
* Generate reports from within web interface
* Proper authorization / authentication mechanism for each instance
* Docker installation


See the [open issues](https://github.com/jadekeys/HINTS/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Jadekeys - [@_jadekeys](https://twitter.com/_jadekeys) - jadekeys@protonmail.com

Project Link: [https://github.com/jadekeys/HINTS](https://github.com/jadekeys/HINTS)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Best README Template](https://github.com/othneildrew/Best-README-Template)
* [Michael Bazzel](https://inteltechniques.com/index.html)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jadekeys/HINTS.svg?style=for-the-badge
[contributors-url]: https://github.com/jadekeys/HINTS/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jadekeys/HINTS.svg?style=for-the-badge
[forks-url]: https://github.com/jadekeys/HINTS/network/members
[stars-shield]: https://img.shields.io/github/stars/jadekeys/HINTS.svg?style=for-the-badge
[stars-url]: https://github.com/jadekeys/HINTS/stargazers
[issues-shield]: https://img.shields.io/github/issues/jadekeys/HINTS.svg?style=for-the-badge
[issues-url]: https://github.com/jadekeys/HINTS/issues
[license-shield]: https://img.shields.io/github/license/jadekeys/HINTS.svg?style=for-the-badge
[license-url]: https://github.com/jadekeys/HINTS/blob/master/LICENSE.txt
[product-screenshot]: images/home.png
