import Event from "@/components/schedule/Event.tsx"
import Link from "next/link";

let TimeBlockCSS:string = "bg-white text-center border-2 border-black h-[65.5px]"
let times:Array<string> = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30", "5:00", "5:30", "6:00", "6:30", "7:00", "7:30", "8:00", "8:30"];

export default function Schedule() {
    return (
        <div className={"bg-red-200 w-3/5 flex-col space-y-4 p-5"}>
            <span>
              <Link href={"/"}>
                  <button className={"bg-white font-bebas text-2xl px-5 py-3 flex items-center gap-2 rounded relative text-red-600 mt-3"}>
                       <span className={"flex items-center gap-2 relative z-10"}>
                            Back
                       </span>
                  </button>
              </Link>
                <div className={"font-bebas text-8xl text-center"}>
                    Schedule
                </div>
            </span>
            <div className={"grid grid-flow-col grid-cols-5 grid-rows-24"} >
                {times.map(time => {
                    return (
                        <div className={TimeBlockCSS}>{time}</div>
                    )
                })}
                <div className={"bg-red-300 col-span-4 row-span-1 h-[65.5px] col-start-2 row-start-1"}><Event name={"Check In"} location={"NPB 5.140"} time={"9:00-9:30"} length={30}/></div>
                <div className={"bg-red-300 col-span-4 row-span-1 h-[65.5px] col-start-2 row-start-2"}><Event name={"Opening Ceremony"} location={"NPB 5.140"} time={"9:30-10:00"} length={30}/></div>
                <div className={"bg-red-300 col-span-2 row-span-1 h-[65.5px] col-start-2 row-start-3"}><Event name={"Hacking Starts"} location={"NPB 5.140"} time={"10:00"} length={30.1}/></div>
                <div className={"bg-red-300 col-span-2 row-span-1 h-[65.5px] col-start-4 row-start-3"}><Event name={"Lock Picking"} location={"NPB 5.140"} time={"10:00-10:30"} length={30.1}/></div>
                <div className={"bg-red-300 col-span-4 row-span-2 h-[131px] col-start-2 row-start-5"}><Event name={"Workshop 1"} location={"NPB 5.140"} time={"11:00-12:00"} length={60}/></div>
                <div className={"bg-red-300 col-span-4 row-span-2 h-[131px] col-start-2 row-start-7"}><Event name={"Lunch"} location={"NPB 5.140"} time={"12:00-1:00"} length={60}/></div>
                <div className={"bg-red-300 col-span-4 row-span-2 h-[131px] col-start-2 row-start-9"}><Event name={"Workshop 2"} location={"NPB 5.140"} time={"1:00-2:00"} length={60}/></div>
                <div className={"bg-red-300 col-span-4 row-span-2 h-[131px] col-start-2 row-start-11"}><Event name={"Brain Break"} location={"NPB 5.140"} time={"2:00-3:00"} length={60}/></div>
                <div className={"bg-red-300 col-span-4 row-span-1 h-[65.5px] col-start-2 row-start-17"}><Event name={"Submissions"} location={"NPB 5.140"} time={"5:00"} length={30}/></div>
                <div className={"bg-red-300 col-span-4 row-span-2 h-[131px] col-start-2 row-start-18"}><Event name={"Dinner"} location={"NPB 5.140"} time={"5:30-6:30"} length={60}/></div>
                <div className={"bg-red-300 col-span-4 row-span-2 h-[131px] col-start-2 row-start-20"}><Event name={"Judging"} location={"NPB 5.140"} time={"6:30-7:30"} length={60}/></div>
                <div className={"bg-red-300 col-span-4 row-span-2 h-[131px] col-start-2 row-start-22"}><Event name={"Engaging Activity"} location={"NPB 5.140"} time={"7:30-8:30"} length={60}/></div>
                <div className={"bg-red-300 col-span-4 row-span-1 h-[65.5px] col-start-2 row-start-24"}><Event name={"Closing Ceremony"} location={"NPB 5.140"} time={"8:30-9:00"} length={30}/></div>
             </div>
        </div>
    )
}