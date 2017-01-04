//setup app

import { NgModule, Component, Input, Attribute } from '@angular/core';
//import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
//import { ActivatedRoute, RouterModule } from '@angular/router';
import 'rxjs/add/operator/map';

//import { Greeter } from './services';

import './babylon.min.js';
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
@Component({
    selector: 'main-app',
    template: `
        <!--
        <ul>
            <li><a [routerLink]="['/']">Hello es6</a></li>
            <li><a [routerLink]="['/ciao', 'ng2']">Ciao</a></li>
        </ul>
        <router-outlet></router-outlet>
        <linker name="GitHub" url="https://github.com/shuhei/babel-angular2-app"></linker>
        -->
        <canvas id="renderCanvas"></canvas>
    `,
})
export class MainApp {
    constructor(){
        var self = this;
        console.log(this);
        console.log("main-app");
        window.addEventListener('DOMContentLoaded', function(){
            self.init();
        });
    }
    init(){
        // get the canvas DOM element
        var canvas = document.getElementById('renderCanvas');

        // load the 3D engine
        var engine = new BABYLON.Engine(canvas, true);

        // createScene function that creates and return the scene
        var createScene = function(){
            // create a basic BJS Scene object
            var scene = new BABYLON.Scene(engine);

            // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
            var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5,-10), scene);

            // target the camera to scene origin
            camera.setTarget(BABYLON.Vector3.Zero());

            // attach the camera to the canvas
            camera.attachControl(canvas, false);

            // create a basic light, aiming 0,1,0 - meaning, to the sky
            var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);

            // create a built-in "sphere" shape; its constructor takes 5 params: name, width, depth, subdivisions, scene
            var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);

            // move the sphere upward 1/2 of its height
            sphere.position.y = 1;

            // create a built-in "ground" shape; its constructor takes the same 5 params as the sphere's one
            var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);

            // return the created scene
            return scene;
        }

        // call the createScene function
        var scene = createScene();

        // run the render loop
        engine.runRenderLoop(function(){
            scene.render();
        });

        // the canvas/window resize event handler
        window.addEventListener('resize', function(){
            engine.resize();
        });

    }
}

//const routing = RouterModule.forRoot([
    //{ path: '', component: Hello },
    //{ path: 'ciao/:name', component: Ciao },
//]);

@NgModule({
    imports: [
        BrowserModule//,
        //routing,
    ],
    declarations: [
        MainApp//,
        //Hello,
        //Ciao,
        //Linker,
    ],
    //providers: [
        //Greeter,
        //{ provide: LocationStrategy, useClass: HashLocationStrategy },
    //],
    bootstrap: [MainApp],
})
export class AppModule {

}
