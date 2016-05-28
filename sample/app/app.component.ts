import { Component, OnInit } from "@angular/core"
import { ButtonComponent } from "./components/button.component";
import { MaterializeDirective } from "../../src/index";

@Component({
    selector: "app",
    templateUrl: "/sample/app/app.component.html",
    directives: [ButtonComponent,MaterializeDirective]
})
export class AppComponent {

    hello() {
        console.log("Hello, world!");
    }
}
