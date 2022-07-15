export interface Game {
  background_image: string;
  name:string;
  released:string;
  metacritic_url:string;
  website:string;
  description:string;
  metacritic:number;
  genres:Genre[];
  parent_platforms:ParentPlatform[];
  publishers:Publisher[];
  ratings:Rating[];
  short_screenshots:Screenshot[];
  trailers:Trailer[];
  id:number;
}

export interface APIResponse<T>{
  results:T[];
}

interface Genre{
  name:string;
}

interface ParentPlatform{
  platform:{
    name:string;
    id:number;
    slug:string;
  }
}

interface Publisher{
  name:string;
}


interface Rating {
  id: number;
  count: number;
  title: string;
}

export interface Screenshot {
  id:number;
  image: string;
  width:number;
  height:number;
  is_deleted:boolean;
}

export interface Trailer {
  data: {
    max: string;
  };

}

export interface APIResponse<T>{
  results:T[];
}




