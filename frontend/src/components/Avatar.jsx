//* here size is an optional field which can either be small or big
export function Avatar({ name, size = "small" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-600 ${size === "small" ? "size-6" : "size-10"} `}>
        <span className={` font-medium text-white ${size === "small" ? "text-md" : "text-2xl"}`}>{name[0].toUpperCase()}</span>
    </div>
}