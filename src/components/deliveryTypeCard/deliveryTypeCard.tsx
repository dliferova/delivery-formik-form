interface DeliveryTypeCard {
    title: "Самовывоз" | "Доставка курьером"
    isActive: boolean
    onClick: () => void
}

const DeliveryTypeCard = ({isActive, title, onClick}: DeliveryTypeCard) => {
    return (
        <div className="w-[50%] h-[212px]" onClick={onClick}>
            <div className={`h-full border-solid border-2 rounded-lg flex flex-col justify-center
                ${isActive ? "border-blue-500 bg-[url('assets/link-checked.jpg')]" : "border-blue-300 bg-['none']"}`}>
                <div className="pl-3 pr-3 relative">
                    <p className={`text-2xl ${isActive ? 'text-white' : 'text-slate-950'}`}>{title}</p>
                    <img src={`${title === 'Самовывоз' 
                        ? '/src/assets/icon-pick-up.svg' 
                        : '/src/assets/icon-delivery.svg'}`}
                         width={'288'}
                         height={'78'}
                         alt="Delivery icon"
                    />
                </div>
            </div>
        </div>
    );
};

export default DeliveryTypeCard;
