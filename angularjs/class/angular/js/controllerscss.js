var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
         $scope.people = [
  {
    "name":"Clara Smith",
    "shortname":"Clara_Smith",
    "reknown":"Professor of the Year 2014",
    "bio":"Carol has been teaching web development classes for 5 years and she works as a web developer consultant. She started teaching web development classes as she is really passionate about the possibility of giving users the experience they want from any type of web application. She has started a Master Degree in the area of Marketing with Social Media at the University of San Francisco."
  },
  {
    "name":"Linda Laran",
    "shortname":"Linda_Laran",
    "reknown":"Community Achiever",
    "bio":"Linda Laran is also known as Mrs. Double L. Linda has been teaching in the area of back-end web development for more than 8 years and she started at the Strandy Community College teaching mainframe programming languages as FORTRAN and Cobol. Later, with the growth in the web development, she started teaching classes such as Ruby, Python, Java, and C++. Linda has recently been appointed to be the Head of the Computer Science Department."
  },
  {
    "name":"Claudia P F Da Silva",
    "shortname":"Claudia_DaSilva",
    "reknown":"City College of San Francisco",
    "bio":"Claudia has been working in the Information Technology area since 1986. She is originally from Brazil where she started working developing and maintaining mainframe systems and later started working with client-server applications. Since 1996 she started working in front-end web development and currently she is a full time instructor for City College of San Francisco, responsible mainly for the Web Development courses and certificates."
  },
  {
    "name":"Nickolas Wong",
    "shortname":"Nick_Wong",
    "reknown":"Stanford University",
    "bio":"Nickolas, mainly known as Nick, is a recent Computer Science graduate from Stanford University. Before starting his Bachelor Degree at Stanford, he was a student at Dully Community College where later he came back to start teaching Game Development. Besides teaching, he continues to work for 42 Entertainment where he is a Developer Leader."
  },
  {
    "name":"Harold G Bold",
    "shortname":"Harold_Bold",
    "reknown":"Zynga",
    "bio":"Harold is a native of Sacramento, CA. He is married and has four kids. He graduated from UC Berkeley in 1992 with a major in International Business - Marketing. Once he started working with Marketing, he got involved in Graphic Design and became specialized in Designing great User Interfaces for many applications in the companies he has worked for. Currently he works at Zynga."
  },
  {
    "name":"Riley Gray",
    "shortname":"Riley_Gray",
    "reknown":"Boston, MA",
    "bio":"Riley Gray is a native of Boston where he grew up and ended up attending Boston University to finish his Bachelor Degree in Electronic Engineering. After graduating, he moved to California where he got his Master Degree at UC Davis in Instructional Technology. After his master degree, he started teaching at UC Davis in the area of Distance Learning Technology. He has helped UC Davis in choosing, installing, testing, and supporting the current Learning Management System they use ther for their online courses."
  },
  {
    "name":"Hillary M Gold",
    "shortname":"Hillary_Gold",
    "reknown":"Best K-12 Teacher 2014",
    "bio":"Hillary is a very energetic woman. She is married, with three elementary-school-age kids. She attended Larson University where she majored in Child Development with a minor in Instructional Technology. Later she started working as an Elementary School teacher at the local school where she also takes her kids to. She got involved in the Computer-4-Kids program developed by the local School District and she is currently a manager of this project that intends to teach kids how to use computers and even some basic topics in programming."
  },
  {
    "name":"Joe Young",
    "shortname":"Joe_Young",
    "reknown":"Riverside Academy of Art, Media, and Design",
    "bio":"A recent graduate from Riverside Academy of Art, Media, and Design, Joe is already proposing some new courses outlines and certificates for the Academy where he started working as soon as he graduated. He started as a Media Designer but later started teaching some of the classes as a part-time instructor. Joe really believes in giving back to the community!"
  },
  {
    "name":"Jonathan Frank",
    "shortname":"Jonathan_Frank",
    "reknown":"International Art University",
    "bio":"A faculty member at International Art University, Jonathan has become well-known for his different approach in teaching Math classes using games and songs. Frank has also helped the whole University by leading some workshops on modern methodologies and approaches in teaching STEM classes. He is well-known for using social media to interact with students and even other professors."
  }
]
      });