 export interface Workout {
    type: string;
    minutes: number;
  }


export  interface user{
    id:number,
    name:string,
    workouts:Workout[];
    
}