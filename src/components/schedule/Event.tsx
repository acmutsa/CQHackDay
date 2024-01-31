interface EventProps {
    name:string
    location:string
    time:string
    length:number
}

let nametextsize:string;
let textsize:string;

export default function Event({name, location, time, length}:EventProps) {

    if      (length == 30)   {nametextsize = "text-4xl"; textsize = "text-xl";}
    else if (length == 30.1) {nametextsize = "text-3xl"; textsize = "text-xl";}
    else if (length == 60)   {nametextsize = "text-6xl"; textsize = "text-2xl";}

    return (
        <div className={"border-2 border-black h-full"}>
            <div className={"grid grid-cols-2 h-full"}>
                <div className={"schedule-text row-span-2 " + nametextsize}>{name}</div>
                <div className={"schedule-text " + textsize}>{time}</div>
                <div className={"schedule-text " + textsize}>{location}</div>
            </div>
        </div>
    )
}