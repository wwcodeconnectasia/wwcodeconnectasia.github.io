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

module.exports = "<app-home-page></app-home-page>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".poster-image {\n  border: 3px solid #007a7c;\n  transition: 0.1s ease-in; }\n  .poster-image:hover {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg);\n    box-shadow: 5px 5px #449ea0; }\n  @media screen and (max-width: 768px) {\n    .poster-image {\n      width: 80%; } }\n  @media screen and (min-width: 768px) {\n    .poster-image {\n      width: 100%;\n      margin: 20px; } }\n  .poster-text, .section-text {\n  margin: 20px; }\n  .w-45 {\n  width: 45% !important; }\n  #posterButton {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  width: 100%; }\n  @media only screen and (max-width: 360px) {\n  .title-text, .organizers-text {\n    font-size: x-large !important; }\n  .btn-cfp {\n    margin-right: 0; }\n  .section, .talk-formats {\n    padding-right: 1rem;\n    padding-left: 1rem; } }\n  @media only screen and (min-width: 400px) {\n  .btn-cfp {\n    margin-right: 2rem; } }\n  @media only screen and (min-width: 400px) and (max-width: 899px) {\n  .section, .talk-formats {\n    padding-right: 3rem;\n    padding-left: 3rem; } }\n  @media only screen and (min-width: 900px) {\n  .section, .talk-formats {\n    padding-right: 10rem;\n    padding-left: 10rem; } }\n  .sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: white;\n  padding-bottom: 0.3rem;\n  padding-top: 0.3rem;\n  z-index: 1;\n  border-bottom: 5px solid #007a7c; }\n  .section {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  text-align: center;\n  line-height: 2; }\n  .section-title {\n    margin-bottom: 1rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    font-size: 1.75em; }\n  .content {\n  font-family: 'Montserrat', sans-serif; }\n  .text-teal {\n  color: #007a7c; }\n  .title-content {\n  padding-top: 0.2rem;\n  padding-bottom: 0.2rem; }\n  .title-text {\n  color: #007a7c;\n  text-shadow: 3px 3px #a5edf7; }\n  .bg-dark-teal {\n  background-color: #094142;\n  color: white; }\n  .bg-teal {\n  background-color: #007a7c;\n  color: white; }\n  .bg-teal-gradient-bottom-right {\n  background-image: linear-gradient(to bottom right, #007a7c, #a5edf7);\n  color: white; }\n  .bg-teal-gradient-top-right {\n  background-image: linear-gradient(to top right, #007a7c, #a5edf7);\n  color: white; }\n  .bg-light-teal {\n  background-color: #449ea0;\n  color: white; }\n  .bg-very-light-teal {\n  background-color: #a5edf7; }\n  .btn-wwcode {\n  background-color: #007a7c;\n  color: white;\n  border-color: white;\n  transition: 0.2s linear !important; }\n  .btn-wwcode:hover {\n    box-shadow: 8px 8px;\n    background-color: white;\n    color: #007a7c;\n    border-color: #007a7c; }\n  .btn-wwcode-inverse {\n  background-color: white;\n  color: #007a7c;\n  border-color: #007a7c; }\n  .btn-wwcode-inverse:hover {\n    background-color: #007a7c;\n    color: white;\n    border-color: white; }\n  .footer-text {\n  font-size: 0.8em; }\n  .country-flag {\n  transition: all .1s linear;\n  -webkit-filter: drop-shadow(5px 5px #a5edf7);\n          filter: drop-shadow(5px 5px #a5edf7);\n  width: 40px;\n  border-radius: 18px; }\n  .country-flag:hover {\n    -webkit-filter: drop-shadow(8px 8px #449ea0);\n            filter: drop-shadow(8px 8px #449ea0); }\n  .social-media-icon {\n  width: 20px;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  transition: all 0.1s linear;\n  cursor: pointer;\n  -webkit-filter: grayscale(90%);\n          filter: grayscale(90%); }\n  .social-media-icon:hover {\n    margin-top: -5px;\n    -webkit-filter: drop-shadow(3px 3px #007a7c);\n            filter: drop-shadow(3px 3px #007a7c); }\n  .font-size-3 {\n  font-size: 3vh; }\n  .font-size-2 {\n  font-size: 2vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZW5keWtvbmcvRG9jdW1lbnRzL3NpZGUvd3djb2RlY29ubmVjdGFzaWEuZ2l0aHViLmlvL2NvZGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDSSx5QkFaMEI7RUFhMUIsd0JBQXdCLEVBQUE7RUFGNUI7SUFLUSwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDJCQWZ1QixFQUFBO0VBa0IzQjtJQVRKO01BVVEsVUFBVSxFQUFBLEVBT2pCO0VBSkc7SUFiSjtNQWNRLFdBQVc7TUFDWCxZQUFZLEVBQUEsRUFFbkI7RUFFRDtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLHFCQUFxQixFQUFBO0VBR3pCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBO0VBSWY7RUFDSTtJQUNJLDZCQUE2QixFQUFBO0VBRWpDO0lBQ0UsZUFBZSxFQUFBO0VBRWpCO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBLEVBQ3JCO0VBR0w7RUFDSTtJQUNJLGtCQUFrQixFQUFBLEVBQ3JCO0VBR0w7RUFDSTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQSxFQUNyQjtFQUdMO0VBQ0k7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CLEVBQUEsRUFDdEI7RUFHTDtFQUNJLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQ0F2RjBCLEVBQUE7RUEwRjlCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBO0VBRWQ7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUIsRUFBQTtFQUt6QjtFQUNJLHFDQUFxQyxFQUFBO0VBR3pDO0VBQ0ksY0E5RzBCLEVBQUE7RUFrSDFCO0VBQ0ksbUJBQW1CO0VBQ25CLHNCQUFzQixFQUFBO0VBRzFCO0VBQ0ksY0F4SHNCO0VBeUh0Qiw0QkF0SDRCLEVBQUE7RUEySGhDO0VBQ0kseUJBOUhtQjtFQStIbkIsWUFBWSxFQUFBO0VBR2hCO0VBQ0kseUJBcElzQjtFQXFJdEIsWUFBWSxFQUFBO0VBR2hCO0VBQ0ksb0VBQWtGO0VBQ2xGLFlBQVksRUFBQTtFQUdoQjtFQUNJLGlFQUErRTtFQUMvRSxZQUFZLEVBQUE7RUFHaEI7RUFDSSx5QkFqSnVCO0VBa0p2QixZQUFZLEVBQUE7RUFHaEI7RUFDSSx5QkFySjRCLEVBQUE7RUE0SmhDO0VBQ0kseUJBaEtzQjtFQWlLdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQ0FBa0MsRUFBQTtFQUpyQztJQU9PLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0F4S2tCO0lBeUtsQixxQkF6S2tCLEVBQUE7RUE2SzFCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGNBL0tzQjtFQWdMdEIscUJBaExzQixFQUFBO0VBNkt6QjtJQU1PLHlCQW5Ma0I7SUFvTGxCLFlBQVk7SUFDWixtQkFBbUIsRUFBQTtFQUsvQjtFQUNJLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksMEJBQTBCO0VBQzFCLDRDQUE2QztVQUE3QyxvQ0FBNkM7RUFDN0MsV0FBVztFQUNYLG1CQUFtQixFQUFBO0VBSnZCO0lBT1EsNENBQXdDO1lBQXhDLG9DQUF3QyxFQUFBO0VBSWhEO0VBQ0ksV0FBVztFQUNYLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZiw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7RUFOMUI7SUFTUSxnQkFBZ0I7SUFDaEIsNENBQXlDO1lBQXpDLG9DQUF5QyxFQUFBO0VBSzdDO0VBQ0ksY0FBYyxFQUFBO0VBRWxCO0VBQ0ksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4kd3djb2RlLXRlYWw6IHJnYigwLCAxMjIsIDEyNCk7XG4kZGFyay10ZWFsOiAgcmdiKDksIDY1LCA2Nik7XG4kbGlnaHQtdGVhbDogIHJnYig2OCwgMTU4LCAxNjApO1xuJHZlcnktbGlnaHQtdGVhbDogcmdiKDE2NSwgMjM3LCAyNDcpO1xuJGludHJvLWJhY2tncm91bmQtYnJlYWtwb2ludDogMTA1MHB4O1xuJGludHJvLWJhY2tncm91bmQtYnJlYWtwb2ludC10YWJsZXQ6IDY5MHB4O1xuJGludHJvLWJhY2tncm91bmQtYnJlYWtwb2ludC1tb2JpbGU6IDU1MHB4O1xuJGludHJvLWJhY2tncm91bmQtYnJlYWtwb2ludC1oaWRlOiAzNjBweDtcblxuJHBvc3Rlci1pbWFnZS1icmVha3BvaW50OiA3NjhweDtcblxuLnBvc3Rlci1pbWFnZSB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgJHd3Y29kZS10ZWFsO1xuICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcblxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAkbGlnaHQtdGVhbDtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkcG9zdGVyLWltYWdlLWJyZWFrcG9pbnQpIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkcG9zdGVyLWltYWdlLWJyZWFrcG9pbnQpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICB9XG59XG5cbi5wb3N0ZXItdGV4dCwgLnNlY3Rpb24tdGV4dCB7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4udy00NSB7XG4gICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xufVxuXG4jcG9zdGVyQnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgLnRpdGxlLXRleHQsIC5vcmdhbml6ZXJzLXRleHQge1xuICAgICAgICBmb250LXNpemU6IHgtbGFyZ2UgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJ0bi1jZnAge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgICAuc2VjdGlvbiwgLnRhbGstZm9ybWF0cyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgICAuYnRuLWNmcCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA4OTlweCkge1xuICAgIC5zZWN0aW9uLCAudGFsay1mb3JtYXRzIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAgIC5zZWN0aW9uLCAudGFsay1mb3JtYXRzIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTByZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTByZW07XG4gICAgfVxufVxuXG4uc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICR3d2NvZGUtdGVhbDtcbn1cblxuLnNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG5cbiAgICAmLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMS43NWVtO1xuICAgIH1cbn1cblxuXG4uY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuLnRleHQtdGVhbHtcbiAgICBjb2xvcjogJHd3Y29kZS10ZWFsO1xufVxuXG4udGl0bGUge1xuICAgICYtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjJyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XG4gICAgfVxuXG4gICAgJi10ZXh0IHtcbiAgICAgICAgY29sb3I6ICR3d2NvZGUtdGVhbDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggJHZlcnktbGlnaHQtdGVhbDtcbiAgICB9XG59XG5cbi5iZyB7XG4gICAgJi1kYXJrLXRlYWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay10ZWFsO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi10ZWFsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi10ZWFsLWdyYWRpZW50LWJvdHRvbS1yaWdodCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICR3d2NvZGUtdGVhbCwgJHZlcnktbGlnaHQtdGVhbCk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmLXRlYWwtZ3JhZGllbnQtdG9wLXJpZ2h0IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHd3Y29kZS10ZWFsLCAkdmVyeS1saWdodC10ZWFsKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYtbGlnaHQtdGVhbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC10ZWFsO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi12ZXJ5LWxpZ2h0LXRlYWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyeS1saWdodC10ZWFsO1xuICAgIH1cbn1cblxuXG5cbi5idG4ge1xuICAgICYtd3djb2RlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJjpob3ZlciAge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogOHB4IDhweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICR3d2NvZGUtdGVhbDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi13d2NvZGUtaW52ZXJzZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICBib3JkZXItY29sb3I6ICR3d2NvZGUtdGVhbDtcblxuICAgICAgICAmOmhvdmVyICB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd3djb2RlLXRlYWw7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9vdGVyLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi5jb3VudHJ5LWZsYWcge1xuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgbGluZWFyO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCAkdmVyeS1saWdodC10ZWFsKTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coOHB4IDhweCAkbGlnaHQtdGVhbCk7XG4gICAgfVxufVxuXG4uc29jaWFsLW1lZGlhLWljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSg5MCUpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDNweCAkd3djb2RlLXRlYWwpO1xuICAgIH1cbn1cblxuLmZvbnQtc2l6ZSB7XG4gICAgJi0zIHtcbiAgICAgICAgZm9udC1zaXplOiAzdmg7XG4gICAgfVxuICAgICYtMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnZoO1xuICAgIH1cbn0iXX0= */"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
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
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _call_for_proposal_call_for_proposal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./call-for-proposal/call-for-proposal.component */ "./src/app/call-for-proposal/call-for-proposal.component.ts");
/* harmony import */ var _shirt_design_shirt_design_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shirt-design/shirt-design.component */ "./src/app/shirt-design/shirt-design.component.ts");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./introduction/introduction.component */ "./src/app/introduction/introduction.component.ts");
/* harmony import */ var _divider_divider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./divider/divider.component */ "./src/app/divider/divider.component.ts");
/* harmony import */ var _organizers_organizers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./organizers/organizers.component */ "./src/app/organizers/organizers.component.ts");
/* harmony import */ var _speaking_details_speaking_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./speaking-details/speaking-details.component */ "./src/app/speaking-details/speaking-details.component.ts");
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation.service */ "./src/app/navigation.service.ts");
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
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"],
                _call_for_proposal_call_for_proposal_component__WEBPACK_IMPORTED_MODULE_4__["CallForProposalComponent"],
                _shirt_design_shirt_design_component__WEBPACK_IMPORTED_MODULE_5__["ShirtDesignComponent"],
                _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_6__["IntroductionComponent"],
                _divider_divider_component__WEBPACK_IMPORTED_MODULE_7__["DividerComponent"],
                _organizers_organizers_component__WEBPACK_IMPORTED_MODULE_8__["OrganizersComponent"],
                _speaking_details_speaking_details_component__WEBPACK_IMPORTED_MODULE_9__["SpeakingDetailsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ],
            providers: [_navigation_service__WEBPACK_IMPORTED_MODULE_10__["NavigationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/call-for-proposal/call-for-proposal.component.html":
/*!********************************************************************!*\
  !*** ./src/app/call-for-proposal/call-for-proposal.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row section\">\n  <div class=\"col-md-4\">\n    <img src=\"assets/images/poster-cfp.png\" class=\"poster-image\">\n  </div>\n  <div class=\"col-md-7 poster-text\">\n\n    <div class=\"mx-2 my-3\">\n      <h3 class=\"section-title text-teal\">\n        <strong>\n          CALL FOR PROPOSAL\n        </strong>\n      </h3>\n\n      <div class=\"text-justify\">\n\n        <p>\n          WWCode is looking for enthusiastic and dynamic speakers working in technology who want to share their\n          expertise. We aim to have speakers that represent the talent and rich diversity of our community.\n        </p>\n        <p>\n          If you have an awesome idea, do not hesitate to submit it! We will be happy to give you the necessary feedback\n          to make sure it matches audience expectations.\n        </p>\n        <p>\n          For more information, check out our <a href=\"#speaking-details\">speaking details</a>.\n        </p>\n\n        <p><strong>Deadline to Submit: June 15<sup>th</sup></strong></p>\n\n        <div class=\"d-flex flex-direction-row\">\n          <button id=\"posterButton\" type=\"button\" class=\"btn btn-wwcode\" (click)=\"redirect(context.CallForProposal)\">\n            Submit call for proposal\n          </button>\n          <button id=\"posterButton\" type=\"button\" class=\"btn btn-wwcode\" (click)=\"redirect(context.SpeakerProfile)\">\n            Submit speaker profile\n          </button>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/call-for-proposal/call-for-proposal.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/call-for-proposal/call-for-proposal.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".poster-image {\n  border: 3px solid #007a7c;\n  transition: 0.1s ease-in; }\n  .poster-image:hover {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg);\n    box-shadow: 5px 5px #449ea0; }\n  @media screen and (max-width: 768px) {\n    .poster-image {\n      width: 80%; } }\n  @media screen and (min-width: 768px) {\n    .poster-image {\n      width: 100%;\n      margin: 20px; } }\n  .poster-text, .section-text {\n  margin: 20px; }\n  .w-45 {\n  width: 45% !important; }\n  #posterButton {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  width: 100%; }\n  @media only screen and (max-width: 360px) {\n  .title-text, .organizers-text {\n    font-size: x-large !important; }\n  .btn-cfp {\n    margin-right: 0; }\n  .section, .talk-formats {\n    padding-right: 1rem;\n    padding-left: 1rem; } }\n  @media only screen and (min-width: 400px) {\n  .btn-cfp {\n    margin-right: 2rem; } }\n  @media only screen and (min-width: 400px) and (max-width: 899px) {\n  .section, .talk-formats {\n    padding-right: 3rem;\n    padding-left: 3rem; } }\n  @media only screen and (min-width: 900px) {\n  .section, .talk-formats {\n    padding-right: 10rem;\n    padding-left: 10rem; } }\n  .sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: white;\n  padding-bottom: 0.3rem;\n  padding-top: 0.3rem;\n  z-index: 1;\n  border-bottom: 5px solid #007a7c; }\n  .section {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  text-align: center;\n  line-height: 2; }\n  .section-title {\n    margin-bottom: 1rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    font-size: 1.75em; }\n  .content {\n  font-family: 'Montserrat', sans-serif; }\n  .text-teal {\n  color: #007a7c; }\n  .title-content {\n  padding-top: 0.2rem;\n  padding-bottom: 0.2rem; }\n  .title-text {\n  color: #007a7c;\n  text-shadow: 3px 3px #a5edf7; }\n  .bg-dark-teal {\n  background-color: #094142;\n  color: white; }\n  .bg-teal {\n  background-color: #007a7c;\n  color: white; }\n  .bg-teal-gradient-bottom-right {\n  background-image: linear-gradient(to bottom right, #007a7c, #a5edf7);\n  color: white; }\n  .bg-teal-gradient-top-right {\n  background-image: linear-gradient(to top right, #007a7c, #a5edf7);\n  color: white; }\n  .bg-light-teal {\n  background-color: #449ea0;\n  color: white; }\n  .bg-very-light-teal {\n  background-color: #a5edf7; }\n  .btn-wwcode {\n  background-color: #007a7c;\n  color: white;\n  border-color: white;\n  transition: 0.2s linear !important; }\n  .btn-wwcode:hover {\n    box-shadow: 8px 8px;\n    background-color: white;\n    color: #007a7c;\n    border-color: #007a7c; }\n  .btn-wwcode-inverse {\n  background-color: white;\n  color: #007a7c;\n  border-color: #007a7c; }\n  .btn-wwcode-inverse:hover {\n    background-color: #007a7c;\n    color: white;\n    border-color: white; }\n  .footer-text {\n  font-size: 0.8em; }\n  .country-flag {\n  transition: all .1s linear;\n  -webkit-filter: drop-shadow(5px 5px #a5edf7);\n          filter: drop-shadow(5px 5px #a5edf7);\n  width: 40px;\n  border-radius: 18px; }\n  .country-flag:hover {\n    -webkit-filter: drop-shadow(8px 8px #449ea0);\n            filter: drop-shadow(8px 8px #449ea0); }\n  .social-media-icon {\n  width: 20px;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  transition: all 0.1s linear;\n  cursor: pointer;\n  -webkit-filter: grayscale(90%);\n          filter: grayscale(90%); }\n  .social-media-icon:hover {\n    margin-top: -5px;\n    -webkit-filter: drop-shadow(3px 3px #007a7c);\n            filter: drop-shadow(3px 3px #007a7c); }\n  .font-size-3 {\n  font-size: 3vh; }\n  .font-size-2 {\n  font-size: 2vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZW5keWtvbmcvRG9jdW1lbnRzL3NpZGUvd3djb2RlY29ubmVjdGFzaWEuZ2l0aHViLmlvL2NvZGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDSSx5QkFaMEI7RUFhMUIsd0JBQXdCLEVBQUE7RUFGNUI7SUFLUSwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDJCQWZ1QixFQUFBO0VBa0IzQjtJQVRKO01BVVEsVUFBVSxFQUFBLEVBT2pCO0VBSkc7SUFiSjtNQWNRLFdBQVc7TUFDWCxZQUFZLEVBQUEsRUFFbkI7RUFFRDtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLHFCQUFxQixFQUFBO0VBR3pCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBO0VBSWY7RUFDSTtJQUNJLDZCQUE2QixFQUFBO0VBRWpDO0lBQ0UsZUFBZSxFQUFBO0VBRWpCO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBLEVBQ3JCO0VBR0w7RUFDSTtJQUNJLGtCQUFrQixFQUFBLEVBQ3JCO0VBR0w7RUFDSTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQSxFQUNyQjtFQUdMO0VBQ0k7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CLEVBQUEsRUFDdEI7RUFHTDtFQUNJLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQ0F2RjBCLEVBQUE7RUEwRjlCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBO0VBRWQ7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUIsRUFBQTtFQUt6QjtFQUNJLHFDQUFxQyxFQUFBO0VBR3pDO0VBQ0ksY0E5RzBCLEVBQUE7RUFrSDFCO0VBQ0ksbUJBQW1CO0VBQ25CLHNCQUFzQixFQUFBO0VBRzFCO0VBQ0ksY0F4SHNCO0VBeUh0Qiw0QkF0SDRCLEVBQUE7RUEySGhDO0VBQ0kseUJBOUhtQjtFQStIbkIsWUFBWSxFQUFBO0VBR2hCO0VBQ0kseUJBcElzQjtFQXFJdEIsWUFBWSxFQUFBO0VBR2hCO0VBQ0ksb0VBQWtGO0VBQ2xGLFlBQVksRUFBQTtFQUdoQjtFQUNJLGlFQUErRTtFQUMvRSxZQUFZLEVBQUE7RUFHaEI7RUFDSSx5QkFqSnVCO0VBa0p2QixZQUFZLEVBQUE7RUFHaEI7RUFDSSx5QkFySjRCLEVBQUE7RUE0SmhDO0VBQ0kseUJBaEtzQjtFQWlLdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQ0FBa0MsRUFBQTtFQUpyQztJQU9PLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0F4S2tCO0lBeUtsQixxQkF6S2tCLEVBQUE7RUE2SzFCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGNBL0tzQjtFQWdMdEIscUJBaExzQixFQUFBO0VBNkt6QjtJQU1PLHlCQW5Ma0I7SUFvTGxCLFlBQVk7SUFDWixtQkFBbUIsRUFBQTtFQUsvQjtFQUNJLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksMEJBQTBCO0VBQzFCLDRDQUE2QztVQUE3QyxvQ0FBNkM7RUFDN0MsV0FBVztFQUNYLG1CQUFtQixFQUFBO0VBSnZCO0lBT1EsNENBQXdDO1lBQXhDLG9DQUF3QyxFQUFBO0VBSWhEO0VBQ0ksV0FBVztFQUNYLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZiw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7RUFOMUI7SUFTUSxnQkFBZ0I7SUFDaEIsNENBQXlDO1lBQXpDLG9DQUF5QyxFQUFBO0VBSzdDO0VBQ0ksY0FBYyxFQUFBO0VBRWxCO0VBQ0ksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FsbC1mb3ItcHJvcG9zYWwvY2FsbC1mb3ItcHJvcG9zYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiR3d2NvZGUtdGVhbDogcmdiKDAsIDEyMiwgMTI0KTtcbiRkYXJrLXRlYWw6ICByZ2IoOSwgNjUsIDY2KTtcbiRsaWdodC10ZWFsOiAgcmdiKDY4LCAxNTgsIDE2MCk7XG4kdmVyeS1saWdodC10ZWFsOiByZ2IoMTY1LCAyMzcsIDI0Nyk7XG4kaW50cm8tYmFja2dyb3VuZC1icmVha3BvaW50OiAxMDUwcHg7XG4kaW50cm8tYmFja2dyb3VuZC1icmVha3BvaW50LXRhYmxldDogNjkwcHg7XG4kaW50cm8tYmFja2dyb3VuZC1icmVha3BvaW50LW1vYmlsZTogNTUwcHg7XG4kaW50cm8tYmFja2dyb3VuZC1icmVha3BvaW50LWhpZGU6IDM2MHB4O1xuXG4kcG9zdGVyLWltYWdlLWJyZWFrcG9pbnQ6IDc2OHB4O1xuXG4ucG9zdGVyLWltYWdlIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkd3djb2RlLXRlYWw7XG4gICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4ICRsaWdodC10ZWFsO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRwb3N0ZXItaW1hZ2UtYnJlYWtwb2ludCkge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRwb3N0ZXItaW1hZ2UtYnJlYWtwb2ludCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgIH1cbn1cblxuLnBvc3Rlci10ZXh0LCAuc2VjdGlvbi10ZXh0IHtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi53LTQ1IHtcbiAgICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7XG59XG5cbiNwb3N0ZXJCdXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICAudGl0bGUtdGV4dCwgLm9yZ2FuaXplcnMtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYnRuLWNmcCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5zZWN0aW9uLCAudGFsay1mb3JtYXRzIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xuICAgIC5idG4tY2ZwIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkgYW5kIChtYXgtd2lkdGg6IDg5OXB4KSB7XG4gICAgLnNlY3Rpb24sIC50YWxrLWZvcm1hdHMge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gICAgLnNlY3Rpb24sIC50YWxrLWZvcm1hdHMge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHJlbTtcbiAgICB9XG59XG5cbi5zdGlja3kge1xuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjNyZW07XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgJHd3Y29kZS10ZWFsO1xufVxuXG4uc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjtcblxuICAgICYtdGl0bGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjc1ZW07XG4gICAgfVxufVxuXG5cbi5jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG4udGV4dC10ZWFse1xuICAgIGNvbG9yOiAkd3djb2RlLXRlYWw7XG59XG5cbi50aXRsZSB7XG4gICAgJi1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDAuMnJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcbiAgICB9XG5cbiAgICAmLXRleHQge1xuICAgICAgICBjb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAkdmVyeS1saWdodC10ZWFsO1xuICAgIH1cbn1cblxuLmJnIHtcbiAgICAmLWRhcmstdGVhbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLXRlYWw7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmLXRlYWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd3djb2RlLXRlYWw7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmLXRlYWwtZ3JhZGllbnQtYm90dG9tLXJpZ2h0IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgJHd3Y29kZS10ZWFsLCAkdmVyeS1saWdodC10ZWFsKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYtdGVhbC1ncmFkaWVudC10b3AtcmlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkd3djb2RlLXRlYWwsICR2ZXJ5LWxpZ2h0LXRlYWwpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi1saWdodC10ZWFsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LXRlYWw7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmLXZlcnktbGlnaHQtdGVhbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJ5LWxpZ2h0LXRlYWw7XG4gICAgfVxufVxuXG5cblxuLmJ0biB7XG4gICAgJi13d2NvZGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd3djb2RlLXRlYWw7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXIgIWltcG9ydGFudDtcblxuICAgICAgICAmOmhvdmVyICB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiA4cHggOHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkd3djb2RlLXRlYWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXd3Y29kZS1pbnZlcnNlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGNvbG9yOiAkd3djb2RlLXRlYWw7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHd3Y29kZS10ZWFsO1xuXG4gICAgICAgICY6aG92ZXIgIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3d2NvZGUtdGVhbDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5mb290ZXItdGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLmNvdW50cnktZmxhZyB7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBsaW5lYXI7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggNXB4ICR2ZXJ5LWxpZ2h0LXRlYWwpO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg4cHggOHB4ICRsaWdodC10ZWFsKTtcbiAgICB9XG59XG5cbi5zb2NpYWwtbWVkaWEtaWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZpbHRlcjogZ3JheXNjYWxlKDkwJSk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggM3B4ICR3d2NvZGUtdGVhbCk7XG4gICAgfVxufVxuXG4uZm9udC1zaXplIHtcbiAgICAmLTMge1xuICAgICAgICBmb250LXNpemU6IDN2aDtcbiAgICB9XG4gICAgJi0yIHtcbiAgICAgICAgZm9udC1zaXplOiAydmg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/call-for-proposal/call-for-proposal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/call-for-proposal/call-for-proposal.component.ts ***!
  \******************************************************************/
/*! exports provided: CallForProposalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallForProposalComponent", function() { return CallForProposalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation.service */ "./src/app/navigation.service.ts");
/* harmony import */ var _context_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context.enum */ "./src/app/context.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallForProposalComponent = /** @class */ (function () {
    function CallForProposalComponent(navigationService) {
        this.navigationService = navigationService;
        this.context = _context_enum__WEBPACK_IMPORTED_MODULE_2__["Context"];
    }
    CallForProposalComponent.prototype.ngOnInit = function () {
    };
    CallForProposalComponent.prototype.redirect = function (context) {
        this.navigationService.redirect(context);
    };
    CallForProposalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-call-for-proposal',
            template: __webpack_require__(/*! ./call-for-proposal.component.html */ "./src/app/call-for-proposal/call-for-proposal.component.html"),
            styles: [__webpack_require__(/*! ./call-for-proposal.component.scss */ "./src/app/call-for-proposal/call-for-proposal.component.scss")]
        }),
        __metadata("design:paramtypes", [_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]])
    ], CallForProposalComponent);
    return CallForProposalComponent;
}());



/***/ }),

/***/ "./src/app/context.enum.ts":
/*!*********************************!*\
  !*** ./src/app/context.enum.ts ***!
  \*********************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
var Context;
(function (Context) {
    Context[Context["CallForProposal"] = 0] = "CallForProposal";
    Context[Context["SpeakerProfile"] = 1] = "SpeakerProfile";
    Context[Context["TShirtDesignContest"] = 2] = "TShirtDesignContest";
})(Context || (Context = {}));


/***/ }),

/***/ "./src/app/divider/divider.component.html":
/*!************************************************!*\
  !*** ./src/app/divider/divider.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-3 bg-dark-teal\">\n    &nbsp;\n  </div>\n  <div class=\"col-3 bg-teal\">\n  </div>\n  <div class=\"col-3 bg-light-teal\">\n  </div>\n  <div class=\"col-3 bg-teal\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/divider/divider.component.scss":
/*!************************************************!*\
  !*** ./src/app/divider/divider.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".poster-image {\n  border: 3px solid #007a7c;\n  transition: 0.1s ease-in; }\n  .poster-image:hover {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg);\n    box-shadow: 5px 5px #449ea0; }\n  @media screen and (max-width: 768px) {\n    .poster-image {\n      width: 80%; } }\n  @media screen and (min-width: 768px) {\n    .poster-image {\n      width: 100%;\n      margin: 20px; } }\n  .poster-text, .section-text {\n  margin: 20px; }\n  .w-45 {\n  width: 45% !important; }\n  #posterButton {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  width: 100%; }\n  @media only screen and (max-width: 360px) {\n  .title-text, .organizers-text {\n    font-size: x-large !important; }\n  .btn-cfp {\n    margin-right: 0; }\n  .section, .talk-formats {\n    padding-right: 1rem;\n    padding-left: 1rem; } }\n  @media only screen and (min-width: 400px) {\n  .btn-cfp {\n    margin-right: 2rem; } }\n  @media only screen and (min-width: 400px) and (max-width: 899px) {\n  .section, .talk-formats {\n    padding-right: 3rem;\n    padding-left: 3rem; } }\n  @media only screen and (min-width: 900px) {\n  .section, .talk-formats {\n    padding-right: 10rem;\n    padding-left: 10rem; } }\n  .sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: white;\n  padding-bottom: 0.3rem;\n  padding-top: 0.3rem;\n  z-index: 1;\n  border-bottom: 5px solid #007a7c; }\n  .section {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  text-align: center;\n  line-height: 2; }\n  .section-title {\n    margin-bottom: 1rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    font-size: 1.75em; }\n  .content {\n  font-family: 'Montserrat', sans-serif; }\n  .text-teal {\n  color: #007a7c; }\n  .title-content {\n  padding-top: 0.2rem;\n  padding-bottom: 0.2rem; }\n  .title-text {\n  color: #007a7c;\n  text-shadow: 3px 3px #a5edf7; }\n  .bg-dark-teal {\n  background-color: #094142;\n  color: white; }\n  .bg-teal {\n  background-color: #007a7c;\n  color: white; }\n  .bg-teal-gradient-bottom-right {\n  background-image: linear-gradient(to bottom right, #007a7c, #a5edf7);\n  color: white; }\n  .bg-teal-gradient-top-right {\n  background-image: linear-gradient(to top right, #007a7c, #a5edf7);\n  color: white; }\n  .bg-light-teal {\n  background-color: #449ea0;\n  color: white; }\n  .bg-very-light-teal {\n  background-color: #a5edf7; }\n  .btn-wwcode {\n  background-color: #007a7c;\n  color: white;\n  border-color: white;\n  transition: 0.2s linear !important; }\n  .btn-wwcode:hover {\n    box-shadow: 8px 8px;\n    background-color: white;\n    color: #007a7c;\n    border-color: #007a7c; }\n  .btn-wwcode-inverse {\n  background-color: white;\n  color: #007a7c;\n  border-color: #007a7c; }\n  .btn-wwcode-inverse:hover {\n    background-color: #007a7c;\n    color: white;\n    border-color: white; }\n  .footer-text {\n  font-size: 0.8em; }\n  .country-flag {\n  transition: all .1s linear;\n  -webkit-filter: drop-shadow(5px 5px #a5edf7);\n          filter: drop-shadow(5px 5px #a5edf7);\n  width: 40px;\n  border-radius: 18px; }\n  .country-flag:hover {\n    -webkit-filter: drop-shadow(8px 8px #449ea0);\n            filter: drop-shadow(8px 8px #449ea0); }\n  .social-media-icon {\n  width: 20px;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  transition: all 0.1s linear;\n  cursor: pointer;\n  -webkit-filter: grayscale(90%);\n          filter: grayscale(90%); }\n  .social-media-icon:hover {\n    margin-top: -5px;\n    -webkit-filter: drop-shadow(3px 3px #007a7c);\n            filter: drop-shadow(3px 3px #007a7c); }\n  .font-size-3 {\n  font-size: 3vh; }\n  .font-size-2 {\n  font-size: 2vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZW5keWtvbmcvRG9jdW1lbnRzL3NpZGUvd3djb2RlY29ubmVjdGFzaWEuZ2l0aHViLmlvL2NvZGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDSSx5QkFaMEI7RUFhMUIsd0JBQXdCLEVBQUE7RUFGNUI7SUFLUSwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDJCQWZ1QixFQUFBO0VBa0IzQjtJQVRKO01BVVEsVUFBVSxFQUFBLEVBT2pCO0VBSkc7SUFiSjtNQWNRLFdBQVc7TUFDWCxZQUFZLEVBQUEsRUFFbkI7RUFFRDtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLHFCQUFxQixFQUFBO0VBR3pCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBO0VBSWY7RUFDSTtJQUNJLDZCQUE2QixFQUFBO0VBRWpDO0lBQ0UsZUFBZSxFQUFBO0VBRWpCO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBLEVBQ3JCO0VBR0w7RUFDSTtJQUNJLGtCQUFrQixFQUFBLEVBQ3JCO0VBR0w7RUFDSTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQSxFQUNyQjtFQUdMO0VBQ0k7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CLEVBQUEsRUFDdEI7RUFHTDtFQUNJLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQ0F2RjBCLEVBQUE7RUEwRjlCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBO0VBRWQ7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUIsRUFBQTtFQUt6QjtFQUNJLHFDQUFxQyxFQUFBO0VBR3pDO0VBQ0ksY0E5RzBCLEVBQUE7RUFrSDFCO0VBQ0ksbUJBQW1CO0VBQ25CLHNCQUFzQixFQUFBO0VBRzFCO0VBQ0ksY0F4SHNCO0VBeUh0Qiw0QkF0SDRCLEVBQUE7RUEySGhDO0VBQ0kseUJBOUhtQjtFQStIbkIsWUFBWSxFQUFBO0VBR2hCO0VBQ0kseUJBcElzQjtFQXFJdEIsWUFBWSxFQUFBO0VBR2hCO0VBQ0ksb0VBQWtGO0VBQ2xGLFlBQVksRUFBQTtFQUdoQjtFQUNJLGlFQUErRTtFQUMvRSxZQUFZLEVBQUE7RUFHaEI7RUFDSSx5QkFqSnVCO0VBa0p2QixZQUFZLEVBQUE7RUFHaEI7RUFDSSx5QkFySjRCLEVBQUE7RUE0SmhDO0VBQ0kseUJBaEtzQjtFQWlLdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQ0FBa0MsRUFBQTtFQUpyQztJQU9PLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0F4S2tCO0lBeUtsQixxQkF6S2tCLEVBQUE7RUE2SzFCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGNBL0tzQjtFQWdMdEIscUJBaExzQixFQUFBO0VBNkt6QjtJQU1PLHlCQW5Ma0I7SUFvTGxCLFlBQVk7SUFDWixtQkFBbUIsRUFBQTtFQUsvQjtFQUNJLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksMEJBQTBCO0VBQzFCLDRDQUE2QztVQUE3QyxvQ0FBNkM7RUFDN0MsV0FBVztFQUNYLG1CQUFtQixFQUFBO0VBSnZCO0lBT1EsNENBQXdDO1lBQXhDLG9DQUF3QyxFQUFBO0VBSWhEO0VBQ0ksV0FBVztFQUNYLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZiw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7RUFOMUI7SUFTUSxnQkFBZ0I7SUFDaEIsNENBQXlDO1lBQXpDLG9DQUF5QyxFQUFBO0VBSzdDO0VBQ0ksY0FBYyxFQUFBO0VBRWxCO0VBQ0ksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGl2aWRlci9kaXZpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4kd3djb2RlLXRlYWw6IHJnYigwLCAxMjIsIDEyNCk7XG4kZGFyay10ZWFsOiAgcmdiKDksIDY1LCA2Nik7XG4kbGlnaHQtdGVhbDogIHJnYig2OCwgMTU4LCAxNjApO1xuJHZlcnktbGlnaHQtdGVhbDogcmdiKDE2NSwgMjM3LCAyNDcpO1xuJGludHJvLWJhY2tncm91bmQtYnJlYWtwb2ludDogMTA1MHB4O1xuJGludHJvLWJhY2tncm91bmQtYnJlYWtwb2ludC10YWJsZXQ6IDY5MHB4O1xuJGludHJvLWJhY2tncm91bmQtYnJlYWtwb2ludC1tb2JpbGU6IDU1MHB4O1xuJGludHJvLWJhY2tncm91bmQtYnJlYWtwb2ludC1oaWRlOiAzNjBweDtcblxuJHBvc3Rlci1pbWFnZS1icmVha3BvaW50OiA3NjhweDtcblxuLnBvc3Rlci1pbWFnZSB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgJHd3Y29kZS10ZWFsO1xuICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcblxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAkbGlnaHQtdGVhbDtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkcG9zdGVyLWltYWdlLWJyZWFrcG9pbnQpIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkcG9zdGVyLWltYWdlLWJyZWFrcG9pbnQpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICB9XG59XG5cbi5wb3N0ZXItdGV4dCwgLnNlY3Rpb24tdGV4dCB7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4udy00NSB7XG4gICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xufVxuXG4jcG9zdGVyQnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgLnRpdGxlLXRleHQsIC5vcmdhbml6ZXJzLXRleHQge1xuICAgICAgICBmb250LXNpemU6IHgtbGFyZ2UgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJ0bi1jZnAge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgICAuc2VjdGlvbiwgLnRhbGstZm9ybWF0cyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgICAuYnRuLWNmcCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA4OTlweCkge1xuICAgIC5zZWN0aW9uLCAudGFsay1mb3JtYXRzIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAgIC5zZWN0aW9uLCAudGFsay1mb3JtYXRzIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTByZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTByZW07XG4gICAgfVxufVxuXG4uc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICR3d2NvZGUtdGVhbDtcbn1cblxuLnNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG5cbiAgICAmLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMS43NWVtO1xuICAgIH1cbn1cblxuXG4uY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuLnRleHQtdGVhbHtcbiAgICBjb2xvcjogJHd3Y29kZS10ZWFsO1xufVxuXG4udGl0bGUge1xuICAgICYtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjJyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XG4gICAgfVxuXG4gICAgJi10ZXh0IHtcbiAgICAgICAgY29sb3I6ICR3d2NvZGUtdGVhbDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggJHZlcnktbGlnaHQtdGVhbDtcbiAgICB9XG59XG5cbi5iZyB7XG4gICAgJi1kYXJrLXRlYWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay10ZWFsO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi10ZWFsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi10ZWFsLWdyYWRpZW50LWJvdHRvbS1yaWdodCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICR3d2NvZGUtdGVhbCwgJHZlcnktbGlnaHQtdGVhbCk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmLXRlYWwtZ3JhZGllbnQtdG9wLXJpZ2h0IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHd3Y29kZS10ZWFsLCAkdmVyeS1saWdodC10ZWFsKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYtbGlnaHQtdGVhbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC10ZWFsO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi12ZXJ5LWxpZ2h0LXRlYWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyeS1saWdodC10ZWFsO1xuICAgIH1cbn1cblxuXG5cbi5idG4ge1xuICAgICYtd3djb2RlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJjpob3ZlciAge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogOHB4IDhweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICR3d2NvZGUtdGVhbDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi13d2NvZGUtaW52ZXJzZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICBib3JkZXItY29sb3I6ICR3d2NvZGUtdGVhbDtcblxuICAgICAgICAmOmhvdmVyICB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd3djb2RlLXRlYWw7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9vdGVyLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi5jb3VudHJ5LWZsYWcge1xuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgbGluZWFyO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCAkdmVyeS1saWdodC10ZWFsKTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coOHB4IDhweCAkbGlnaHQtdGVhbCk7XG4gICAgfVxufVxuXG4uc29jaWFsLW1lZGlhLWljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSg5MCUpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDNweCAkd3djb2RlLXRlYWwpO1xuICAgIH1cbn1cblxuLmZvbnQtc2l6ZSB7XG4gICAgJi0zIHtcbiAgICAgICAgZm9udC1zaXplOiAzdmg7XG4gICAgfVxuICAgICYtMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnZoO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/divider/divider.component.ts":
/*!**********************************************!*\
  !*** ./src/app/divider/divider.component.ts ***!
  \**********************************************/
/*! exports provided: DividerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividerComponent", function() { return DividerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DividerComponent = /** @class */ (function () {
    function DividerComponent() {
    }
    DividerComponent.prototype.ngOnInit = function () {
    };
    DividerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-divider',
            template: __webpack_require__(/*! ./divider.component.html */ "./src/app/divider/divider.component.html"),
            styles: [__webpack_require__(/*! ./divider.component.scss */ "./src/app/divider/divider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DividerComponent);
    return DividerComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <ng-container *ngTemplateOutlet=\"header\"></ng-container>\n\n  <app-introduction></app-introduction>\n\n  <app-divider></app-divider>\n\n  <app-call-for-proposal></app-call-for-proposal>\n  <app-shirt-design></app-shirt-design>\n\n  <app-divider></app-divider>\n\n  <app-speaking-details id=\"speaking-details\"></app-speaking-details>\n\n  <app-divider></app-divider>\n\n  <app-organizers></app-organizers>\n\n  <ng-container *ngTemplateOutlet=\"footer\"></ng-container>\n</div>\n\n\n<ng-template #header>\n  <header class=\"sticky\">\n    <div class=\"header m-3\">\n      <img width=\"120\" alt=\"Women Who Code Logo\" src=\"assets/images/connect-logo.png\" class=\"pr-3\">\n      <strong class=\"text-teal font-size-3\">CONNECT ASIA 2019</strong>\n      <strong class=\"text-teal float-right font-size-2\">{{hashtags.join(' ')}}</strong>\n    </div>\n  </header>\n\n</ng-template>\n\n\n<ng-template #footer>\n  <footer class=\"text-muted footer-text\">\n    <div class=\"section\">\n      <p>\n        © 2019 Women Who Code | Women Who Code is a 501(c)(3) non-profit dedicated to inspiring women to excel\n        in\n        technology careers.\n      </p>\n\n      <div>Merlion icon made by <a href=\"https://www.flaticon.com/authors/photo3idea-studio\"\n          title=\"photo3idea_studio\">photo3idea_studio</a> from <a href=\"https://www.flaticon.com/\"\n          title=\"Flaticon\">www.flaticon.com</a> is licensed by <a href=\"http://creativecommons.org/licenses/by/3.0/\"\n          title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0 BY</a></div>\n    </div>\n  </footer>\n</ng-template>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".poster-image {\n  border: 3px solid #007a7c;\n  transition: 0.1s ease-in; }\n  .poster-image:hover {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg);\n    box-shadow: 5px 5px #449ea0; }\n  @media screen and (max-width: 768px) {\n    .poster-image {\n      width: 80%; } }\n  @media screen and (min-width: 768px) {\n    .poster-image {\n      width: 100%;\n      margin: 20px; } }\n  .poster-text, .section-text {\n  margin: 20px; }\n  .w-45 {\n  width: 45% !important; }\n  #posterButton {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  width: 100%; }\n  @media only screen and (max-width: 360px) {\n  .title-text, .organizers-text {\n    font-size: x-large !important; }\n  .btn-cfp {\n    margin-right: 0; }\n  .section, .talk-formats {\n    padding-right: 1rem;\n    padding-left: 1rem; } }\n  @media only screen and (min-width: 400px) {\n  .btn-cfp {\n    margin-right: 2rem; } }\n  @media only screen and (min-width: 400px) and (max-width: 899px) {\n  .section, .talk-formats {\n    padding-right: 3rem;\n    padding-left: 3rem; } }\n  @media only screen and (min-width: 900px) {\n  .section, .talk-formats {\n    padding-right: 10rem;\n    padding-left: 10rem; } }\n  .sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: white;\n  padding-bottom: 0.3rem;\n  padding-top: 0.3rem;\n  z-index: 1;\n  border-bottom: 5px solid #007a7c; }\n  .section {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  text-align: center;\n  line-height: 2; }\n  .section-title {\n    margin-bottom: 1rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    font-size: 1.75em; }\n  .content {\n  font-family: 'Montserrat', sans-serif; }\n  .text-teal {\n  color: #007a7c; }\n  .title-content {\n  padding-top: 0.2rem;\n  padding-bottom: 0.2rem; }\n  .title-text {\n  color: #007a7c;\n  text-shadow: 3px 3px #a5edf7; }\n  .bg-dark-teal {\n  background-color: #094142;\n  color: white; }\n  .bg-teal {\n  background-color: #007a7c;\n  color: white; }\n  .bg-teal-gradient-bottom-right {\n  background-image: linear-gradient(to bottom right, #007a7c, #a5edf7);\n  color: white; }\n  .bg-teal-gradient-top-right {\n  background-image: linear-gradient(to top right, #007a7c, #a5edf7);\n  color: white; }\n  .bg-light-teal {\n  background-color: #449ea0;\n  color: white; }\n  .bg-very-light-teal {\n  background-color: #a5edf7; }\n  .btn-wwcode {\n  background-color: #007a7c;\n  color: white;\n  border-color: white;\n  transition: 0.2s linear !important; }\n  .btn-wwcode:hover {\n    box-shadow: 8px 8px;\n    background-color: white;\n    color: #007a7c;\n    border-color: #007a7c; }\n  .btn-wwcode-inverse {\n  background-color: white;\n  color: #007a7c;\n  border-color: #007a7c; }\n  .btn-wwcode-inverse:hover {\n    background-color: #007a7c;\n    color: white;\n    border-color: white; }\n  .footer-text {\n  font-size: 0.8em; }\n  .country-flag {\n  transition: all .1s linear;\n  -webkit-filter: drop-shadow(5px 5px #a5edf7);\n          filter: drop-shadow(5px 5px #a5edf7);\n  width: 40px;\n  border-radius: 18px; }\n  .country-flag:hover {\n    -webkit-filter: drop-shadow(8px 8px #449ea0);\n            filter: drop-shadow(8px 8px #449ea0); }\n  .social-media-icon {\n  width: 20px;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  transition: all 0.1s linear;\n  cursor: pointer;\n  -webkit-filter: grayscale(90%);\n          filter: grayscale(90%); }\n  .social-media-icon:hover {\n    margin-top: -5px;\n    -webkit-filter: drop-shadow(3px 3px #007a7c);\n            filter: drop-shadow(3px 3px #007a7c); }\n  .font-size-3 {\n  font-size: 3vh; }\n  .font-size-2 {\n  font-size: 2vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZW5keWtvbmcvRG9jdW1lbnRzL3NpZGUvd3djb2RlY29ubmVjdGFzaWEuZ2l0aHViLmlvL2NvZGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDSSx5QkFaMEI7RUFhMUIsd0JBQXdCLEVBQUE7RUFGNUI7SUFLUSwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDJCQWZ1QixFQUFBO0VBa0IzQjtJQVRKO01BVVEsVUFBVSxFQUFBLEVBT2pCO0VBSkc7SUFiSjtNQWNRLFdBQVc7TUFDWCxZQUFZLEVBQUEsRUFFbkI7RUFFRDtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLHFCQUFxQixFQUFBO0VBR3pCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBO0VBSWY7RUFDSTtJQUNJLDZCQUE2QixFQUFBO0VBRWpDO0lBQ0UsZUFBZSxFQUFBO0VBRWpCO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBLEVBQ3JCO0VBR0w7RUFDSTtJQUNJLGtCQUFrQixFQUFBLEVBQ3JCO0VBR0w7RUFDSTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQSxFQUNyQjtFQUdMO0VBQ0k7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CLEVBQUEsRUFDdEI7RUFHTDtFQUNJLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQ0F2RjBCLEVBQUE7RUEwRjlCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBO0VBRWQ7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUIsRUFBQTtFQUt6QjtFQUNJLHFDQUFxQyxFQUFBO0VBR3pDO0VBQ0ksY0E5RzBCLEVBQUE7RUFrSDFCO0VBQ0ksbUJBQW1CO0VBQ25CLHNCQUFzQixFQUFBO0VBRzFCO0VBQ0ksY0F4SHNCO0VBeUh0Qiw0QkF0SDRCLEVBQUE7RUEySGhDO0VBQ0kseUJBOUhtQjtFQStIbkIsWUFBWSxFQUFBO0VBR2hCO0VBQ0kseUJBcElzQjtFQXFJdEIsWUFBWSxFQUFBO0VBR2hCO0VBQ0ksb0VBQWtGO0VBQ2xGLFlBQVksRUFBQTtFQUdoQjtFQUNJLGlFQUErRTtFQUMvRSxZQUFZLEVBQUE7RUFHaEI7RUFDSSx5QkFqSnVCO0VBa0p2QixZQUFZLEVBQUE7RUFHaEI7RUFDSSx5QkFySjRCLEVBQUE7RUE0SmhDO0VBQ0kseUJBaEtzQjtFQWlLdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQ0FBa0MsRUFBQTtFQUpyQztJQU9PLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0F4S2tCO0lBeUtsQixxQkF6S2tCLEVBQUE7RUE2SzFCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGNBL0tzQjtFQWdMdEIscUJBaExzQixFQUFBO0VBNkt6QjtJQU1PLHlCQW5Ma0I7SUFvTGxCLFlBQVk7SUFDWixtQkFBbUIsRUFBQTtFQUsvQjtFQUNJLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksMEJBQTBCO0VBQzFCLDRDQUE2QztVQUE3QyxvQ0FBNkM7RUFDN0MsV0FBVztFQUNYLG1CQUFtQixFQUFBO0VBSnZCO0lBT1EsNENBQXdDO1lBQXhDLG9DQUF3QyxFQUFBO0VBSWhEO0VBQ0ksV0FBVztFQUNYLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZiw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7RUFOMUI7SUFTUSxnQkFBZ0I7SUFDaEIsNENBQXlDO1lBQXpDLG9DQUF5QyxFQUFBO0VBSzdDO0VBQ0ksY0FBYyxFQUFBO0VBRWxCO0VBQ0ksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJHd3Y29kZS10ZWFsOiByZ2IoMCwgMTIyLCAxMjQpO1xuJGRhcmstdGVhbDogIHJnYig5LCA2NSwgNjYpO1xuJGxpZ2h0LXRlYWw6ICByZ2IoNjgsIDE1OCwgMTYwKTtcbiR2ZXJ5LWxpZ2h0LXRlYWw6IHJnYigxNjUsIDIzNywgMjQ3KTtcbiRpbnRyby1iYWNrZ3JvdW5kLWJyZWFrcG9pbnQ6IDEwNTBweDtcbiRpbnRyby1iYWNrZ3JvdW5kLWJyZWFrcG9pbnQtdGFibGV0OiA2OTBweDtcbiRpbnRyby1iYWNrZ3JvdW5kLWJyZWFrcG9pbnQtbW9iaWxlOiA1NTBweDtcbiRpbnRyby1iYWNrZ3JvdW5kLWJyZWFrcG9pbnQtaGlkZTogMzYwcHg7XG5cbiRwb3N0ZXItaW1hZ2UtYnJlYWtwb2ludDogNzY4cHg7XG5cbi5wb3N0ZXItaW1hZ2Uge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICR3d2NvZGUtdGVhbDtcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XG4gICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggJGxpZ2h0LXRlYWw7XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHBvc3Rlci1pbWFnZS1icmVha3BvaW50KSB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHBvc3Rlci1pbWFnZS1icmVha3BvaW50KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgfVxufVxuXG4ucG9zdGVyLXRleHQsIC5zZWN0aW9uLXRleHQge1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLnctNDUge1xuICAgIHdpZHRoOiA0NSUgIWltcG9ydGFudDtcbn1cblxuI3Bvc3RlckJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIC50aXRsZS10ZXh0LCAub3JnYW5pemVycy10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5idG4tY2ZwIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gICAgLnNlY3Rpb24sIC50YWxrLWZvcm1hdHMge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7XG4gICAgLmJ0bi1jZnAge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSBhbmQgKG1heC13aWR0aDogODk5cHgpIHtcbiAgICAuc2VjdGlvbiwgLnRhbGstZm9ybWF0cyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgICAuc2VjdGlvbiwgLnRhbGstZm9ybWF0cyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcmVtO1xuICAgIH1cbn1cblxuLnN0aWNreSB7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG4gICAgcGFkZGluZy10b3A6IDAuM3JlbTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAkd3djb2RlLXRlYWw7XG59XG5cbi5zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xuXG4gICAgJi10aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDEuNzVlbTtcbiAgICB9XG59XG5cblxuLmNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbi50ZXh0LXRlYWx7XG4gICAgY29sb3I6ICR3d2NvZGUtdGVhbDtcbn1cblxuLnRpdGxlIHtcbiAgICAmLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMC4ycmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xuICAgIH1cblxuICAgICYtdGV4dCB7XG4gICAgICAgIGNvbG9yOiAkd3djb2RlLXRlYWw7XG4gICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4ICR2ZXJ5LWxpZ2h0LXRlYWw7XG4gICAgfVxufVxuXG4uYmcge1xuICAgICYtZGFyay10ZWFsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstdGVhbDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYtdGVhbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3d2NvZGUtdGVhbDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYtdGVhbC1ncmFkaWVudC1ib3R0b20tcmlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAkd3djb2RlLXRlYWwsICR2ZXJ5LWxpZ2h0LXRlYWwpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi10ZWFsLWdyYWRpZW50LXRvcC1yaWdodCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICR3d2NvZGUtdGVhbCwgJHZlcnktbGlnaHQtdGVhbCk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmLWxpZ2h0LXRlYWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtdGVhbDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYtdmVyeS1saWdodC10ZWFsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcnktbGlnaHQtdGVhbDtcbiAgICB9XG59XG5cblxuXG4uYnRuIHtcbiAgICAmLXd3Y29kZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3d2NvZGUtdGVhbDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhciAhaW1wb3J0YW50O1xuXG4gICAgICAgICY6aG92ZXIgIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDhweCA4cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkd3djb2RlLXRlYWw7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICR3d2NvZGUtdGVhbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtd3djb2RlLWludmVyc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6ICR3d2NvZGUtdGVhbDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkd3djb2RlLXRlYWw7XG5cbiAgICAgICAgJjpob3ZlciAge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZvb3Rlci10ZXh0IHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4uY291bnRyeS1mbGFnIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGxpbmVhcjtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDVweCA1cHggJHZlcnktbGlnaHQtdGVhbCk7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDhweCA4cHggJGxpZ2h0LXRlYWwpO1xuICAgIH1cbn1cblxuLnNvY2lhbC1tZWRpYS1pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmlsdGVyOiBncmF5c2NhbGUoOTAlKTtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCAzcHggJHd3Y29kZS10ZWFsKTtcbiAgICB9XG59XG5cbi5mb250LXNpemUge1xuICAgICYtMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3ZoO1xuICAgIH1cbiAgICAmLTIge1xuICAgICAgICBmb250LXNpemU6IDJ2aDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_data_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/data/misc */ "./src/assets/data/misc.ts");
/* harmony import */ var _assets_data_organizers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/data/organizers */ "./src/assets/data/organizers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
        this.countries = _assets_data_organizers__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.hashtags = _assets_data_misc__WEBPACK_IMPORTED_MODULE_1__["hashtags"];
        this.email = _assets_data_misc__WEBPACK_IMPORTED_MODULE_1__["email"];
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/introduction/introduction.component.html":
/*!**********************************************************!*\
  !*** ./src/app/introduction/introduction.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title-container\">\n\n  <img src=\"assets/images/connect_cover_tokyo_qna.jpg\" class=\"intro-background intro-background-left-top\">\n  <img src=\"assets/images/connect_cover_manila_group.jpeg\" class=\"intro-background intro-background-left-bottom\">\n  <img src=\"assets/images/connect_cover_dancing.jpg\" class=\"intro-background intro-background-right-top\">\n  <img src=\"assets/images/connect_cover_tokyo_speaker.jpg\" class=\"intro-background intro-background-right-bottom\">\n\n  <div class=\"intro-left\"></div>\n  <div class=\"intro-logo\"></div>\n  <div class=\"row text-center\">\n    <div class=\"col-6 text-right my-auto\">\n      <img src=\"https://image.flaticon.com/icons/svg/1752/1752185.svg\" id=\"merlion\">\n    </div>\n    <div class=\"col-5 text-left mt-1 px-2\">\n      <h5>\n        Singapore\n      </h5>\n      <h5>\n        31<sup>st</sup> August 2019\n      </h5>\n      <h5 class=\"text-teal\" *ngFor=\"let hashtag of hashtags\">\n        <strong>\n          {{hashtag}}\n        </strong>\n      </h5>\n    </div>\n  </div>\n\n  <div class=\"title-content section\">\n    <div class=\"text-justify section-text\">\n      <p>\n        CONNECT Asia 2019 is <a href=\"https://www.womenwhocode.com/\" target=\"_blank\">Women Who Code</a>'s premier\n        technical conference in Asia and will include the industry's most influential leaders, engineers, and more.\n      </p>\n      <p>\n        The conference will be held on August 31<sup>st</sup> 2019 in Singapore.\n      </p>\n      <p>\n        We are changing the face of tech, creating a more inclusive and diverse industry, and helping women\n        connect with professional opportunities that propel them into positions of power. WWCode CONNECT Asia 2019\n        does just that.\n      </p>\n      <p>\n        WWCode CONNECT Asia 2019 brings together speakers from around the world to share their stories and\n        expertise about technology. Join the Women Who Code community for in-depth panels, technical workshops,\n        keynotes, and actionable advice on advancing your career. Please email\n        <a href=\"mailto:{{email}}\">{{email}}</a>\n        with any questions.\n      </p>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/introduction/introduction.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/introduction/introduction.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".poster-image {\n  border: 3px solid #007a7c;\n  transition: 0.1s ease-in; }\n  .poster-image:hover {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg);\n    box-shadow: 5px 5px #449ea0; }\n  @media screen and (max-width: 768px) {\n    .poster-image {\n      width: 80%; } }\n  @media screen and (min-width: 768px) {\n    .poster-image {\n      width: 100%;\n      margin: 20px; } }\n  .poster-text, .section-text {\n  margin: 20px; }\n  .w-45 {\n  width: 45% !important; }\n  #posterButton {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  width: 100%; }\n  @media only screen and (max-width: 360px) {\n  .title-text, .organizers-text {\n    font-size: x-large !important; }\n  .btn-cfp {\n    margin-right: 0; }\n  .section, .talk-formats {\n    padding-right: 1rem;\n    padding-left: 1rem; } }\n  @media only screen and (min-width: 400px) {\n  .btn-cfp {\n    margin-right: 2rem; } }\n  @media only screen and (min-width: 400px) and (max-width: 899px) {\n  .section, .talk-formats {\n    padding-right: 3rem;\n    padding-left: 3rem; } }\n  @media only screen and (min-width: 900px) {\n  .section, .talk-formats {\n    padding-right: 10rem;\n    padding-left: 10rem; } }\n  .sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: white;\n  padding-bottom: 0.3rem;\n  padding-top: 0.3rem;\n  z-index: 1;\n  border-bottom: 5px solid #007a7c; }\n  .section {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  text-align: center;\n  line-height: 2; }\n  .section-title {\n    margin-bottom: 1rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    font-size: 1.75em; }\n  .content {\n  font-family: 'Montserrat', sans-serif; }\n  .text-teal {\n  color: #007a7c; }\n  .title-content {\n  padding-top: 0.2rem;\n  padding-bottom: 0.2rem; }\n  .title-text {\n  color: #007a7c;\n  text-shadow: 3px 3px #a5edf7; }\n  .bg-dark-teal {\n  background-color: #094142;\n  color: white; }\n  .bg-teal {\n  background-color: #007a7c;\n  color: white; }\n  .bg-teal-gradient-bottom-right {\n  background-image: linear-gradient(to bottom right, #007a7c, #a5edf7);\n  color: white; }\n  .bg-teal-gradient-top-right {\n  background-image: linear-gradient(to top right, #007a7c, #a5edf7);\n  color: white; }\n  .bg-light-teal {\n  background-color: #449ea0;\n  color: white; }\n  .bg-very-light-teal {\n  background-color: #a5edf7; }\n  .btn-wwcode {\n  background-color: #007a7c;\n  color: white;\n  border-color: white;\n  transition: 0.2s linear !important; }\n  .btn-wwcode:hover {\n    box-shadow: 8px 8px;\n    background-color: white;\n    color: #007a7c;\n    border-color: #007a7c; }\n  .btn-wwcode-inverse {\n  background-color: white;\n  color: #007a7c;\n  border-color: #007a7c; }\n  .btn-wwcode-inverse:hover {\n    background-color: #007a7c;\n    color: white;\n    border-color: white; }\n  .footer-text {\n  font-size: 0.8em; }\n  .country-flag {\n  transition: all .1s linear;\n  -webkit-filter: drop-shadow(5px 5px #a5edf7);\n          filter: drop-shadow(5px 5px #a5edf7);\n  width: 40px;\n  border-radius: 18px; }\n  .country-flag:hover {\n    -webkit-filter: drop-shadow(8px 8px #449ea0);\n            filter: drop-shadow(8px 8px #449ea0); }\n  .social-media-icon {\n  width: 20px;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  transition: all 0.1s linear;\n  cursor: pointer;\n  -webkit-filter: grayscale(90%);\n          filter: grayscale(90%); }\n  .social-media-icon:hover {\n    margin-top: -5px;\n    -webkit-filter: drop-shadow(3px 3px #007a7c);\n            filter: drop-shadow(3px 3px #007a7c); }\n  .font-size-3 {\n  font-size: 3vh; }\n  .font-size-2 {\n  font-size: 2vh; }\n  .intro-background {\n  position: absolute;\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: 350px;\n  z-index: -1; }\n  .intro-background-left-top {\n    height: 250px; }\n  @media only screen and (min-width: 1050px) {\n      .intro-background-left-top {\n        -webkit-clip-path: polygon(0 0, 100% 0, 74% 100%, 0% 100%);\n        clip-path: polygon(0 0, 100% 0, 74% 100%, 0% 100%);\n        left: 0; } }\n  @media only screen and (max-width: 1050px) and (min-width: 690px) {\n      .intro-background-left-top {\n        -webkit-clip-path: polygon(0 0, 100% 0, 74% 100%, 0% 100%);\n        clip-path: polygon(0 0, 100% 0, 74% 100%, 0% 100%);\n        left: -10rem; } }\n  @media only screen and (max-width: 690px) and (min-width: 550px) {\n      .intro-background-left-top {\n        -webkit-clip-path: polygon(0 0, 100% 0, 74% 100%, 0% 100%);\n        clip-path: polygon(0 0, 100% 0, 74% 100%, 0% 100%);\n        left: -15rem; } }\n  @media only screen and (max-width: 550px) and (min-width: 360px) {\n      .intro-background-left-top {\n        height: 190px;\n        top: auto !important;\n        -webkit-clip-path: polygon(70% 0, 60% 50%, 70% 100%, 0 100%, 0 0);\n        clip-path: polygon(70% 0, 60% 50%, 70% 100%, 0 100%, 0 0);\n        left: -7.3rem; } }\n  @media only screen and (max-width: 360px) {\n      .intro-background-left-top {\n        display: none; } }\n  .intro-background-left-bottom {\n    height: 250px; }\n  @media only screen and (min-width: 1050px) {\n      .intro-background-left-bottom {\n        -webkit-clip-path: polygon(0 40%, 82% 28%, 100% 100%, 0 100%);\n        clip-path: polygon(0 40%, 82% 28%, 100% 100%, 0 100%);\n        left: 0;\n        top: 200px; } }\n  @media only screen and (max-width: 1050px) and (min-width: 690px) {\n      .intro-background-left-bottom {\n        -webkit-clip-path: polygon(0 40%, 82% 28%, 100% 100%, 0 100%);\n        clip-path: polygon(0 40%, 82% 28%, 100% 100%, 0 100%);\n        left: -10rem;\n        top: 200px; } }\n  @media only screen and (max-width: 690px) and (min-width: 550px) {\n      .intro-background-left-bottom {\n        -webkit-clip-path: polygon(0 40%, 82% 28%, 100% 100%, 0 100%);\n        clip-path: polygon(0 40%, 82% 28%, 100% 100%, 0 100%);\n        left: -15rem;\n        top: 200px; } }\n  @media only screen and (max-width: 550px) and (min-width: 360px) {\n      .intro-background-left-bottom {\n        display: none; } }\n  @media only screen and (max-width: 360px) {\n      .intro-background-left-bottom {\n        display: none; } }\n  .intro-background-right-top {\n    height: 250px; }\n  @media only screen and (min-width: 1050px) {\n      .intro-background-right-top {\n        -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%);\n        clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%);\n        right: 0; } }\n  @media only screen and (max-width: 1050px) and (min-width: 690px) {\n      .intro-background-right-top {\n        -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%);\n        clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%);\n        right: -10rem; } }\n  @media only screen and (max-width: 690px) and (min-width: 550px) {\n      .intro-background-right-top {\n        -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%);\n        clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%);\n        right: -15rem; } }\n  @media only screen and (max-width: 550px) and (min-width: 360px) {\n      .intro-background-right-top {\n        display: none; } }\n  @media only screen and (max-width: 360px) {\n      .intro-background-right-top {\n        display: none; } }\n  .intro-background-right-bottom {\n    height: 250px; }\n  @media only screen and (min-width: 1050px) {\n      .intro-background-right-bottom {\n        -webkit-clip-path: polygon(18% 31%, 100% 24%, 100% 100%, 0 100%);\n        clip-path: polygon(18% 31%, 100% 24%, 100% 100%, 0 100%);\n        right: 0;\n        top: 200px; } }\n  @media only screen and (max-width: 1050px) and (min-width: 690px) {\n      .intro-background-right-bottom {\n        -webkit-clip-path: polygon(18% 31%, 100% 24%, 100% 100%, 0 100%);\n        clip-path: polygon(18% 31%, 100% 24%, 100% 100%, 0 100%);\n        right: -10rem;\n        top: 200px; } }\n  @media only screen and (max-width: 690px) and (min-width: 550px) {\n      .intro-background-right-bottom {\n        -webkit-clip-path: polygon(18% 31%, 100% 24%, 100% 100%, 0 100%);\n        clip-path: polygon(18% 31%, 100% 24%, 100% 100%, 0 100%);\n        right: -15rem;\n        top: 200px; } }\n  @media only screen and (max-width: 550px) and (min-width: 360px) {\n      .intro-background-right-bottom {\n        height: 190px;\n        top: auto !important;\n        -webkit-clip-path: polygon(100% 0, 100% 100%, 60% 100%, 70% 50%, 60% 0);\n        clip-path: polygon(100% 0, 100% 100%, 60% 100%, 70% 50%, 60% 0);\n        right: -2rem;\n        top: 200px; } }\n  @media only screen and (max-width: 360px) {\n      .intro-background-right-bottom {\n        display: none; } }\n  .intro-logo {\n  background-image: url('connect_asia_logo.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position-y: 30px;\n  width: 200px;\n  height: 200px;\n  margin: auto; }\n  #merlion {\n  height: 8rem; }\n  @media only screen and (max-width: 550px) {\n    #merlion {\n      height: 6rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZW5keWtvbmcvRG9jdW1lbnRzL3NpZGUvd3djb2RlY29ubmVjdGFzaWEuZ2l0aHViLmlvL2NvZGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvd2VuZHlrb25nL0RvY3VtZW50cy9zaWRlL3d3Y29kZWNvbm5lY3Rhc2lhLmdpdGh1Yi5pby9jb2RlL3NyYy9hcHAvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNJLHlCQVowQjtFQWExQix3QkFBd0IsRUFBQTtFQUY1QjtJQUtRLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsMkJBZnVCLEVBQUE7RUFrQjNCO0lBVEo7TUFVUSxVQUFVLEVBQUEsRUFPakI7RUFKRztJQWJKO01BY1EsV0FBVztNQUNYLFlBQVksRUFBQSxFQUVuQjtFQUVEO0VBQ0ksWUFBWSxFQUFBO0VBR2hCO0VBQ0kscUJBQXFCLEVBQUE7RUFHekI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7RUFJZjtFQUNJO0lBQ0ksNkJBQTZCLEVBQUE7RUFFakM7SUFDRSxlQUFlLEVBQUE7RUFFakI7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUEsRUFDckI7RUFHTDtFQUNJO0lBQ0ksa0JBQWtCLEVBQUEsRUFDckI7RUFHTDtFQUNJO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBLEVBQ3JCO0VBR0w7RUFDSTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUIsRUFBQSxFQUN0QjtFQUdMO0VBQ0ksd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGdDQXZGMEIsRUFBQTtFQTBGOUI7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7RUFFZDtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQixFQUFBO0VBS3pCO0VBQ0kscUNBQXFDLEVBQUE7RUFHekM7RUFDSSxjQTlHMEIsRUFBQTtFQWtIMUI7RUFDSSxtQkFBbUI7RUFDbkIsc0JBQXNCLEVBQUE7RUFHMUI7RUFDSSxjQXhIc0I7RUF5SHRCLDRCQXRINEIsRUFBQTtFQTJIaEM7RUFDSSx5QkE5SG1CO0VBK0huQixZQUFZLEVBQUE7RUFHaEI7RUFDSSx5QkFwSXNCO0VBcUl0QixZQUFZLEVBQUE7RUFHaEI7RUFDSSxvRUFBa0Y7RUFDbEYsWUFBWSxFQUFBO0VBR2hCO0VBQ0ksaUVBQStFO0VBQy9FLFlBQVksRUFBQTtFQUdoQjtFQUNJLHlCQWpKdUI7RUFrSnZCLFlBQVksRUFBQTtFQUdoQjtFQUNJLHlCQXJKNEIsRUFBQTtFQTRKaEM7RUFDSSx5QkFoS3NCO0VBaUt0QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtDQUFrQyxFQUFBO0VBSnJDO0lBT08sbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQXhLa0I7SUF5S2xCLHFCQXpLa0IsRUFBQTtFQTZLMUI7RUFDSSx1QkFBdUI7RUFDdkIsY0EvS3NCO0VBZ0x0QixxQkFoTHNCLEVBQUE7RUE2S3pCO0lBTU8seUJBbkxrQjtJQW9MbEIsWUFBWTtJQUNaLG1CQUFtQixFQUFBO0VBSy9CO0VBQ0ksZ0JBQWdCLEVBQUE7RUFHcEI7RUFDSSwwQkFBMEI7RUFDMUIsNENBQTZDO1VBQTdDLG9DQUE2QztFQUM3QyxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7RUFKdkI7SUFPUSw0Q0FBd0M7WUFBeEMsb0NBQXdDLEVBQUE7RUFJaEQ7RUFDSSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQU4xQjtJQVNRLGdCQUFnQjtJQUNoQiw0Q0FBeUM7WUFBekMsb0NBQXlDLEVBQUE7RUFLN0M7RUFDSSxjQUFjLEVBQUE7RUFFbEI7RUFDSSxjQUFjLEVBQUE7RUNsS3RCO0VBQ0ksa0JBQWtCO0VBQ2xCLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBRWhCLFdBQVcsRUFBQTtFQUVYO0lBN0NBLGFBQWtDLEVBQUE7RUFFbEM7TUEyQ0E7UUE3REEsMERBOER1RDtRQTdEdkQsa0RBNkR1RDtRQXhEbkQsT0FQMkMsRUFBQSxFQW9FOUM7RUE1Q0Q7TUFzQ0E7UUE3REEsMERBOER1RDtRQTdEdkQsa0RBNkR1RDtRQXhEbkQsWUFTYSxFQUFBLEVBb0RoQjtFQXRDRDtNQWdDQTtRQTdEQSwwREE4RHVEO1FBN0R2RCxrREE2RHVEO1FBeERuRCxZQTBCeUQsRUFBQSxFQW1DNUQ7RUFoQ0Q7TUEwQkE7UUF0QlEsYUFBa0M7UUFDbEMsb0JBQW9CO1FBeEM1QixpRUErRHFFO1FBOURyRSx5REE4RHFFO1FBekRqRSxhQTJEdUIsRUFBQSxFQUUxQjtFQW5CRDtNQWFBO1FBWEksYUFBYSxFQUFBLEVBaUJoQjtFQUVEO0lBckRBLGFBQWtDLEVBQUE7RUFFbEM7TUFtREE7UUFyRUEsNkRBc0UwRDtRQXJFMUQscURBcUUwRDtRQWhFdEQsT0FQMkM7UUFXM0MsVUFia0IsRUFBQSxFQTRFckI7RUFsREQ7TUE4Q0E7UUFyRUEsNkRBc0UwRDtRQXJFMUQscURBcUUwRDtRQWhFdEQsWUFTYTtRQUxiLFVBYmtCLEVBQUEsRUE0RXJCO0VBNUNEO01Bd0NBO1FBckVBLDZEQXNFMEQ7UUFyRTFELHFEQXFFMEQ7UUFoRXRELFlBMEJ5RDtRQXRCekQsVUFia0IsRUFBQSxFQTRFckI7RUF0Q0Q7TUFrQ0E7UUExQlEsYUFBYSxFQUFBLEVBOEJwQjtFQXpCRDtNQXFCQTtRQW5CSSxhQUFhLEVBQUEsRUF1QmhCO0VBRUQ7SUEzREEsYUFBa0MsRUFBQTtFQUVsQztNQXlEQTtRQTNFQSw0REE0RXlEO1FBM0V6RCxvREEyRXlEO1FBeEVyRCxRQUwyQyxFQUFBLEVBZ0Y5QztFQXhERDtNQW9EQTtRQTNFQSw0REE0RXlEO1FBM0V6RCxvREEyRXlEO1FBeEVyRCxhQVdhLEVBQUEsRUFnRWhCO0VBbEREO01BOENBO1FBM0VBLDREQTRFeUQ7UUEzRXpELG9EQTJFeUQ7UUF4RXJELGFBNEJ5RCxFQUFBLEVBK0M1RDtFQTVDRDtNQXdDQTtRQWhDUSxhQUFhLEVBQUEsRUFvQ3BCO0VBL0JEO01BMkJBO1FBekJJLGFBQWEsRUFBQSxFQTZCaEI7RUFFQTtJQWpFRCxhQUFrQyxFQUFBO0VBRWxDO01BK0RDO1FBakZELGdFQWtGNkQ7UUFqRjdELHdEQWlGNkQ7UUE5RXpELFFBTDJDO1FBVzNDLFVBYmtCLEVBQUEsRUEwRnJCO0VBaEVEO01BMERDO1FBakZELGdFQWtGNkQ7UUFqRjdELHdEQWlGNkQ7UUE5RXpELGFBV2E7UUFMYixVQWJrQixFQUFBLEVBMEZyQjtFQTFERDtNQW9EQztRQWpGRCxnRUFrRjZEO1FBakY3RCx3REFpRjZEO1FBOUV6RCxhQTRCeUQ7UUF0QnpELFVBYmtCLEVBQUEsRUEwRnJCO0VBcEREO01BOENDO1FBMUNPLGFBQWtDO1FBQ2xDLG9CQUFvQjtRQXhDNUIsdUVBbUYyRTtRQWxGM0UsK0RBa0YyRTtRQS9FdkUsWUFpRnFCO1FBM0VyQixVQWJrQixFQUFBLEVBMEZyQjtFQXZDRDtNQWlDQztRQS9CRyxhQUFhLEVBQUEsRUFxQ2hCO0VBR0w7RUFDSSw4Q0FBa0U7RUFDbEUsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsWUFsR3NCO0VBbUd0QixhQW5Hc0I7RUFvR3RCLFlBQVksRUFBQTtFQUdoQjtFQUNJLFlBQVksRUFBQTtFQUVaO0lBSEo7TUFLUSxZQUFZLEVBQUEsRUFFbkIiLCJmaWxlIjoic3JjL2FwcC9pbnRyb2R1Y3Rpb24vaW50cm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4kd3djb2RlLXRlYWw6IHJnYigwLCAxMjIsIDEyNCk7XG4kZGFyay10ZWFsOiAgcmdiKDksIDY1LCA2Nik7XG4kbGlnaHQtdGVhbDogIHJnYig2OCwgMTU4LCAxNjApO1xuJHZlcnktbGlnaHQtdGVhbDogcmdiKDE2NSwgMjM3LCAyNDcpO1xuJGludHJvLWJhY2tncm91bmQtYnJlYWtwb2ludDogMTA1MHB4O1xuJGludHJvLWJhY2tncm91bmQtYnJlYWtwb2ludC10YWJsZXQ6IDY5MHB4O1xuJGludHJvLWJhY2tncm91bmQtYnJlYWtwb2ludC1tb2JpbGU6IDU1MHB4O1xuJGludHJvLWJhY2tncm91bmQtYnJlYWtwb2ludC1oaWRlOiAzNjBweDtcblxuJHBvc3Rlci1pbWFnZS1icmVha3BvaW50OiA3NjhweDtcblxuLnBvc3Rlci1pbWFnZSB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgJHd3Y29kZS10ZWFsO1xuICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcblxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAkbGlnaHQtdGVhbDtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkcG9zdGVyLWltYWdlLWJyZWFrcG9pbnQpIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkcG9zdGVyLWltYWdlLWJyZWFrcG9pbnQpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICB9XG59XG5cbi5wb3N0ZXItdGV4dCwgLnNlY3Rpb24tdGV4dCB7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4udy00NSB7XG4gICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xufVxuXG4jcG9zdGVyQnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgLnRpdGxlLXRleHQsIC5vcmdhbml6ZXJzLXRleHQge1xuICAgICAgICBmb250LXNpemU6IHgtbGFyZ2UgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJ0bi1jZnAge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgICAuc2VjdGlvbiwgLnRhbGstZm9ybWF0cyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgICAuYnRuLWNmcCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA4OTlweCkge1xuICAgIC5zZWN0aW9uLCAudGFsay1mb3JtYXRzIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAgIC5zZWN0aW9uLCAudGFsay1mb3JtYXRzIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTByZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTByZW07XG4gICAgfVxufVxuXG4uc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICR3d2NvZGUtdGVhbDtcbn1cblxuLnNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG5cbiAgICAmLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMS43NWVtO1xuICAgIH1cbn1cblxuXG4uY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuLnRleHQtdGVhbHtcbiAgICBjb2xvcjogJHd3Y29kZS10ZWFsO1xufVxuXG4udGl0bGUge1xuICAgICYtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjJyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XG4gICAgfVxuXG4gICAgJi10ZXh0IHtcbiAgICAgICAgY29sb3I6ICR3d2NvZGUtdGVhbDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggJHZlcnktbGlnaHQtdGVhbDtcbiAgICB9XG59XG5cbi5iZyB7XG4gICAgJi1kYXJrLXRlYWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay10ZWFsO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi10ZWFsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi10ZWFsLWdyYWRpZW50LWJvdHRvbS1yaWdodCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICR3d2NvZGUtdGVhbCwgJHZlcnktbGlnaHQtdGVhbCk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmLXRlYWwtZ3JhZGllbnQtdG9wLXJpZ2h0IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHd3Y29kZS10ZWFsLCAkdmVyeS1saWdodC10ZWFsKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYtbGlnaHQtdGVhbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC10ZWFsO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi12ZXJ5LWxpZ2h0LXRlYWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyeS1saWdodC10ZWFsO1xuICAgIH1cbn1cblxuXG5cbi5idG4ge1xuICAgICYtd3djb2RlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJjpob3ZlciAge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogOHB4IDhweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICR3d2NvZGUtdGVhbDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi13d2NvZGUtaW52ZXJzZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICBib3JkZXItY29sb3I6ICR3d2NvZGUtdGVhbDtcblxuICAgICAgICAmOmhvdmVyICB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd3djb2RlLXRlYWw7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9vdGVyLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi5jb3VudHJ5LWZsYWcge1xuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgbGluZWFyO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCAkdmVyeS1saWdodC10ZWFsKTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coOHB4IDhweCAkbGlnaHQtdGVhbCk7XG4gICAgfVxufVxuXG4uc29jaWFsLW1lZGlhLWljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSg5MCUpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDNweCAkd3djb2RlLXRlYWwpO1xuICAgIH1cbn1cblxuLmZvbnQtc2l6ZSB7XG4gICAgJi0zIHtcbiAgICAgICAgZm9udC1zaXplOiAzdmg7XG4gICAgfVxuICAgICYtMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnZoO1xuICAgIH1cbn0iLCJAaW1wb3J0ICcuLi9hcHAuY29tcG9uZW50LnNjc3MnO1xuXG4kbG9nby1tYXgtZGltZW5zaW9uOiAyMDBweDtcblxuQG1peGluIHBvc2l0aW9uKCRjbGlwLXBhdGgsICRwb3NpdGlvbiwgJG9mZnNldC14OiAwKSB7XG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6ICRjbGlwLXBhdGg7XG4gICAgY2xpcC1wYXRoOiAkY2xpcC1wYXRoO1xuXG4gICAgQGlmIHN0ci1pbmRleCgkcG9zaXRpb24sICdyaWdodC0nKSB7XG4gICAgICAgIHJpZ2h0OiAkb2Zmc2V0LXg7XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIGxlZnQ6ICRvZmZzZXQteDtcbiAgICB9XG5cbiAgICAgQGlmIHN0ci1pbmRleCgkcG9zaXRpb24sICctYm90dG9tJykge1xuICAgICAgICB0b3A6ICRsb2dvLW1heC1kaW1lbnNpb247XG4gICAgfVxufVxuXG5AbWl4aW4gYWRqdXN0SW1hZ2VGb3JTY3JlZW4oJGNsaXAtcGF0aCwgJGNsaXAtcGF0aC1tb2JpbGUsICRwb3NpdGlvbiwgJG9mZnNldC1tb2JpbGU6IC04cmVtLCAkc2hvdy1vbi1tb2JpbGU6IGZhbHNlKSB7XG4gICAgJG9mZnNldC14OiAtMTByZW07XG4gICAgaGVpZ2h0OiAkbG9nby1tYXgtZGltZW5zaW9uICsgNTBweDtcblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlblxuICAgIGFuZCAobWluLXdpZHRoOiAkaW50cm8tYmFja2dyb3VuZC1icmVha3BvaW50KSB7XG4gICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKCRjbGlwLXBhdGgsICRwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuXG4gICAgYW5kIChtYXgtd2lkdGg6ICRpbnRyby1iYWNrZ3JvdW5kLWJyZWFrcG9pbnQpXG4gICAgYW5kIChtaW4td2lkdGg6ICRpbnRyby1iYWNrZ3JvdW5kLWJyZWFrcG9pbnQtdGFibGV0KSB7XG4gICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKCRjbGlwLXBhdGgsICRwb3NpdGlvbiwgJG9mZnNldC14KTtcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW5cbiAgICBhbmQgKG1heC13aWR0aDogJGludHJvLWJhY2tncm91bmQtYnJlYWtwb2ludC10YWJsZXQpXG4gICAgYW5kIChtaW4td2lkdGg6ICRpbnRyby1iYWNrZ3JvdW5kLWJyZWFrcG9pbnQtbW9iaWxlKSB7XG4gICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKCRjbGlwLXBhdGgsICRwb3NpdGlvbiwgJG9mZnNldC14IC0gNXJlbSk7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuXG4gICAgYW5kIChtYXgtd2lkdGg6ICRpbnRyby1iYWNrZ3JvdW5kLWJyZWFrcG9pbnQtbW9iaWxlKVxuICAgIGFuZCAobWluLXdpZHRoOiAkaW50cm8tYmFja2dyb3VuZC1icmVha3BvaW50LWhpZGUpIHtcbiAgICAgICAgQGlmICRzaG93LW9uLW1vYmlsZSB7XG4gICAgICAgICAgICBoZWlnaHQ6ICRsb2dvLW1heC1kaW1lbnNpb24gLSAxMHB4O1xuICAgICAgICAgICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbigkY2xpcC1wYXRoLW1vYmlsZSwgJHBvc2l0aW9uLCAkb2Zmc2V0LW1vYmlsZSk7XG4gICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuXG4gICAgYW5kIChtYXgtd2lkdGg6ICRpbnRyby1iYWNrZ3JvdW5kLWJyZWFrcG9pbnQtaGlkZSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLmludHJvLWJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgICRjbGlwLXBhdGgtbW9iaWxlOiBwb2x5Z29uKDI1JSAwJSwgNjElIDAsIDM0JSAxMDAlLCAwJSAxMDAlKTtcbiAgICB6LWluZGV4OiAtMTtcblxuICAgICYtbGVmdC10b3Age1xuICAgICAgICAkY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCA3NCUgMTAwJSwgMCUgMTAwJSk7XG4gICAgICAgICRjbGlwLXBhdGgtbW9iaWxlOiBwb2x5Z29uKDcwJSAwLCA2MCUgNTAlLCA3MCUgMTAwJSwgMCAxMDAlLCAwIDApO1xuICAgICAgICAkcG9zaXRpb246ICdsZWZ0LXRvcCc7XG4gICAgICAgICRvZmZzZXQtbW9iaWxlOiAtNy4zcmVtO1xuICAgICAgICBAaW5jbHVkZSBhZGp1c3RJbWFnZUZvclNjcmVlbigkY2xpcC1wYXRoLCAkY2xpcC1wYXRoLW1vYmlsZSwgJHBvc2l0aW9uLCAkb2Zmc2V0LW1vYmlsZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgJi1sZWZ0LWJvdHRvbSB7XG4gICAgICAgICRjbGlwLXBhdGg6IHBvbHlnb24oMCA0MCUsIDgyJSAyOCUsIDEwMCUgMTAwJSwgMCAxMDAlKTtcbiAgICAgICAgJHBvc2l0aW9uOiAnbGVmdC1ib3R0b20nO1xuICAgICAgICBAaW5jbHVkZSBhZGp1c3RJbWFnZUZvclNjcmVlbigkY2xpcC1wYXRoLCAkY2xpcC1wYXRoLW1vYmlsZSwgJHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICAmLXJpZ2h0LXRvcCB7XG4gICAgICAgICRjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMjUlIDEwMCUpO1xuICAgICAgICAkcG9zaXRpb246ICdyaWdodC10b3AnO1xuICAgICAgICBAaW5jbHVkZSBhZGp1c3RJbWFnZUZvclNjcmVlbigkY2xpcC1wYXRoLCAkY2xpcC1wYXRoLW1vYmlsZSwgJHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICAgJi1yaWdodC1ib3R0b20ge1xuICAgICAgICAkY2xpcC1wYXRoOiBwb2x5Z29uKDE4JSAzMSUsIDEwMCUgMjQlLCAxMDAlIDEwMCUsIDAgMTAwJSk7XG4gICAgICAgICRjbGlwLXBhdGgtbW9iaWxlOiBwb2x5Z29uKDEwMCUgMCwgMTAwJSAxMDAlLCA2MCUgMTAwJSwgNzAlIDUwJSwgNjAlIDApO1xuICAgICAgICAkcG9zaXRpb246ICdyaWdodC1ib3R0b20nO1xuICAgICAgICAkb2Zmc2V0LW1vYmlsZTogLTJyZW07XG4gICAgICAgIEBpbmNsdWRlIGFkanVzdEltYWdlRm9yU2NyZWVuKCRjbGlwLXBhdGgsICRjbGlwLXBhdGgtbW9iaWxlLCAkcG9zaXRpb24sICRvZmZzZXQtbW9iaWxlLCB0cnVlKTtcbiAgICB9XG59XG5cbi5pbnRyby1sb2dvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvY29ubmVjdF9hc2lhX2xvZ28uc3ZnJykgO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMzBweDtcbiAgICB3aWR0aDogJGxvZ28tbWF4LWRpbWVuc2lvbjtcbiAgICBoZWlnaHQ6ICRsb2dvLW1heC1kaW1lbnNpb247XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4jbWVybGlvbiB7XG4gICAgaGVpZ2h0OiA4cmVtO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuXG4gICAgYW5kIChtYXgtd2lkdGg6ICRpbnRyby1iYWNrZ3JvdW5kLWJyZWFrcG9pbnQtbW9iaWxlKSB7XG4gICAgICAgIGhlaWdodDogNnJlbTtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/introduction/introduction.component.ts":
/*!********************************************************!*\
  !*** ./src/app/introduction/introduction.component.ts ***!
  \********************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_data_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/data/misc */ "./src/assets/data/misc.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IntroductionComponent = /** @class */ (function () {
    function IntroductionComponent() {
    }
    IntroductionComponent.prototype.ngOnInit = function () {
        this.hashtags = _assets_data_misc__WEBPACK_IMPORTED_MODULE_1__["hashtags"];
        this.email = _assets_data_misc__WEBPACK_IMPORTED_MODULE_1__["email"];
    };
    IntroductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-introduction',
            template: __webpack_require__(/*! ./introduction.component.html */ "./src/app/introduction/introduction.component.html"),
            styles: [__webpack_require__(/*! ./introduction.component.scss */ "./src/app/introduction/introduction.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroductionComponent);
    return IntroductionComponent;
}());



/***/ }),

/***/ "./src/app/navigation.service.ts":
/*!***************************************!*\
  !*** ./src/app/navigation.service.ts ***!
  \***************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_assets_data_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/data/links */ "./src/assets/data/links.ts");
/* harmony import */ var _context_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context.enum */ "./src/app/context.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationService = /** @class */ (function () {
    function NavigationService() {
    }
    NavigationService.prototype.redirect = function (context) {
        var link;
        switch (context) {
            case _context_enum__WEBPACK_IMPORTED_MODULE_2__["Context"].TShirtDesignContest:
                link = src_assets_data_links__WEBPACK_IMPORTED_MODULE_1__["tShirtContestLink"];
                break;
            case _context_enum__WEBPACK_IMPORTED_MODULE_2__["Context"].CallForProposal:
                link = src_assets_data_links__WEBPACK_IMPORTED_MODULE_1__["callForProposalLink"];
                break;
            case _context_enum__WEBPACK_IMPORTED_MODULE_2__["Context"].SpeakerProfile:
                link = src_assets_data_links__WEBPACK_IMPORTED_MODULE_1__["speakerProfileLink"];
                break;
            default:
                link = context;
                break;
        }
        window.open(link, '_blank');
    };
    NavigationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NavigationService);
    return NavigationService;
}());



/***/ }),

/***/ "./src/app/organizers/organizers.component.html":
/*!******************************************************!*\
  !*** ./src/app/organizers/organizers.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center mt-3 section\">\n  <div class=\"section-title text-teal\">\n    WOMEN WHO CODE ORGANIZERS IN ASIA\n  </div>\n  <h5>\n    Contact us&nbsp;:&nbsp;\n    <a href=\"mailto:{{email}}\">\n      {{email}}\n    </a>\n  </h5>\n\n  <div class=\"row align-items-center\">\n    <div class=\"col-md-1\"></div>\n\n    <div *ngFor=\"let country of countries\" class=\"col-md-2 mt-5\">\n      <div class=\"mb-2\">\n        <a [href]=\"country.link\" target=\"_blank\">\n          <div class=\"text-uppercase text-teal mb-2\">\n            {{country.name}}\n          </div>\n          <img [src]=\"country.flag\" class=\"country-flag mb-2\">\n        </a>\n      </div>\n      <div *ngIf=\"country.contacts\" class=\"mb-4\">\n        <img src=\"https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-facebook.svg\"\n          class=\"social-media-icon\" (click)=\"redirect(country.contacts.facebook)\">\n        <img src=\"https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-twitter.svg\"\n          class=\"social-media-icon\" (click)=\"redirect(country.contacts.twitter)\">\n      </div>\n    </div>\n\n    <div class=\"col-md-1\"></div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/organizers/organizers.component.scss":
/*!******************************************************!*\
  !*** ./src/app/organizers/organizers.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".poster-image {\n  border: 3px solid #007a7c;\n  transition: 0.1s ease-in; }\n  .poster-image:hover {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg);\n    box-shadow: 5px 5px #449ea0; }\n  @media screen and (max-width: 768px) {\n    .poster-image {\n      width: 80%; } }\n  @media screen and (min-width: 768px) {\n    .poster-image {\n      width: 100%;\n      margin: 20px; } }\n  .poster-text, .section-text {\n  margin: 20px; }\n  .w-45 {\n  width: 45% !important; }\n  #posterButton {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  width: 100%; }\n  @media only screen and (max-width: 360px) {\n  .title-text, .organizers-text {\n    font-size: x-large !important; }\n  .btn-cfp {\n    margin-right: 0; }\n  .section, .talk-formats {\n    padding-right: 1rem;\n    padding-left: 1rem; } }\n  @media only screen and (min-width: 400px) {\n  .btn-cfp {\n    margin-right: 2rem; } }\n  @media only screen and (min-width: 400px) and (max-width: 899px) {\n  .section, .talk-formats {\n    padding-right: 3rem;\n    padding-left: 3rem; } }\n  @media only screen and (min-width: 900px) {\n  .section, .talk-formats {\n    padding-right: 10rem;\n    padding-left: 10rem; } }\n  .sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: white;\n  padding-bottom: 0.3rem;\n  padding-top: 0.3rem;\n  z-index: 1;\n  border-bottom: 5px solid #007a7c; }\n  .section {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  text-align: center;\n  line-height: 2; }\n  .section-title {\n    margin-bottom: 1rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    font-size: 1.75em; }\n  .content {\n  font-family: 'Montserrat', sans-serif; }\n  .text-teal {\n  color: #007a7c; }\n  .title-content {\n  padding-top: 0.2rem;\n  padding-bottom: 0.2rem; }\n  .title-text {\n  color: #007a7c;\n  text-shadow: 3px 3px #a5edf7; }\n  .bg-dark-teal {\n  background-color: #094142;\n  color: white; }\n  .bg-teal {\n  background-color: #007a7c;\n  color: white; }\n  .bg-teal-gradient-bottom-right {\n  background-image: linear-gradient(to bottom right, #007a7c, #a5edf7);\n  color: white; }\n  .bg-teal-gradient-top-right {\n  background-image: linear-gradient(to top right, #007a7c, #a5edf7);\n  color: white; }\n  .bg-light-teal {\n  background-color: #449ea0;\n  color: white; }\n  .bg-very-light-teal {\n  background-color: #a5edf7; }\n  .btn-wwcode {\n  background-color: #007a7c;\n  color: white;\n  border-color: white;\n  transition: 0.2s linear !important; }\n  .btn-wwcode:hover {\n    box-shadow: 8px 8px;\n    background-color: white;\n    color: #007a7c;\n    border-color: #007a7c; }\n  .btn-wwcode-inverse {\n  background-color: white;\n  color: #007a7c;\n  border-color: #007a7c; }\n  .btn-wwcode-inverse:hover {\n    background-color: #007a7c;\n    color: white;\n    border-color: white; }\n  .footer-text {\n  font-size: 0.8em; }\n  .country-flag {\n  transition: all .1s linear;\n  -webkit-filter: drop-shadow(5px 5px #a5edf7);\n          filter: drop-shadow(5px 5px #a5edf7);\n  width: 40px;\n  border-radius: 18px; }\n  .country-flag:hover {\n    -webkit-filter: drop-shadow(8px 8px #449ea0);\n            filter: drop-shadow(8px 8px #449ea0); }\n  .social-media-icon {\n  width: 20px;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  transition: all 0.1s linear;\n  cursor: pointer;\n  -webkit-filter: grayscale(90%);\n          filter: grayscale(90%); }\n  .social-media-icon:hover {\n    margin-top: -5px;\n    -webkit-filter: drop-shadow(3px 3px #007a7c);\n            filter: drop-shadow(3px 3px #007a7c); }\n  .font-size-3 {\n  font-size: 3vh; }\n  .font-size-2 {\n  font-size: 2vh; }\n  #klChapter {\n  height: 250px;\n  border-radius: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZW5keWtvbmcvRG9jdW1lbnRzL3NpZGUvd3djb2RlY29ubmVjdGFzaWEuZ2l0aHViLmlvL2NvZGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvd2VuZHlrb25nL0RvY3VtZW50cy9zaWRlL3d3Y29kZWNvbm5lY3Rhc2lhLmdpdGh1Yi5pby9jb2RlL3NyYy9hcHAvb3JnYW5pemVycy9vcmdhbml6ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBO0VBQ0kseUJBWjBCO0VBYTFCLHdCQUF3QixFQUFBO0VBRjVCO0lBS1EsK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QiwyQkFmdUIsRUFBQTtFQWtCM0I7SUFUSjtNQVVRLFVBQVUsRUFBQSxFQU9qQjtFQUpHO0lBYko7TUFjUSxXQUFXO01BQ1gsWUFBWSxFQUFBLEVBRW5CO0VBRUQ7RUFDSSxZQUFZLEVBQUE7RUFHaEI7RUFDSSxxQkFBcUIsRUFBQTtFQUd6QjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTtFQUlmO0VBQ0k7SUFDSSw2QkFBNkIsRUFBQTtFQUVqQztJQUNFLGVBQWUsRUFBQTtFQUVqQjtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQSxFQUNyQjtFQUdMO0VBQ0k7SUFDSSxrQkFBa0IsRUFBQSxFQUNyQjtFQUdMO0VBQ0k7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUEsRUFDckI7RUFHTDtFQUNJO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQixFQUFBLEVBQ3RCO0VBR0w7RUFDSSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsZ0NBdkYwQixFQUFBO0VBMEY5QjtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtFQUVkO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCLEVBQUE7RUFLekI7RUFDSSxxQ0FBcUMsRUFBQTtFQUd6QztFQUNJLGNBOUcwQixFQUFBO0VBa0gxQjtFQUNJLG1CQUFtQjtFQUNuQixzQkFBc0IsRUFBQTtFQUcxQjtFQUNJLGNBeEhzQjtFQXlIdEIsNEJBdEg0QixFQUFBO0VBMkhoQztFQUNJLHlCQTlIbUI7RUErSG5CLFlBQVksRUFBQTtFQUdoQjtFQUNJLHlCQXBJc0I7RUFxSXRCLFlBQVksRUFBQTtFQUdoQjtFQUNJLG9FQUFrRjtFQUNsRixZQUFZLEVBQUE7RUFHaEI7RUFDSSxpRUFBK0U7RUFDL0UsWUFBWSxFQUFBO0VBR2hCO0VBQ0kseUJBakp1QjtFQWtKdkIsWUFBWSxFQUFBO0VBR2hCO0VBQ0kseUJBcko0QixFQUFBO0VBNEpoQztFQUNJLHlCQWhLc0I7RUFpS3RCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0NBQWtDLEVBQUE7RUFKckM7SUFPTyxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBeEtrQjtJQXlLbEIscUJBektrQixFQUFBO0VBNksxQjtFQUNJLHVCQUF1QjtFQUN2QixjQS9Lc0I7RUFnTHRCLHFCQWhMc0IsRUFBQTtFQTZLekI7SUFNTyx5QkFuTGtCO0lBb0xsQixZQUFZO0lBQ1osbUJBQW1CLEVBQUE7RUFLL0I7RUFDSSxnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLDBCQUEwQjtFQUMxQiw0Q0FBNkM7VUFBN0Msb0NBQTZDO0VBQzdDLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTtFQUp2QjtJQU9RLDRDQUF3QztZQUF4QyxvQ0FBd0MsRUFBQTtFQUloRDtFQUNJLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsOEJBQXNCO1VBQXRCLHNCQUFzQixFQUFBO0VBTjFCO0lBU1EsZ0JBQWdCO0lBQ2hCLDRDQUF5QztZQUF6QyxvQ0FBeUMsRUFBQTtFQUs3QztFQUNJLGNBQWMsRUFBQTtFQUVsQjtFQUNJLGNBQWMsRUFBQTtFQzNOdEI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9vcmdhbml6ZXJzL29yZ2FuaXplcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiR3d2NvZGUtdGVhbDogcmdiKDAsIDEyMiwgMTI0KTtcbiRkYXJrLXRlYWw6ICByZ2IoOSwgNjUsIDY2KTtcbiRsaWdodC10ZWFsOiAgcmdiKDY4LCAxNTgsIDE2MCk7XG4kdmVyeS1saWdodC10ZWFsOiByZ2IoMTY1LCAyMzcsIDI0Nyk7XG4kaW50cm8tYmFja2dyb3VuZC1icmVha3BvaW50OiAxMDUwcHg7XG4kaW50cm8tYmFja2dyb3VuZC1icmVha3BvaW50LXRhYmxldDogNjkwcHg7XG4kaW50cm8tYmFja2dyb3VuZC1icmVha3BvaW50LW1vYmlsZTogNTUwcHg7XG4kaW50cm8tYmFja2dyb3VuZC1icmVha3BvaW50LWhpZGU6IDM2MHB4O1xuXG4kcG9zdGVyLWltYWdlLWJyZWFrcG9pbnQ6IDc2OHB4O1xuXG4ucG9zdGVyLWltYWdlIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkd3djb2RlLXRlYWw7XG4gICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4ICRsaWdodC10ZWFsO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRwb3N0ZXItaW1hZ2UtYnJlYWtwb2ludCkge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRwb3N0ZXItaW1hZ2UtYnJlYWtwb2ludCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgIH1cbn1cblxuLnBvc3Rlci10ZXh0LCAuc2VjdGlvbi10ZXh0IHtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi53LTQ1IHtcbiAgICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7XG59XG5cbiNwb3N0ZXJCdXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICAudGl0bGUtdGV4dCwgLm9yZ2FuaXplcnMtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYnRuLWNmcCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5zZWN0aW9uLCAudGFsay1mb3JtYXRzIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xuICAgIC5idG4tY2ZwIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkgYW5kIChtYXgtd2lkdGg6IDg5OXB4KSB7XG4gICAgLnNlY3Rpb24sIC50YWxrLWZvcm1hdHMge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gICAgLnNlY3Rpb24sIC50YWxrLWZvcm1hdHMge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHJlbTtcbiAgICB9XG59XG5cbi5zdGlja3kge1xuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjNyZW07XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgJHd3Y29kZS10ZWFsO1xufVxuXG4uc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjtcblxuICAgICYtdGl0bGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjc1ZW07XG4gICAgfVxufVxuXG5cbi5jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG4udGV4dC10ZWFse1xuICAgIGNvbG9yOiAkd3djb2RlLXRlYWw7XG59XG5cbi50aXRsZSB7XG4gICAgJi1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDAuMnJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcbiAgICB9XG5cbiAgICAmLXRleHQge1xuICAgICAgICBjb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAkdmVyeS1saWdodC10ZWFsO1xuICAgIH1cbn1cblxuLmJnIHtcbiAgICAmLWRhcmstdGVhbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLXRlYWw7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmLXRlYWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd3djb2RlLXRlYWw7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmLXRlYWwtZ3JhZGllbnQtYm90dG9tLXJpZ2h0IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgJHd3Y29kZS10ZWFsLCAkdmVyeS1saWdodC10ZWFsKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYtdGVhbC1ncmFkaWVudC10b3AtcmlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkd3djb2RlLXRlYWwsICR2ZXJ5LWxpZ2h0LXRlYWwpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi1saWdodC10ZWFsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LXRlYWw7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmLXZlcnktbGlnaHQtdGVhbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJ5LWxpZ2h0LXRlYWw7XG4gICAgfVxufVxuXG5cblxuLmJ0biB7XG4gICAgJi13d2NvZGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd3djb2RlLXRlYWw7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXIgIWltcG9ydGFudDtcblxuICAgICAgICAmOmhvdmVyICB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiA4cHggOHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkd3djb2RlLXRlYWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXd3Y29kZS1pbnZlcnNlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGNvbG9yOiAkd3djb2RlLXRlYWw7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHd3Y29kZS10ZWFsO1xuXG4gICAgICAgICY6aG92ZXIgIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3d2NvZGUtdGVhbDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5mb290ZXItdGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLmNvdW50cnktZmxhZyB7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBsaW5lYXI7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggNXB4ICR2ZXJ5LWxpZ2h0LXRlYWwpO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg4cHggOHB4ICRsaWdodC10ZWFsKTtcbiAgICB9XG59XG5cbi5zb2NpYWwtbWVkaWEtaWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZpbHRlcjogZ3JheXNjYWxlKDkwJSk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggM3B4ICR3d2NvZGUtdGVhbCk7XG4gICAgfVxufVxuXG4uZm9udC1zaXplIHtcbiAgICAmLTMge1xuICAgICAgICBmb250LXNpemU6IDN2aDtcbiAgICB9XG4gICAgJi0yIHtcbiAgICAgICAgZm9udC1zaXplOiAydmg7XG4gICAgfVxufSIsIkBpbXBvcnQgJy4uL2FwcC5jb21wb25lbnQuc2Nzcyc7XG5cbiNrbENoYXB0ZXIge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/organizers/organizers.component.ts":
/*!****************************************************!*\
  !*** ./src/app/organizers/organizers.component.ts ***!
  \****************************************************/
/*! exports provided: OrganizersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizersComponent", function() { return OrganizersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_data_organizers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/data/organizers */ "./src/assets/data/organizers.ts");
/* harmony import */ var _assets_data_misc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/data/misc */ "./src/assets/data/misc.ts");
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation.service */ "./src/app/navigation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrganizersComponent = /** @class */ (function () {
    function OrganizersComponent(navigationService) {
        this.navigationService = navigationService;
    }
    OrganizersComponent.prototype.ngOnInit = function () {
        this.email = _assets_data_misc__WEBPACK_IMPORTED_MODULE_2__["email"];
        this.countries = _assets_data_organizers__WEBPACK_IMPORTED_MODULE_1__["default"];
    };
    OrganizersComponent.prototype.redirect = function (context) {
        this.navigationService.redirect(context);
    };
    OrganizersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organizers',
            template: __webpack_require__(/*! ./organizers.component.html */ "./src/app/organizers/organizers.component.html"),
            styles: [__webpack_require__(/*! ./organizers.component.scss */ "./src/app/organizers/organizers.component.scss")]
        }),
        __metadata("design:paramtypes", [_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]])
    ], OrganizersComponent);
    return OrganizersComponent;
}());



/***/ }),

/***/ "./src/app/shirt-design/shirt-design.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shirt-design/shirt-design.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row section\">\n  <div class=\"col-md-4\">\n    <img src=\"assets/images/poster-shirt-contest.png\" class=\"poster-image\">\n  </div>\n  <div class=\"col-md-7 poster-text\">\n    <div class=\"mx-2 my-3\">\n\n      <h3 class=\"section-title text-teal\">\n        <strong>\n          T-SHIRT DESIGN CONTEST\n        </strong>\n      </h3>\n\n      <div class=\"text-justify\">\n        <p>\n          We are holding a T-shirt design contest! Winner will receive a <b>free conference ticket</b>.\n        </p>\n        <p><strong>Deadline to Submit: May 30<sup>th</sup></strong></p>\n\n        <div class=\"d-flex flex-direction-row mt-2\">\n          <button id=\"posterButton\" type=\"button\" class=\"btn btn-wwcode w-45\"\n            (click)=\"redirect(context.TShirtDesignContest)\">\n            Submit your shirt design\n          </button>\n          <span></span>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shirt-design/shirt-design.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/shirt-design/shirt-design.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".poster-image {\n  border: 3px solid #007a7c;\n  transition: 0.1s ease-in; }\n  .poster-image:hover {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg);\n    box-shadow: 5px 5px #449ea0; }\n  @media screen and (max-width: 768px) {\n    .poster-image {\n      width: 80%; } }\n  @media screen and (min-width: 768px) {\n    .poster-image {\n      width: 100%;\n      margin: 20px; } }\n  .poster-text, .section-text {\n  margin: 20px; }\n  .w-45 {\n  width: 45% !important; }\n  #posterButton {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  width: 100%; }\n  @media only screen and (max-width: 360px) {\n  .title-text, .organizers-text {\n    font-size: x-large !important; }\n  .btn-cfp {\n    margin-right: 0; }\n  .section, .talk-formats {\n    padding-right: 1rem;\n    padding-left: 1rem; } }\n  @media only screen and (min-width: 400px) {\n  .btn-cfp {\n    margin-right: 2rem; } }\n  @media only screen and (min-width: 400px) and (max-width: 899px) {\n  .section, .talk-formats {\n    padding-right: 3rem;\n    padding-left: 3rem; } }\n  @media only screen and (min-width: 900px) {\n  .section, .talk-formats {\n    padding-right: 10rem;\n    padding-left: 10rem; } }\n  .sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: white;\n  padding-bottom: 0.3rem;\n  padding-top: 0.3rem;\n  z-index: 1;\n  border-bottom: 5px solid #007a7c; }\n  .section {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  text-align: center;\n  line-height: 2; }\n  .section-title {\n    margin-bottom: 1rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    font-size: 1.75em; }\n  .content {\n  font-family: 'Montserrat', sans-serif; }\n  .text-teal {\n  color: #007a7c; }\n  .title-content {\n  padding-top: 0.2rem;\n  padding-bottom: 0.2rem; }\n  .title-text {\n  color: #007a7c;\n  text-shadow: 3px 3px #a5edf7; }\n  .bg-dark-teal {\n  background-color: #094142;\n  color: white; }\n  .bg-teal {\n  background-color: #007a7c;\n  color: white; }\n  .bg-teal-gradient-bottom-right {\n  background-image: linear-gradient(to bottom right, #007a7c, #a5edf7);\n  color: white; }\n  .bg-teal-gradient-top-right {\n  background-image: linear-gradient(to top right, #007a7c, #a5edf7);\n  color: white; }\n  .bg-light-teal {\n  background-color: #449ea0;\n  color: white; }\n  .bg-very-light-teal {\n  background-color: #a5edf7; }\n  .btn-wwcode {\n  background-color: #007a7c;\n  color: white;\n  border-color: white;\n  transition: 0.2s linear !important; }\n  .btn-wwcode:hover {\n    box-shadow: 8px 8px;\n    background-color: white;\n    color: #007a7c;\n    border-color: #007a7c; }\n  .btn-wwcode-inverse {\n  background-color: white;\n  color: #007a7c;\n  border-color: #007a7c; }\n  .btn-wwcode-inverse:hover {\n    background-color: #007a7c;\n    color: white;\n    border-color: white; }\n  .footer-text {\n  font-size: 0.8em; }\n  .country-flag {\n  transition: all .1s linear;\n  -webkit-filter: drop-shadow(5px 5px #a5edf7);\n          filter: drop-shadow(5px 5px #a5edf7);\n  width: 40px;\n  border-radius: 18px; }\n  .country-flag:hover {\n    -webkit-filter: drop-shadow(8px 8px #449ea0);\n            filter: drop-shadow(8px 8px #449ea0); }\n  .social-media-icon {\n  width: 20px;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  transition: all 0.1s linear;\n  cursor: pointer;\n  -webkit-filter: grayscale(90%);\n          filter: grayscale(90%); }\n  .social-media-icon:hover {\n    margin-top: -5px;\n    -webkit-filter: drop-shadow(3px 3px #007a7c);\n            filter: drop-shadow(3px 3px #007a7c); }\n  .font-size-3 {\n  font-size: 3vh; }\n  .font-size-2 {\n  font-size: 2vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZW5keWtvbmcvRG9jdW1lbnRzL3NpZGUvd3djb2RlY29ubmVjdGFzaWEuZ2l0aHViLmlvL2NvZGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDSSx5QkFaMEI7RUFhMUIsd0JBQXdCLEVBQUE7RUFGNUI7SUFLUSwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDJCQWZ1QixFQUFBO0VBa0IzQjtJQVRKO01BVVEsVUFBVSxFQUFBLEVBT2pCO0VBSkc7SUFiSjtNQWNRLFdBQVc7TUFDWCxZQUFZLEVBQUEsRUFFbkI7RUFFRDtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLHFCQUFxQixFQUFBO0VBR3pCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBO0VBSWY7RUFDSTtJQUNJLDZCQUE2QixFQUFBO0VBRWpDO0lBQ0UsZUFBZSxFQUFBO0VBRWpCO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBLEVBQ3JCO0VBR0w7RUFDSTtJQUNJLGtCQUFrQixFQUFBLEVBQ3JCO0VBR0w7RUFDSTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQSxFQUNyQjtFQUdMO0VBQ0k7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CLEVBQUEsRUFDdEI7RUFHTDtFQUNJLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQ0F2RjBCLEVBQUE7RUEwRjlCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBO0VBRWQ7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUIsRUFBQTtFQUt6QjtFQUNJLHFDQUFxQyxFQUFBO0VBR3pDO0VBQ0ksY0E5RzBCLEVBQUE7RUFrSDFCO0VBQ0ksbUJBQW1CO0VBQ25CLHNCQUFzQixFQUFBO0VBRzFCO0VBQ0ksY0F4SHNCO0VBeUh0Qiw0QkF0SDRCLEVBQUE7RUEySGhDO0VBQ0kseUJBOUhtQjtFQStIbkIsWUFBWSxFQUFBO0VBR2hCO0VBQ0kseUJBcElzQjtFQXFJdEIsWUFBWSxFQUFBO0VBR2hCO0VBQ0ksb0VBQWtGO0VBQ2xGLFlBQVksRUFBQTtFQUdoQjtFQUNJLGlFQUErRTtFQUMvRSxZQUFZLEVBQUE7RUFHaEI7RUFDSSx5QkFqSnVCO0VBa0p2QixZQUFZLEVBQUE7RUFHaEI7RUFDSSx5QkFySjRCLEVBQUE7RUE0SmhDO0VBQ0kseUJBaEtzQjtFQWlLdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQ0FBa0MsRUFBQTtFQUpyQztJQU9PLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0F4S2tCO0lBeUtsQixxQkF6S2tCLEVBQUE7RUE2SzFCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGNBL0tzQjtFQWdMdEIscUJBaExzQixFQUFBO0VBNkt6QjtJQU1PLHlCQW5Ma0I7SUFvTGxCLFlBQVk7SUFDWixtQkFBbUIsRUFBQTtFQUsvQjtFQUNJLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksMEJBQTBCO0VBQzFCLDRDQUE2QztVQUE3QyxvQ0FBNkM7RUFDN0MsV0FBVztFQUNYLG1CQUFtQixFQUFBO0VBSnZCO0lBT1EsNENBQXdDO1lBQXhDLG9DQUF3QyxFQUFBO0VBSWhEO0VBQ0ksV0FBVztFQUNYLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZiw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7RUFOMUI7SUFTUSxnQkFBZ0I7SUFDaEIsNENBQXlDO1lBQXpDLG9DQUF5QyxFQUFBO0VBSzdDO0VBQ0ksY0FBYyxFQUFBO0VBRWxCO0VBQ0ksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hpcnQtZGVzaWduL3NoaXJ0LWRlc2lnbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJHd3Y29kZS10ZWFsOiByZ2IoMCwgMTIyLCAxMjQpO1xuJGRhcmstdGVhbDogIHJnYig5LCA2NSwgNjYpO1xuJGxpZ2h0LXRlYWw6ICByZ2IoNjgsIDE1OCwgMTYwKTtcbiR2ZXJ5LWxpZ2h0LXRlYWw6IHJnYigxNjUsIDIzNywgMjQ3KTtcbiRpbnRyby1iYWNrZ3JvdW5kLWJyZWFrcG9pbnQ6IDEwNTBweDtcbiRpbnRyby1iYWNrZ3JvdW5kLWJyZWFrcG9pbnQtdGFibGV0OiA2OTBweDtcbiRpbnRyby1iYWNrZ3JvdW5kLWJyZWFrcG9pbnQtbW9iaWxlOiA1NTBweDtcbiRpbnRyby1iYWNrZ3JvdW5kLWJyZWFrcG9pbnQtaGlkZTogMzYwcHg7XG5cbiRwb3N0ZXItaW1hZ2UtYnJlYWtwb2ludDogNzY4cHg7XG5cbi5wb3N0ZXItaW1hZ2Uge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICR3d2NvZGUtdGVhbDtcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XG4gICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggJGxpZ2h0LXRlYWw7XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHBvc3Rlci1pbWFnZS1icmVha3BvaW50KSB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHBvc3Rlci1pbWFnZS1icmVha3BvaW50KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgfVxufVxuXG4ucG9zdGVyLXRleHQsIC5zZWN0aW9uLXRleHQge1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLnctNDUge1xuICAgIHdpZHRoOiA0NSUgIWltcG9ydGFudDtcbn1cblxuI3Bvc3RlckJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIC50aXRsZS10ZXh0LCAub3JnYW5pemVycy10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5idG4tY2ZwIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gICAgLnNlY3Rpb24sIC50YWxrLWZvcm1hdHMge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7XG4gICAgLmJ0bi1jZnAge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSBhbmQgKG1heC13aWR0aDogODk5cHgpIHtcbiAgICAuc2VjdGlvbiwgLnRhbGstZm9ybWF0cyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgICAuc2VjdGlvbiwgLnRhbGstZm9ybWF0cyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcmVtO1xuICAgIH1cbn1cblxuLnN0aWNreSB7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG4gICAgcGFkZGluZy10b3A6IDAuM3JlbTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAkd3djb2RlLXRlYWw7XG59XG5cbi5zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xuXG4gICAgJi10aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDEuNzVlbTtcbiAgICB9XG59XG5cblxuLmNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbi50ZXh0LXRlYWx7XG4gICAgY29sb3I6ICR3d2NvZGUtdGVhbDtcbn1cblxuLnRpdGxlIHtcbiAgICAmLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMC4ycmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xuICAgIH1cblxuICAgICYtdGV4dCB7XG4gICAgICAgIGNvbG9yOiAkd3djb2RlLXRlYWw7XG4gICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4ICR2ZXJ5LWxpZ2h0LXRlYWw7XG4gICAgfVxufVxuXG4uYmcge1xuICAgICYtZGFyay10ZWFsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstdGVhbDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYtdGVhbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3d2NvZGUtdGVhbDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYtdGVhbC1ncmFkaWVudC1ib3R0b20tcmlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAkd3djb2RlLXRlYWwsICR2ZXJ5LWxpZ2h0LXRlYWwpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi10ZWFsLWdyYWRpZW50LXRvcC1yaWdodCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICR3d2NvZGUtdGVhbCwgJHZlcnktbGlnaHQtdGVhbCk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmLWxpZ2h0LXRlYWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtdGVhbDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYtdmVyeS1saWdodC10ZWFsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcnktbGlnaHQtdGVhbDtcbiAgICB9XG59XG5cblxuXG4uYnRuIHtcbiAgICAmLXd3Y29kZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3d2NvZGUtdGVhbDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhciAhaW1wb3J0YW50O1xuXG4gICAgICAgICY6aG92ZXIgIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDhweCA4cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkd3djb2RlLXRlYWw7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICR3d2NvZGUtdGVhbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtd3djb2RlLWludmVyc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6ICR3d2NvZGUtdGVhbDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkd3djb2RlLXRlYWw7XG5cbiAgICAgICAgJjpob3ZlciAge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZvb3Rlci10ZXh0IHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4uY291bnRyeS1mbGFnIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGxpbmVhcjtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDVweCA1cHggJHZlcnktbGlnaHQtdGVhbCk7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDhweCA4cHggJGxpZ2h0LXRlYWwpO1xuICAgIH1cbn1cblxuLnNvY2lhbC1tZWRpYS1pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmlsdGVyOiBncmF5c2NhbGUoOTAlKTtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCAzcHggJHd3Y29kZS10ZWFsKTtcbiAgICB9XG59XG5cbi5mb250LXNpemUge1xuICAgICYtMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3ZoO1xuICAgIH1cbiAgICAmLTIge1xuICAgICAgICBmb250LXNpemU6IDJ2aDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/shirt-design/shirt-design.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shirt-design/shirt-design.component.ts ***!
  \********************************************************/
/*! exports provided: ShirtDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShirtDesignComponent", function() { return ShirtDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation.service */ "./src/app/navigation.service.ts");
/* harmony import */ var _context_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context.enum */ "./src/app/context.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShirtDesignComponent = /** @class */ (function () {
    function ShirtDesignComponent(navigationService) {
        this.navigationService = navigationService;
        this.context = _context_enum__WEBPACK_IMPORTED_MODULE_2__["Context"];
    }
    ShirtDesignComponent.prototype.ngOnInit = function () {
    };
    ShirtDesignComponent.prototype.redirect = function (context) {
        this.navigationService.redirect(context);
    };
    ShirtDesignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shirt-design',
            template: __webpack_require__(/*! ./shirt-design.component.html */ "./src/app/shirt-design/shirt-design.component.html"),
            styles: [__webpack_require__(/*! ./shirt-design.component.scss */ "./src/app/shirt-design/shirt-design.component.scss")]
        }),
        __metadata("design:paramtypes", [_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]])
    ], ShirtDesignComponent);
    return ShirtDesignComponent;
}());



/***/ }),

/***/ "./src/app/speaking-details/speaking-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/speaking-details/speaking-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <h3 class=\"section-title text-teal\">\n    SPEAKING DETAILS\n  </h3>\n\n  <h4 class=\"my-3 text-left\">\n    What We're Looking For\n  </h4>\n\n  <div class=\"row d-flex mt-2\">\n    <div class=\"col-lg-4\">\n      <div class=\"card m-1 p-0 text-teal\">\n        <div class=\"card-header\">\n          <i class=\"fas fa-desktop fa-4x mt-2 mb-3\"></i>\n          <br>\n          <strong>TECHNOLOGY</strong>\n        </div>\n        <div class=\"card-body\">\n          <ul class=\"text-left\">\n            <li>\n              Engineering and technical know-how\n            </li>\n            <li>\n              ProTips\n            </li>\n            <li>\n              Work processes\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4\">\n      <div class=\"card m-1 p-0 text-teal\">\n        <div class=\"card-header\">\n          <i class=\"fas fa-brain fa-4x mt-2 mb-3\"></i>\n          <br>\n          <strong>INNOVATION</strong>\n        </div>\n        <div class=\"card-body\">\n          <ul class=\"text-left\">\n            <li>\n              New technologies\n            </li>\n            <li>\n              Technical innovation across industries\n            </li>\n            <li>\n              Other topics important for engineers\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4\">\n      <div class=\"card m-1 p-0 text-teal\">\n        <div class=\"card-header\">\n          <i class=\"fas fa-trophy fa-4x mt-2 mb-3\"></i>\n          <br>\n          <strong>LEADERSHIP</strong>\n        </div>\n        <div class=\"card-body\">\n          <ul class=\"text-left\">\n            <li>\n              Building leaders for a better industry\n            </li>\n            <li>\n              Career advancement\n            </li>\n            <li>\n              Best practices for engineering teams\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"text-justify section-text\">\n    <p class=\"mt-3\">\n      The goal is to share technical and soft skill experiences with technical leaders, software developers,\n      product managers, designers and other technologists. If you use a specific language, your talk must be\n      understandable by good developers, even if they don’t know the exact language syntax (short snippets or\n      pseudo-code are totally fine).\n    </p>\n    <p>\n      Attendees will be able to take away changes that can improve their day-to-day jobs. Don’t be afraid to bring up\n      advanced stuff and even try your hand at live demo-ing. Consider topics like\n      machine learning, data science, cloud, mobile, web, security, and more. Submissions by professional and\n      first-time speakers are welcome.\n    </p>\n    <h4 class=\"my-3\">\n      Session Types\n    </h4>\n    <ul class=\"\" *ngFor=\"let format of formats\">\n      <li class=\"mb-2\">\n        {{format}}\n      </li>\n    </ul>\n    <h4 class=\"my-3\">\n      Deadline to Submit: June 15<sup>th</sup>\n    </h4>\n\n    <p>\n      Talks are accepted on a rolling basis. Submit early to have the greatest chance for feedback and\n      acceptance. We believe that our industry is better when everyone has a voice.\n      We take our\n      <a [href]=\"codeOfConductLink\" target=\"_blank\">\n        Code of Conduct\n      </a>\n      seriously, and encourage those of groups traditionally underrepresented in technology to apply to speak.\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/speaking-details/speaking-details.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/speaking-details/speaking-details.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".poster-image {\n  border: 3px solid #007a7c;\n  transition: 0.1s ease-in; }\n  .poster-image:hover {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg);\n    box-shadow: 5px 5px #449ea0; }\n  @media screen and (max-width: 768px) {\n    .poster-image {\n      width: 80%; } }\n  @media screen and (min-width: 768px) {\n    .poster-image {\n      width: 100%;\n      margin: 20px; } }\n  .poster-text, .section-text {\n  margin: 20px; }\n  .w-45 {\n  width: 45% !important; }\n  #posterButton {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  width: 100%; }\n  @media only screen and (max-width: 360px) {\n  .title-text, .organizers-text {\n    font-size: x-large !important; }\n  .btn-cfp {\n    margin-right: 0; }\n  .section, .talk-formats {\n    padding-right: 1rem;\n    padding-left: 1rem; } }\n  @media only screen and (min-width: 400px) {\n  .btn-cfp {\n    margin-right: 2rem; } }\n  @media only screen and (min-width: 400px) and (max-width: 899px) {\n  .section, .talk-formats {\n    padding-right: 3rem;\n    padding-left: 3rem; } }\n  @media only screen and (min-width: 900px) {\n  .section, .talk-formats {\n    padding-right: 10rem;\n    padding-left: 10rem; } }\n  .sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: white;\n  padding-bottom: 0.3rem;\n  padding-top: 0.3rem;\n  z-index: 1;\n  border-bottom: 5px solid #007a7c; }\n  .section {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  text-align: center;\n  line-height: 2; }\n  .section-title {\n    margin-bottom: 1rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    font-size: 1.75em; }\n  .content {\n  font-family: 'Montserrat', sans-serif; }\n  .text-teal {\n  color: #007a7c; }\n  .title-content {\n  padding-top: 0.2rem;\n  padding-bottom: 0.2rem; }\n  .title-text {\n  color: #007a7c;\n  text-shadow: 3px 3px #a5edf7; }\n  .bg-dark-teal {\n  background-color: #094142;\n  color: white; }\n  .bg-teal {\n  background-color: #007a7c;\n  color: white; }\n  .bg-teal-gradient-bottom-right {\n  background-image: linear-gradient(to bottom right, #007a7c, #a5edf7);\n  color: white; }\n  .bg-teal-gradient-top-right {\n  background-image: linear-gradient(to top right, #007a7c, #a5edf7);\n  color: white; }\n  .bg-light-teal {\n  background-color: #449ea0;\n  color: white; }\n  .bg-very-light-teal {\n  background-color: #a5edf7; }\n  .btn-wwcode {\n  background-color: #007a7c;\n  color: white;\n  border-color: white;\n  transition: 0.2s linear !important; }\n  .btn-wwcode:hover {\n    box-shadow: 8px 8px;\n    background-color: white;\n    color: #007a7c;\n    border-color: #007a7c; }\n  .btn-wwcode-inverse {\n  background-color: white;\n  color: #007a7c;\n  border-color: #007a7c; }\n  .btn-wwcode-inverse:hover {\n    background-color: #007a7c;\n    color: white;\n    border-color: white; }\n  .footer-text {\n  font-size: 0.8em; }\n  .country-flag {\n  transition: all .1s linear;\n  -webkit-filter: drop-shadow(5px 5px #a5edf7);\n          filter: drop-shadow(5px 5px #a5edf7);\n  width: 40px;\n  border-radius: 18px; }\n  .country-flag:hover {\n    -webkit-filter: drop-shadow(8px 8px #449ea0);\n            filter: drop-shadow(8px 8px #449ea0); }\n  .social-media-icon {\n  width: 20px;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  transition: all 0.1s linear;\n  cursor: pointer;\n  -webkit-filter: grayscale(90%);\n          filter: grayscale(90%); }\n  .social-media-icon:hover {\n    margin-top: -5px;\n    -webkit-filter: drop-shadow(3px 3px #007a7c);\n            filter: drop-shadow(3px 3px #007a7c); }\n  .font-size-3 {\n  font-size: 3vh; }\n  .font-size-2 {\n  font-size: 2vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZW5keWtvbmcvRG9jdW1lbnRzL3NpZGUvd3djb2RlY29ubmVjdGFzaWEuZ2l0aHViLmlvL2NvZGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDSSx5QkFaMEI7RUFhMUIsd0JBQXdCLEVBQUE7RUFGNUI7SUFLUSwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDJCQWZ1QixFQUFBO0VBa0IzQjtJQVRKO01BVVEsVUFBVSxFQUFBLEVBT2pCO0VBSkc7SUFiSjtNQWNRLFdBQVc7TUFDWCxZQUFZLEVBQUEsRUFFbkI7RUFFRDtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLHFCQUFxQixFQUFBO0VBR3pCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBO0VBSWY7RUFDSTtJQUNJLDZCQUE2QixFQUFBO0VBRWpDO0lBQ0UsZUFBZSxFQUFBO0VBRWpCO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBLEVBQ3JCO0VBR0w7RUFDSTtJQUNJLGtCQUFrQixFQUFBLEVBQ3JCO0VBR0w7RUFDSTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQSxFQUNyQjtFQUdMO0VBQ0k7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CLEVBQUEsRUFDdEI7RUFHTDtFQUNJLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQ0F2RjBCLEVBQUE7RUEwRjlCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBO0VBRWQ7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUIsRUFBQTtFQUt6QjtFQUNJLHFDQUFxQyxFQUFBO0VBR3pDO0VBQ0ksY0E5RzBCLEVBQUE7RUFrSDFCO0VBQ0ksbUJBQW1CO0VBQ25CLHNCQUFzQixFQUFBO0VBRzFCO0VBQ0ksY0F4SHNCO0VBeUh0Qiw0QkF0SDRCLEVBQUE7RUEySGhDO0VBQ0kseUJBOUhtQjtFQStIbkIsWUFBWSxFQUFBO0VBR2hCO0VBQ0kseUJBcElzQjtFQXFJdEIsWUFBWSxFQUFBO0VBR2hCO0VBQ0ksb0VBQWtGO0VBQ2xGLFlBQVksRUFBQTtFQUdoQjtFQUNJLGlFQUErRTtFQUMvRSxZQUFZLEVBQUE7RUFHaEI7RUFDSSx5QkFqSnVCO0VBa0p2QixZQUFZLEVBQUE7RUFHaEI7RUFDSSx5QkFySjRCLEVBQUE7RUE0SmhDO0VBQ0kseUJBaEtzQjtFQWlLdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQ0FBa0MsRUFBQTtFQUpyQztJQU9PLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0F4S2tCO0lBeUtsQixxQkF6S2tCLEVBQUE7RUE2SzFCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGNBL0tzQjtFQWdMdEIscUJBaExzQixFQUFBO0VBNkt6QjtJQU1PLHlCQW5Ma0I7SUFvTGxCLFlBQVk7SUFDWixtQkFBbUIsRUFBQTtFQUsvQjtFQUNJLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksMEJBQTBCO0VBQzFCLDRDQUE2QztVQUE3QyxvQ0FBNkM7RUFDN0MsV0FBVztFQUNYLG1CQUFtQixFQUFBO0VBSnZCO0lBT1EsNENBQXdDO1lBQXhDLG9DQUF3QyxFQUFBO0VBSWhEO0VBQ0ksV0FBVztFQUNYLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZiw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7RUFOMUI7SUFTUSxnQkFBZ0I7SUFDaEIsNENBQXlDO1lBQXpDLG9DQUF5QyxFQUFBO0VBSzdDO0VBQ0ksY0FBYyxFQUFBO0VBRWxCO0VBQ0ksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3BlYWtpbmctZGV0YWlscy9zcGVha2luZy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4kd3djb2RlLXRlYWw6IHJnYigwLCAxMjIsIDEyNCk7XG4kZGFyay10ZWFsOiAgcmdiKDksIDY1LCA2Nik7XG4kbGlnaHQtdGVhbDogIHJnYig2OCwgMTU4LCAxNjApO1xuJHZlcnktbGlnaHQtdGVhbDogcmdiKDE2NSwgMjM3LCAyNDcpO1xuJGludHJvLWJhY2tncm91bmQtYnJlYWtwb2ludDogMTA1MHB4O1xuJGludHJvLWJhY2tncm91bmQtYnJlYWtwb2ludC10YWJsZXQ6IDY5MHB4O1xuJGludHJvLWJhY2tncm91bmQtYnJlYWtwb2ludC1tb2JpbGU6IDU1MHB4O1xuJGludHJvLWJhY2tncm91bmQtYnJlYWtwb2ludC1oaWRlOiAzNjBweDtcblxuJHBvc3Rlci1pbWFnZS1icmVha3BvaW50OiA3NjhweDtcblxuLnBvc3Rlci1pbWFnZSB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgJHd3Y29kZS10ZWFsO1xuICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcblxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAkbGlnaHQtdGVhbDtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkcG9zdGVyLWltYWdlLWJyZWFrcG9pbnQpIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkcG9zdGVyLWltYWdlLWJyZWFrcG9pbnQpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICB9XG59XG5cbi5wb3N0ZXItdGV4dCwgLnNlY3Rpb24tdGV4dCB7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4udy00NSB7XG4gICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xufVxuXG4jcG9zdGVyQnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgLnRpdGxlLXRleHQsIC5vcmdhbml6ZXJzLXRleHQge1xuICAgICAgICBmb250LXNpemU6IHgtbGFyZ2UgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJ0bi1jZnAge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgICAuc2VjdGlvbiwgLnRhbGstZm9ybWF0cyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgICAuYnRuLWNmcCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA4OTlweCkge1xuICAgIC5zZWN0aW9uLCAudGFsay1mb3JtYXRzIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAgIC5zZWN0aW9uLCAudGFsay1mb3JtYXRzIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTByZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTByZW07XG4gICAgfVxufVxuXG4uc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICR3d2NvZGUtdGVhbDtcbn1cblxuLnNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG5cbiAgICAmLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMS43NWVtO1xuICAgIH1cbn1cblxuXG4uY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuLnRleHQtdGVhbHtcbiAgICBjb2xvcjogJHd3Y29kZS10ZWFsO1xufVxuXG4udGl0bGUge1xuICAgICYtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjJyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XG4gICAgfVxuXG4gICAgJi10ZXh0IHtcbiAgICAgICAgY29sb3I6ICR3d2NvZGUtdGVhbDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggJHZlcnktbGlnaHQtdGVhbDtcbiAgICB9XG59XG5cbi5iZyB7XG4gICAgJi1kYXJrLXRlYWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay10ZWFsO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi10ZWFsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi10ZWFsLWdyYWRpZW50LWJvdHRvbS1yaWdodCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICR3d2NvZGUtdGVhbCwgJHZlcnktbGlnaHQtdGVhbCk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmLXRlYWwtZ3JhZGllbnQtdG9wLXJpZ2h0IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHd3Y29kZS10ZWFsLCAkdmVyeS1saWdodC10ZWFsKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYtbGlnaHQtdGVhbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC10ZWFsO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi12ZXJ5LWxpZ2h0LXRlYWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyeS1saWdodC10ZWFsO1xuICAgIH1cbn1cblxuXG5cbi5idG4ge1xuICAgICYtd3djb2RlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJjpob3ZlciAge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogOHB4IDhweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICR3d2NvZGUtdGVhbDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi13d2NvZGUtaW52ZXJzZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogJHd3Y29kZS10ZWFsO1xuICAgICAgICBib3JkZXItY29sb3I6ICR3d2NvZGUtdGVhbDtcblxuICAgICAgICAmOmhvdmVyICB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd3djb2RlLXRlYWw7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9vdGVyLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi5jb3VudHJ5LWZsYWcge1xuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgbGluZWFyO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCAkdmVyeS1saWdodC10ZWFsKTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coOHB4IDhweCAkbGlnaHQtdGVhbCk7XG4gICAgfVxufVxuXG4uc29jaWFsLW1lZGlhLWljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSg5MCUpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDNweCAkd3djb2RlLXRlYWwpO1xuICAgIH1cbn1cblxuLmZvbnQtc2l6ZSB7XG4gICAgJi0zIHtcbiAgICAgICAgZm9udC1zaXplOiAzdmg7XG4gICAgfVxuICAgICYtMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnZoO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/speaking-details/speaking-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/speaking-details/speaking-details.component.ts ***!
  \****************************************************************/
/*! exports provided: SpeakingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakingDetailsComponent", function() { return SpeakingDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_data_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/data/misc */ "./src/assets/data/misc.ts");
/* harmony import */ var _assets_data_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/data/links */ "./src/assets/data/links.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeakingDetailsComponent = /** @class */ (function () {
    function SpeakingDetailsComponent() {
    }
    SpeakingDetailsComponent.prototype.ngOnInit = function () {
        this.formats = _assets_data_misc__WEBPACK_IMPORTED_MODULE_1__["formats"];
        this.codeOfConductLink = _assets_data_links__WEBPACK_IMPORTED_MODULE_2__["codeOfConductLink"];
    };
    SpeakingDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speaking-details',
            template: __webpack_require__(/*! ./speaking-details.component.html */ "./src/app/speaking-details/speaking-details.component.html"),
            styles: [__webpack_require__(/*! ./speaking-details.component.scss */ "./src/app/speaking-details/speaking-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SpeakingDetailsComponent);
    return SpeakingDetailsComponent;
}());



/***/ }),

/***/ "./src/assets/data/links.ts":
/*!**********************************!*\
  !*** ./src/assets/data/links.ts ***!
  \**********************************/
/*! exports provided: tShirtContestLink, speakerProfileLink, callForProposalLink, codeOfConductLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tShirtContestLink", function() { return tShirtContestLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "speakerProfileLink", function() { return speakerProfileLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callForProposalLink", function() { return callForProposalLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeOfConductLink", function() { return codeOfConductLink; });
var tShirtContestLink = 'https://bit.ly/connectasia2019-tshirt-contest';
var speakerProfileLink = 'https://goo.gl/forms/YrRPwmaefr3Kf43q2';
var callForProposalLink = 'https://goo.gl/forms/yHvVXsgAffutFM5x1';
var codeOfConductLink = 'https://www.womenwhocode.com/codeofconduct';



/***/ }),

/***/ "./src/assets/data/misc.ts":
/*!*********************************!*\
  !*** ./src/assets/data/misc.ts ***!
  \*********************************/
/*! exports provided: email, hashtags, formats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashtags", function() { return hashtags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formats", function() { return formats; });
var email = 'connectasia@womenwhocode.com';
var hashtags = [
    '#CONNECTAsia',
    '#WWCode'
];
var formats = [
    'Talk (40 minutes plus 10 minutes Q&A)',
    'Lightning Talk (10 minutes)',
    'Workshop (50 minutes)'
];



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