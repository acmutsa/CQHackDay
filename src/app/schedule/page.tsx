import Image from "next/image"

export default function Page() {
    return (
        <>
            <div className={"flex justify-center"}>
                <Image
                    src="/img/schedule.png"
                    alt="Schedule"
                    width={707}
                    height={1000}
                />

            </div>
        </>
    )
}