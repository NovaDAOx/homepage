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
   console.log('gggggggggggggggggggggggggggggggggggggggggg',data[i])
   let respCaptain=this.http.get(data[i].url)
   respCaptain.subscribe(data => {
     console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',data)
    //  imgA.push(data[2].download_url)
    //  imgA.push(data[2].download_url)
     
    //  console.log('iiiiiiiiiiiiiiiA',imgA)
     
     imgA.push(data[2].download_url)
     console.log('%%%%%%%%%%%%%%%%%%',data[2].download_url)
    
     console.log('jjjjjjjjjjjjjjjj',imgA)
      // const jsonimg = {imgA}
      
     let meta = this.http.get(data[1].download_url)
    meta.subscribe(meta => {
      const  json = {name:meta[i]}
      metaA.push(meta)
      console.log('mmmmmmmmmmmmmA',json)
      // array.push(meta)
    })
    // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',array)
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
