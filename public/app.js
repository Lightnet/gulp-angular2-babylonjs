(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppModule = exports.MainApp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _dec2, _class2; //setup app

//import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//import { ActivatedRoute, RouterModule } from '@angular/router';


//import { Greeter } from './services';

var _core = require('@angular/core');

var _platformBrowser = require('@angular/platform-browser');

require('rxjs/add/operator/map');

require('./babylon.min.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
@Component({
    selector: 'hello',
    template: '<p>{{ message }}</p>',
})
export class Hello {
    constructor(greeter: Greeter) {
        this.message = greeter.say('hello', 'Angular 2');
    }
}

@Component({
    selector: 'ciao',
    template: '<p>{{ message$ | async }}</p>',
})
export class Ciao {
    constructor(greeter: Greeter, route: ActivatedRoute) {
        this.message$ = route.params
        .map(params => greeter.say('ciao', params.name));
    }
}

@Component({
    selector: 'linker',
    template: '<p><a [href]="url" [title]="name">{{ name }}</a></p>',
})
export class Linker {
    @Input() url;

    constructor(@Attribute('name') name) {
        this.name = name;
    }
}
*/
var MainApp = exports.MainApp = (_dec = (0, _core.Component)({
    selector: 'main-app',
    template: '\n        <!--\n        <ul>\n            <li><a [routerLink]="[\'/\']">Hello es6</a></li>\n            <li><a [routerLink]="[\'/ciao\', \'ng2\']">Ciao</a></li>\n        </ul>\n        <router-outlet></router-outlet>\n        <linker name="GitHub" url="https://github.com/shuhei/babel-angular2-app"></linker>\n        -->\n        <canvas id="renderCanvas"></canvas>\n    '
}), _dec(_class = function () {
    function MainApp() {
        _classCallCheck(this, MainApp);

        var self = this;
        console.log(this);
        console.log("main-app");
        window.addEventListener('DOMContentLoaded', function () {
            self.init();
        });
    }

    _createClass(MainApp, [{
        key: 'init',
        value: function init() {
            // get the canvas DOM element
            var canvas = document.getElementById('renderCanvas');

            // load the 3D engine
            var engine = new BABYLON.Engine(canvas, true);

            // createScene function that creates and return the scene
            var createScene = function createScene() {
                // create a basic BJS Scene object
                var scene = new BABYLON.Scene(engine);

                // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
                var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);

                // target the camera to scene origin
                camera.setTarget(BABYLON.Vector3.Zero());

                // attach the camera to the canvas
                camera.attachControl(canvas, false);

                // create a basic light, aiming 0,1,0 - meaning, to the sky
                var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);

                // create a built-in "sphere" shape; its constructor takes 5 params: name, width, depth, subdivisions, scene
                var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);

                // move the sphere upward 1/2 of its height
                sphere.position.y = 1;

                // create a built-in "ground" shape; its constructor takes the same 5 params as the sphere's one
                var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);

                // return the created scene
                return scene;
            };

            // call the createScene function
            var scene = createScene();

            // run the render loop
            engine.runRenderLoop(function () {
                scene.render();
            });

            // the canvas/window resize event handler
            window.addEventListener('resize', function () {
                engine.resize();
            });
        }
    }]);

    return MainApp;
}()) || _class);

//const routing = RouterModule.forRoot([
//{ path: '', component: Hello },
//{ path: 'ciao/:name', component: Ciao },
//]);

var AppModule = exports.AppModule = (_dec2 = (0, _core.NgModule)({
    imports: [_platformBrowser.BrowserModule //,
    //routing,
    ],
    declarations: [MainApp //,
    //Hello,
    //Ciao,
    //Linker,
    ],
    //providers: [
    //Greeter,
    //{ provide: LocationStrategy, useClass: HashLocationStrategy },
    //],
    bootstrap: [MainApp]
}), _dec2(_class2 = function AppModule() {
    _classCallCheck(this, AppModule);
}) || _class2);

},{"./babylon.min.js":1,"@angular/core":"@angular/core","@angular/platform-browser":"@angular/platform-browser","rxjs/add/operator/map":"rxjs/add/operator/map"}],3:[function(require,module,exports){
'use strict';

require('babel-polyfill');

require('zone.js/dist/zone');

var _platformBrowserDynamic = require('@angular/platform-browser-dynamic');

var _app = require('./app');

//main entry

(0, _platformBrowserDynamic.platformBrowserDynamic)().bootstrapModule(_app.AppModule);

/*
//does not work with https://angular.io/docs/ts/latest/quickstart.html that it reqire shim. Since it typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent { name = 'Angular'; }
*/

},{"./app":2,"@angular/platform-browser-dynamic":"@angular/platform-browser-dynamic","babel-polyfill":"babel-polyfill","zone.js/dist/zone":"zone.js/dist/zone"}]},{},[3])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwic3JjXFxhcHAuanMiLCJzcmNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7Ozs7Ozs7O2tDQ0FBOztBQUdBOztBQUVBOzs7QUFHQTs7QUFOQTs7QUFFQTs7QUFFQTs7QUFJQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZ0RhLE8sV0FBQSxPLFdBZFoscUJBQVU7QUFDUCxjQUFVLFVBREg7QUFFUDtBQUZPLENBQVYsQztBQWVHLHVCQUFhO0FBQUE7O0FBQ1QsWUFBSSxPQUFPLElBQVg7QUFDQSxnQkFBUSxHQUFSLENBQVksSUFBWjtBQUNBLGdCQUFRLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsZUFBTyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBVTtBQUNsRCxpQkFBSyxJQUFMO0FBQ0gsU0FGRDtBQUdIOzs7OytCQUNLO0FBQ0Y7QUFDQSxnQkFBSSxTQUFTLFNBQVMsY0FBVCxDQUF3QixjQUF4QixDQUFiOztBQUVBO0FBQ0EsZ0JBQUksU0FBUyxJQUFJLFFBQVEsTUFBWixDQUFtQixNQUFuQixFQUEyQixJQUEzQixDQUFiOztBQUVBO0FBQ0EsZ0JBQUksY0FBYyxTQUFkLFdBQWMsR0FBVTtBQUN4QjtBQUNBLG9CQUFJLFFBQVEsSUFBSSxRQUFRLEtBQVosQ0FBa0IsTUFBbEIsQ0FBWjs7QUFFQTtBQUNBLG9CQUFJLFNBQVMsSUFBSSxRQUFRLFVBQVosQ0FBdUIsU0FBdkIsRUFBa0MsSUFBSSxRQUFRLE9BQVosQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBeUIsQ0FBQyxFQUExQixDQUFsQyxFQUFpRSxLQUFqRSxDQUFiOztBQUVBO0FBQ0EsdUJBQU8sU0FBUCxDQUFpQixRQUFRLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBakI7O0FBRUE7QUFDQSx1QkFBTyxhQUFQLENBQXFCLE1BQXJCLEVBQTZCLEtBQTdCOztBQUVBO0FBQ0Esb0JBQUksUUFBUSxJQUFJLFFBQVEsZ0JBQVosQ0FBNkIsUUFBN0IsRUFBdUMsSUFBSSxRQUFRLE9BQVosQ0FBb0IsQ0FBcEIsRUFBc0IsQ0FBdEIsRUFBd0IsQ0FBeEIsQ0FBdkMsRUFBbUUsS0FBbkUsQ0FBWjs7QUFFQTtBQUNBLG9CQUFJLFNBQVMsUUFBUSxJQUFSLENBQWEsWUFBYixDQUEwQixTQUExQixFQUFxQyxFQUFyQyxFQUF5QyxDQUF6QyxFQUE0QyxLQUE1QyxDQUFiOztBQUVBO0FBQ0EsdUJBQU8sUUFBUCxDQUFnQixDQUFoQixHQUFvQixDQUFwQjs7QUFFQTtBQUNBLG9CQUFJLFNBQVMsUUFBUSxJQUFSLENBQWEsWUFBYixDQUEwQixTQUExQixFQUFxQyxDQUFyQyxFQUF3QyxDQUF4QyxFQUEyQyxDQUEzQyxFQUE4QyxLQUE5QyxDQUFiOztBQUVBO0FBQ0EsdUJBQU8sS0FBUDtBQUNILGFBM0JEOztBQTZCQTtBQUNBLGdCQUFJLFFBQVEsYUFBWjs7QUFFQTtBQUNBLG1CQUFPLGFBQVAsQ0FBcUIsWUFBVTtBQUMzQixzQkFBTSxNQUFOO0FBQ0gsYUFGRDs7QUFJQTtBQUNBLG1CQUFPLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQVU7QUFDeEMsdUJBQU8sTUFBUDtBQUNILGFBRkQ7QUFJSDs7Ozs7O0FBR0w7QUFDSTtBQUNBO0FBQ0o7O0lBbUJhLFMsV0FBQSxTLFlBakJaLG9CQUFTO0FBQ04sYUFBUyxnQ0FDUTtBQUNiO0FBRkssS0FESDtBQUtOLGtCQUFjLENBQ1YsT0FEVSxDQUNIO0FBQ1A7QUFDQTtBQUNBO0FBSlUsS0FMUjtBQVdOO0FBQ0k7QUFDQTtBQUNKO0FBQ0EsZUFBVyxDQUFDLE9BQUQ7QUFmTCxDQUFULEM7Ozs7Ozs7QUM1SEQ7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBUEE7O0FBU0Esc0RBQXlCLGVBQXpCOztBQUVBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiIsIi8vc2V0dXAgYXBwXHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBJbnB1dCwgQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vaW1wb3J0IHsgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbi8vaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuXHJcbi8vaW1wb3J0IHsgR3JlZXRlciB9IGZyb20gJy4vc2VydmljZXMnO1xyXG5cclxuaW1wb3J0ICcuL2JhYnlsb24ubWluLmpzJztcclxuLypcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hlbGxvJyxcclxuICAgIHRlbXBsYXRlOiAnPHA+e3sgbWVzc2FnZSB9fTwvcD4nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVsbG8ge1xyXG4gICAgY29uc3RydWN0b3IoZ3JlZXRlcjogR3JlZXRlcikge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGdyZWV0ZXIuc2F5KCdoZWxsbycsICdBbmd1bGFyIDInKTtcclxuICAgIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NpYW8nLFxyXG4gICAgdGVtcGxhdGU6ICc8cD57eyBtZXNzYWdlJCB8IGFzeW5jIH19PC9wPicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaWFvIHtcclxuICAgIGNvbnN0cnVjdG9yKGdyZWV0ZXI6IEdyZWV0ZXIsIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSQgPSByb3V0ZS5wYXJhbXNcclxuICAgICAgICAubWFwKHBhcmFtcyA9PiBncmVldGVyLnNheSgnY2lhbycsIHBhcmFtcy5uYW1lKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsaW5rZXInLFxyXG4gICAgdGVtcGxhdGU6ICc8cD48YSBbaHJlZl09XCJ1cmxcIiBbdGl0bGVdPVwibmFtZVwiPnt7IG5hbWUgfX08L2E+PC9wPicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rZXIge1xyXG4gICAgQElucHV0KCkgdXJsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBBdHRyaWJ1dGUoJ25hbWUnKSBuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxufVxyXG4qL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbWFpbi1hcHAnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8IS0tXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycvJ11cIj5IZWxsbyBlczY8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL2NpYW8nLCAnbmcyJ11cIj5DaWFvPC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgPGxpbmtlciBuYW1lPVwiR2l0SHViXCIgdXJsPVwiaHR0cHM6Ly9naXRodWIuY29tL3NodWhlaS9iYWJlbC1hbmd1bGFyMi1hcHBcIj48L2xpbmtlcj5cclxuICAgICAgICAtLT5cclxuICAgICAgICA8Y2FudmFzIGlkPVwicmVuZGVyQ2FudmFzXCI+PC9jYW52YXM+XHJcbiAgICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbkFwcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1haW4tYXBwXCIpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc2VsZi5pbml0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgLy8gZ2V0IHRoZSBjYW52YXMgRE9NIGVsZW1lbnRcclxuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbmRlckNhbnZhcycpO1xyXG5cclxuICAgICAgICAvLyBsb2FkIHRoZSAzRCBlbmdpbmVcclxuICAgICAgICB2YXIgZW5naW5lID0gbmV3IEJBQllMT04uRW5naW5lKGNhbnZhcywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZVNjZW5lIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhbmQgcmV0dXJuIHRoZSBzY2VuZVxyXG4gICAgICAgIHZhciBjcmVhdGVTY2VuZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGJhc2ljIEJKUyBTY2VuZSBvYmplY3RcclxuICAgICAgICAgICAgdmFyIHNjZW5lID0gbmV3IEJBQllMT04uU2NlbmUoZW5naW5lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIEZyZWVDYW1lcmEsIGFuZCBzZXQgaXRzIHBvc2l0aW9uIHRvICh4OjAsIHk6NSwgejotMTApXHJcbiAgICAgICAgICAgIHZhciBjYW1lcmEgPSBuZXcgQkFCWUxPTi5GcmVlQ2FtZXJhKCdjYW1lcmExJywgbmV3IEJBQllMT04uVmVjdG9yMygwLCA1LC0xMCksIHNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRhcmdldCB0aGUgY2FtZXJhIHRvIHNjZW5lIG9yaWdpblxyXG4gICAgICAgICAgICBjYW1lcmEuc2V0VGFyZ2V0KEJBQllMT04uVmVjdG9yMy5aZXJvKCkpO1xyXG5cclxuICAgICAgICAgICAgLy8gYXR0YWNoIHRoZSBjYW1lcmEgdG8gdGhlIGNhbnZhc1xyXG4gICAgICAgICAgICBjYW1lcmEuYXR0YWNoQ29udHJvbChjYW52YXMsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGJhc2ljIGxpZ2h0LCBhaW1pbmcgMCwxLDAgLSBtZWFuaW5nLCB0byB0aGUgc2t5XHJcbiAgICAgICAgICAgIHZhciBsaWdodCA9IG5ldyBCQUJZTE9OLkhlbWlzcGhlcmljTGlnaHQoJ2xpZ2h0MScsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwxLDApLCBzY2VuZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBidWlsdC1pbiBcInNwaGVyZVwiIHNoYXBlOyBpdHMgY29uc3RydWN0b3IgdGFrZXMgNSBwYXJhbXM6IG5hbWUsIHdpZHRoLCBkZXB0aCwgc3ViZGl2aXNpb25zLCBzY2VuZVxyXG4gICAgICAgICAgICB2YXIgc3BoZXJlID0gQkFCWUxPTi5NZXNoLkNyZWF0ZVNwaGVyZSgnc3BoZXJlMScsIDE2LCAyLCBzY2VuZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBtb3ZlIHRoZSBzcGhlcmUgdXB3YXJkIDEvMiBvZiBpdHMgaGVpZ2h0XHJcbiAgICAgICAgICAgIHNwaGVyZS5wb3NpdGlvbi55ID0gMTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGJ1aWx0LWluIFwiZ3JvdW5kXCIgc2hhcGU7IGl0cyBjb25zdHJ1Y3RvciB0YWtlcyB0aGUgc2FtZSA1IHBhcmFtcyBhcyB0aGUgc3BoZXJlJ3Mgb25lXHJcbiAgICAgICAgICAgIHZhciBncm91bmQgPSBCQUJZTE9OLk1lc2guQ3JlYXRlR3JvdW5kKCdncm91bmQxJywgNiwgNiwgMiwgc2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBjcmVhdGVkIHNjZW5lXHJcbiAgICAgICAgICAgIHJldHVybiBzY2VuZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNhbGwgdGhlIGNyZWF0ZVNjZW5lIGZ1bmN0aW9uXHJcbiAgICAgICAgdmFyIHNjZW5lID0gY3JlYXRlU2NlbmUoKTtcclxuXHJcbiAgICAgICAgLy8gcnVuIHRoZSByZW5kZXIgbG9vcFxyXG4gICAgICAgIGVuZ2luZS5ydW5SZW5kZXJMb29wKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHNjZW5lLnJlbmRlcigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB0aGUgY2FudmFzL3dpbmRvdyByZXNpemUgZXZlbnQgaGFuZGxlclxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBlbmdpbmUucmVzaXplKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4vL2NvbnN0IHJvdXRpbmcgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAgICAvL3sgcGF0aDogJycsIGNvbXBvbmVudDogSGVsbG8gfSxcclxuICAgIC8veyBwYXRoOiAnY2lhby86bmFtZScsIGNvbXBvbmVudDogQ2lhbyB9LFxyXG4vL10pO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLy8sXHJcbiAgICAgICAgLy9yb3V0aW5nLFxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIE1haW5BcHAvLyxcclxuICAgICAgICAvL0hlbGxvLFxyXG4gICAgICAgIC8vQ2lhbyxcclxuICAgICAgICAvL0xpbmtlcixcclxuICAgIF0sXHJcbiAgICAvL3Byb3ZpZGVyczogW1xyXG4gICAgICAgIC8vR3JlZXRlcixcclxuICAgICAgICAvL3sgcHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0sXHJcbiAgICAvL10sXHJcbiAgICBib290c3RyYXA6IFtNYWluQXBwXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcblxyXG59XHJcbiIsIi8vbWFpbiBlbnRyeVxyXG5cclxuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XHJcbmltcG9ydCAnem9uZS5qcy9kaXN0L3pvbmUnO1xyXG5cclxuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcblxyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcCc7XHJcblxyXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XHJcblxyXG4vKlxyXG4vL2RvZXMgbm90IHdvcmsgd2l0aCBodHRwczovL2FuZ3VsYXIuaW8vZG9jcy90cy9sYXRlc3QvcXVpY2tzdGFydC5odG1sIHRoYXQgaXQgcmVxaXJlIHNoaW0uIFNpbmNlIGl0IHR5cGVzY3JpcHRcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgdGVtcGxhdGU6IGA8aDE+SGVsbG8ge3tuYW1lfX08L2gxPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IG5hbWUgPSAnQW5ndWxhcic7IH1cclxuKi9cclxuIl19