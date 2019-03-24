(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <ng-container *ngTemplateOutlet=\"header\"></ng-container>\n  <ng-container *ngTemplateOutlet=\"title\"></ng-container>\n  <ng-container *ngTemplateOutlet=\"callForProposal\"></ng-container>\n  <ng-container *ngTemplateOutlet=\"eventDetails\"></ng-container>\n  <ng-container *ngTemplateOutlet=\"lookingFor\"></ng-container>\n  <ng-container *ngTemplateOutlet=\"talkFormats\"></ng-container>\n  <ng-container *ngTemplateOutlet=\"cfpDeadline\"></ng-container>\n  <ng-container *ngTemplateOutlet=\"organizers\"></ng-container>\n  <ng-container *ngTemplateOutlet=\"footer\"></ng-container>\n</div>\n\n<ng-template #header>\n  <header class=\"sticky\">\n    <div class=\"header m-3\">\n      <img width=\"100\" alt=\"Women Who Code Logo\" [src]=\"wwcodeLogoSrc\" class=\"pr-3\">\n      <strong class=\"text-teal\">CONNECT ASIA 2019</strong>\n      <strong class=\"text-teal float-right\">{{hashtags.join(' ')}}</strong>\n    </div>\n  </header>\n</ng-template>\n\n<ng-template #title>\n  <div class=\"title-container text-center\">\n    <div class=\"title-content\">\n      <h1 class=\"title-text\" data-aos=\"fade-in\">\n        <strong>\n          WOMEN WHO CODE\n          CONNECT ASIA 2019\n        </strong>\n      </h1>\n      <div class=\"btn btn-cfp btn-wwcode mt-3\" (click)=\"redirect('cfp')\" data-aos=\"fade-right\">Call for Proposal</div>\n      <div class=\"btn btn-wwcode mt-3\" (click)=\"redirect('speaker')\" data-aos=\"fade-left\">Submit Speaker's Profile</div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #callForProposal>\n  <div class=\"section\">\n    <h3 class=\"section-title text-teal\" data-aos=\"zoom-in\">\n      <strong>\n        CALL FOR PROPOSAL\n      </strong>\n    </h3>\n    <div class=\"text-justify\" data-aos=\"fade-in\">\n      <p>\n        You're invited to submit a talk for CONNECT Asia 2019, <a href=\"https://www.womenwhocode.com/\" target=\"_blank\">Women\n          Who\n          Code</a>'s\n        premier technical conference in Asia.\n      </p>\n      <p>\n        CONNECT Asia 2019 will\n        include the industry's most influential leaders, engineers, and more.\n      </p>\n      <p>\n        The conference will be held on August 31<sup>st</sup>\n        2019\n        in\n        Singapore.\n      </p>\n      <p>\n        We are changing the face of tech, creating a more inclusive and diverse industry, and helping women connect\n        with\n        professional opportunities that propel them into positions of power. WWCode CONNECT Asia 2019 does just\n        that.\n      </p>\n      <p>\n        WWCode CONNECT Asia 2019 brings together speakers from around the world to share their stories and\n        expertise\n        about\n        technology. Join the Women Who Code community for in-depth panels, technical workshops, keynotes, and\n        actionable\n        advice\n        on advancing your career. Please email <a href=\"mailto:singapore@womenwhocode.com\">singapore@womenwhocode.com</a>\n        with any questions.\n      </p>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #eventDetails>\n  <div class=\"row\">\n    <div class=\"col-sm-6 bg-dark-teal text-center pt-4 pb-3\" data-aos=\"fade-right\">\n      <div class=\"section-title mt-1\">\n        Connect Asia 2019\n      </div>\n      <h3>\n        {{hashtags.join(' ')}}\n      </h3>\n    </div>\n    <div class=\"col-sm-6 bg-teal p-3 pl-5\" data-aos=\"fade-left\">\n      <h5>\n        Singapore\n      </h5>\n      <h5>\n        <i class=\"fa fa-map-marker mr-1\"></i>\n        Location TBC\n      </h5>\n      <h5>\n        <i class=\"fa fa-calendar-alt mr-1\"></i>\n        August 31<sup>st</sup> 2019\n      </h5>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #lookingFor>\n  <div class=\"section\">\n    <h3 class=\"section-title text-teal\" data-aos=\"zoom-in\">\n      What We're Looking For\n    </h3>\n    <div class=\"row d-flex mt-2\">\n      <div class=\"col-sm-4\">\n        <div class=\"card m-1 p-0 text-teal\" data-aos=\"fade-up\">\n          <div class=\"card-header\">\n            <i class=\"fas fa-desktop fa-4x mt-2 mb-3\"></i>\n            <br>\n            <strong>TECHNOLOGY</strong>\n          </div>\n          <div class=\"card-body\">\n            <ul class=\"text-left\">\n              <li>\n                Engineering and technical know-how\n              </li>\n              <li>\n                ProTips\n              </li>\n              <li>\n                Work processes\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"card m-1 p-0 text-teal\" data-aos=\"fade-up\">\n          <div class=\"card-header\">\n            <i class=\"fas fa-brain fa-4x mt-2 mb-3\"></i>\n            <br>\n            <strong>INNOVATION</strong>\n          </div>\n          <div class=\"card-body\">\n            <ul class=\"text-left\">\n              <li>\n                New technologies\n              </li>\n              <li>\n                Technical innovation across industries\n              </li>\n              <li>\n                Other topics important for engineers\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"card m-1 p-0 text-teal\" data-aos=\"fade-up\">\n          <div class=\"card-header\">\n            <i class=\"fas fa-trophy fa-4x mt-2 mb-3\"></i>\n            <br>\n            <strong>LEADERSHIP</strong>\n          </div>\n          <div class=\"card-body\">\n            <ul class=\"text-left\">\n              <li>\n                Building leaders for a better industry\n              </li>\n              <li>\n                Career advancement\n              </li>\n              <li>\n                Best practices for engineering teams\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"text-justify\" data-aos=\"fade-in\">\n      <p class=\"mt-3\">\n        WWCode is looking for enthusiastic and dynamic speakers working in technology who want to share their\n        expertise.\n        We\n        aim\n        to have speakers that represent the talent and rich diversity of our community.\n      </p>\n      <p>\n        The goal is to share technical and soft skill experiences with technical leaders, software developers,\n        product\n        managers, designers and other technologists. If you use a specific language, your talk must be\n        understandable\n        by\n        good\n        developers, even if they don’t know the exact language syntax (short snippets or pseudo-code are totally\n        fine).\n\n      </p>\n      <p>\n        Attendees will be able to take away changes that can improve their day-to-day jobs.\n\n        Don’t be afraid to bring up advanced stuff and even try your hand at live demo-ing. Consider topics like\n        machine\n        learning, data science, cloud, mobile, web, security, and more. Submissions by professional and first-time\n        speakers\n        are\n        welcome.\n      </p>\n      <p> If you have an awesome idea, do not hesitate to submit it! We will be happy to give you the necessary\n        feedback\n        to make sure it matches audience expectations.\n      </p>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #talkFormats>\n  <div class=\"text-center\" data-aos=\"fade-left\">\n    <div class=\"row\">\n      <div class=\"col-sm-9 bg-light-teal pt-3\">\n        <div class=\"section-title\">\n          TALK FORMATS\n        </div>\n        <ul class=\"text-left talk-formats\">\n          <li class=\"mb-2\">\n            <h5>\n              Talks: 35 minutes\n            </h5>\n          </li>\n          <li class=\"mb-2\">\n            <h5>\n              Lightning Talks: 5 minutes\n            </h5>\n          </li>\n          <li class=\"mb-2\">\n            <h5>\n              Hands-on Workshops: 2 hours\n            </h5>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-sm-3 bg-dark-teal pt-3 pb-3\">\n        <img [src]=\"speakerSrc\" alt=\"Speaker\">\n      </div>\n    </div>\n\n  </div>\n</ng-template>\n\n<ng-template #cfpDeadline>\n  <div class=\"section\">\n    <div class=\"section-title text-teal\" data-aos=\"zoom-in\">Share Your Expertise</div>\n\n    <h5 data-aos=\"zoom-in\">Deadline to Submit:</h5>\n    <h4 data-aos=\"zoom-in\"><strong>June 15<sup>th</sup></strong></h4>\n\n\n    <div class=\"btn btn-cfp btn-wwcode-inverse mt-3\" (click)=\"redirect('cfp')\" data-aos=\"fade-right\">Call for Proposal</div>\n    <div class=\"btn btn-wwcode-inverse mt-3\" (click)=\"redirect('speaker')\" data-aos=\"fade-left\">Submit Speaker's\n      Profile</div>\n\n    <div class=\"text-justify mt-4\" data-aos=\"fade-in\">\n      <p>\n        Talks are accepted on a rolling basis. Submit early to have the greatest chance for feedback and\n        acceptance.\n        We believe that our industry is better when everyone has a voice.\n        We take our <a href=\"https://code.womenwhocode.com/connect2019cfp/clkn/http/www.womenwhocode.com/codeofconduct\"\n          target=\"_blank\">Code of Conduct</a> seriously, and\n        encourage those of groups traditionally underrepresented in technology to apply to speak.\n      </p>\n    </div>\n  </div>\n</ng-template>\n\n\n<ng-template #organizers>\n  <div class=\"section bg-teal-gradient-bottom-right pb-4\">\n    <div class=\"section-title text-white organizers-text\" data-aos=\"fade-in\">\n      WOMEN WHO CODE ORGANIZERS IN ASIA\n    </div>\n\n    <h5>\n      Contact us&nbsp;:&nbsp;\n      <a href=\"mailto:{{email}}\" class=\"text-white mb-2\">\n        {{email}}\n      </a>\n    </h5>\n\n    <div class=\"row align-items-center\">\n      <div class=\"col-md-1\"></div>\n\n      <div *ngFor=\"let country of countries\" class=\"col-md-2 mt-5\" data-aos=\"fade-in\">\n        <div class=\"mb-2\">\n          <a [href]=\"country.link\" target=\"_blank\">\n            <div class=\"text-uppercase text-white\">\n              {{country.name}}\n            </div>\n            <img [src]=\"country.flag\" class=\"country-flag mb-2\">\n          </a>\n        </div>\n        <div *ngIf=\"country.contacts\" class=\"mb-4\">\n          <!-- <img src=\"https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-mail.svg\" class=\"social-media-icon\"\n            (click)=\"redirect(country.contacts.email)\"> -->\n          <img src=\"https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-facebook.svg\" class=\"social-media-icon\"\n            (click)=\"redirect(country.contacts.facebook)\">\n          <img src=\"https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-twitter.svg\" class=\"social-media-icon\"\n            (click)=\"redirect(country.contacts.twitter)\">\n        </div>\n      </div>\n\n      <div class=\"col-md-1\"></div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #footer>\n  <footer class=\"text-muted footer-text\">\n    <div class=\"section\">\n      <p>\n        © 2019 Women Who Code | Women Who Code is a 501(c)(3) non-profit dedicated to inspiring women to excel in\n        technology careers.\n      </p>\n    </div>\n  </footer>\n</ng-template>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 360px) {\n  .title-text, .organizers-text {\n    font-size: x-large !important; }\n  .btn-cfp {\n    margin-right: 0; }\n  .section, .talk-formats {\n    padding-right: 1rem;\n    padding-left: 1rem; } }\n\n@media only screen and (min-width: 400px) {\n  .btn-cfp {\n    margin-right: 2rem; } }\n\n@media only screen and (min-width: 400px) and (max-width: 899px) {\n  .section, .talk-formats {\n    padding-right: 3rem;\n    padding-left: 3rem; } }\n\n@media only screen and (min-width: 900px) {\n  .section, .talk-formats {\n    padding-right: 10rem;\n    padding-left: 10rem; } }\n\n.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: white;\n  padding-bottom: 0.3rem;\n  padding-top: 0.3rem;\n  z-index: 1;\n  border-bottom: 2px solid #007a7c; }\n\n.section {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  text-align: center;\n  line-height: 2; }\n\n.section-title {\n    margin-bottom: 1rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    font-size: 1.75em; }\n\n.content {\n  font-family: 'Montserrat', sans-serif; }\n\n.text-teal {\n  color: #007a7c; }\n\n.title-container {\n  background-image: linear-gradient(gray, gray), url('connect_cover_1.jpeg');\n  background-blend-mode: saturation;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.title-content {\n  padding-top: 5rem;\n  padding-bottom: 5rem; }\n\n.title-text {\n  color: white;\n  text-shadow: 3px 3px #007a7c; }\n\n.bg-dark-teal {\n  background-color: #094142;\n  color: white; }\n\n.bg-teal {\n  background-color: #007a7c;\n  color: white; }\n\n.bg-teal-gradient-bottom-right {\n  background-image: linear-gradient(to bottom right, #007a7c, #a5edf7);\n  color: white; }\n\n.bg-teal-gradient-top-right {\n  background-image: linear-gradient(to top right, #007a7c, #a5edf7);\n  color: white; }\n\n.bg-light-teal {\n  background-color: #449ea0;\n  color: white; }\n\n.bg-very-light-teal {\n  background-color: #a5edf7; }\n\n.btn-wwcode {\n  background-color: #007a7c;\n  color: white;\n  border-color: white; }\n\n.btn-wwcode:hover {\n    background-color: white;\n    color: #007a7c;\n    border-color: #007a7c; }\n\n.btn-wwcode-inverse {\n  background-color: white;\n  color: #007a7c;\n  border-color: #007a7c; }\n\n.btn-wwcode-inverse:hover {\n    background-color: #007a7c;\n    color: white;\n    border-color: white; }\n\n.footer-text {\n  font-size: 0.8em; }\n\n.country-flag {\n  transition: all .1s linear;\n  -webkit-filter: drop-shadow(2px 2px #a5edf7);\n          filter: drop-shadow(2px 2px #a5edf7);\n  width: 40px;\n  border-radius: 18px; }\n\n.country-flag:hover {\n    -webkit-filter: drop-shadow(5px 5px #007a7c);\n            filter: drop-shadow(5px 5px #007a7c); }\n\n.social-media-icon {\n  width: 20px;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  transition: all 0.1s linear;\n  cursor: pointer;\n  -webkit-filter: grayscale(90%);\n          filter: grayscale(90%); }\n\n.social-media-icon:hover {\n    margin-top: -5px;\n    -webkit-filter: drop-shadow(3px 3px #007a7c);\n            filter: drop-shadow(3px 3px #007a7c); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZW5keWtvbmcvRG9jdW1lbnRzL3NpZGUvd3djb2RlY29ubmVjdGFzaWEuZ2l0aHViLmlvL2NvZGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSTtJQUNJLDhCQUE2QixFQUNoQztFQUlEO0lBQ0UsZ0JBQWUsRUFDaEI7RUFDRDtJQUNJLG9CQUFtQjtJQUNuQixtQkFBa0IsRUFDckIsRUFBQTs7QUFHTDtFQUNJO0lBQ0ksbUJBQWtCLEVBQ3JCLEVBQUE7O0FBR0w7RUFDSTtJQUNJLG9CQUFtQjtJQUNuQixtQkFBa0IsRUFDckIsRUFBQTs7QUFHTDtFQUNJO0lBQ0kscUJBQW9CO0lBQ3BCLG9CQUFtQixFQUN0QixFQUFBOztBQUdMO0VBQ0kseUJBQXdCO0VBQ3hCLGlCQUFnQjtFQUNoQixPQUFNO0VBQ04sd0JBQXVCO0VBQ3ZCLHVCQUFzQjtFQUN0QixvQkFBbUI7RUFDbkIsV0FBVTtFQUNWLGlDQWpEMEIsRUFrRDdCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsZUFBYyxFQVFqQjs7QUFORztJQUNJLG9CQUFtQjtJQUNuQixrQkFBaUI7SUFDakIsMEJBQXlCO0lBQ3pCLGtCQUFpQixFQUNwQjs7QUFJTDtFQUNJLHNDQUFxQyxFQUN4Qzs7QUFFRDtFQUNJLGVBeEUwQixFQXlFN0I7O0FBR0k7RUFDRywyRUFFNEM7RUFDNUMsa0NBQWlDO0VBQ2pDLDZCQUE0QjtFQUM1Qiw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLHVCQUFzQixFQUN6Qjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixxQkFBb0IsRUFDdkI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osNkJBOUZzQixFQStGekI7O0FBSUQ7RUFDSSwwQkFuR21CO0VBb0duQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSwwQkF6R3NCO0VBMEd0QixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxxRUFBa0Y7RUFDbEYsYUFBWSxFQUNmOztBQUVEO0VBQ0ksa0VBQStFO0VBQy9FLGFBQVksRUFDZjs7QUFFRDtFQUNJLDBCQXRIdUI7RUF1SHZCLGFBQVksRUFDZjs7QUFFRDtFQUNJLDBCQTFINEIsRUEySC9COztBQUlEO0VBQ0ksMEJBbklzQjtFQW9JdEIsYUFBWTtFQUNaLG9CQUFtQixFQU90Qjs7QUFWQTtJQU1PLHdCQUF1QjtJQUN2QixlQXpJa0I7SUEwSWxCLHNCQTFJa0IsRUEySXJCOztBQUdMO0VBQ0ksd0JBQXVCO0VBQ3ZCLGVBaEpzQjtFQWlKdEIsc0JBakpzQixFQXdKekI7O0FBVkE7SUFNTywwQkFwSmtCO0lBcUpsQixhQUFZO0lBQ1osb0JBQW1CLEVBQ3RCOztBQUlUO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksMkJBQTBCO0VBQzFCLDZDQUE2QztVQUE3QyxxQ0FBNkM7RUFDN0MsWUFBVztFQUNYLG9CQUFtQixFQUt0Qjs7QUFURDtJQU9RLDZDQUF5QztZQUF6QyxxQ0FBeUMsRUFDNUM7O0FBR0w7RUFDSSxZQUFXO0VBQ1gsb0JBQW1CO0VBQ25CLHFCQUFvQjtFQUNwQiw0QkFBMkI7RUFDM0IsZ0JBQWU7RUFDZiwrQkFBc0I7VUFBdEIsdUJBQXNCLEVBTXpCOztBQVpEO0lBU1EsaUJBQWdCO0lBQ2hCLDZDQUF5QztZQUF6QyxxQ0FBeUMsRUFDNUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiR3d2NvZGUtdGVhbDogcmdiKDAsIDEyMiwgMTI0KTtcbiRkYXJrLXRlYWw6ICByZ2IoOSwgNjUsIDY2KTtcbiRsaWdodC10ZWFsOiAgcmdiKDY4LCAxNTgsIDE2MCk7XG4kdmVyeS1saWdodC10ZWFsOiByZ2IoMTY1LCAyMzcsIDI0Nyk7XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICAudGl0bGUtdGV4dCwgLm9yZ2FuaXplcnMtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAvLyAuc2VjdGlvbi10aXRsZSB7XG4gICAgLy8gICAgIGZvbnQtc2l6ZTogbGFyZ2UgIWltcG9ydGFudDtcbiAgICAvLyB9XG4gICAgLmJ0bi1jZnAge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgICAuc2VjdGlvbiwgLnRhbGstZm9ybWF0cyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgICAuYnRuLWNmcCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA4OTlweCkge1xuICAgIC5zZWN0aW9uLCAudGFsay1mb3JtYXRzIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAgIC5zZWN0aW9uLCAudGFsay1mb3JtYXRzIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTByZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTByZW07XG4gICAgfVxufVxuXG4uc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICR3d2NvZGUtdGVhbDtcbn1cblxuLnNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG5cbiAgICAmLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMS43NWVtO1xuICAgIH1cbn1cblxuXG4uY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuLnRleHQtdGVhbHtcbiAgICBjb2xvcjogJHd3Y29kZS10ZWFsO1xufVxuXG4udGl0bGUge1xuICAgICAmLWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgICAgIGxpbmVhci1ncmFkaWVudChncmF5LCBncmF5KSxcbiAgICAgICAgdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9jb25uZWN0X2NvdmVyXzEuanBlZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzYXR1cmF0aW9uO1xuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuXG4gICAgJi1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDVyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xuICAgIH1cblxuICAgICYtdGV4dCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggJHd3Y29kZS10ZWFsO1xuICAgIH1cbn1cblxuLmJnIHtcbiAgICAmLWRhcmstdGVhbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLXRlYWw7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmLXRlYWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd3djb2RlLXRlYWw7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmLXRlYWwtZ3JhZGllbnQtYm90dG9tLXJpZ2h0IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgJHd3Y29kZS10ZWFsLCAkdmVyeS1saWdodC10ZWFsKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYtdGVhbC1ncmFkaWVudC10b3AtcmlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkd3djb2RlLXRlYWwsICR2ZXJ5LWxpZ2h0LXRlYWwpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi1saWdodC10ZWFsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LXRlYWw7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmLXZlcnktbGlnaHQtdGVhbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJ5LWxpZ2h0LXRlYWw7XG4gICAgfVxufVxuXG4uYnRuIHtcbiAgICAmLXd3Y29kZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3d2NvZGUtdGVhbDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICY6aG92ZXIgIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICR3d2NvZGUtdGVhbDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi13d2NvZGUtaW52ZXJzZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICBib3JkZXItY29sb3I6ICR3d2NvZGUtdGVhbDtcblxuICAgICAgICAmOmhvdmVyICB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd3djb2RlLXRlYWw7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9vdGVyLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi5jb3VudHJ5LWZsYWcge1xuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgbGluZWFyO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAkdmVyeS1saWdodC10ZWFsKTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCAkd3djb2RlLXRlYWwpO1xuICAgIH1cbn1cblxuLnNvY2lhbC1tZWRpYS1pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmlsdGVyOiBncmF5c2NhbGUoOTAlKTtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCAzcHggJHd3Y29kZS10ZWFsKTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_data_organizers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/data/organizers */ "./src/assets/data/organizers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.speakerProfileLink = 'http://goo.gl/forms/YrRPwmaefr3Kf43q2';
        this.callForProposalLink = 'http://goo.gl/forms/yHvVXsgAffutFM5x1';
        this.wwcodeLogoSrc = 'assets/images/wwc_logo.jpeg';
        this.speakerSrc = 'assets/images/speaker.png';
        this.countries = _assets_data_organizers__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.email = 'connectasia@womenwhocode.com';
        this.hashtags = ['#CONNECTAsia', '#WWCode'];
    }
    AppComponent.prototype.redirect = function (destination) {
        var link;
        switch (destination) {
            case 'cfp':
                link = this.callForProposalLink;
                break;
            case 'speaker':
                link = this.speakerProfileLink;
                break;
            default:
                link = destination;
                break;
        }
        window.open(link, '_blank');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/assets/data/organizers.ts":
/*!***************************************!*\
  !*** ./src/assets/data/organizers.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var organizers = [
    {
        name: 'Singapore',
        flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.1/flags/1x1/sg.svg',
        link: 'https://www.womenwhocode.com/singapore',
        contacts: {
            email: 'singapore@womenwhocode.com',
            facebook: 'https://www.facebook.com/groups/wwcodesingapore',
            twitter: 'https://twitter.com/wwcodesingapore'
        }
    },
    {
        name: 'Manila',
        flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.1/flags/1x1/ph.svg',
        link: 'https://www.womenwhocode.com/manila',
        contacts: {
            email: 'manila@womenwhocode.com',
            facebook: 'https://www.facebook.com/groups/wwcodemanila',
            twitter: 'https://twitter.com/wwcodemanila'
        }
    },
    {
        name: 'Tokyo',
        flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.1/flags/1x1/jp.svg',
        link: 'https://www.womenwhocode.com/tokyo',
        contacts: {
            email: 'tokyo@womenwhocode.com',
            facebook: 'https://www.facebook.com/wwcode.tokyo/',
            twitter: 'https://twitter.com/wwcode_tokyo'
        }
    },
    {
        name: 'Kuala Lumpur',
        flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.1/flags/1x1/my.svg',
        link: 'https://www.womenwhocode.com/kl',
        contacts: {
            email: 'kualalumpur@womenwhocode.com',
            facebook: 'https://www.facebook.com/groups/womenwhocodekl',
            twitter: 'https://twitter.com/WomenwhocodeKL'
        }
    },
    {
        name: 'Seoul',
        flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.1/flags/1x1/kr.svg',
        link: '',
        contacts: {
            email: 'seoul@womenwhocode.com',
            facebook: 'https://www.facebook.com/wwcodeseoul/',
            twitter: 'https://twitter.com/wwcodeseoul'
        }
    }
];
/* harmony default export */ __webpack_exports__["default"] = (organizers);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wendykong/Documents/side/wwcodeconnectasia.github.io/code/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map