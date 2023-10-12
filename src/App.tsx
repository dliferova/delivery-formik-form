import './App.css'
import DeliveryTypeCard from "./components/deliveryTypeCard/deliveryTypeCard.tsx";
import {useState} from "react";
import PickUpForm from "./components/pickUpForm/pickUpForm.tsx";
import DeliveryForm from "./components/deliveryForm/deliveryForm.tsx";



function App() {
    const [activeDeliveryType, setActiveDeliveryType] = useState(0);

    return (
        <>
            <div className="w-full h-screen bg-blue-50 text-slate-950">
                <header className="w-full bg-blue-300 h-10"/>
                <main className="w-[80%] m-auto bg-white">
                    <h1 className="hidden">Оформление заказа</h1>
                    <div className="p-6">
                        <h2 className="text-3xl font-bold mb-6">Выберите способ получения товара</h2>
                        <div className="flex flex-row gap-6 mb-10">
                            <DeliveryTypeCard
                                title={"Самовывоз"}
                                isActive={activeDeliveryType === 0}
                                onClick={() => setActiveDeliveryType(0)}
                            />
                            <DeliveryTypeCard
                                title={"Доставка курьером"}
                                isActive={activeDeliveryType === 1}
                                onClick={() => setActiveDeliveryType(1)}
                            />
                        </div>
                        {(() => {
                            switch (activeDeliveryType) {
                                case 0:
                                    return <PickUpForm/>
                                case 1:
                                    return <DeliveryForm/>
                                default:
                                    return null
                            }
                        })()}
                    </div>
                </main>
            </div>
        </>
    )
}

export default App
