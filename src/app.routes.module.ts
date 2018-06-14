import { ViewComponent } from "./app/view/view.component";
import { AppointmentComponent } from "./app/component/appointment/appointment.component";
import { DetailComponent } from "./app/detail/detail.component";
import { EventComponent } from "./app/event/event.component";

export const AppRoutes =[

      
    {path:'', component:AppointmentComponent},
    {path:'detail', component: DetailComponent, children:[
        {path:'view', component: ViewComponent},
        {path: 'event', component : EventComponent}
    ]}
        ]


        
        


