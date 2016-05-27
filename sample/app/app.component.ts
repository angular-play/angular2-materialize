import { Component, OnInit } from "@angular/core"
import { ButtonComponent } from "./components/button.component";
import { MaterializeDirective } from "../../src/index";

//import "/node_modules/materialize-css/dist/css/materialize.css!";

@Component({
    selector: "app",
    templateUrl: "/sample/app/app.component.html",
    directives: [ButtonComponent,MaterializeDirective]
})
export class AppComponent {

}
