import { Component, Input } from "@angular/core";

@Component({
    selector: "b-button",
    template: `
        <a class="{{className}}">{{text}}</a>
    `
})
export class ButtonComponent {
    @Input() text: string;
    className: string = "waves-effect waves-light btn primary";
}