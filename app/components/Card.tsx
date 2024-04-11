type Props = {
    icon: any,
    value: number,
    desc: string
}

const Card = ({icon, value, desc}:Props) => {
    return (
        <div className="w-fit flex h-[100px]">
            <div className="h-full text-[30px] items-center w-[30%] max-w-[40px] pt-2 text-[#7F7F7F]">
                {icon}
            </div>
            <div className="h-full w-[65%] text-[30px] flex flex-col tuffy-text">
                <p className="text-md text-[#414342]">{value}</p>
                <p className="text-md text-[#787f82]">{desc}</p>
            </div>
        </div>
    )
}

export default Card
