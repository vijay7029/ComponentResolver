import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory
} from '@angular/core';
import { StudentInfoComponent } from './studentinfo/studentinfo.component';
import { ParentInfoComponent } from './parentinfo/parentinfo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  componentRef: any;
  @ViewChild('loadComponent', { read: ViewContainerRef }) entry: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }
  createComponent(Id: number) {
    this.entry.clear();
    if (Id == 1) {
      const factory = this.resolver.resolveComponentFactory(StudentInfoComponent);
      this.componentRef = this.entry.createComponent(factory);
    } else if (Id == 2) {
      const factory = this.resolver.resolveComponentFactory(ParentInfoComponent);
      this.componentRef = this.entry.createComponent(factory);
    } 
    this.componentRef.instance.message = "Called by appComponent";
  }
  destroyComponent() {
    this.componentRef.destroy();
  }
  data = [
    {
      "Id": 1,
      "Name": "Student Info"
    },
    {
      "Id": 2,
      "Name": "Parent Info"
    }
  ]
  selectName(id : number) {
    this.createComponent(id);
  }
}