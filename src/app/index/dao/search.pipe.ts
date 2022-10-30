import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  
    name: 'itemnameFilter'
})
export class SearchPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    if(!value) return null;
    args = args.toLocaleLowerCase();

    return value.filter((val) => {
      console.log(val)
      // let rVal = (val.name.toLocaleLowerCase().includes(args));
      let rval = (val['Name'].toLocaleLowerCase().includes(args)) || (val['Amount'].toLocaleLowerCase().includes(args)) || (val['Time'].toLocaleLowerCase().includes(args));
      
      return rval
      
    })

  }
}
