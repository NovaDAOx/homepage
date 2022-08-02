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
    const url = "https://api.github.com/repos/NovaDAOx/team/contents"
    return this.http.get<any>(url)   
  }

  getuser()
  {
    const array = []
    const bioA = []
    const metaA = []
    const imgA = []
    
    this.getData().subscribe(data => { 
   for (var i = 0; i < data.length; i++) 
   {
    if(data[i].type == 'dir' && data[i].name != 'Parsons')
    {

   let respCaptain=this.http.get(data[i].url)
   respCaptain.subscribe(data => {
     
     imgA.push(data[2].download_url)

      
     let meta = this.http.get(data[1].download_url)
    meta.subscribe(meta => {
      const  json = {name:meta[i]}
      metaA.push(meta)

    })

     let bio = this.http.get(data[0].download_url,{responseType:'text'})
     bio.subscribe(data => {
       
      bioA.push(data)
     })        
     })
  }
   }
   
   const json = {imgA,bioA}
   array.push({img:imgA,bio:bioA,meta:metaA})
    }); 
     return array
  }
}
