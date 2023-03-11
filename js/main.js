/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
var mainNav = document.getElementById("mainNav");
var contactNav = document.getElementById("contactNav");
var mobileLogo = document.getElementById("headerLogoPhone");
var openMenu = document.getElementById("mobileMenuOpen");
var closeMenu = document.getElementById("mobileMenuClose");
var header = document.getElementsByTagName("Header")[0];
var bigLogo = document.getElementsByClassName("headerLogo")[0];
var navText = document.getElementsByClassName("navText");
var imgNavMail = contactNav.getElementsByTagName("img")[0];
var imgNavInstagram = contactNav.getElementsByTagName("img")[1];
var imgNavLinkedin = contactNav.getElementsByTagName("img")[2];
var classHeader = document.getElementsByClassName("header")[0];

function myFunction() {
      mainNav.style.display = "flex";
      contactNav.style.display = "flex";
      header.style.backgroundColor = "#242424";

      openMenu.style.display = "none";
      closeMenu.style.display = "block";
      bigLogo.src = "assets/logoTransparent.png";
      imgNavMail.src = "assets/email-mobilnav.png";
      imgNavInstagram.src = "assets/instagram-mobilnav.png";
      imgNavLinkedin.src = "assets/linkedin-mobilnav.png";
      classHeader.style.flexGrow = 1;

      for (let i = 0; i < navText.length; i++) {
            navText[i].style.color = "#f8f8ff";
            navText[i].style.paddingLeft = 0;
      }
}

function mySecondFunction() {
      mainNav.style.display = "none";
      contactNav.style.display = "none";
      openMenu.style.display = "block";
      closeMenu.style.display = "none";
      header.style.backgroundColor = "#f8f8ff";
      bigLogo.src = "assets/logo.png";

      imgNavMail.src = "assets/email.png";
      imgNavInstagram.src = "assets/instagram.png";
      imgNavLinkedin.src = "assets/linkedin.png";
      classHeader.style.flexGrow = 0;

      for (let i = 0; i < navText.length; i++) {
            navText[i].style.color = "#242424";
            navText[i].style.paddingLeft = "2vw";
      }
}
