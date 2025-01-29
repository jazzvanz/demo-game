type PanelProps = {
    value: string;
}

export const Panel = ({ value }: PanelProps ) => { 
    return (
        <button className="bg-[#FBF5DD] rounded-md aspect-square">
            {value}
        </button>
    )
}