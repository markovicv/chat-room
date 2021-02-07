import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./services/login.service";


@Injectable({
    providedIn:'root'   
})

export class Interceptor implements HttpInterceptor{

    constructor(private authservice:LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const jwt = localStorage.getItem("jwt");

        if(req.headers.get("skip")){
            return next.handle(req);
        }
        req = req.clone({
            setHeaders:{
                Authorization:'Bearer '+jwt
            }
        });
        return next.handle(req);




    }



    
}