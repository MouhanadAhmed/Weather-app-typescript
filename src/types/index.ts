export type optionType = {
    name: string;
    country: string;
    lat:number;
    lon:number;
}
export type forecastType = {
    name: string;
    country: string;
    sunrise:number;
    sunset:number;
    list:[{
        dt:number;
        main:{
            "temp": number,
            "feels_like": number,
            "temp_min": number,
            "temp_max": number,
            "pressure": number,
            "humidity": number,
        };
        weather:[{
            main:string;
            icon:string;
            description:string;
        }];
        wind:{
            speed:number;
            gust:number;
            deg:number;
        };
        clouds:{
            all:number;
        }
        pop: number;
        visibility:number;
    }]
}