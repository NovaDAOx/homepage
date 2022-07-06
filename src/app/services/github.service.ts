import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { }
  getData():Observable<any>
  {
    // const sha = '331b144d67a5f7ff86772f176e0b8d961f3b3d1a'
    // const img = "https://api.github.com/repos/novadaodev/team/git/blobs/ea67a48d67a51524d45eb4a399416b9988f40b67"
    // const url = "https://api.github.com/repos/novadaodev/team/git/trees/"
    
    const url = "https://api.github.com/repos/NovaDAOx/team/contents"


    // const geturl = this.http.get<any>(url + sha)
    // https://github.com/novadaodev/team/tree/main/ioToad
    // const ioToad = https://github.com/novadaodev/team/blob/main/ioToad/pfp.png?raw=true

    // return this.http.get('https://raw.githubusercontent.com/novadaodev/team/main/ioToad/bio.txt')
    return this.http.get<any>(url)   
  }
}
