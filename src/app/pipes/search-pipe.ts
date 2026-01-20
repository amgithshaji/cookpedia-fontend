import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(allRecipes: any[], searchkey:string): any[] {
     
    let result:any = []

    if(!allRecipes || searchkey==""){
      return allRecipes

  }
     
    result= allRecipes.filter((item:any)=>item.name.toLowerCase().includes(searchkey.toLowerCase()))

    return result;
  }

}
